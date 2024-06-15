import { useGameDispatch } from "@/context";
import { themes } from "@/data/colors";
import styles from "./styles.module.css";

export default function SelectTheme() {
  const dispatch = useGameDispatch();

  return (
    <section className={styles.section}>
      <label htmlFor="theme">Select Theme</label>
      <select
        name="theme"
        id="theme"
        onChange={(event) => {
          dispatch({
            type: "updateSelectedTheme",
            value: themes[parseInt(event.target.value)],
          });
          dispatch({
            type: "updateUser",
            key: "color",
            value: null,
          });
        }}
      >
        <option value={0}>On Fire (default)</option>
        <option value={1}>Darker Fire</option>
        <option value={2}>Pastell Fire</option>
        <option value={3}>Fire Wood</option>
        <option value={4}>Neon Fire</option>
      </select>
    </section>
  );
}
