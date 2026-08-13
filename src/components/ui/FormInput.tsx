import React from "react";

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  isTextArea?: boolean;
}

export default function FormInput({
  label,
  error,
  isTextArea = false,
  id,
  className,
  ...props
}: FormInputProps) {
  return (
    <div className="form-input-group">
      {/* FormInput scaffolded stub */}
    </div>
  );
}
