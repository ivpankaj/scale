// export interface Hero2Props {
//   onCountrySelect: (country: string) => void;
//   onExperienceSelect: (experience: string) => void;
//   onJobRoleSelect: (jobRole: string) => void;
//   validationTriggered: boolean;
//   selectedCountry: string;
//   selectedExperience: string;
//   selectedJobRole: string;
// }

export interface Hero2Props {
  onCountrySelect: (value: string) => void;
  onExperienceSelect: (value: string) => void;
  onJobRoleSelect: (value: string) => void;
  validationTriggered: boolean;
  selectedCountry: string;
  selectedExperience: string;
  selectedJobRole: string;
  onPhoneNumberChange?: (phoneNumber: string) => void;
  onSubmitSuccess?: () => void; // Optional callback for successful submission
}