import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [someState, setSomeState] = useState<any>(null);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((result) => {
        alert(`Hello ${result.test}!`);
        setSomeState(result);
      });
  }, []);

  return (
    <>
      <p>Test</p>
      {someState && someState?.test}
    </>
  );
}

export default App;
