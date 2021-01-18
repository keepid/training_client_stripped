import React from 'react';
import { Toast as ToastBS, Container, Row } from 'react-bootstrap';

export type Props = {
  /**
   * Optional prop to use as src of Icon `img`
   */
  iconSrc?: any;
  /**
   * Optional alt text to apply to the Icon
   */
  iconAlt?: string;
  /**
   * Children appended to Toast body
   */
  children?: JSX.Element[] | JSX.Element;
  /**
   * Toast Header text
   */
  header?: string;
  /**
   * Boolean indicating whether toast should be visible
   */
  show: boolean;
  /**
   * ToastStyle dictating color scheme of Toast
   */
  variant: ToastStyle;
  /**
   * Position of toast on the screen
   */
  position: ToastPosition;
  /**
   * Callback invoked when toast is closed
   */
  onClose: () => any;
}

// TODO should a shared `BootstrapStyle` enum be created?
export enum ToastStyle {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  LIGHT = 'light',
  DARK = 'dark'
}

export enum ToastPosition {
  TOP_LEFT = 'top-0 left-0',
  TOP_RIGHT = 'top-0 right-0',
  BOTTOM_LEFT = 'bottom-0 left-0',
  BOTTOM_RIGHT = 'bottom-0 right-0',
}

// TODO replace with `react-alert`
const Toast = ({
  iconSrc, iconAlt, children, header, variant, position, show, onClose,
}: Props) => (
  <ToastBS show={show} className={`bg-${variant.toString()} ${position.toString()}`} onClose={onClose}>
    <Container>
      <Row>
        {iconSrc ? (
          <div className="toast-icon-container">
            <img src={iconSrc} alt={iconAlt} className="toast-icon" />
          </div>
        ) : null}
        {header ? (<ToastBS.Header>{header}</ToastBS.Header>) : null}
      </Row>
      {(children) ? (
        <ToastBS.Body>
          {children}
        </ToastBS.Body>
      ) : null}
    </Container>
  </ToastBS>
);

Toast.displayName = 'Toast';

export default Toast;
