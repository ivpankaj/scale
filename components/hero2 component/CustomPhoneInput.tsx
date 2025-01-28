import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import styles from './CustomPhoneInput.module.css'

interface CustomPhoneInputProps {
  onPhoneNumberChange: (phoneNumber: string) => void;
}

const countryCodes = {
  US: '1',
  GB: '44',
  IN: '91',
  CA: '1',
  AU: '61',
  // Add more countries as needed
};

const getFlagClassName = (countryCode: string) => {
  return `fi fi-${countryCode.toLowerCase()}`;
};

export const CustomPhoneInput = ({ onPhoneNumberChange }: CustomPhoneInputProps) => {
  const [countryCode, setCountryCode] = useState('US');
  const [phone, setPhone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    if (onPhoneNumberChange) {
      onPhoneNumberChange(`+${getCode(countryCode)} ${value}`);
    }
  };

  const selectCountry = (val: string) => {
    setSelectedCountry(val);
    setCountryCode(val);
  };

  const getCode = (country: string) => {
    return countryCodes[country] || '1'; // Default to US
  };

  return (
    <div className=" bg-black flex items-center space-x-2 w-full">
      <div className="relative flex items-center">
      </div>
      <input
        type="text"
        value={phone}
        onChange={handlePhoneChange}
        placeholder="Enter your phone number"
        className=" bg-black border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};