import { isAuthenticated } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { redirect } from "next/navigation";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2" />
        <Image src="/logo.svg" alt="logo" width={38} height={32} />
        <h2>PrepTalk</h2>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
