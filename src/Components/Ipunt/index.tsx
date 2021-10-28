import { InputHTMLAttributes } from "react";
import "./style.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string;
  type?: string;
}
export const Input = ({ placeholder, label, type, ...rest }: InputProps) => (
  <div className="Input-info">
    {label && <label>{label} </label>}
    <input type={type} placeholder={placeholder} {...rest} />
  </div>
);
