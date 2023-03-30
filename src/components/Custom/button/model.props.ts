import React, { forwardRef, MutableRefObject } from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: MutableRefObject<HTMLButtonElement>;
  icon?: React.ReactNode;
  className?: string;
};
