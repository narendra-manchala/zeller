import { InputHTMLAttributes } from "react";
import { Label, Radio, Wrapper } from "./Styles";

interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  key?: string;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

function RadioButton({ label, id, key, selected = false, onClick, ...rest }: InputElementProps) {
  const handleChange = () => {
    if (onClick) onClick()
  }
  return (
    <Wrapper key={key} selected={selected} id={id} onClick={handleChange}>
      <Radio type="radio" id={id} checked={selected} onChange={handleChange} {...rest} />
      <Label htmlFor="radio-button" id={id}>{label}</Label>
    </Wrapper>
  );
}

export default RadioButton;
