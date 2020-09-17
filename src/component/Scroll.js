import React from "react";

const Scroll = (props) =>{
    return (
        <div style={{overflowY: 'scroll' ,height: '800px', marginBottom: '10px', border: '1px solid black', borderRadius:'10px'}}>
            {props.children}
        </div>


    );
}

export default Scroll