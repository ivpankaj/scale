import React from "react";
import { Dropdown } from "./Dropdown";
import { countries, experiences, jobRoles } from "@/lib/data";

interface FormDropdownsProps {
  selectedCountry: string;
  selectedExperience: string;
  selectedJobRole: string;
  onCountrySelect: (value: string) => void;
  onExperienceSelect: (value: string) => void;
  onJobRoleSelect: (value: string) => void;
  validationTriggered: boolean;
}

export const FormDropdowns: React.FC<FormDropdownsProps> = ({ selectedCountry, selectedExperience, selectedJobRole, onCountrySelect, onExperienceSelect, onJobRoleSelect, validationTriggered }) => {
  return (
    <div className="space-y-4 mt-8 bg-black text-black">
      <Dropdown value={selectedCountry} onChange={(e) => onCountrySelect(e.target.value)} options={countries} placeholder="Select Country" validationTriggered={validationTriggered} />
      <Dropdown value={selectedExperience} onChange={(e) => onExperienceSelect(e.target.value)} options={experiences} placeholder="Select Experience" validationTriggered={validationTriggered} />
      <Dropdown value={selectedJobRole} onChange={(e) => onJobRoleSelect(e.target.value)} options={jobRoles} placeholder="Select Job Role" validationTriggered={validationTriggered} />
    </div>
  );
};
