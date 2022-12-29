import React from 'react';
import './CVMakingButton.css'
import {useHistory} from 'react-router-dom'
const CVMakingButton = ({ name,to }) => {
    let history=useHistory()
    return (
        <div>
            <button
            onClick={()=>{
                history.push(`/${to}`)
            }}
                className={name === "Back" ? "CVMakingButtonBack CVMakingButton" : "CVMakingButtonNext CVMakingButton"}
            >{name}</button>
        </div>
    );
}

export default CVMakingButton;