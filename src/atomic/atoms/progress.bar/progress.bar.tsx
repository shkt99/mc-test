import React from 'react';
import * as Progress from 'react-native-progress';

type ProgressBarProps = {
  progress: number;
  width: number;
  color: string;
  unfilledColor?: string;
  borderWidth?: number;
  borderColor?: string;
};
const ProgressBar = ({
  progress,
  width,
  color,
  unfilledColor = '#EBEBEB',
  borderWidth = 1,
  borderColor = 'transparent',
}: ProgressBarProps) => {
  const p = isNaN(progress) ? 0 : progress;
  return (
    <Progress.Bar
      progress={p}
      width={width}
      color={color}
      unfilledColor={unfilledColor}
      borderWidth={borderWidth}
      borderColor={borderColor}
    />
  );
};

export default ProgressBar;
