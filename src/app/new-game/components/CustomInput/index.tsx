import { AVATAR_MAP } from "@/components/Icons/AvatarIcons";
import styles from "./styles.module.css";

interface RadioInputProps {
  id: string;
  type: string;
  name: string;
  labelText: string;
  isSelected: boolean;
  colorCode: string | null;
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
  colorCode = null,
  avatarName = "",
}: RadioInputProps) {
  return (
    <p className={styles.paragraph}>
      <input
        className={styles.input}
        type={type}
        id={String(id) + name}
        name={name}
        onChange={onChange}
      />
      <label
        className={`${styles.label} ${colorCode ?? "fallback"}BackgroundColor ${
          isSelected ? styles.isSelected : ""
        }`}
        htmlFor={String(id) + name}
      >
        <span className="screenreaderonly">{labelText}</span>
        {avatarName && AVATAR_MAP[avatarName.toLowerCase()]}
      </label>
    </p>
  );
}
