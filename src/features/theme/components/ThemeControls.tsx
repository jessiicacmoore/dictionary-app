import { HiOutlineMoon } from "react-icons/hi2";
import { Font } from "@features/theme/types";
import { useTheme } from "@features/theme";
import { Select } from "@features/ui";
import { ToggleSwitch } from "@features/ui";

function ThemeControls() {
  const { theme, font, toggleTheme, setFont } = useTheme();

  const handleFontSelect = (value: Font) => {
    setFont(value);
  };

  return (
    <fieldset>
      <legend className="sr-only">Theme preferences</legend>
      <div className="flex items-center gap-5">
        <Select
          id="font-select"
          label="Theme Font"
          isLabelVisible={false}
          options={[
            { value: "sans", label: "Sans" },
            { value: "serif", label: "Serif" },
            { value: "mono", label: "Mono" },
          ]}
          defaultValue={font}
          onChange={handleFontSelect}
        />
        <span className="inline-block h-8 w-px bg-gray-300"></span>
        <span className="flex items-center gap-2 leading-none">
          <ToggleSwitch
            labelText="Dark Mode"
            id="dark-mode"
            isLabelVisible={false}
            isChecked={theme === "dark"}
            onChange={toggleTheme}
          />
          <HiOutlineMoon className="dark:text-primary-purple-500 text-3xl text-gray-500" />
        </span>
      </div>
    </fieldset>
  );
}

export default ThemeControls;
