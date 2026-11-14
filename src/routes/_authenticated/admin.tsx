import { createFileRoute } from '@tanstack/react-router';
import { queryOptions } from '@tanstack/react-query';
import { adminData } from '@/lib/admin.functions';
import { adminHead } from '@/lib/admin-meta';
import { AdminPanel } from '@/components/admin/AdminPanel';
export const adminQuery = queryOptions({ queryKey: ['admin'], queryFn: () => adminData() });
export const Route = createFileRoute('/_authenticated/admin')({ head: () => adminHead('Admin panel', 'Manage enquiries, projects and event bookings at ABS Wedding Planner.'), loader: ({ context }) => context.queryClient.ensureQueryData(adminQuery), component: AdminPanel });