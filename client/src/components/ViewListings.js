import React from 'react'
import {Link} from 'react-router-dom'
import { useCategories } from "../hooks"


function ViewListings(props){

const {newListing} = useCategories()
const id = props.match.params.id
const name = props.match.params.name
console.log('viewlistingprops',props)
    return(
        <div>
            {newListing.length === 0 ? 
            <div><div>There are no available listings for this category</div>
            <Link to={`/CreateListing/${name}/${id}`}>Add a listing to this category </Link> 
            <div> <Link to={'/MainPageIndex'}>Back to the other page, bitch.</Link></div>
            </div>:
        <div className="MainAsideContainer">{id}
        <div> <Link to={'/MainPageIndex'}>Back to the other page, bitch.</Link></div></div>
            }
        </div>
            
    )
}

export default ViewListings