"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FloatingIcons } from "./floating-icons";
import { AnimatedSection } from "./Animated";
import React, { useState, useEffect } from "react";
import { countries, experiences, jobRoles } from "@/lib/data";
import { Dropdown } from "./hero2 component/Dropdown";
import { Hero2Props } from "./hero2 component/type";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export function Hero2({
  onCountrySelect,
  onExperienceSelect,
  onJobRoleSelect,
  validationTriggered,
  selectedCountry,
  selectedExperience,
  selectedJobRole,
  onPhoneNumberChange,
}: Hero2Props & { onPhoneNumberChange?: (phoneNumber: string) => void }) {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState<boolean>(true);

  // Add viewport meta tag dynamically
  useEffect(() => {
    // Find existing viewport meta tag
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      // Update existing viewport meta tag
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      );
    } else {
      // Create new viewport meta tag if it doesn't exist
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content =
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0";
      document.head.appendChild(meta);
    }
  }, []);

  // Rest of your component logic remains the same
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (onCountrySelect) {
      onCountrySelect(value);
    }
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (onExperienceSelect) {
      onExperienceSelect(value);
    }
  };

  const handleJobRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (onJobRoleSelect) {
      onJobRoleSelect(value);
    }
  };
  const preventScrollPropagation = (event:any) => {
    const countryList = document.querySelector('.country-list');
    if (countryList && countryList.contains(event.target)) {
      event.stopPropagation();
    }
  };

  useEffect(() => {
    const handleTouchMove = (event:any) => {
      preventScrollPropagation(event);
    };

    const handleWheel = (event:any) => {
      preventScrollPropagation(event);
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);
  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
    const digitsOnly = value.replace(/\D/g, "");
    if (digitsOnly.length >= 10) {
      setIsPhoneNumberValid(true);
      if (onPhoneNumberChange) {
        onPhoneNumberChange(digitsOnly);
      }
    } else {
      setIsPhoneNumberValid(false);
    }
  };

  const handleSubmit = async () => {
    try {
      try {
        const response = await fetch(`http://localhost:4000/start/save`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phoneNumber: phoneNumber,
            country: selectedCountry,
            experience: selectedExperience,
            jobRole: selectedJobRole,
          }),
        });
        console.log(response, "");
        if (!response.ok) throw new Error("Save failed");
        console.log("Data saved successfully");
        alert("Data Saved Successfully");
      } catch (error) {
        console.error("Error saving data:", error);
      }
    } catch (error) {}
  };
  React.useEffect(() => {
    if (validationTriggered && phoneNumber.replace(/\D/g, "").length < 10) {
      setIsPhoneNumberValid(false);
    }
  }, [validationTriggered, phoneNumber]);

  return (
    <AnimatedSection>
      <div className="min-h-[80vh] flex flex-col items-center justify-center relative px-6 md:px-10 lg:px-16">
        <FloatingIcons />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="inline-block text-stroke">
              Help us <span className="text-white">with</span>
              <br />
              your <span className="text-white">Information</span>
              <br />
            </span>
          </h1>
          <div className="space-y-4 mt-8 bg-black">
            <div className="phone-input-container">
            <style jsx global>{`
  .phone-input-container .react-tel-input .form-control {
    width: 100%;
    height: 42px;
    font-size: 16px !important;
    background-color: transparent !important;
    border: 1px solid ${!isPhoneNumberValid && validationTriggered ? "#ff9800" : "#ffffff"};
    color: white;
    border-radius: 0.375rem;
    padding-left: 48px;
  }
  .phone-input-container .react-tel-input .flag-dropdown {
    background-color: transparent;
    border: none;
    border-right: 1px solid ${!isPhoneNumberValid && validationTriggered ? "#ff9800" : "#ffffff"};
  }
  .phone-input-container .react-tel-input .selected-flag:hover,
  .phone-input-container .react-tel-input .selected-flag:focus,
  .phone-input-container .react-tel-input .selected-flag.open {
    background-color: transparent;
  }
  .phone-input-container .react-tel-input .country-list {
    background-color: #1a1a1a;
    color: white;
    border: 1px solid #333;
    font-size: 16px !important;
    max-height: 200px; /* Set a maximum height */
    overflow-y: auto; /* Enable vertical scrolling */
    position: absolute; /* Ensure it's positioned absolutely */
    z-index: 1000; /* Ensure it's above other elements */
    -webkit-overflow-scrolling: touch; /* For smooth scrolling on iOS */
  }
  .phone-input-container .react-tel-input .country-list .country:hover {
    background-color: #333;
  }
  .phone-input-container .react-tel-input .country-list .country.highlight {
    background-color: #333;
  }
  .phone-input-container .react-tel-input .form-control:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ff9800;
    border-color: #ff9800;
  }
  .phone-input-container .react-tel-input .country-list .search {
    background-color: #1a1a1a;
    border: 1px solid #333;
  }
  .phone-input-container .react-tel-input .country-list .search-box {
    background-color: transparent;
    color: white;
    font-size: 16px !important;
  }
  .custom-country-list .react-tel-input .country-list {
    max-height: 200px; /* Adjust as needed */
    overflow-y: auto; /* Enable vertical scrolling */
  }
`}</style>
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
                containerClass="phone-input-container custom-country-list"
              />
              {!isPhoneNumberValid && validationTriggered && (
                <p className="text-[#ff9800] mt-1"></p>
              )}
            </div>

            <Dropdown
              value={selectedCountry}
              onChange={handleCountryChange}
              options={countries}
              placeholder="Select Country"
              validationTriggered={validationTriggered}
            />
            <Dropdown
              value={selectedExperience}
              onChange={handleExperienceChange}
              options={experiences}
              placeholder="Select Experience"
              validationTriggered={validationTriggered}
            />
            <Dropdown
              value={selectedJobRole}
              onChange={handleJobRoleChange}
              options={jobRoles}
              placeholder="Select Job Role"
              validationTriggered={validationTriggered}
            />
          </div>
        </motion.div>
        <button
          onClick={handleSubmit}
          className="block w-full px-4 py-2 border mt-1 bg-[#ff9800] text-black rounded-md shadow-md focus:outline-none focus:ring-2 "
        >
          Move to Next Page{" "}
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff9800]" />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
