import React from 'react'

const Logout = (props) => {
    
    const deleteToken = () => {
        localStorage.clear();
        window.location = '/';
    }

    return (
        <div align="center">
            <h2>Are you sure you want to logout?</h2>
            &nbsp;
            <Button variant="danger" type="submit" onClick={()=> deleteToken()}>Logout</Button>
        </div>
    )
}

export default Logout;