import React, { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleButtonClick = type => {
    setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleButtonClick}
        />
      </Section>
      {state.good === 0 && state.neutral === 0 && state.bad === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={state.good + state.neutral + state.bad}
            positivePercentage={
              (state.good / (state.good + state.neutral + state.bad)) * 100
            }
          />
        </Section>
      )}
    </div>
  );
};
