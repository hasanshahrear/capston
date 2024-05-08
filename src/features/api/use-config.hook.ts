"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useRef } from "react";

export function useConfig() {
  const { data } = useSession();

  const token = useRef<string | null>(data?.user?.data?.accessToken as string);

  useEffect(() => {
    if (data) {
      token.current = data?.user?.data?.accessToken || null;
    }
  }, [data]);

  const ApiWithAuthOrder = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ORDER_SERVICE_API_URL,
  });

  ApiWithAuthOrder.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token?.current}`;
    }

    return config;
  });

  const ApiWithAuthCustomer = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CUSTOMER_SERVICE_API_URL,
  });

  ApiWithAuthCustomer.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token?.current}`;
    }

    return config;
  });

  return {
    ApiWithAuthOrder,
    ApiWithAuthCustomer,
  };
}
