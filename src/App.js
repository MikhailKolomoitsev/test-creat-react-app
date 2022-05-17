import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Box from './box';

function App() {
  const [elements, setElements] = useState([1, 2, 3])
  const [hovered, setHovered] = useState([])

  useEffect(() => {
    setElements(Array.from(Array(25).keys()))
  }, [])


  return (
    <div className="App">
      <ul>
        {elements.map((element, idx) =>
          <li key={idx+1}
            onMouseEnter={() => {
              setHovered(prev => {
                if (prev.includes(idx+1)) {
                  return prev.filter(i => i !== idx+1)
                }
                else { return [...prev, idx+1] }
              })
            }}
          >
            <Box
              hovered={hovered.includes(idx+1) ? true : false}
            />
          </li>)}
      </ul>
    </div>
  );
}

export default App;
