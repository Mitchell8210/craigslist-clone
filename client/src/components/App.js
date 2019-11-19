import React from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainPage from './MainPageIndex'
import SelectCity from './SelectCity'
import { useCategories } from "../hooks"
import ViewListings from "./ViewListings"
import CreateListing from './CreateListing'
import SinglePage from './SingleListing'
function App() {
  const { categories } = useCategories()


  return (
  <Router>
      <div className="pageContainer">
      
    <Switch>
    <Route exact path={'/'} component={SelectCity}/>
    <Route exact path={'/MainPageIndex'} component={MainPage}/>
    <Route exact path={'/ViewListings/:slug/:id'} component={ViewListings}/>
    <Route exact path={'/CreateListing/:slug/:id'} component={CreateListing}/>
    <Route exact path={'/SingleListing/:slug/:id'} component={SinglePage}/>
    </Switch>
    </div>
  </Router>
  )
}

export default App
