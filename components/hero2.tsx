// Hero2.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FloatingIcons } from "./floating-icons";
import { AnimatedSection } from "./Animated";
import React from "react";
import { countries, experiences, jobRoles } from "@/lib/data";
import { Dropdown } from "./hero2 component/Dropdown";
import { Hero2Props } from "./hero2 component/type";

export function Hero2({
  onCountrySelect,
  onExperienceSelect,
  onJobRoleSelect,
  validationTriggered,
  selectedCountry,
  selectedExperience,
  selectedJobRole,
  onPhoneNumberChange, // Add this prop for handling phone number change
}: Hero2Props & { onPhoneNumberChange: (phoneNumber: string) => void }) {
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

  return (
    <AnimatedSection>
      <div className="min-h-screen flex flex-col items-center justify-center relative px-6 md:px-10 lg:px-16">
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
            <div className="flex ">
              <input
                className={`block w-16 mr-2 px-4 py-2 border bg-transparent text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-social-pink focus:border-social-pink appearance-none`}
                type="text"
                placeholder="+91"
              />
              <input
                className={`block w-full px-4 py-2 border bg-transparent text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-social-pink focus:border-social-pink appearance-none`}
                type="text"
                placeholder="Enter Your Number"
                maxLength={10} // Restrict to 10 characters
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
                  e.target.value = value;
                }}
                onBlur={(e) => {
                  if (e.target.value.length !== 10) {
                    alert("Please enter exactly 10 digits!");
                  }
                }}
              />
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
          <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-social-pink" />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
