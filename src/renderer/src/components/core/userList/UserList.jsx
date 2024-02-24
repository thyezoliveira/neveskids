import { useEffect, useState } from "react"
import '../../../assets/userlist.scss'

function UserList() {
  const [allUsers, setAllUsers] = useState([])
  let fetched = false
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const fetchUsers = () => {
    const url = "http://localhost:2024/listusers"
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setAllUsers(data.users)
      })
  }

  const constructElements = () => {
    return allUsers.map((user) => 
      <li className="userlist_item" key={user.usr_id}>
        {user.usr_id}: {user.usr_nome} {user.usr_sobrenome}
      </li>
    )
  }

  const constructList = () => {
    return <ul id="userlist_ul">{constructElements()}</ul>
  }

  useEffect(() => {
    if (!fetched) {
      fetchUsers()
      fetched = true
    }
  }, [])

  return (
    <>
      <h1>UserList</h1>
      <section id="userlist">
        {constructList()}
      </section>
    </>
  )
}

export default UserList
