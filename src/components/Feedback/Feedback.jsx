import css from "./Feedback.module.css";

    const Feedback = ({ stats, totalFeedback, positivePercent }) => {
        return (
          <div className={css.stats}>
            <p className={css.item}>Good: {stats.good}</p>
            <p className={css.item}>Neutral: {stats.neutral}</p>
            <p className={css.item}>Bad: {stats.bad}</p>
            <p className={css.item}>Total: {totalFeedback}</p>
            <p className={css.item}>Positive: {positivePercent}%</p>
          </div>
        );
      };
      
      export default Feedback;