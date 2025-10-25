import React from 'react';

export default function Button({value, onClick}) {

    const isOperator = ['+', '-', '*', '/', '='].includes(value);
    const isClear = value === 'C';

    const base = " py-3 rounded-lg text-lg font-semibold"

    const color = isOperator ? " bg-blue-500 text-white" : isClear ? " text-white" : " bg-gray-100 ";

    return (
       <button className={`${base} ${color}`} onClick = {onClick}>
        {value}
       </button>
    );
}
