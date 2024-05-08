import { Api } from "@/features/api/endpoints";
import { useConfig } from "@/features/api/use-config.hook";
import axios from "axios";
import { TSingUp } from "./form.config";

export function useSignUp() {
  const { ApiWithAuthCustomer } = useConfig();

  const singUpMutation = async (data: TSingUp) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_CUSTOMER_SERVICE_API_URL}${Api.SingUp}`,
      data,
    );

    if (!response.data) {
      throw new Error("Mutation failed");
    }

    return response.data;
  };
  return {
    singUpMutation,
  };
}
