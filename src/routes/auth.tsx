import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useEffect, useState, type FormEvent } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable';
import '@lovable.dev/cloud-auth-js/styles.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CapturedStyles } from '@/components/site/CapturedStyles';
import { adminHead } from '@/lib/admin-meta';

export const Route = createFileRoute('/auth')({ head: () => adminHead('Admin sign in', 'Secure access to ABS Wedding Planner event management.'), component: AuthPage });
function AuthPage() {
  const navigate = useNavigate(); const [mode, setMode] = useState<'signin'|'signup'|'reset'>('signin');
  const [busy, setBusy] = useState(false); const [message, setMessage] = useState('');
  useEffect(() => { let active = true; supabase.auth.getUser().then(({ data }) => { if (active && data.user) void navigate({ to: '/admin' }); }); return () => { active = false; }; }, [navigate]);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setBusy(true); setMessage(''); const f = new FormData(e.currentTarget);
    const email = String(f.get('email')); const password = String(f.get('password') || '');
    try {
      if (mode === 'reset') { const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` }); if (error) throw error; setMessage('Check your email for a password reset link.'); }
      else if (mode === 'signup') { const { data, error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/auth`, data: { display_name: String(f.get('display_name')) } } }); if (error) throw error; if (data.session) await navigate({ to: '/admin' }); else setMessage('Check your email to confirm your account. Admin access requires approval.'); }
      else { const { error } = await supabase.auth.signInWithPassword({ email, password }); if (error) throw error; await navigate({ to: '/admin' }); }
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Unable to sign in'); } finally { setBusy(false); }
  }
  async function social(provider: 'google'|'lovable') {
    setBusy(true); setMessage(''); try { const result = await lovable.auth.signInWithOAuth(provider, { redirect_uri: `${window.location.origin}/auth` }); if (result.error) throw result.error; if (!result.redirected) await navigate({ to: '/admin' }); } catch (e) { setMessage(e instanceof Error ? e.message : 'Unable to sign in'); } finally { setBusy(false); }
  }
  return <><CapturedStyles /><main className="admin-ui flex min-h-screen flex-col bg-background px-6 py-10 text-foreground">
    <Link to="/" className="font-display text-2xl">ABS Wedding Planner</Link>
    <div className="m-auto w-full max-w-sm py-16"><p className="text-xs uppercase text-primary">Event management</p><h1 className="mb-8 mt-3 font-display text-4xl">{mode === 'signup' ? 'Create account' : mode === 'reset' ? 'Reset password' : 'Admin sign in'}</h1>
      <form onSubmit={submit} className="space-y-5">
        {mode === 'signup' && <label className="block text-sm">Your name<Input name="display_name" required maxLength={100} autoComplete="name" className="mt-2" /></label>}
        <label className="block text-sm">Email<Input name="email" type="email" required maxLength={255} autoComplete="email" className="mt-2" /></label>
        {mode !== 'reset' && <label className="block text-sm">Password<Input name="password" type="password" required minLength={8} autoComplete={mode === 'signin' ? 'current-password' : 'new-password'} className="mt-2" /></label>}
        <Button disabled={busy} className="w-full" type="submit">{busy ? 'Please wait…' : mode === 'signup' ? 'Create account' : mode === 'reset' ? 'Send reset link' : 'Sign in'}</Button>
      </form>
      {message && <p role="status" className="mt-4 text-sm">{message}</p>}
      {mode !== 'reset' && <div className="mt-6 space-y-3"><Button variant="outline" className="google-auth-button w-full" disabled={busy} onClick={() => social('google')}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/></svg>Continue with Google</Button><Button className="lovable-auth-button w-full" disabled={busy} onClick={() => social('lovable')}>Continue with Lovable</Button></div>}
      <div className="mt-5 flex flex-wrap justify-between gap-2"><Button variant="link" onClick={() => { setMode(mode === 'signup' ? 'signin' : 'signup'); setMessage(''); }}>{mode === 'signup' ? 'Back to sign in' : 'Create account'}</Button><Button variant="link" onClick={() => { setMode(mode === 'reset' ? 'signin' : 'reset'); setMessage(''); }}>{mode === 'reset' ? 'Back to sign in' : 'Forgot password?'}</Button></div>
    </div></main></>;
}