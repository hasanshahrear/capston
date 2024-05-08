import { axiosErrorToast } from "@/features/helper";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useSession } from "next-auth/react";
import { TGlobalPostResponse } from "../models";
import { ServiceType } from "./index";

type TProps = {
  url: string;
  queryParams?: AxiosRequestConfig["params"];
  serviceType: ServiceType;
  queryKey: string;
  enableFetch: boolean;
};

export function useLazyGet<ResponseType = Record<string, unknown>>({
  url,
  queryParams: params,
  serviceType,
  queryKey,
  enableFetch,
  ...rest
}: TProps) {
  const { data } = useSession();
  const accessToken = data?.user?.data?.accessToken;

  const fetchFunction = async () => {
    if (serviceType === ServiceType.Customer) {
      try {
        const response: AxiosResponse<ResponseType> = await axios.get(
          process.env.NEXT_PUBLIC_CUSTOMER_SERVICE_API_URL + url,
          {
            params,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );

        return response.data;
      } catch (error) {
        axiosErrorToast(error as AxiosError<TGlobalPostResponse>);
      }
    }

    if (serviceType === ServiceType.Order) {
      try {
        const response: AxiosResponse<ResponseType> = await axios.get(
          process.env.NEXT_PUBLIC_ORDER_SERVICE_API_URL + url,
          {
            params,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        return response.data;
      } catch (error) {
        axiosErrorToast(error as AxiosError<TGlobalPostResponse>);
      }
    }

    if (serviceType === ServiceType.Public) {
      try {
        const response: AxiosResponse<ResponseType> = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + url,
          {
            params,
          },
        );
        return response.data;
      } catch (error) {
        axiosErrorToast(error as AxiosError<TGlobalPostResponse>);
      }
    }
  };

  return useQuery({
    queryKey: params ? [queryKey, params] : [queryKey],
    queryFn: fetchFunction,
    enabled:
      serviceType === ServiceType.Public
        ? enableFetch
        : !!accessToken && enableFetch,
    ...rest,
  });
}
