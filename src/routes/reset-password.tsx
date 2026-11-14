import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useState, type FormEvent } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { adminHead } from '@/lib/admin-meta';
export const Route = createFileRoute('/reset-password')({ head: () => adminHead('Reset your password', 'Set a new password for your ABS Wedding Planner account.'), component: ResetPage });
function ResetPage() {
  const [valid, setValid] = useState(false); const [busy, setBusy] = useState(false); const [message, setMessage] = useState('');
  useEffect(() => { const recovery = new URLSearchParams(window.location.hash.slice(1)).get('type') === 'recovery'; if (recovery) supabase.auth.getUser().then(({ data }) => setValid(Boolean(data.user))); }, []);
  async function save(e: FormEvent<HTMLFormElement>) { e.preventDefault(); const f = new FormData(e.currentTarget); const password = String(f.get('password')); if (password !== f.get('confirm')) { setMessage('Passwords do not match'); return; } setBusy(true); const { error } = await supabase.auth.updateUser({ password }); setBusy(false); setMessage(error ? error.message : 'Password updated. You can now sign in.'); }
  return <main className="admin-ui flex min-h-screen items-center justify-center px-6"><div className="w-full max-w-sm"><h1 className="mb-6 text-3xl">Reset password</h1>{valid ? <form onSubmit={save} className="space-y-4"><label className="block">New password<Input name="password" type="password" required minLength={8} autoComplete="new-password" /></label><label className="block">Confirm password<Input name="confirm" type="password" required minLength={8} autoComplete="new-password" /></label><Button disabled={busy}>Save password</Button></form> : <p>Open the password reset link from your email.</p>}{message && <p role="status" className="mt-4">{message}</p>}<Link to="/auth" className="mt-6 block text-primary">Back to sign in</Link></div></main>;
}