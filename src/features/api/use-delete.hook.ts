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

export function useDelete<
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
          response = await axios.delete(
            process.env.NEXT_PUBLIC_CUSTOMER_SERVICE_API_URL + url,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
              data,
            },
          );
          break;
        case ServiceType.Order:
          response = await axios.delete(
            process.env.NEXT_PUBLIC_ORDER_SERVICE_API_URL + url,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
              data,
            },
          );
          break;
        case ServiceType.Public:
          response = await axios.post(url, data);
          break;
        default:
          throw new Error("Invalid service type");
      }
      return response;
    } catch (error) {
      axiosErrorToast(error as AxiosError<TGlobalPostResponse>);
      if (status === "unauthenticated") {
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
