import { cookies } from "next/headers";

const CheckToken = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  return token;
};

export {CheckToken}
