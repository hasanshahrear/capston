"use client";

import "@/app/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

export function ContextProvider({ children, session }: PropsWithChildren<any>) {
  const queryClient = new QueryClient();

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <PrimeReactProvider>{children}</PrimeReactProvider>

        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
        <Toaster richColors closeButton position="top-center" />
      </QueryClientProvider>
    </SessionProvider>
  );
}
