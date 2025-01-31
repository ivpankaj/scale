// hero2-component/PhoneInputComponent.tsx
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./PhoneInputComponent.module.css";

interface PhoneInputComponentProps {
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  isPhoneNumberValid: boolean;
  setIsPhoneNumberValid: (value: boolean) => void;
  onPhoneNumberChange?: (phoneNumber: string) => void;
  validationTriggered: boolean;
}

const PhoneInputComponent: React.FC<PhoneInputComponentProps> = ({
  phoneNumber,
  setPhoneNumber,
  isPhoneNumberValid,
  setIsPhoneNumberValid,
  onPhoneNumberChange,
  validationTriggered,
}) => {
  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
    const digitsOnly = value.replace(/\D/g, "");
    if (digitsOnly.length >= 7) {
      setIsPhoneNumberValid(true);
      if (onPhoneNumberChange) {
        onPhoneNumberChange(digitsOnly);
      }
    } else {
      setIsPhoneNumberValid(false);
    }
  };

  return (
    <div className={styles.phoneInputContainer}>
      <PhoneInput
        country="in"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        inputProps={{
          maxLength: 16,
          onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
            if (e.target.value.replace(/\D/g, "").length < 10) {
              // Handle validation if needed
            }
          },
        }}
        enableSearch
        searchPlaceholder="Search countries..."
        containerClass={styles.phoneInputContainer}
      />
      {!isPhoneNumberValid && validationTriggered && (
        <p className="text-[#ff9800] mt-1">Phone number must have at least 10 digits.</p>
      )}
    </div>
  );
};

export default PhoneInputComponent;