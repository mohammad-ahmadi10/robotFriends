import React from 'react';
import 'tachyons';
const Card = ({id, name, email}) =>{
    return (
        <div className="bg-light-green tc dib br3 pa ma3 grow bw3 shadow-3 ">
            <img src= {`https://robohash.org/${id}?=200x200`} alt='robots'/>

            <div>
                <h3 className="f5 ttu tracked-mega mt0">{name}</h3>
                <p className="i">{email}</p>
            </div>

        </div>
    );
}

export default Card;