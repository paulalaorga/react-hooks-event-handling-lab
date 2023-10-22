import React, { useState } from "react";

function EyesOnMe() {

    const [isFocus, setIsFocus] = useState(false);

  const handleFocus = (e) => {
    setIsFocus(true);

    console.log('Good!');
  };

  const handleBlur = (e) => {
    setIsFocus(false);

    console.log('Hey! Eyes on me!');
  };

    return (
        <div>
            <button onFocus={handleFocus} onBlur={handleBlur}   
            >Eyes on me</button>
        </div>
    )
}
export default EyesOnMe;