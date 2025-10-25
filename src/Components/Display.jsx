import React from 'react';

export default function Display({input, result}) {
  const isError = String(result).toLowerCase() === 'error';

  return(   
      <div className="w-full bg-gray-200 border-2 border-green-400 p-4 rounded-lg">
          <div className="text-xs text-black font-bold text-left ">Expression</div>
          <div className='mt-1 font-mono font-bold text-right  text-black'>{input || '0.00'}</div>
          <div className="text-2xl font-bold text-black  text-left ">Result</div>
          <div
            className={
              'mt-1 font-mono font-bold text-right text-3xl ' +
              (isError ? 'error-blink' : 'text-black')
            }
            role={isError ? 'alert' : undefined}
            aria-live={isError ? 'assertive' : undefined}
          >
            {result !=="" && result !== undefined && result !== null ? result : '0.00'}
          </div>
      </div>
  )
}