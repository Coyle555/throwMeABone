import React, { useState } from "react";

function LikeBtn() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };


  return (
    <>
<div className="entry-post">
                                        <div className="entry-thumbnail">
                                            <div className="thumbnail-overlay"></div>
                                          
                                        </div>
                                        <div className="post-content">
                                           <button 
      className="btn btn-sm btn-white"
      onClick={handleIncrement}><i className="fas fa-plus text-white"></i></button>
          <div className="time">
        <a href="#">{count} <span>likes</span></a>
                 </div>
                                            
                                        </div>
                                    </div> 
    

       
    </>
  );
}

export default LikeBtn;