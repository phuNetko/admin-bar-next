'use client';

import { useRouter } from 'next/navigation';

export default function LoginForm({ locale }: { locale: string }) {
  const router = useRouter();

  const handleLogin = () => {
    // Set cookie
    document.cookie = "token=123; path=/";

    // Chuyển hướng sau khi login
    router.push(`/${locale}`);
  };

  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md mt-4"
      onClick={handleLogin}
    >
      Login
    </button>
  );
}
