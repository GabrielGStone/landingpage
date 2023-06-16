import { CustomButton } from "./style";
import { FC } from "react";

interface ButtonProps {
  children: any;
  mb?: string;
}
const Button: FC<ButtonProps> = ({ children, mb }) => {
  return <CustomButton style={{ marginBottom: mb }}>{children}</CustomButton>;
};

export default Button;
