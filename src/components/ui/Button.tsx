import { Button as ButtonHeadless, type ButtonProps } from "@headlessui/react";
import { cn } from "../../lib/utils";

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <ButtonHeadless
      {...props}
      className={cn(
        "bg-fern-green-600 hover:bg-fern-green-700 active:bg-fern-green-800 p-4 rounded-lg font-semibold transition-colors",
        className
      )}
    >
      {children}
    </ButtonHeadless>
  );
};

export default Button;
