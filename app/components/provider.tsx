"use client";

import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { SocketProvider } from "./Forms/socket-provider";
interface LayoutProps {
  children: ReactNode;
}

const Providers: FC<LayoutProps> = ({ children }) => {
  const querryClient = new QueryClient();
  return (
    <QueryClientProvider client={querryClient}>
      <SessionProvider>
        <SocketProvider>
          <ProgressBar
            height="4px"
            color="#38bdf8"
            options={{ showSpinner: false }}
            shallowRouting
          />
          {children}
        </SocketProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default Providers;
