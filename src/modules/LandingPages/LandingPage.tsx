import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

import AangImage from '../../static/images/aang.jpg';
import Error from '../../static/images/error-icon.svg';
import Check from '../../static/images/check.svg';
import Card from '../../components/Card';
import ProgressBar from '../../components/ProgressBar';
import Button, { ButtonStyle } from '../../components/Button';
import Alert, { AlertStyle } from '../../components/Alert';
import Toast, { ToastPosition, ToastStyle } from '../../components/Toast';

const AangCard = () => (
  <Card
    image={<img src={AangImage} alt="aang" className="card-img-top" />}
    bodyText="Aang is the Last Airbender and rides a flying bison named Appa"
    title="Aang"
    buttonText="Learn About the Avatar"
  />
);

// This controls the number of "steps" for the progress bar
const MAX_PROGRESS = 5;

type Props = {
  firstName: string;
  lastName: string;
};

export default ({ firstName, lastName }: Props) => {
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const [progress, setProgress] = useState<number>(0);

  const [showErrorAlert, setShowErrorAlert] = useState<boolean>(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);

  const updateProgress = (increment: boolean): void => {
    if (increment) {
      setProgress(Math.min(progress + 1, MAX_PROGRESS));
    } else {
      setProgress(Math.max(progress - 1, 0));
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Keep.id" />
      </Helmet>

      {showErrorAlert && (
        <Alert
          iconSrc={Error}
          iconAlt="Error!"
          variant={AlertStyle.DANGER}
          header="The Fire Nation has attacked!"
          bodyText="Fire lord Ozai has attacked the Earth Kingdom. Try performing the action again."
        />
      )}
      <Toast show={showSuccessAlert} variant={ToastStyle.SUCCESS} header="Avatar state unlocked." position={ToastPosition.BOTTOM_LEFT} onClose={() => setShowSuccessAlert(false)} iconSrc={Check} />

      {/* Welcome Header */}
      <h1 className="section">
        Welcome
        {' '}
        {firstName}
        {' '}
        {lastName}
      </h1>

      {/* ProgressBar + Step Buttons */}
      <div className="section">
        <ProgressBar progressPercent={(progress / MAX_PROGRESS) * 100} />
        <div className="progress-buttons-container">
          <div>
            {progress > 0 && (
              <div className="section" style={{ alignSelf: 'left' }}>
                <Button text="Previous Step" onClick={() => updateProgress(false)} outlineStyle={ButtonStyle.PRIMARY} />
              </div>
            )}
          </div>

          <div>
            {progress < MAX_PROGRESS && (
              <div className="section" style={{ alignSelf: 'right' }}>
                <Button text="Next Step" onClick={() => updateProgress(true)} outlineStyle={ButtonStyle.PRIMARY} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Button Toolbar */}
      <div className="row section">
        <Button
          className="button-with-margins"
          text="Error Message"
          variant={ButtonStyle.PRIMARY}
          onClick={() => setShowErrorAlert(!showErrorAlert)}
        />
        <Button
          className="button-with-margins"
          text="Success Message"
          variant={ButtonStyle.PRIMARY}
          onClick={() => setShowSuccessAlert(!showSuccessAlert)}
        />
        <Button
          className="button-with-margins"
          text="Add Card"
          variant={ButtonStyle.PRIMARY}
          onClick={() => setCards(cards.concat(<AangCard />))}
        />
        {cards.length > 0 ? (
          <Button
            className="button-with-margins"
            text="Remove Last Card"
            variant={ButtonStyle.PRIMARY}
            onClick={() => setCards(cards.slice(0, -1))}
          />
        ) : null}
      </div>

      {/* Aang Cards */}
      <div className="row section">
        {cards.map((c) => (
          <div className="col-lg-4 col-md-6" style={{ marginBottom: 25 }} key={`aang-card-${Math.random()}`}>{c}</div>
        ))}
      </div>
    </Container>
  );
};
