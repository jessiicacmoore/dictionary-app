import { cn } from "@utils/cn";

type TextInputProps = {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  type?: "text" | "password" | "email";
  error?: string;
  className?: string;
};

function TextInput({
  id,
  label,
  value,
  placeholder = "",
  onChange,
  type = "text",
  error,
  className,
}: TextInputProps) {
  const inputGroupClasses = cn("group relative", className);
  return (
    <div className={inputGroupClasses}>
      <label
        htmlFor={id}
        className="absolute left-10 top-0 -translate-y-1/2 bg-gray-100 px-4 py-2 text-sm font-bold tracking-widest text-gray-500 dark:bg-gray-700"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-describedby={error ? `${id}-error` : undefined}
        autoComplete="off"
        className="block w-full rounded-2xl border border-gray-300 bg-transparent px-4 py-6 placeholder:text-gray-300"
      />
      {error && <span id={`${error}-id`}>{error}</span>}
    </div>
  );
}

export default TextInput;
