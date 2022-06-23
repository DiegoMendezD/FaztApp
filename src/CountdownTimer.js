import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
// import { useCountdown } from './hooks/useCountdown';
import { useCountdown } from './hooks/useCountdown';
import API from './hooks/API'

const ExpiredNotice = () => {

  
  return (
    <div className="expired-notice">
      <span>El tiempo se acabó</span>
      <p>Añade más tiempo para visualizar el temporizador</p>
      <API />
    </div>
  );
};


const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div
        
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days >= 3} />
        <p>:</p>
        {/* <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} /> */}
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </div>
    </div>
  );
};

export const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  CountdownTimer2({targetDate})
  const [days1, hours1, minutes1, seconds1] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    
    return(
    <>
      <ExpiredNotice />
      <ShowCounter
          days={days1}
          hours={hours1}
          minutes={minutes1}
          seconds={seconds1}
        />
    </>
    ) ;
  } else {
    return (
      <>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        <API />
      </>
    );
  }
};

export const CountdownTimer2 = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    
    return(
    <>
      {/* <ExpiredNotice /> */}
      <DateTimeDisplay isDanger={true} />
    </>
    ) ;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

