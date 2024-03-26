// import React from 'react';
import { useState } from 'react'
import './App.css'
import Description from './components/Description/Description'

const App = () => {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  return (
    <div>
      {/* Ваша реалізація компонента */}
    </div>
  );
}
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Description />
//     <Options />
//     <Feetback />
//     </>
      
//   )
// }

export default App;
