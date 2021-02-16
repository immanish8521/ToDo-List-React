import React from 'react';
import '../main.css'

const Main = ({ text , onSelect,id}) => {
    
    return (
        <>
            <div className="todo_style">
                <i onClick={() => {
                    onSelect(id)
                }} className="fa fa-times" aria-hidden="true" />
                <li>{text}</li>
            </div>
        </>
    )
}

export default Main;
