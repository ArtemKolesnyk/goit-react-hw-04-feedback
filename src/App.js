import { useEffect, useState } from 'react';
// import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Ststistics';
import Section from './components/Section';
import Notification from './components/Notification';
import { Btn } from './components/Notification/Button.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    good + neutral + bad;
  }, [good, neutral, bad]);

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  const totalCunter = () => {
    return good + neutral + bad;
  };

  const total = totalCunter();

  return (
    <Section title="Please leave feedback">
      <>
        <Btn type="button" onClick={() => setGood(good + 1)}>
          Good
        </Btn>
        <Btn type="button" onClick={() => setNeutral(neutral + 1)}>
          Neutral
        </Btn>
        <Btn type="button" onClick={() => setBad(bad + 1)}>
          Good
        </Btn>
      </>
      <>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalCunter()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    </Section>
  );
};

export default App;
