import { forwardRef } from "react";
import styles from "./button.module.scss";
import cn from "classnames";
import { ButtonProps } from "./model.props";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, icon, className, ...buttonProps }, ref) => {
    return (
      <button
        {...buttonProps}
        ref={ref}
        className={cn(styles.btn, styles[`${className}`])}
      >
        {icon && <>{icon}</>}
        {children && <>{children}</>}
      </button>
    );
  }
);

export default Button;
