import styled, { css } from "styled-components";
import FieldItem from "./FieldItem";
import type { Field } from "../types/Field";
import { Avatar } from "@/types/Avatar";

interface PanelProps {
  fields: Field[];
  variant: string;
}

export default function Panel({ fields, variant }: PanelProps) {
  return (
    <List variant={variant}>
      {fields.map((field) => (
        <FieldItem
          key={field.id}
          name={field.name}
          fieldNumber={field.fieldNumber}
        />
      ))}
    </List>
  );
}

const List = styled.ul.attrs({
  role: "list",
})<{ variant: string }>`
  display: grid;
  padding: 0;
  margin: 0;
  list-style: none;
  word-break: break-word;
  ${({ variant }) =>
    variant === "vertical" &&
    css`
      width: 8rem;
      grid-template-rows: repeat(9, 1fr);
    `}
  ${({ variant }) =>
    variant === "horizontal" &&
    css`
      height: 8rem;
      grid-template-columns: 8rem repeat(9, 1fr) 8rem;
    `}
`;
