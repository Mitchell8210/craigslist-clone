import React, {useState} from "react"
import { useCategories } from "../hooks"
import {Link} from 'react-router-dom'



function CreateListing(props) {
  const { categories, NewPost } = useCategories()
  const id = props.match.params.id
  const name = props.match.params.name
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')

    // const makeAListing = () =>{
    //     const [title, setTitle] = useState('')
    // const [location, setLocation] = useState('')
    // const [description, setDescription] = useState('')
    // }



const userListing = {
    category_name: name,
    category_id: id,
    title: title,
    location: location,
    description: description
}
function handleClick(userListing){
   
    NewPost(userListing)
    console.log(userListing)
}
  return (
    <div>
        <p>CREATE LISTINGS</p>
        <form>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <input type="text" placeholder="Listing Title" onChange={e => setTitle(e.target.value)}></input>
            <input type="text" placeholder="Location"onChange={e => setLocation(e.target.value)}></input>
            <input type="text" placeholder="description" onChange={e=> setDescription(e.target.value)}></input>
        </form>
        <div className="createListingButton" onClick={
            handleClick(userListing)
        }>Create Listing</div>
        <div> <Link to={'/MainPageIndex'}>Back to the other page, bitch.</Link></div>
        <div>{title}</div>
        <div>{location}</div>
        <div>{description}</div>
    </div>
  )
}

export default CreateListing