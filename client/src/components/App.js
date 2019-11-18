import React from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import MainPage from './MainPageIndex'
import SelectCity from './SelectCity'
import { useCategories } from "../hooks"
import ViewListings from "./ViewListings"
import CreateListing from './CreateListing'

function App() {
  const { categories } = useCategories()


  return (
  <Router>
      <div className="pageContainer">
      
    
    <Route exact path={'/'} component={SelectCity}/>
    <Route path={'/MainPageIndex'} component={MainPage}/>
    <Route path={'/ViewListings/:name/:id'} component={ViewListings}/>
    <Route path={'/CreateListing/:name/:id'} component={CreateListing}/>
    </div>
  </Router>
  )
}

export default App
