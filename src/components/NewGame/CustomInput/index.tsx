import { ScreenReaderOnly } from "../../Styles/ScreenReaderOnly";
import styles from "./styles.module.css";
import { AVATAR_MAP } from "@/components/Player/AvatarIcons";

interface RadioInputProps {
  id: string;
  type: string;
  name: string;
  labelText: string;
  isSelected: boolean;
  colorCode: string;
  avatarName?: string;
  onChange: () => void;
}

export default function CustomInput({
  id,
  name,
  type,
  labelText,
  isSelected,
  onChange,
  colorCode = "",
  avatarName = "",
}: RadioInputProps) {
  return (
    <p>
      <input
        className={styles.input}
        type={type}
        id={String(id) + name}
        name={name}
        onChange={onChange}
      />
      <label
        className={`${styles.label} ${colorCode}BackgroundColor ${
          isSelected ? styles.isSelected : ""
        }`}
        htmlFor={String(id) + name}
      >
        <ScreenReaderOnly>{labelText}</ScreenReaderOnly>
        {avatarName && AVATAR_MAP[avatarName.toLowerCase()]}
      </label>
    </p>
  );
}
