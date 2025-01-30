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

    if (!phoneInputContainer) return;

    const preventBodyScroll = () => {
      document.body.classList.add("no-scroll");
    };

    const allowBodyScroll = () => {
      document.body.classList.remove("no-scroll");
    };

    const handleCountryListScroll = (event: Event) => {
      event.stopPropagation(); // Prevent scroll propagation
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        phoneInputContainer &&
        !phoneInputContainer.contains(event.target as Node)
      ) {
        allowBodyScroll();
      }
    };

    // Use MutationObserver to detect when the country list is rendered
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const countryList = phoneInputContainer.querySelector(".country-list");
        const selectedFlag = phoneInputContainer.querySelector(
          ".selected-flag"
        );

        if (countryList && selectedFlag) {
          // Attach event listeners to the country list and selected flag
          countryList.addEventListener("scroll", handleCountryListScroll);
          selectedFlag.addEventListener("click", () => {
            if (
              countryList &&
              window.getComputedStyle(countryList).display !== "none"
            ) {
              preventBodyScroll();
            } else {
              allowBodyScroll();
            }
          });
        }
      });
    });

    // Observe changes in the phone input container
    observer.observe(phoneInputContainer, {
      childList: true,
      subtree: true,
    });

    // Add global click listener
    document.addEventListener("click", handleOutsideClick);

    // Cleanup
    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="phone-input-container" ref={phoneInputContainerRef}>
      <style jsx global>
        {phoneInputStyles}
      </style>
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
        <p className="text-[#ff9800] mt-1">
          Please enter a valid phone number
        </p>
      )}
    </div>
  );
};
