"use client";

import { TSignUpData } from "@/features/models";
import { useMutation } from "@tanstack/react-query";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { InitialValue, SignUpSchema, TSingUp } from "./form.config";
import { SignUpForm } from "./signup-form.component";
import { useSignUp } from "./signup-hook";

export function SignUp() {
  const { singUpMutation } = useSignUp();
  const { push } = useRouter();

  const { mutate } = useMutation<TSignUpData, unknown, TSingUp>({
    mutationFn: (data: TSingUp) => singUpMutation(data),
    onSuccess: (data: TSignUpData) => {
      push(
        `/auth/verification?userId=${data?.data?.id}&otpCode=${data?.message}`,
      );
    },
  });

  const onSubmit = async (value: TSingUp) => {
    mutate({
      ...value,
      dateOfBirth: value?.dateOfBirth?.toISOString().split("T")[0] as any,
    });
  };

  return (
    <div className="container py-14">
      <div className="xl:w-[1042px] lg:w-[1024px] md:w-[768px] sm:w-[640px] mx-auto">
        <div className="flex flex-row justify-between mb-9 text-[#747474]">
          <h3 className="text-xl font-medium ">
            Create your Shoplover Account
          </h3>
          <p>
            Already member?{" "}
            <Link
              href="/auth/login"
              className="text-[#0285A6] cursor-pointer"
            >
              Login
            </Link>{" "}
            here.
          </p>
        </div>
        <Formik
          initialValues={InitialValue}
          validationSchema={SignUpSchema}
          onSubmit={onSubmit}
        >
          <SignUpForm />
        </Formik>
      </div>
    </div>
  );
}
