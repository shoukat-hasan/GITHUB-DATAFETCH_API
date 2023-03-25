import React, { useState } from "react";
import "./Fetchdata.css";


function GitHubData() {

    const [userName, setUserName] = useState("")
    const [userData, setUserData] = useState({})

    function onChangeHandle(e) {
        setUserName(e.target.value)
    }
    function fetchData(e) {
        e.preventDefault()
        fetch(`https://api.github.com/users/${userName}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                let user = data
                setUserData(user)
            })
    }
    return (
        <div className="main-card">
            <h1 className="title">Fetch Data Through GITHUB API</h1>
            <form className="form" action="">
                <input className="user-input" placeholder="Enter user name" type="text" value={userName} onChange={onChangeHandle} />
                <button className="search-btn" onClick={fetchData}>Search User</button>
            </form>
            <div className="card">
                <div className="top">
                    <h2 className="user-heading">{userData.name}</h2>
                    <img className="circle-img" src={userData.avatar_url} alt="avatar_url" />
                </div>
                <div className="bottom">
                    <p className="info">{userData.location}</p>
                    <p className="info">{userData.url}</p>
                    <p className="info">{userData.repos_url}</p>
                </div>
            </div>
        </div>
    )
}
export default GitHubData;