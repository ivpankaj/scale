"use client";
import React, { useState, useEffect, useRef } from "react";
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
  const phoneInputContainerRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    setIsValid(digitsOnly.length >= 10);
    onChange(digitsOnly);
  };

  useEffect(() => {
    const phoneInputContainer = phoneInputContainerRef.current;

    if (phoneInputContainer) {
      const countryList = phoneInputContainer.querySelector('.country-list');
      const selectedFlag = phoneInputContainer.querySelector('.selected-flag');

      // Function to prevent scrolling on the body
      const preventBodyScroll = () => {
        document.body.classList.add('no-scroll');
      };

      // Function to allow scrolling on the body
      const allowBodyScroll = () => {
        document.body.classList.remove('no-scroll');
      };

      // Prevent dropdown scroll from propagating to the body
      const handleCountryListScroll = (event: Event) => {
        event.stopPropagation();
      };

      // When the dropdown opens, prevent body scroll
      const handleSelectedFlagClick = () => {
        if (countryList && window.getComputedStyle(countryList).display !== 'none') {
          preventBodyScroll();
        } else {
          allowBodyScroll();
        }
      };

      // Close dropdown when clicking outside
      const handleOutsideClick = (event: MouseEvent) => {
        if (phoneInputContainer && !phoneInputContainer.contains(event.target as Node)) {
          allowBodyScroll();
        }
      };

      if (countryList) {
        countryList.addEventListener('scroll', handleCountryListScroll);
      }

      if (selectedFlag) {
        selectedFlag.addEventListener('click', handleSelectedFlagClick);
      }

      document.addEventListener('click', handleOutsideClick);

      // Cleanup event listeners on unmount
      return () => {
        if (countryList) {
          countryList.removeEventListener('scroll', handleCountryListScroll);
        }

        if (selectedFlag) {
          selectedFlag.removeEventListener('click', handleSelectedFlagClick);
        }

        document.removeEventListener('click', handleOutsideClick);
      };
    }
  }, []);

  return (
    <div className="phone-input-container" ref={phoneInputContainerRef}>
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