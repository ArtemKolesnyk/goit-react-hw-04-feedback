import { useState } from 'react';
import FeedbackOptions from './components/FeedBackOptions';
import Statistics from './components/Ststistics';
import Section from './components/Section';
import Notification from './components/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const PositiveFeedbackPercentage = Math.round((good / total) * 100);

  const handleClickButton = e => {
    switch (e) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onLeaveFeedback={handleClickButton}
      />
      <Section title="Statistics">
        {total === 0 ? (
          <Notification />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={PositiveFeedbackPercentage}
          />
        )}
      </Section>
    </Section>
  );
};

export default App;
