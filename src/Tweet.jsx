import React, {useState} from 'react';
import './App.css'

function Tweet({name, msg, likes}) {

    const [count, setCount] = useState(0);
    const addLike = () => {
        setCount(count +1);
    }

    const bigName = () =>{
        setRed(!isRed)
    }

    var l = parseInt(likes) + count;

    const [isRed, setRed] = useState(false);

  return (
    <div className='tweet'>
        <h3 className={isRed ? 'red' : ''} onClick={bigName}>{name}</h3>
        <p> {msg}</p>
        <button onClick={addLike}>{l}</button>
    </div>
  );
};

export default Tweet