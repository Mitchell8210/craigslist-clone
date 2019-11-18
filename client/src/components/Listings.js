import React from "react"
import { useCategories } from "../hooks"

function MainPage() {
  const { categories, NewPost } = useCategories()

  console.log(users)

  return (
    <div>
        <p>MAPPING LISTINGS</p>
      {NewPost.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default MainPage
