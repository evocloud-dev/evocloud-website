import React from "react";
import { twMerge } from "tailwind-merge";

export function FormInput({
  className,
  id,
  name,
  type,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      className={twMerge(
        "w-full px-3 py-3 rounded-lg bg-secondary border border-border text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary",
        className
      )}
      {...props}
    />
  );
}

interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string; disabled?: boolean }[];
}

export function FormSelect({
  options,
  id,
  name,
  defaultValue,
  className,
  onChange,
  onBlur,
  ...props
}: FormSelectProps) {
  return (
    <select
      id={id}
      name={name}
      defaultValue={defaultValue}
      className={twMerge(
        "w-full px-3 py-3 rounded-lg bg-secondary border border-border text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary",
        className
      )}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  isRequired?: boolean;
}

export function FormLabel({
  className,
  htmlFor,
  isRequired,
  children,
  ...props
}: FormLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge("text-sm text-muted-foreground", className)}
      {...props}
    >
      {isRequired && <span className="text-tertiary mr-1">*</span>} {children}:
    </label>
  );
}

export function FormInputErrorMessage({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={twMerge(
        "mt-2 text-sm text-red-600 dark:text-red-500",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function FormLabelInputContainer({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={twMerge("flex flex-col gap-1", className)} {...props}>
      {children}
    </div>
  );
}
