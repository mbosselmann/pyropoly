import styles from "./styles.module.css";

type CheckboxProps = {
  index: string;
  question: string;
  option: string;
  onChange: () => void;
  isDisabled: boolean;
  isSelected: boolean;
  isAnswerCorrect: boolean;
};

export default function Checkbox({
  index,
  question,
  option,
  onChange,
  isDisabled,
  isSelected,
  isAnswerCorrect,
}: CheckboxProps) {
  return (
    <>
      <input
        id={option}
        name={question}
        type="radio"
        key={index}
        value={option}
        defaultChecked={false}
        onChange={onChange}
        disabled={isDisabled}
        hidden={true}
      />
      <label
        className={`${styles.label} ${
          isSelected ? styles["is-selected"] : ""
        } ${isDisabled ? styles["is-disabled"] : ""} ${
          isSelected && isAnswerCorrect
            ? styles["is-correct"]
            : isSelected && !isAnswerCorrect
            ? styles["is-wrong"]
            : ""
        }`}
        htmlFor={option}
      >
        {option}
      </label>
    </>
  );
}
