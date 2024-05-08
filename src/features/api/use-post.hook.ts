"use client";

import { axiosErrorToast } from "@/features/helper";
import { TGlobalPostResponse } from "@/features/models";
import {
  MutationFunction,
  UseMutationOptions,
  useMutation,
} from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ServiceType } from "./index";

type TProps<RequestType, ResponseType> = {
  url: string;
  serviceType: ServiceType;
} & UseMutationOptions<
  AxiosResponse<ResponseType>,
  AxiosError,
  RequestType,
  MutationFunction<AxiosResponse<ResponseType>, RequestType>
>;

export function usePost<
  RequestType = Record<string, unknown>,
  ResponseType = Record<string, unknown>,
>({ url, serviceType, ...rest }: TProps<RequestType, ResponseType>) {
  const { data, status } = useSession();
  const accessToken = data?.user?.data?.accessToken;
  const { push } = useRouter();
  const fetchFunction: MutationFunction<
    AxiosResponse<ResponseType>,
    RequestType
  > = async (data: RequestType) => {
    try {
      let response: AxiosResponse<ResponseType>;
      switch (serviceType) {
        case ServiceType.Customer:
          response = await axios.post(
            process.env.NEXT_PUBLIC_CUSTOMER_SERVICE_API_URL + url,
            data,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },
          );
          break;
        case ServiceType.Order:
          response = await axios.post(
            process.env.NEXT_PUBLIC_ORDER_SERVICE_API_URL + url,
            data,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },
          );
          break;
        case ServiceType.MediaCenter:
          response = await axios.post(
            process.env.NEXT_PUBLIC_MEDIA_CENTER_API_URL + url,
            data,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                service_code: "sl_customer",
              },
            },
          );
          break;
        case ServiceType.Payment:
          response = await axios.post(
            process.env.NEXT_PUBLIC_PAYMENT_API_URL + url,
            data,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },
          );
          break;
        case ServiceType.Search:
          response = await axios.post(
            process.env.NEXT_PUBLIC_ELASTIC_SEARCH_API_URL + url,
            data,
            {
              headers: {
                Authorization: `Basic ZWxhc3RpYzpTZHREZnYwZU5pQWlRcEpOWEhvWQ==`,
              },
            },
          );
          break;
        case ServiceType.Public:
          response = await axios.post(
            process.env.NEXT_PUBLIC_API_URL + url,
            data,
          );
          break;
        default:
          throw new Error("Invalid service type");
      }
      return response;
    } catch (error) {
      axiosErrorToast(error as AxiosError<TGlobalPostResponse>);
      if (status === "unauthenticated" && !ServiceType.Public) {
        push("/auth/login");
      }
      throw error;
    }
  };

  return useMutation<
    AxiosResponse<ResponseType>,
    AxiosError,
    RequestType,
    MutationFunction<AxiosResponse<ResponseType>, RequestType>
  >({
    mutationFn: (data) => fetchFunction(data),
    ...(rest as UseMutationOptions<
      AxiosResponse<ResponseType>,
      AxiosError,
      RequestType,
      MutationFunction<AxiosResponse<ResponseType>, RequestType>
    >),
  });
}
