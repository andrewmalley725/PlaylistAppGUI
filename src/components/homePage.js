import React from "react";

export default function HomePage()
{
    return(
        <div>
            {
                localStorage.getItem('userId') ? <h1>Welcome {localStorage.getItem('username')}!</h1> : <h1>Generic HomePage</h1>
            }
        </div>
    )
}