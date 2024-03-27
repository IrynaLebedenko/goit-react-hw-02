
import { useState } from 'react'
// import css from './App.css'
import Description from '../Description/Description'
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';

const App = () => {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  return (
    <div>
      <Description />
      <Options />
     <Feedback /> 
    </div>
  );
}
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Description />
//     <Options />
//     <Feedback />
//     </>
      
//   )
// }

export default App;
