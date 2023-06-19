import { CustomButton } from "./style";
import { FC } from "react";

interface ButtonProps {
  children: any;
  mb?: string;
  mt?: string;
  padding?: string;
  white?: boolean;
  noMargin?: boolean;
}
const Button: FC<ButtonProps> = ({
  children,
  mb,
  mt,
  padding,
  white,
  noMargin,
}) => {
  return (
    <CustomButton
      white={white}
      style={{ marginBottom: mb, marginTop: mt, padding: padding }}
      noMargin={noMargin}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
