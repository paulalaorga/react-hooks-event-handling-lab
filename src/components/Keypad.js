import React from "react";

function Keypad (){

function handler(){
    console.log('Entering password...')
}

    return (
        <div>
            <input type="password" onChange={handler} />
        </div>
    )
}

export default Keypad;
