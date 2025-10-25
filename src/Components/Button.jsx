import React from 'react';

export default function Button({ value, onClick }) {
  const isOperator = ['+', '-', '*', '/'].includes(value);
  const isEquals = value === '=';
  const isClear = value === 'AC';

  const base =
    "py-3 rounded-lg text-lg font-semibold transition-transform duration-150 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-1";

  const clearClass = "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300";
  const equalsClass = "bg-green-500 text-white hover:bg-green-600 focus:ring-green-300";
  const operatorClass = "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300";
  const numberClass = "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-200";

  const colorClass = isClear
    ? clearClass
    : isEquals
    ? equalsClass
    : isOperator
    ? operatorClass
    : numberClass;

  return (
    <button
      className={`${base} ${colorClass} w-full hover:scale-105 active:scale-95 hover:shadow-lg`}
      onClick={onClick}
      aria-label={`button-${value}`}
      type="button"
      style={{color:'white'}}
    >
      {value}
    </button>
  );
}
