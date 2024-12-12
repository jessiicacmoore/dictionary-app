import Select from "../../ui/Select";
import ToggleSwitch from "../../ui/ToggleSwitch";
import { useTheme } from "../hooks";
import { Font } from "../types";

function ThemeControls() {
  const { theme, font, toggleTheme, setFont } = useTheme();
  console.log("controls");

  const handleFontSelect = (value: Font) => {
    setFont(value);
  };

  return (
    <fieldset>
      <legend className="sr-only">Theme preferences</legend>
      <div className="flex gap-6 align-middle">
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
        <span className="inline-block h-8 w-px bg-gray-500"></span>
        <ToggleSwitch
          labelText="Dark Mode"
          id="dark-mode"
          isLabelVisible={false}
          isChecked={theme === "dark"}
          onChange={toggleTheme}
        />
      </div>
    </fieldset>
  );
}

export default ThemeControls;
