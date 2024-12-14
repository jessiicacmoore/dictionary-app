import { useEffect, useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

type Option<T extends string | number> = {
  value: T;
  label: string;
};

type SelectProps<T extends string | number> = {
  id: string;
  label: string;
  isLabelVisible?: boolean;
  options: Option<T>[];
  defaultValue?: T;
  placeholder?: string;
  onChange?: (selectedValue: T) => void;
};

function Select<T extends string | number>({
  id,
  label,
  isLabelVisible,
  options,
  defaultValue,
  placeholder,
  onChange,
}: SelectProps<T>) {
  const [selectedValue, setSelectedValue] = useState<T | undefined>(
    defaultValue,
  );

  const labelClasses = isLabelVisible ? "" : "sr-only";

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = options.find(
      (option) => option.value.toString() === e.target.value,
    )?.value;
    if (value !== undefined) {
      setSelectedValue(value);
      if (onChange) onChange(value);
    }
  };

  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <span className="relative">
        <select
          id={id}
          value={selectedValue?.toString()}
          onChange={handleChange}
          className="appearance-none bg-transparent pr-4"
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value.toString()} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <PiCaretDownBold
          aria-hidden="true"
          className="text-primary-purple-500 absolute right-0 top-1/2 -translate-y-1/2 text-[0.875rem]"
        />
      </span>
    </div>
  );
}

export default Select;
