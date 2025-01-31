import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneInputFieldProps {
  phoneNumber: string;
  isPhoneNumberValid: boolean;
  validationTriggered: boolean;
  handlePhoneNumberChange: (value: string) => void;
}

export const PhoneInputField: React.FC<PhoneInputFieldProps> = ({ phoneNumber, isPhoneNumberValid, validationTriggered, handlePhoneNumberChange }) => {
  return (
    <div className="phone-input-container">
      <PhoneInput
        country="in"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        inputProps={{ maxLength: 20 }}
        enableSearch
        searchPlaceholder="Search countries..."
        containerClass="phone-input-container custom-country-list"
      />
      {!isPhoneNumberValid && validationTriggered && <p className="text-[#ff9800] mt-1">Invalid Phone Number</p>}
    </div>
  );
};
