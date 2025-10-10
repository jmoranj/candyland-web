'use client';

import LoginBackButton from '@/components/Login/LoginBackButton';
import LoginIllustration from '@/components/Login/LoginIllustration';
import LoginPanel from '@/components/Login/LoginPanel';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <LoginBackButton />
      <LoginIllustration />
      <LoginPanel />
    </div>
  );
}
