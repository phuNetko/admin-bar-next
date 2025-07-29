import LoginForm from "@/common/form/LoginForm";

const LoginPage = async ({params}: {params: {locale: string} | Promise<{locale: string}>}) => {
  const {locale} = await params;
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Login</h1>
      <LoginForm locale={locale} />
    </div>
  );
};

export default LoginPage;