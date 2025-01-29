import React from "react";

interface SubmitButtonProps {
  isPhoneNumberValid: boolean;
  validationTriggered: boolean;
  phoneNumber: string;
  selectedCountry: string;
  selectedExperience: string;
  selectedJobRole: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isPhoneNumberValid, validationTriggered, phoneNumber, selectedCountry, selectedExperience, selectedJobRole }) => {
  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:4000/start/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, country: selectedCountry, experience: selectedExperience, jobRole: selectedJobRole }),
      });
      if (!response.ok) throw new Error("Save failed");
      alert("Data Saved Successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <button className="block w-full px-4 py-2 border mt-1 bg-[#ff9800] text-black rounded-md shadow-md focus:outline-none focus:ring-2" onClick={handleSubmit} disabled={!isPhoneNumberValid || !validationTriggered}>
      Submit
    </button>
  );
};
