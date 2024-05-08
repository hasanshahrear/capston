"use client";

import { FacebookIcon } from "@/../public/assets/icon/facebook-icon";
import { GoogleIcon } from "@/../public/assets/icon/google-icon";
import { TDropDownOption } from "@/features/models";
import {
  FormikDateField,
  FormikDropdown,
  FormikSubmitButton,
  FormikTextField,
} from "@/features/ui";
import { FormikPasswordField } from "@/features/ui/form/formik-password-input.component";
import { Form, useFormikContext } from "formik";
import { Checkbox } from "primereact/checkbox";
import { TSingUp } from "./form.config";

export function SignUpForm() {
  const { setFieldValue, values, errors } = useFormikContext<TSingUp>();

  return (
    <Form>
      <div className="flex lg:flex-row flex-col justify-between gap-12 bg-white p-8">
        <div className="flex-1">
          <div className="mb-4">
            <FormikTextField
              name="email_or_phone"
              props={{
                label: "Phone Number or Email",
                placeholder: "Please enter your phone number or Email",
                requiredIcon: "*",
              }}
            />
          </div>

          <div className="mb-4">
            <FormikPasswordField
              name="password"
              props={{
                label: "Password",
                placeholder: "Please enter your password",
                requiredIcon: "*",
              }}
            />
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
              <div className="grid grid-cols-3">
                <div className="col-span-3">
                  <FormikDateField
                    name="dateOfBirth"
                    props={{
                      label: "Birthday",
                      placeholder: "Select a date",
                      pt: {
                        root: {
                          className: "h-[42px] mt-2 w-full rounded-none ",
                        },
                        input: {
                          root: {
                            className: "rounded-none",
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <FormikDropdown<TDropDownOption>
                name="gender"
                label="Gender"
                placeholder="Select a gender"
                options={[
                  {
                    id: 1,
                    value: "male",
                    label: "Male",
                  },
                  {
                    id: 2,
                    value: "female",
                    label: "Female",
                  },
                  {
                    id: 3,
                    value: "other",
                    label: "Other",
                  },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <div className="mb-4">
            <FormikTextField
              name="firstName"
              props={{
                label: "Full Name",
                placeholder: "Enter your Name",
                requiredIcon: "*",
              }}
            />
          </div>

          <div className="space-x-2 text-[#999999]">
            <Checkbox checked />
            <span className="text-sm">
              I’d like to receive exclusive offers and promotions via SMS.
            </span>
          </div>

          <FormikSubmitButton> SIGN UP </FormikSubmitButton>

          <div>
            <span className="text-[#999999] text-sm">
              By clicking “SIGN UP”, I agree to Shoplover’s Terms of Use and
              Privacy Policy
            </span>
          </div>

          <div>
            <span className="text-[#747474] text-sm">Or, sign up with</span>
          </div>

          <div className="flex flex-row gap-2.5">
            <FormikSubmitButton
              icon={<FacebookIcon />}
              className="bg-[#3B5998] flex gap-8"
            >
              {" "}
              Facebook{" "}
            </FormikSubmitButton>
            <FormikSubmitButton
              icon={<GoogleIcon />}
              className="bg-[#D34836] flex gap-8"
            >
              {" "}
              Google{" "}
            </FormikSubmitButton>
          </div>
        </div>
      </div>
    </Form>
  );
}
