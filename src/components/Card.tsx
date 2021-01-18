import React from 'react';
import { Card as CardBS } from 'react-bootstrap';
import Button, { ButtonStyle } from './Button';

export type Props = {
  /**
   * Plain text body to add to the Card
   */
  bodyText?: string;
  /**
   * Link to which the Card Button should direct
   */
  buttonLink?: string;
  /**
   * The text label to apply to the Button
   */
  buttonText?: string;
  /**
   * Child Elements to include in the body of the Card
   */
  children?: JSX.Element | JSX.Element[];
  /**
   * Image to include on the Card
   */
  image?: JSX.Element;
  /**
   * Title text of the Card
   */
  title?: string;
}

const Card = ({
  bodyText,
  buttonLink,
  buttonText,
  children,
  image,
  title,
}: Props) => (
  <CardBS className="card">
    {image}
    <CardBS.Body>
      {title ? <h4 className="card-title">{title}</h4> : null}
      {bodyText ? (
        <p className="card-text">
          {bodyText}
        </p>
      ) : null}
      {buttonText ? (
        <Button text={buttonText} link={buttonLink} variant={ButtonStyle.PRIMARY} />
      ) : null}
      {children}
    </CardBS.Body>
  </CardBS>
);

Card.displayName = 'Card';

export default Card;
