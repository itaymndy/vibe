import cx from "classnames";
import React, { AriaRole, forwardRef } from "react";
import { noop as NOOP } from "lodash-es";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import useClickableProps from "../../hooks/useClickableProps/useClickableProps";
import styles from "./Clickable.module.scss";

export interface ClickableProps extends VibeComponentProps {
  /**
   * The type of the clickable element wrapper (for example div or span)
   */
  elementType?: keyof JSX.IntrinsicElements | string;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  role?: AriaRole;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  enableTextSelection?: boolean;
  onMouseDown?: (event: React.MouseEvent) => void;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
  ariaLabel?: string;
  /**
   * Is the element and its content should be hidden from screen readers and other assistive technologies
   */
  ariaHidden?: boolean;
  // TODO: [breaking] remove string type
  ariaHasPopup?: boolean | string;
  ariaExpanded?: boolean;
  // TODO: [breaking] remove string type
  tabIndex?: string | number;
  disabled?: boolean;
  style?: React.CSSProperties;
  "data-testid"?: string;
}

const Clickable: VibeComponent<ClickableProps, HTMLElement> = forwardRef(
  (
    {
      elementType = "div",
      className = "",
      id,
      children,
      role = "button",
      onClick = NOOP,
      enableTextSelection = false,
      onMouseDown = NOOP,
      onMouseEnter = NOOP,
      onMouseLeave = NOOP,
      ariaLabel,
      ariaHidden,
      ariaHasPopup,
      ariaExpanded,
      tabIndex = "0",
      disabled = false,
      style,
      "data-testid": dataTestId
    }: ClickableProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const clickableProps = useClickableProps(
      {
        onClick,
        onMouseDown,
        onMouseEnter,
        onMouseLeave,
        disabled,
        id,
        "data-testid": dataTestId,
        role,
        tabIndex,
        ariaLabel,
        ariaHidden,
        ariaHasPopup,
        ariaExpanded
      },
      ref
    );
    const overrideClassName = cx(styles.clickable, className, {
      [styles.disabled]: disabled,
      [styles.disableTextSelection]: !enableTextSelection
    });

    return React.createElement(
      elementType,
      {
        ...clickableProps,
        className: overrideClassName,
        style: style
      },
      children
    );
  }
);

export default Clickable;
