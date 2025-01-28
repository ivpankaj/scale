export interface Hero2Props {
  onCountrySelect: (country: string) => void;
  onExperienceSelect: (experience: string) => void;
  onJobRoleSelect: (jobRole: string) => void;
  validationTriggered: boolean;
  selectedCountry: string;
  selectedExperience: string;
  selectedJobRole: string;
}