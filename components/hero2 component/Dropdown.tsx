interface DropdownProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
  validationTriggered: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  value,
  onChange,
  options,
  placeholder,
  validationTriggered,
}) => {
  
  return (
    <select
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 bg-transparent border ${
        !value && validationTriggered ? "border-[#ff9800]" : "border-white"
      } rounded-md focus:outline-none focus:border-[#ff9800]`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option className="bg-black" key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
