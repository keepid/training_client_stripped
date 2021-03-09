import React from 'react';
import { ProgressBar as ProgressBarBS, ProgressBarProps } from 'react-bootstrap';

export type Props = {
  /**
   * The progress % to display on the Progress Bar
   */
  progressPercent: number;
}

const ProgressBar = ({ progressPercent }: Props) => (
  <ProgressBarBS min={0} max={100} now={progressPercent} />
);

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
