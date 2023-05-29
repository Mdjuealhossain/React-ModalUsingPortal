import React, { useState } from "react";
import ControllModal from "../OtherComponents/ControModal";




const PortalContain=()=>{

const [modal,setModal]=useState(false)
const [change,setChange]=useState("")

const togolmodal=(value)=>{
setChange(value)

    setModal(!modal)
}




    return (

<div>

 <button onClick={togolmodal}  className='btn-modal'>Open</button>
  
<div>
        
        {modal && (
              <div  className="modal">
              <div onClick={togolmodal} className="overly"></div>
              <div className="modal-contain">
                <h1>{change}</h1>
                <h1>This is Modal</h1>
                <p>lThe default behavior of the DOM hierarchy when no z-index is set to elements is that the elements that appear lower in the hierarchy will take higher precedence. In simpler terms, the order matters. So, appending to the body (after all the elements) in the DOM will ensure the portal container element will have higher precedence in hierarchy.
                </p>
                <button onClick={togolmodal} className="modal-clse">Close</button>
              </div>
    
    
    
   
    
            </div>
    
   
        )}



        <ControllModal togolmodal={togolmodal} modal={modal}/>
        <div>
     
       
        </div>
      </div>
</div>
    )
}
export default PortalContain