import React from "react";

export default function HomePage()
{
function logout() {
    localStorage.clear();
    window.location.reload();
}

    return(
        <div>
            {
                localStorage.getItem('userId') ? 
                <div>
                    <h1>Welcome {localStorage.getItem('username')}!</h1>
                    <button type="button" className="btn btn-primary" onClick={logout}>Logout</button>
                </div>
                
                : 
                <div>
                    <h1>Generic HomePage</h1>
                    <a href="/login" className="btn btn-primary">Login</a>
                </div>
            }
        </div>
    )
}