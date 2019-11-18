import React from "react"
import { useCategories } from "../hooks"
import {Link} from 'react-router-dom'
import MainAside from './MainAside'
import MainRightAside from './MainRightAside'
function MainPage() {

  const { categories, subOne, subTwo, subThree,subFour, subFive, subSix, subSeven} = useCategories()


console.log('sub1:',subOne)

  return (
      <div className="MainPageIndex">
          <MainAside/>
          
    <div className="MainPageIndexContainer">
        <div className="mainCity">Las Vegas</div>
        <div className="MainCategoryContainer">
        <div className="catgegoryContainer">
      
      <p className="MainCategoryNames">{categories.name1}</p>
              {subOne.map((item,i) =>{
                  return (
                      <div key={'sub1'+i} className="subCategoryNames"><Link to={`/ViewListings/${item.name}/${item.id}`}>{item.name}</Link></div>
                  )
              })}
              </div>

              <div className="catgegoryContainer">
              <p className="MainCategoryNames">{categories.name2}</p>
              {subTwo.map((item2,i) =>{
                  return (
                      <div key={'sub2'+ i} className="subcategoryNames"><Link to={`/ViewListings/${item2.name}/${item2.id}`}>{item2.name}</Link></div>
                  )
              })}
              </div>


<div className="catgegoryContainer">
<p className="MainCategoryNames">{categories.name3}</p>
              {subThree.map((item2,i) =>{
                  return (
                      <div key={'sub2'+ i} className="subcategoryNames"><Link to={`/ViewListings/${item2.name}/${item2.id}`}>{item2.name}</Link></div>
                  )
              })}
              </div>


<div className="catgegoryContainer">
<p className="MainCategoryNames">{categories.name4}</p>
              {subFour.map((item2,i) =>{
                  return (
                      <div key={'sub2'+ i} className="subcategoryNames"><Link to={`/ViewListings/${item2.name}/${item2.id}`}>{item2.name}</Link></div>
                  )
              })}
              </div>


<div className="catgegoryContainer">
<p className="MainCategoryNames">{categories.name5}</p>
              {subFive.map((item2,i) =>{
                  return (
                      <div key={'sub2'+ i} className="subcategoryNames"><Link to={`/ViewListings/${item2.name}/${item2.id}`}>{item2.name}</Link></div>
                  )
              })}
              </div>

<div className="catgegoryContainer">
<p className="MainCategoryNames">{categories.name6}</p>
              {subSix.map((item2,i) =>{
                  return (
                      <div key={'sub2'+ i} className="subcategoryNames"><Link to={`/ViewListings/${item2.name}/${item2.id}`}>{item2.name}</Link></div>
                  )
              })}
              </div>

<div className="catgegoryContainer">
<p className="MainCategoryNames">{categories.name7}</p>
              {subSeven.map((item2,i) =>{
                  return (
                      <div key={'sub2'+ i} className="subcategoryNames"><Link to={`/ViewListings/${item2.name}/${item2.id}`}>{item2.name}</Link></div>
                  )
              })}
              </div>

<div className="catgegoryContainer">
<p className="MainCategoryNames">{categories.name8}</p>
</div>
</div>
</div>


<MainRightAside/>
        </div>
  )
}

export default MainPage
