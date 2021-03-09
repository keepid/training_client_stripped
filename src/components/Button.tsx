import React from 'react';

export type Props = {
  /**
   * ClassName to apply to Button
   */
  className?: string;
  /**
   * Link to which the Button should direct onClick
   */
  link?: string;
  /**
   * Callback method invoked onClick
   */
  onClick?: () => any;
  /**
   * Outline style of the Button
   */
  outlineStyle?: ButtonStyle;
  /**
   * Text label to apply to Button
   */
  text: string;
  /**
   * Style variant dictating the color scheme of the Button
   */
  variant?: ButtonStyle;
}

export enum ButtonStyle {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  LIGHT = 'light',
  DARK = 'dark'
}

function buttonStylesToClassNames(buttonType?: ButtonStyle, buttonOutlineType?: ButtonStyle): string {
  const outputClasses: string[] = ['btn'];

  if (buttonType) {
    outputClasses.push(`btn-${buttonType.toString()}`);
  }

  if (buttonOutlineType) {
    outputClasses.push(`btn-outline-${buttonOutlineType.toString()}`);
  }

  return outputClasses.join(' ');
}

const Button = ({
  className,
  link,
  onClick,
  outlineStyle,
  text,
  variant,
}: Props) => (
  link
    ? <a href={link} className={`${className} ${buttonStylesToClassNames(variant, outlineStyle)}`} onClick={onClick}>{text}</a>
    : <button type="button" className={`${className} ${buttonStylesToClassNames(variant, outlineStyle)}`} onClick={onClick}>{text}</button>
);

Button.displayName = 'Button';

export default Button;
