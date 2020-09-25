import React from 'react'

const Test = ({handleLogout})=>{
    return(
        <div className="hero">
            <nav>
                <h2>
                    Welcome
                </h2>
                <button className="bg-red-600"onClick={handleLogout}>LogOut</button>
            </nav>
        </div>
    );
}; 

export default Test;