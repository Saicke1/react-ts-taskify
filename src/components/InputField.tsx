import React from 'react';
import "./styles.css";

const InputField = () => {
  return (
    <form className='input'>
      <input type='input' placeholder='Enter a task' className='inputBox'/>
      <button className='inputSubmit' type='submit'>GO!</button>
    </form>
  )
}

export default InputField
