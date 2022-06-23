import React from 'react';
import {CountdownTimer, CountdownTimer2} from './CountdownTimer';

import './App.css';

export default function App2() {
  const THREE_DAYS_IN_MS = 1 * 1 * 1 * 20 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;


  const twoHours = 1 * 2 * 60 * 60 * 1000;
  

  const dateTimeAfterTwoHours = NOW_IN_MS + twoHours;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      <CountdownTimer2 targetDate={dateTimeAfterTwoHours} />
    </div>
  );
}