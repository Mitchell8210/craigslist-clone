import React from 'react'
import { useSingleListings } from "../hooks"
import {Link} from 'react-router-dom'

function SinglePage(props){
    const id = props.match.params.id
    const slug = props.match.params.slug
const {singleListing, subListings} = useSingleListings(id)
console.log(singleListing)
    return (
        <div className="singleListingContainer">
            <div className="singleTitle">{singleListing.title}</div>
            <div className="singleLocation">{singleListing.location}</div>
            <div className="singleDescription">{singleListing.description}</div>
            <Link to={`/MainPageIndex`}>Back to Main</Link>
        </div>
    )
}


export default SinglePage