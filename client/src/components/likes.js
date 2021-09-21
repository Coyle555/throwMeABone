import React, { useState } from "react";

function LikeBtn() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };


  return (
    <div>
      <div>
        <h5>Count is {count}</h5>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default LikeBtn;