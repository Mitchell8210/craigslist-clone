import React, {useState} from "react"
import { useListings } from "../hooks"
import {Link} from 'react-router-dom'
import Axios from "axios"
import { dispatch } from "rxjs/internal/observable/range"



function CreateListing(props) {
  const { listing } = useListings()
  const id = props.match.params.id
  const slug = props.match.params.slug
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const category_name= slug
  const category_id = id

function handleClick(e){
   e.preventDefault()

Axios.post('/users', {category_name, category_id, title, location, description}).then(resp=> {
    console.log('posted')
    listing(category_id)
})


    // NewPost(category_name, category_id, title, location, description)
    // console.log('jilesjf')
}
  return (
    <div className="createListingContainer">

        <form onSubmit={handleClick}>
                <input type="text" placeholder="Listing Title" onChange={e => setTitle(e.target.value)}></input>
                <input type="text" placeholder="Location"onChange={e => setLocation(e.target.value)}></input>
                <input type="text" placeholder="description" onChange={e=> setDescription(e.target.value)}></input>
                <button className="createListingButton" type="submit">Create Listing</button>
        </form>
            <div className="backToMain"> <Link to={'/MainPageIndex'}>Back to the main page</Link></div>
    </div>
  )
}

export default CreateListing