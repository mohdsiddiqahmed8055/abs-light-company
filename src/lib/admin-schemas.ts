import { z } from 'zod';

export const enquirySchema = z.object({
  name: z.string().trim().min(1).max(100), phone: z.string().trim().min(6).max(30),
  event_type: z.string().trim().min(1).max(100), event_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(v => !Number.isNaN(Date.parse(v))),
  venue: z.string().trim().max(200), message: z.string().trim().max(3000),
});
export const eventSchema = z.object({
  id: z.string().uuid().optional(), title: z.string().trim().min(1).max(150), client_name: z.string().trim().min(1).max(100),
  phone: z.string().trim().max(30), event_date: enquirySchema.shape.event_date, venue: z.string().trim().max(200),
  status: z.enum(['planning','confirmed','completed','cancelled']), budget: z.coerce.number().min(0).max(999999999999),
  paid: z.coerce.number().min(0), notes: z.string().trim().max(5000), enquiry_id: z.string().uuid().nullable().optional(),
}).refine(v => v.paid <= v.budget, { message: 'Amount received cannot exceed the budget', path: ['paid'] });
export const projectSchema = z.object({
  id: z.string().uuid().optional(), title: z.string().trim().min(1).max(150), description: z.string().trim().max(3000),
  image_url: z.string().max(2000).regex(/^(?:\/site-assets\/[\w.-]+|uploads\/[\w.-]+)$/), published: z.boolean(),
});
export function requireAdminRole(isAdmin: boolean) { if (!isAdmin) throw new Error('Administrator access required'); }