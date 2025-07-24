"use client"
import { useRouter } from "next/navigation";
const LoginPage = () => {
    const router = useRouter()
    const handleLogin = () => {
        document.cookie = "token=123; path=/"
        router.push('/')
      }
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Login</h1>
      <button
      className="bg-blue-500 text-white p-2 rounded-md"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;