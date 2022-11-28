import PropTypes from 'prop-types';
import { FeedbackList, FeddbackBtn } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <FeedbackList>
            {options.map((option) => {
                return (
                <li key={option}>
                        <FeddbackBtn type="button" onClick={() => onLeaveFeedback(option)}>{option}</FeddbackBtn>
                </li>)
            })}
        </FeedbackList>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

