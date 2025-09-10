"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import {
  REQUEST_A_DEMO_PARAM_KEY,
  REQUEST_A_DEMO_PARAM_VALUE,
} from "@/lib/constants/ui";
import useSetQueryParam from "@/hooks/routing/useSetQueryParam";
import Modal1 from "@/components/ui/modals/Modal1";
import {
  FormInput,
  FormSelect,
  FormLabel,
  FormLabelInputContainer,
  FormInputErrorMessage,
} from "@/components/ui/forms/Form";
import { IoMdClose } from "react-icons/io";
import { Formik, FormikHelpers } from "formik";
import {
  JOB_FUNCTIONS_OPTIONS,
  JOB_DEPARTMENTS_OPTIONS,
  JOB_COUNTRIES_OPTIONS,
  INDUSTRY_OPTIONS,
} from "@/lib/constants/form";
import Button3 from "@/components/ui/buttons/cta/Button3";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import isPhoneNumber from "validator/lib/isMobilePhone";

export default function RequestADemo() {
  const { setQueryParam } = useSetQueryParam();
  const searchParams = useSearchParams();

  const search = searchParams.get(REQUEST_A_DEMO_PARAM_KEY);
  const isOpen = search === REQUEST_A_DEMO_PARAM_VALUE;

  const closeModal = () => {
    setQueryParam(REQUEST_A_DEMO_PARAM_KEY, "");
  };

  const FORM_INITIAL_VALUES = {
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phoneNumber: "",
    jobFunction: "",
    jobDepartment: "",
    country: "",
    industry: "",
    // hasConsented: false,
  };

  const validateForm = (values: typeof FORM_INITIAL_VALUES) => {
    const errors: Partial<typeof FORM_INITIAL_VALUES> = {};

    const getText = (v: string | undefined) =>
      typeof v === "string" ? v.trim() : "";

    type FormKeys = keyof typeof FORM_INITIAL_VALUES;

    const requiredFields: [FormKeys, string][] = [
      ["firstName", "First name is required"],
      ["lastName", "Last name is required"],
      ["email", "Work email is required"],
      ["company", "Company is required"],
      ["phoneNumber", "Phone number is required"],
      ["jobFunction", "Job function is required"],
      ["jobDepartment", "Job department is required"],
      ["country", "Country is required"],
      ["industry", "Industry is required"],
    ];

    requiredFields.forEach(([key, message]) => {
      if (!getText(values[key])) {
        errors[key] = message;
      }
    });

    // Email format (only check if present)
    const email = getText(values.email);
    if (email && !isEmail(email)) {
      errors.email = "Enter a valid work email";
    }

    // Phone number: allow +, spaces, (), -, but require at least 7 digits
    const phone = getText(values.phoneNumber);
    if (phone && !isPhoneNumber(phone)) {
      errors.phoneNumber = "Enter a valid phone number";
    }

    // Consent checkbox
    // if (!values.hasConsented) {
    //   errors.hasConsented = "You must consent to proceed";
    // }

    return errors;
  };

  const onSubmitHandler = (
    values: typeof FORM_INITIAL_VALUES,
    { resetForm }: FormikHelpers<typeof FORM_INITIAL_VALUES>
  ) => {
    console.log(values);
    toast("Form Submitted Yay!!!");

    resetForm();
  };

  return (
    <Modal1 onClose={closeModal} isOpen={isOpen}>
      <h2 className="text-foreground text-[clamp(1.35rem,1.2rem+0.8vw,1.75rem)] font-bold">
        Request Demo
      </h2>
      <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
        Rancher <strong className="font-semibold">Prime</strong> enables
        enterprises to extract more value from Rancher. Get access to 24×7
        world-class support, training and professional services. To learn more,
        get in touch via the form below:
      </p>

      <button
        type="button"
        aria-label="Close"
        className="absolute top-3 right-3 w-9 h-9 grid place-items-center rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary hover:cursor-pointer"
        onClick={closeModal}
      >
        <IoMdClose />
      </button>

      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validate={validateForm}
        onSubmit={onSubmitHandler}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => {
          console.log({ values, errors, touched });

          return (
            <form
              onSubmit={handleSubmit}
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <FormLabelInputContainer>
                <FormLabel htmlFor="firstName" isRequired>
                  First Name
                </FormLabel>
                <FormInput
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                {errors.firstName && touched.firstName && (
                  <FormInputErrorMessage>
                    {errors.firstName}
                  </FormInputErrorMessage>
                )}
              </FormLabelInputContainer>

              <FormLabelInputContainer>
                <FormLabel htmlFor="lastName" isRequired>
                  Last Name
                </FormLabel>
                <FormInput
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                {errors.lastName && touched.lastName && (
                  <FormInputErrorMessage>
                    {errors.lastName}
                  </FormInputErrorMessage>
                )}
              </FormLabelInputContainer>

              <FormLabelInputContainer>
                <FormLabel htmlFor="email" isRequired>
                  Work Email
                </FormLabel>
                <FormInput
                  id="email"
                  name="email"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <FormInputErrorMessage>{errors.email}</FormInputErrorMessage>
                )}
              </FormLabelInputContainer>

              <FormLabelInputContainer>
                <FormLabel htmlFor="company" isRequired>
                  Company
                </FormLabel>
                <FormInput
                  id="company"
                  name="company"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.company}
                />
                {errors.company && touched.company && (
                  <FormInputErrorMessage>
                    {errors.company}
                  </FormInputErrorMessage>
                )}
              </FormLabelInputContainer>

              <FormLabelInputContainer>
                <FormLabel htmlFor="phoneNumber" isRequired>
                  Phone Number
                </FormLabel>
                <FormInput
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <FormInputErrorMessage>
                    {errors.phoneNumber}
                  </FormInputErrorMessage>
                )}
              </FormLabelInputContainer>

              <FormLabelInputContainer>
                <FormLabel htmlFor="jobFunction" isRequired>
                  Job Function
                </FormLabel>
                <FormSelect
                  id="jobFunction"
                  name="jobFunction"
                  defaultValue={values.jobFunction}
                  options={JOB_FUNCTIONS_OPTIONS}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.jobFunction}
                />
                {errors.jobFunction && touched.jobFunction && (
                  <FormInputErrorMessage>
                    {errors.jobFunction}
                  </FormInputErrorMessage>
                )}
              </FormLabelInputContainer>

              <FormLabelInputContainer>
                <FormLabel htmlFor="jobDepartment" isRequired>
                  Job Department
                </FormLabel>
                <FormSelect
                  id="jobDepartment"
                  name="jobDepartment"
                  defaultValue={values.jobDepartment}
                  options={JOB_DEPARTMENTS_OPTIONS}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.jobDepartment}
                />
                {errors.jobDepartment && touched.jobDepartment && (
                  <FormInputErrorMessage>
                    {errors.jobDepartment}
                  </FormInputErrorMessage>
                )}
              </FormLabelInputContainer>

              <FormLabelInputContainer>
                <FormLabel htmlFor="country" isRequired>
                  Country
                </FormLabel>
                <FormSelect
                  id="country"
                  name="country"
                  defaultValue={values.country}
                  options={JOB_COUNTRIES_OPTIONS}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                />
                {errors.country && touched.country && (
                  <FormInputErrorMessage>
                    {errors.country}
                  </FormInputErrorMessage>
                )}
              </FormLabelInputContainer>

              <FormLabelInputContainer>
                <FormLabel htmlFor="industry" isRequired>
                  Industry
                </FormLabel>
                <FormSelect
                  id="industry"
                  name="industry"
                  defaultValue={values.industry}
                  options={INDUSTRY_OPTIONS}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.industry}
                />
                {errors.industry && touched.industry && (
                  <FormInputErrorMessage>
                    {errors.industry}
                  </FormInputErrorMessage>
                )}
              </FormLabelInputContainer>

              <div className="md:col-span-2">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 size-4 rounded border-border bg-secondary"
                    id="hasConsented"
                    name="hasConsented"
                  />
                  <span className="text-sm text-muted-foreground">
                    I hereby consent to processing of my personal data stated in
                    the form above in accordance with the rules described{" "}
                    <a
                      href="#"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      here
                    </a>
                    .
                  </span>
                </label>
              </div>

              <div className="md:col-span-2 flex justify-center">
                <Button3 type="submit" disabled={isSubmitting}>
                  Request Demo
                </Button3>
              </div>
            </form>
          );
        }}
      </Formik>
    </Modal1>
  );
}
