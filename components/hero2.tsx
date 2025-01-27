// hero2.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FloatingIcons } from "./floating-icons";
import { AnimatedSection } from "./Animated";
import React, { useState } from "react";

export interface Hero2Props {
  onCountrySelect: (country: string) => void;
  onExperienceSelect: (experience: string) => void;
}

export function Hero2({ onCountrySelect, onExperienceSelect }: Hero2Props) {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedExperience, setSelectedExperience] = useState<string>("");
  const [selectedJobRole, setSelectedJobRole] = useState<string>("");
  const countries = ["USA", "Canada", "India", "Germany", "Australia"];
  const experiences = [
    "0 - less than 1",
    "1 - less than 2",
    "2 - less than 4",
    "4 - less than 7",
    "7 - less than 10",
    "10 - less than 15",
    "15 plus"
  ];
  const jobRoles = ["AI/ML", " Automation & DevOps", " Data Analytics", " Digital Marketing", " Finance & Accounts"," Human Resources (HR)"," Information Technology (IT)"," Legal & Compliance"," Operations & Supply Chain"," Product & Project Management"," Quality Assurance"," Sales & Marketing"," Search Engine Optimization (SEO)"," Software Development","Compliance Executive / Officer","Customer Success Manager"];

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCountry(value);
    if (onCountrySelect) {
      onCountrySelect(value);
    }
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedExperience(value);
    
    if (onExperienceSelect) {
      onExperienceSelect(value);
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
          <div className="space-y-4 mt-8">
            <div className="relative">
              <select
                className="block w-full px-4 py-2 bg-transparent border border-social-pink text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-social-pink focus:border-social-pink z-10"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <option value="" disabled>
                  Select Country
                </option>
                {countries.map((country) => (
                  <option key={country} value={country} className="text-black">
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <select
                className="block w-full px-4 py-2 bg-transparent border border-social-pink text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-social-pink focus:border-social-pink"
                value={selectedExperience}
                onChange={handleExperienceChange}
              >
                <option value="" disabled>
                  Select Experience
                </option>
                {experiences.map((experience) => (
                  <option key={experience} value={experience} className="text-black">
                    {experience}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <select
                className="block w-full px-4 py-2 bg-transparent border border-social-pink text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-social-pink focus:border-social-pink"
                value={selectedJobRole}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setSelectedJobRole(e.target.value)
                }
              >
                <option value="" disabled>
                  Select Job Role
                </option>
                {jobRoles.map((jobRole) => (
                  <option key={jobRole} value={jobRole} className="text-black">
                    {jobRole}
                  </option>
                ))}
              </select>
            </div>
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