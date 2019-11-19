import React from 'react'
import {Link} from 'react-router-dom'
import { useCategories, useListings } from "../hooks"



function ViewListings(props){
const id = props.match.params.id
const {listing, subListings} = useListings(id)
const slug = props.match.params.slug

console.log('viewlistingprops',props)
    return(
        <div>
            {subListings.length === 0 ? 
            <div className="notAvailableContainer">
                <div className="notAvailable">There are no available listings for this category</div>
                    <Link to={`/CreateListing/${slug}/${id}`}>Add a listing to this category </Link> 
            <div className="notAvailableBack"> 
                <Link to={'/MainPageIndex'}>Back to the main page</Link>
            </div>
            </div>:
        <div className="viewListingContainer">
        <div> <Link to={'/MainPageIndex'}>Back to the main page</Link>
        </div>
        <div className="listingItemsContainer">{subListings.map(item=>{
            return (
                <div key={item.id}className="listingItems">
                    <Link to={`/SingleListing/${slug}/${item.id}`}>
            <div className="listingCatNames">Category: {item.category_name}</div>
            <div className="listingTitles">Title: {item.title}</div>
            </Link>
            </div>
            )
        })}</div>
        <div className="addAListingLink">
        <Link to={`/CreateListing/${slug}/${id}`}>Add a listing to this category </Link> 
        </div>
        </div>
        
            }
        </div>
            
    )
}

export default ViewListings