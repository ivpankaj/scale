import React from "react";

interface DropdownProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
  validationTriggered: boolean;
}

export function Dropdown({ value, onChange, options, placeholder, validationTriggered }: DropdownProps) {
  const getBorderColor = (value: string) => {
    return value || !validationTriggered ? "border-white" : "border-[#ff9800]";
  };

  return (
    <div className="relative">
      <select
        className={`block w-full px-4 py-2 border bg-transparent ${getBorderColor(value)} text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-social-pink focus:border-social-pink`}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-black">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
