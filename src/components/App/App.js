import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedbackAmount = option => {
    this.setState(prevState => ({
      [`${option}`]: prevState[`${option}`] + 1,
    }));
  };

  countTotalFeedback = () => (this.state.good + this.state.neutral + this.state.bad)

  countPositiveFeedbackPercentage() {
    if (this.state.good) {
      return `${Math.round(
        (this.state.good * 100) / this.countTotalFeedback()
      )}%`;
    } else {
      return '0';
    }
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.updateFeedbackAmount}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
