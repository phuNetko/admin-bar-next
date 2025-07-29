import "./globals.css";
import I18nProviderWrapper from "@/common/i18nProviderWrapper";
export const metadata = {
  title: "Tên mặc định của tab",
  icons: {
    icon: "/Earth.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen w-screen antialiased`}

      >
        <I18nProviderWrapper>{children}</I18nProviderWrapper>
      </body>
    </html>
  );
}
