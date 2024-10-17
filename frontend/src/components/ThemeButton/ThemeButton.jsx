import useTheme from "../../contexts/theme";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


function ThemeButton() {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) darkTheme();
    else lightTheme();
  };
  return (
    <>
      <label>
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={onChangeBtn}
          checked={themeMode === "dark"}
        />
        <div className=" text-black dark:text-white cursor-pointer">
          {themeMode === "dark" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </div>
      </label>
    </>
  );
}

export default ThemeButton;
