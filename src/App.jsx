import { useState } from 'react'
import './App.css'
import Display from './Components/Display'
import Button from './Components/Button'

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'AC') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        const res = eval(input);
        setResult(res);
      } catch {
        setResult('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = ['7', '8', '9', '/', 
                   '4', '5', '6', '*', 
                   '1', '2', '3', '-', 
                   '0', '.', '=', '+', 
                   'AC'];

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center p-4'>
        <div className='bg-white shadow-xl rounded-2xl w-full max-w-md h-auto overflow-hidden grid grid-cols-1 gap-4'>
          
          
          <div className='p-6 flex flex-col gap-4 bg-gradient-to-b from-white to-gray-100'>
            <h1 className='text-xl font-bold text-center mb-4 text-green-800 font-mono'>Calculator</h1>
            <div className='flex flex-1 flex-col justify-start'>
              <Display input={input} result={String(result)} />
            </div>
          </div>

          <div className='p-4 flex flex-col'>
            <div className='flex flex-1 grid grid-cols-4  gap-3 auto-rows-fr'>
              {buttons.map((btn, index) => (
                <Button 
                  key={index} 
                  value={btn} 
                  onClick={() => handleClick(btn)} 
                />
              ))}
            </div>
          </div>



        </div>


      </div>
 
    </>
  )
}

export default App
