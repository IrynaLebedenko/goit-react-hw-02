import css from './Options.module.css';


const Options = ({ update, resetFeedback, totalFeedback}) => {
    return (
        <ul className={css.div}>
            <li>
                <button className = {css.btn} onClick = {() => update("good")}>Good</button>    
            </li> 
            <li>
                <button className = {css.btn} onClick = {() => update("neutral")}>Neutral</button>    
            </li>
            <li>
                <button className = {css.btn} onClick = {() => update("bad")}>Bad</button>    
            </li>
            {totalFeedback > 0 && (
            <li>
            <button className = {css.btn} onClick = {() => resetFeedback()}>Reset</button>
            </li>
            )}
        </ul>
    );
};
export default Options;