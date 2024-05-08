"use client";

import { FormikSubmitButton, FormikTextField } from "@/features/ui";
import { Form, useFormikContext } from "formik";
import { useSearchParams } from "next/navigation";

export function VerificationForm() {
  const { setFieldValue } = useFormikContext();

  const searchParams = useSearchParams();
  const otpCode = searchParams.get("otpCode");
  const userId = searchParams.get("userId");

  const fillOtpCode = () => {
    setFieldValue("user_id", userId);
    setFieldValue("verification_code", otpCode);
  };

  return (
    <Form>
      <div className="w-full flex justify-center bg-white p-8">
        <div className="w-3/5">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-medium mb-14">OTP Varification</h1>
            <p>
              Use this OTP Code
              <span
                onClick={fillOtpCode}
                className="text-[#2351C6] cursor-pointer"
              >
                {" "}
                {otpCode}
              </span>
            </p>
          </div>
          <FormikTextField
            name="verification_code"
            props={{
              placeholder: "Please enter OTP Code",
            }}
          />
          <br />

          <FormikSubmitButton className="mb-6">Confirm OTP</FormikSubmitButton>
          <div className="flex justify-between">
            <span className="text-secondary">Didn’t receive the code?</span>

            <div className="flex flex-col flex-end">
              <span className="text-[#DE1438]">Wait for 00:50s</span>

              <span className="text-[#2351C6]">Resend</span>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}
