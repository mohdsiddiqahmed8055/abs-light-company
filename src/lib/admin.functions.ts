import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
import { enquirySchema, eventSchema, projectSchema, requireAdminRole } from './admin-schemas';
import type { Database } from '@/integrations/supabase/types';

export const adminData = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth]).handler(async ({ context }) => {
  const role = await context.supabase.rpc('has_role', { _user_id: context.userId, _role: 'admin' });
  if (role.error) throw new Error('Unable to verify access');
  if (!role.data) return { allowed: false as const, enquiries: [], projects: [], events: [], profile: null };
  const [enquiries, projects, events, profile] = await Promise.all([
    context.supabase.from('enquiries').select('*').order('created_at', { ascending: false }).limit(1000),
    context.supabase.from('projects').select('*').order('created_at', { ascending: false }).limit(1000),
    context.supabase.from('events').select('*').order('event_date').limit(1000),
    context.supabase.from('profiles').select('*').eq('id', context.userId).single(),
  ]);
  if (enquiries.error || projects.error || events.error || profile.error) throw new Error('Unable to load records');
  return { allowed: true as const, enquiries: enquiries.data, projects: projects.data, events: events.data, profile: profile.data };
});
const actionSchema = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('project'), value: projectSchema }),
  z.object({ kind: z.literal('event'), value: eventSchema }),
  z.object({ kind: z.literal('enquiry'), id: z.string().uuid(), status: z.enum(['new','contacted','booked','closed']), notes: z.string().max(5000) }),
  z.object({ kind: z.literal('delete'), table: z.enum(['projects','events','enquiries']), id: z.string().uuid() }),
  z.object({ kind: z.literal('profile'), display_name: z.string().trim().min(1).max(100) }),
]);
export const adminSave = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth]).inputValidator(actionSchema).handler(async ({ context, data }) => {
  const role = await context.supabase.rpc('has_role', { _user_id: context.userId, _role: 'admin' });
  requireAdminRole(!role.error && role.data === true);
  let error;
  if (data.kind === 'project') ({ error } = await context.supabase.from('projects').upsert(data.value));
  if (data.kind === 'event') ({ error } = await context.supabase.from('events').upsert(data.value));
  if (data.kind === 'enquiry') ({ error } = await context.supabase.from('enquiries').update({ status: data.status, notes: data.notes }).eq('id', data.id));
  if (data.kind === 'delete') ({ error } = await context.supabase.from(data.table).delete().eq('id', data.id));
  if (data.kind === 'profile') ({ error } = await context.supabase.from('profiles').update({ display_name: data.display_name }).eq('id', context.userId));
  if (error) throw new Error('Could not save your changes');
  return { ok: true };
});
export const submitEnquiry = createServerFn({ method: 'POST' }).inputValidator(enquirySchema).handler(async ({ data }) => {
  // Only this narrow, validated submission endpoint can write anonymous enquiries.
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
  const { error } = await supabaseAdmin.from('enquiries').insert(data);
  if (error) throw new Error('Unable to send your enquiry. Please call or WhatsApp us.');
  return { ok: true };
});
export const publicProjects = createServerFn({ method: 'GET' }).handler(async () => {
  const key = process.env['SUPABASE_PUBLISHABLE_KEY'];
  const url = process.env['SUPABASE_URL'];
  if (!key || !url) throw new Error('Project gallery unavailable');
  const client = createClient<Database>(url, key, { auth: { persistSession: false, autoRefreshToken: false }, global: { fetch: (input, init) => {
    const headers = new Headers(init?.headers); if (key.startsWith('sb_') && headers.get('Authorization') === `Bearer ${key}`) headers.delete('Authorization'); headers.set('apikey', key); return fetch(input, { ...init, headers });
  } } });
  const { data, error } = await client.from('projects').select('id,title,description,image_url').eq('published', true).order('created_at', { ascending: false });
  if (error) throw new Error('Project gallery unavailable');
  return data;
});