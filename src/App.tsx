import './App.css';
import { useState, Dispatch, SetStateAction } from 'react';

interface IncButtonProps {
  diff: number;
  val: number;
  setVal: Dispatch<SetStateAction<number>>;
}

const IncButton: React.FC<IncButtonProps> = ({ diff, val, setVal }) => {
  const clicked = () => {
    setVal(val + diff);
  };

  return (
    <button onClick={clicked}>{diff}</button>
  );
};

function App() {
  const [cnt, setCnt] = useState(0);

  return (
    <div className="App">
      <IncButton diff={-1} val={cnt} setVal={setCnt} />
      {cnt}
      <IncButton diff={1} val={cnt} setVal={setCnt} />
    </div>
  );
}

export default App;
