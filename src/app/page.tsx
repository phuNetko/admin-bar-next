import { redirect } from "next/navigation";
import { CheckToken } from "@/components/ultils/checkToken";
export default async function Home() {
  const token = await CheckToken();
  console.log(token);
  if (token) {
    redirect("/products");
  } else {
    redirect("/login");
  }
  return null;
}
