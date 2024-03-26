import css from './Feedback.module.css';

const Feedback = ({ stats, totalFeedback, positive}) => {
    return ( 
        <ul className = {css.stats}>
            <li className= {css.item}>Good: {stats.good}</li>
            <li className= {css.item}>Neutral: {stats.neutral}</li>
            <li className= {css.item}>Bad: {stats.bad}</li>
            <li className= {css.item}>Total: {totalFeedback}</li>
            <li className= {css.item}>Positive: {stats.positive}%</li>
        </ul>
    );
    };
    export default Feedback;