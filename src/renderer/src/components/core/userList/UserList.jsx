import { useEffect } from "react"

function UserList() {
  let allUsers = []
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const getUsers = () => {
    const url = "http://localhost:2024/listusers"
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        allUsers = data.users
      })
      constructElements()
  }

  const constructElements = () => {
    console.log(allUsers)
  }

  // const constructList = () => {
  //   return (
  //     <ul>
  //       {constructElements()}
  //     </ul>
  //   )
  // }

  useEffect(() => {
    getUsers()
  })

  return (
    <>
      <p>UserList</p>
    </>
  )
}

export default UserList
