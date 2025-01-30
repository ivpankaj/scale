"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { AnimatedSection } from "./Animated";
import { FloatingIcons } from "./floating-icons";
import { PhoneInputWrapper } from "./hero2 component/PhoneInputWrapper";
import { Dropdown } from "./hero2 component/Dropdown";
import { countries, experiences, jobRoles } from "@/lib/data";
import { Hero2Props } from "./hero2 component/type";

export function Hero2({
  onCountrySelect,
  onExperienceSelect,
  onJobRoleSelect,
  validationTriggered,
  selectedCountry,
  selectedExperience,
  selectedJobRole,
  onPhoneNumberChange,
  onSubmitSuccess,
  onPhoneValidation, 
  phoneNumber: propPhoneNumber, 
  setPhoneNumber: setPropPhoneNumber,
}: Hero2Props) {


  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content =
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0";
      document.head.appendChild(meta);
    }
  }, []);

  const handlePhoneNumberChange = (value: string) => {
    setPropPhoneNumber(value); // Update the parent's state
    const isValid = value.length >= 10;

    if (onPhoneValidation) {
      onPhoneValidation(isValid);
    }
    if (isValid && onPhoneNumberChange) {
      onPhoneNumberChange(value);
    }
  };
  const handleSubmit = async () => {
    console.log("ad")
    try {
      const response = await fetch(`http://localhost:4000/start/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber: propPhoneNumber,
          country: selectedCountry,
          experience: selectedExperience,
          jobRole: selectedJobRole,
        }),
      });

      if (!response.ok) throw new Error("Save failed");
      alert("Data Saved Successfully");
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      console.error("Error saving data:", error);
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
            <PhoneInputWrapper
              value={propPhoneNumber}
              onChange={handlePhoneNumberChange}
              validationTriggered={validationTriggered}
 
            />
            <Dropdown
              value={selectedCountry}
              onChange={(e) => onCountrySelect(e.target.value)}
              options={countries}
              placeholder="Select Country"
              validationTriggered={validationTriggered}
            />

            <Dropdown
              value={selectedExperience}
              onChange={(e) => onExperienceSelect(e.target.value)}
              options={experiences}
              placeholder="Select Experience"
              validationTriggered={validationTriggered}
            />

            <Dropdown
              value={selectedJobRole}
              onChange={(e) => onJobRoleSelect(e.target.value)}
              options={jobRoles}
              placeholder="Select Job Role"
              validationTriggered={validationTriggered}
            />
          </div>
        </motion.div>

        <button
          className="block w-full px-4 py-2 border mt-1 bg-[#ff9800] text-black rounded-md shadow-md focus:outline-none focus:ring-2"
          onClick={handleSubmit}
        >
          Submit
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-8 h-8 text-[#ff9800]" />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
