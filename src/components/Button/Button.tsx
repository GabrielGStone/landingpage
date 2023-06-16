import { CustomButton } from "./style";
import { FC } from "react";

interface ButtonProps {
  children: any;
  mb?: string;
  mt?: string;
  padding?: string;
  white?: boolean;
}
const Button: FC<ButtonProps> = ({ children, mb, mt, padding, white }) => {
  return (
    <CustomButton
      white={white}
      style={{ marginBottom: mb, marginTop: mt, padding: padding }}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
