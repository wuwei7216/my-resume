import type { Metadata, NextPage } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { cn } from "./utils";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "./globals.scss";

dayjs.locale("zh-cn");

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "吴威-个人简历",
  description: "My Resume",
};

const RootLayout: NextPage<Readonly<React.PropsWithChildren>> = ({ children }) => {
  return (
    <html lang={"zh"}>
      <body className={cn(inter.className)}>{children}</body>
    </html>
  );
};

export default RootLayout;
