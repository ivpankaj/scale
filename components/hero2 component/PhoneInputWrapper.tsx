"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { phoneInputStyles } from "./style";


interface PhoneInputWrapperProps {
  value: string;
  onChange: (value: string) => void;
  validationTriggered: boolean;
}

export const PhoneInputWrapper: React.FC<PhoneInputWrapperProps> = ({
  value,
  onChange,
  validationTriggered,
}) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    setIsValid(digitsOnly.length >= 10);
    onChange(digitsOnly);
  };

  return (
    <div className="phone-input-container">
      <style jsx global>{phoneInputStyles}</style>
      <PhoneInput
        country="in"
        value={value}
        onChange={handleChange}
        inputProps={{
          maxLength: 16,
          onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
            if (e.target.value.replace(/\D/g, "").length < 10) {
              setIsValid(false);
            }
          },
        }}
        enableSearch
        searchPlaceholder="Search countries..."
        containerClass="phone-input-container custom-country-list"
      />
      {!isValid && validationTriggered && (
        <p className="text-[#ff9800] mt-1">Please enter a valid phone number</p>
      )}
    </div>
  );
};
