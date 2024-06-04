import styles from "./styles.module.css";
import FieldItem from "./FieldItem";
import type { Field } from "../../../types/Field";
interface PanelProps {
  fields: Field[];
  variant: string;
}

export default function Panel({ fields, variant }: PanelProps) {
  return (
    <ul role="list" className={`${styles.list} ${styles[variant]}`}>
      {fields.map((field) => (
        <FieldItem
          key={field.id}
          name={field.name}
          fieldNumber={field.fieldNumber}
          variant={variant}
          color={field.color}
          type={field.type}
          price={field.price}
        />
      ))}
    </ul>
  );
}
