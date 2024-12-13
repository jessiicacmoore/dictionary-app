type ToggleSwitchProps = {
  labelText: string;
  id: string;
  isLabelVisible?: boolean;
  isChecked?: boolean;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
};

function ToggleSwitch({
  labelText,
  id,
  isLabelVisible = true,
  isChecked = false,
  onChange,
}: ToggleSwitchProps) {
  const labelClasses = isLabelVisible ? "" : "sr-only";

  return (
    <div className="group">
      <label htmlFor={id} className={labelClasses}>
        {labelText}
      </label>
      <input
        type="checkbox"
        role="switch"
        id={id}
        aria-checked={isChecked}
        checked={isChecked}
        onChange={onChange}
        className="border-1 relative h-6 w-12 appearance-none rounded-full border-2 border-gray-500 bg-gray-500 align-bottom transition-colors before:absolute before:left-1 before:top-1/2 before:h-4 before:w-4 before:-translate-y-1/2 before:rounded-full before:bg-gray-100 before:transition-all checked:before:left-6 dark:border-primary-purple dark:bg-primary-purple"
      />
    </div>
  );
}

export default ToggleSwitch;
