import React, { useState } from 'react'
const Contador = () => {
    const [count, setCount] = useState(0);
    const updateCount = (NewValue: number = 1) => {
    setCount((value) =>  value + NewValue)
    }
    return (
        <div>
            <h2>Contador: <small> {count} </small> </h2>
            <button className='btn btn-outline-primary text-dark m-2' onClick={() => updateCount(2)}>Incrementar </button>
            <button className='btn btn-outline-danger text-dark' onClick={() => updateCount(-2)}> Decremento </button>
        </div>
    );
}

export default Contador