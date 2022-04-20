import classNames from "classnames";
import * as React from "react";
import { MouseEventHandler } from "react";
import "./Button.css";

export type ButtonType = "solid" | "outline" | "circle" | "clear";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

export type ButtonSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

export type HtmlButtonType = "button" | "submit" | "reset";

interface DefaultButtonProps {
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
  variant?: ButtonVariant;
  htmltype?: HtmlButtonType;
  size?: ButtonSize;
  className?: string;
  tabIndex?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export type ButtonProps = DefaultButtonProps &
  Pick<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "aria-selected" | "aria-controls" | "aria-expanded" | "role" | "aria-haspopup" | "aria-describedby"
  >;

export const Button = React.forwardRef<HTMLButtonElement | null, ButtonProps>((props, ref) => {
  const {
    children,
    onClick,
    type = "solid",
    variant = "primary",
    htmltype = "button",
    size = "large",
    className,
    disabled,
    tabIndex,
    style,
  } = props;
  return (
    <button
      {...props}
      // eslint-disable-next-line react/button-has-type
      type={htmltype}
      ref={ref}
      onClick={onClick}
      className={classNames("Button", `Button--${type}`, `Button--${variant}`, `Button--${size}`, className)}
      disabled={disabled}
      tabIndex={tabIndex}
      style={style}
    >
      {children}
    </button>
  );
});
