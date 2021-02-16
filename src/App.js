import React, { useState } from 'react';
import Main from './Components/Main';
import './App.css'

function App() {

  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState([]);

  const inputItems = (e) => {
    setValue(e.target.value);
  }

  const add_item_btn = () => {
    setInputValue((preValue) => {
      return [...preValue, value]
    })
    setValue('');
  }

  const deleteItems = (id) => {
    setInputValue((preValue) => {
      return preValue.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>ToDo List</h1>
          <br/>
            <input className="input__container" value={value} onChange={inputItems} type="text" placeholder="Add Items" />
            <button onClick={add_item_btn}> + </button> 
          
          <ol>
          {
            inputValue.map((textValue, index) => {
              return <Main 
                key={index}
                id={index}
                text={textValue}
                onSelect={deleteItems}
              />
            })
          }
          </ol>
        </div>
      </div>
    </>
  )
}
export default App;