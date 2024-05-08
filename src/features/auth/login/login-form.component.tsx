"use client";

import { FormikSubmitButton, FormikTextField } from "@/features/ui";
import { FormikPasswordField } from "@/features/ui/form/formik-password-input.component";
import { Form } from "formik";
import { signIn } from "next-auth/react";
import { Button } from "primereact/button";
import { FacebookIcon } from "../../../../public/assets/icon/facebook-icon";
import { GoogleIcon } from "../../../../public/assets/icon/google-icon";

export function LoginForm() {
  const handleGoogleSignIn = async () => {
    await signIn("google");
  };
  const handleFacebookSignIn = async () => {
    await signIn("facebook");
  };

  return (
    <Form>
      <div className="flex lg:flex-row flex-col justify-between gap-12 bg-white px-9 py-10 rounded-lg">
        <div className="flex-1">
          <FormikTextField
            name="email_or_phone"
            props={{
              label: "Phone Number or Email",
              placeholder: "Please enter your phone number or Email",
              requiredIcon: "*",
            }}
          />
          <br />
          <FormikPasswordField
            name="password"
            props={{
              label: "Password",
              placeholder: "Please enter your password",
              requiredIcon: "*",
            }}
          />
          <br />
          <div className="flex justify-end">
            <p className="text-[#0285A6]">Reset Your Password</p>
          </div>
        </div>
        <div className="flex-1">
          <FormikSubmitButton> Login </FormikSubmitButton>
          <p className="text-[#999999] my-4">Or, login with</p>

          <Button
            onClick={() => handleFacebookSignIn()}
            className="bg-[#3B5998] border-none rounded-lg w-full flex justify-center gap-5"
          >
            <FacebookIcon />
            Facebook
          </Button>

          <div className="my-4" />
          <Button
            onClick={() => handleGoogleSignIn()}
            className="bg-[#D34836] border-none rounded-lg w-full flex justify-center gap-5"
          >
            <GoogleIcon />
            Google
          </Button>
        </div>
      </div>
    </Form>
  );
}
