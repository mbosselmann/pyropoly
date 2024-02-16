import { useGameDispatch } from "@/context";
import { themes } from "@/data/colors";
import styled from "styled-components";

const Section = styled.section`
  position: absolute;
  top: 0;
  right: 4rem;
`;

export default function SelectTheme() {
  const dispatch = useGameDispatch();

  return (
    <Section>
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
    </Section>
  );
}
