import React from 'react'

function Dashboard() {
    JSON.parse(localStorage.getItem("name"));

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("name");
        window.location.replace("/");
      };

  return (
    <>
        <h1>Hello {JSON.parse(localStorage.getItem("name"))}</h1>
        <hr />
        <button onClick={handleLogout}>Log Out</button>
    </>
  )
}

export default Dashboard