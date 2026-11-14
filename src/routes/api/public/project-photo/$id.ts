import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/api/public/project-photo/$id')({ server: { handlers: {
  GET: async ({ params }) => {
    if (!/^[\da-f-]{36}$/i.test(params.id)) return new Response('Not found', { status: 404 });
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { data } = await supabaseAdmin.from('projects').select('image_url').eq('id', params.id).eq('published', true).maybeSingle();
    if (!data || !/^uploads\/[\w.-]+$/.test(data.image_url)) return new Response('Not found', { status: 404 });
    const photo = await supabaseAdmin.storage.from('project-photos').download(data.image_url);
    if (photo.error || !photo.data) return new Response('Not found', { status: 404 });
    return new Response(photo.data, { headers: { 'Content-Type': photo.data.type, 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } });
  },
} } });