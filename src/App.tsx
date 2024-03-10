// App.tsx
import './App.css';
import { Settings } from './components/settings/Settings';
import { Counter } from './components/counter/Counter';
import { useState } from 'react';

function App() {
  const initStartValue = 1;
  const initMaxValue = 10;
  const [startValue, setStartValue] = useState(initStartValue);
  const [maxValue, setMaxValue] = useState(initMaxValue);
  const [isSettingsFocused, setIsSettingsFocused] = useState(false);



  return (
    <div className="App">
      <Settings 
      className="App-container"
      startValue={startValue}
      maxValue={maxValue}
      setStartValue={setStartValue}
      setMaxValue={setMaxValue}
      setIsSettingsFocused={setIsSettingsFocused}
      />
      <Counter 
      className="App-container"   
      startValue={startValue}
      isSettingsFocused={isSettingsFocused}
      maxValue={maxValue}/>
    </div>
  );
}

export default App;

