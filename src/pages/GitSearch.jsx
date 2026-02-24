import React, { useState } from 'react'
import { Cards } from '../components/Cards'

export const GitSearch = () => {

  const [userData, setUserData] = useState({})
  const [useRepos, setUserRepos] = useState([])

  let userName = "";


  const submitHandler = async () => {

    let gitProfile = `https://api.github.com/users/${userName}`;
    let gitRepos = `https://api.github.com/users/${userName}/repos`;

    event.preventDefault()

    const response = await fetch(gitProfile, {
      method: "GET"
    })

    const data = await response.json();

    setUserData(data);

    const response2 = await fetch(gitRepos, {
      method: "GET"
    })

    const data2 = await response2.json();

    setUserRepos(data2)

  }

  const onChangeUserName = () => {

    userName = event.target.value

  }

  return (
    <>
      <form onSubmit={submitHandler}>

        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input type="text" onChange={onChangeUserName} className="form-control" />
        </div>

        <button className='btn btn-success'>Search</button>
      </form>

      <h1>Results</h1>

      <h5>User Name: {userData.login}</h5>
      <p>Profile like : <a target='_blank' href={userData.html_url}>Profile</a> </p>
      <img className='img-fliud' src={userData.avatar_url} />

      <h5 className='mt-3'>Repos</h5>

      {
        useRepos.map((item) => (
          <Cards key={item.id} title={item.name} description={item.visibility} />
        ))
      }

    </>
  )
}
