import React from 'react';
import { Alert as AlertBS, Row } from 'react-bootstrap';

export type Props = {
  /**
   * Body text to include in the alert
   */
  bodyText?: string;
  /**
   * Option Icon src
   */
  iconSrc?: any;
  /**
   * Optional Icon alt text
   */
  iconAlt?: string;
  /**
   * Child Elements to include in Alert body
   */
  children?: JSX.Element[] | JSX.Element;
  /**
   * Header to apply to alert
   */
  header?: string;
  /**
   * AlertStyle indicating color scheme to apply to Alert
   */
  variant: AlertStyle;
}

// TODO should a shared `BootstrapStyle` enum be created?
export enum AlertStyle {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  LIGHT = 'light',
  DARK = 'dark'
}

// TODO replace with `react-alert`
const Alert = ({
  bodyText, children, header, iconAlt, iconSrc, variant,
}: Props) => (
  <AlertBS variant={variant.toString()}>
    <div className="alert-body">
      {iconSrc ? (
        <div className="alert-icon-container">
          <img src={iconSrc} alt={iconAlt} className="alert-icon" />
        </div>
      ) : null}
      <div>
        {header && <AlertBS.Heading className="alert-header-text">{header}</AlertBS.Heading>}
        {bodyText && <p className="alert-body-text">{bodyText}</p>}
        {children}
      </div>
    </div>
  </AlertBS>
);

Alert.displayName = 'Alert';

export default Alert;
