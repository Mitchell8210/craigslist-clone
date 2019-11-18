import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_CATEGORIES = "users/GET_USERS"
const NEW_LISTING = "users/NEW_LISTING"
const GET_SUBCATEGORIES= "users/GET_SUBCATEGORIES"
const TEST_POST ="TEST_POST"
// initial state
const initialState = {
  categories: [],
  newListing: [],
  subCategories: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.payload }
    case NEW_LISTING:
      return {...state, newListing: action.payload}
    case GET_SUBCATEGORIES: 
      return {...state, subCategories: action.payload}
    
    default:
      return state
  }
}

// action creators

//get calls to database
const getCategories = () => {
  return dispatch => {
    axios.get("/users/something").then(resp => {
      const cats ={
        name1: resp.data[0].name,
        name2: resp.data[1].name,
        name3: resp.data[2].name,
        name4: resp.data[3].name,
        name5: resp.data[4].name,
        name6: resp.data[5].name,
        name7: resp.data[6].name,
        name8: resp.data[7].name
      }
      dispatch({
        type: GET_CATEGORIES,
        payload: cats
      })
    })
  }
}
//call to get the subcategories
const getSubCategories = () => {
  return dispatch => {
    axios.get("/subcats").then(resp => {
      const newarrays={
      subOne: newArr(resp.data),
      subTwo: newArrTwo(resp.data),
      subThree: newArrThree(resp.data),
      subFour: newArrFour(resp.data),
      subFive: newArrFive(resp.data),
      subSix: newArrSix(resp.data),
      subSeven: newArrSeven(resp.data)
      }
      dispatch({
        type: GET_SUBCATEGORIES
      })

    })
  }
}
//post calls to database
function createNewPost(newListing){
  return dispatch => {
    axios.post("/", {newListing}).then(resp => {
      dispatch({
        type: NEW_LISTING,
        payload: resp.data
      })
    })
  }
}
function testPost(){
  return dispatch => {
    axios.post("/test").then(resp => {
      dispatch({
        type: TEST_POST
      })
    })
  }
}
var subOne = []
function newArr(oldArr){
  for (let i =0; i < 15; i++){
    subOne.push(oldArr[i])
  }
  console.log(subOne,'subbers')
}
//sorting the subcategories
var subTwo = []
function newArrTwo(oldArr){
  for( let i =15; i < 25; i++){
    subTwo.push(oldArr[i])
  }
}
var subThree = []
function newArrThree(oldArr){
  for ( let i = 25; i <58; i++){
    subThree.push(oldArr[i])
  }
}
var subFour = []
function newArrFour(oldArr){
  for ( let i = 58; i <95; i++){
    subFour.push(oldArr[i])
  }
}
var subFive = []
function newArrFive(oldArr){
  for ( let i = 95; i <115; i++){
    subFive.push(oldArr[i])
  }
}
var subSix = []
function newArrSix(oldArr){
  for ( let i = 115; i <122; i++){
    subSix.push(oldArr[i])
  }
}
var subSeven = []
function newArrSeven(oldArr){
  for ( let i = 122; i <130; i++){
    subSeven.push(oldArr[i])
  }
}
// custom hooks
 export function useCategories() {
  const categories = useSelector(appState => appState.userState.categories)
  const newListing = useSelector(appState => appState.userState.newListing)
  const dispatch = useDispatch()

  const NewPost = (newListing)=>dispatch(createNewPost(newListing))
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getSubCategories())
    dispatch(testPost())
  }, [])

  return { newListing, categories, NewPost,subOne, subTwo, subThree,subFour,subFive,subSix,subSeven }
}