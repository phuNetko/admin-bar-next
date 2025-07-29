import { redirect } from "next/navigation";
import { CheckToken } from "@/ultils/checkToken";
const Home = async ({params}: {params: {locale: string} | Promise<{locale: string}>}) => {
  const {locale} = await params;
  const token = await CheckToken();
  console.log(token);
  if (token) {
    redirect(`/${locale||"en"}/dashboard`);
  } else {
    redirect(`/${locale||"en"}/login`);
  }
  return null;
}
export default Home;
