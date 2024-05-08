"use client";

import { Api, ServiceType, usePost } from "@/features/api";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { VerificationResponse, VerificationSchema } from "./form.config";
import { VerificationForm } from "./verification-form.component";

type TSubmitType = {
  user_id: number;
  verification_code: number;
};

export function Verification() {
  const router = useRouter();
  const { mutate } = usePost<TSubmitType, VerificationResponse>({
    url: Api.OTPConfirmation,
    serviceType: ServiceType.Customer,
    onSuccess: (data) => {
      toast.success(data.data.message);
      router.push("/auth/login");
    },
  });

  const onSubmit = async (values: TSubmitType) => {
    mutate({
      user_id: Number(values?.user_id),
      verification_code: Number(values?.verification_code),
    });
  };

  return (
    <div className=" container py-14">
      <div className=" w-[860px] mx-auto">
        <Formik
          initialValues={{ user_id: 0, verification_code: 0 }}
          validationSchema={VerificationSchema}
          onSubmit={onSubmit}
        >
          <VerificationForm />
        </Formik>
      </div>
    </div>
  );
}
