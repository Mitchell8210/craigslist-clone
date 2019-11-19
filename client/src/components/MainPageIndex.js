import React from "react"
import { useCategories } from "../hooks"
import {Link} from 'react-router-dom'
import MainAside from './MainAside'
import MainRightAside from './MainRightAside'

function MainPage() {
    const test = 6
  const { categories, subOne, subTwo, subThree,subFour, subFive, subSix, subSeven, subCategories} = useCategories()

// filtering out the duplicates in the arrays so as to not display duplicates

const seen = new Set()
const filteredArr1 = subOne.filter(el => {
    const duplicate = seen.has(el.id);
    seen.add(el.id);
    return !duplicate;
  });

  const filteredArr2 = subTwo.filter(el => {
    const duplicate = seen.has(el.id);
    seen.add(el.id);
    return !duplicate;
  });

  const filteredArr3 = subThree.filter(el => {
    const duplicate = seen.has(el.id);
    seen.add(el.id);
    return !duplicate;
  });

  const filteredArr4 = subFour.filter(el => {
    const duplicate = seen.has(el.id);
    seen.add(el.id);
    return !duplicate;
  });

  const filteredArr5 = subFive.filter(el => {
    const duplicate = seen.has(el.id);
    seen.add(el.id);
    return !duplicate;
  });

  const filteredArr6 = subSix.filter(el => {
    const duplicate = seen.has(el.id);
    seen.add(el.id);
    return !duplicate;
  });

  const filteredArr7 = subSeven.filter(el => {
    const duplicate = seen.has(el.id);
    seen.add(el.id);
    return !duplicate;
  });

  return (
      <div className="MainPageIndex">
          <MainAside/>
          
    <div className="MainPageIndexContainer">
        <div className="mainCity">Las Vegas</div>
        <div className="MainCategoryContainer">
        <div className="catgegoryContainer">
      
            <p className="MainCategoryNames">{categories.name1}</p>
                    {filteredArr1.map((item,i) =>{
                        return (
                      <div
                       key={'sub1'+i}
                       className="subCategoryNames"><Link to={`/ViewListings/${item.slug}/${item.id}`}>{item.name}</Link></div>
                            )
                        })}
                        </div>

                <div className="catgegoryContainer">
                <p className="MainCategoryNames">{categories.name2}</p>
                {filteredArr2.map((item2,i) =>{
                  return (
                      <div key={'sub2'+ i} className="subCategoryNames"><Link to={`/ViewListings/${item2.slug}/${item2.id}`}>{item2.name}</Link></div>
                            )
                        })}
                        </div>


                <div className="catgegoryContainer">
                <p className="MainCategoryNames">{categories.name3}</p>
                            {filteredArr3.map((item2,i) =>{
                  return (
                      <div key={'sub2'+ i} className="subCategoryNames"><Link to={`/ViewListings/${item2.slug}/${item2.id}`}>{item2.name}</Link></div>
                            )
                        })}
                        </div>


                <div className="catgegoryContainer">
                <p className="MainCategoryNames">{categories.name4}</p>
                            {filteredArr4.map((item2,i) =>{
                  return (
                      <div key={'sub2'+ i} className="subCategoryNames"><Link to={`/ViewListings/${item2.slug}/${item2.id}`}>{item2.name}</Link></div>
                            )
                        })}
                        </div>


                <div className="catgegoryContainer">
                <p className="MainCategoryNames">{categories.name5}</p>
                            {filteredArr5.map((item2,i) =>{
                  return (
                      <div key={'sub2'+ i} className="subCategoryNames"><Link to={`/ViewListings/${item2.slug}/${item2.id}`}>{item2.name}</Link></div>
                            )
                        })}
                        </div>

                <div className="catgegoryContainer">
                <p className="MainCategoryNames">{categories.name6}</p>
                            {filteredArr6.map((item2,i) =>{
                  return (
                      <div key={'sub2'+ i} className="subCategoryNames"><Link to={`/ViewListings/${item2.slug}/${item2.id}`}>{item2.name}</Link></div>
                            )
                        })}
                        </div>

<div className="catgegoryContainer">
<p className="MainCategoryNames">{categories.name7}</p>
              {filteredArr7.map((item2,i) =>{
                  return (
                      <div key={'sub2'+ i} className="subCategoryNames"><Link to={`/ViewListings/${item2.slug}/${item2.id}`}>{item2.name}</Link></div>
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
