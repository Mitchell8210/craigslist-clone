import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_CATEGORIES = "users/GET_USERS"
const NEW_LISTING = "users/NEW_LISTING"
const GET_SUBCATEGORIES= "users/GET_SUBCATEGORIES"
const GET_LISTINGS ="GET_LISTINGS"
const DISPLAY_DATA="DISPLAY_DATA"
const GET_SINGLE_LISTINGS= 'GET_SINGLE_LISTINGS'
// initial state
const initialState = {
  categories: [],
  newListing: [],
  singleListing: [],
  subCategories: [],
  subListings:[],
  allData:[]
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
    case DISPLAY_DATA:
      return {...state, allData: action.payload }
    case GET_LISTINGS:
      return {...state, subListings: action.payload}
    case GET_SINGLE_LISTINGS:
      return {...state, singleListing: action.payload}
    default:
      return state
  }
}

// action creators

//get calls to database
const getCategories = () => {
  return dispatch => {
    axios.get("/users/categories").then(resp => {
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
      dispatch({
        type: DISPLAY_DATA,
        payload: resp.data
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
        type: GET_SUBCATEGORIES,
        payload: newarrays
      })

    })
  }
}
//post calls to database
function createNewPost(category_name, category_id, title, location,description){
  return dispatch => {
    axios.post("/users",{category_name,category_id,title,location,description}).then(resp => {
      dispatch({
        type: NEW_LISTING,
        payload: resp.data
      })
    })
  }
}
export function getListings(id){
  return dispatch => {
    axios.get("/users/listings/"+id).then(resp => {
      dispatch({
        type: GET_LISTINGS,
        payload: resp.data
      })
    })
  }
}
export function getSingleListings(id){
  return dispatch => {
    axios.get("/users/listings/single/"+id).then(resp => {
      const item = {
        catName: resp.data[0].category_name,
        title: resp.data[0].title,
        location: resp.data[0].location,
        description: resp.data[0].description
      }
      dispatch({
        type: GET_SINGLE_LISTINGS,
        payload: item
      })
    })
  }
}

// function newArr(arr){
//   for( let i = 0; i < arr.length; i++){
//     if(arr[i].parent_id === 1){
//       subOne.push(arr[i])
//     }
//     else if(arr[i].parent_id ===2){
//       subTwo.push(arr[i])
//     }
//     else if(arr[i].parent_id ===3){
//       subThree.push(arr[i])
//     }
//     else if(arr[i].parent_id ===4){
//       subFour.push(arr[i])
//     }
//     else if(arr[i].parent_id === 5){
//       subFive.push(arr[i])
//     }
//     else if(arr[i].parent_id=== 122){
//       subSix.push(arr[i])
//     }
//     else if(arr[i].parent_id === 123){
//       subSeven.push(arr[i])
//     }
//   }
// }


var subOne = []
function newArr(oldArr){
  for (let i =0; i < 15; i++){
    subOne.push(oldArr[i])
  }
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
export function useSingleListings(id){
  const dispatch = useDispatch()
  const singleListing = useSelector(appState=> appState.userState.singleListing)
  useEffect(()=>{
    dispatch(getSingleListings(id))
  },[id])
  return {singleListing}
}


export function useListings(id){
  const dispatch = useDispatch()
  const subListings = useSelector(appState=>appState.userState.subListings)
  const listing = (id)=> dispatch(getListings(id))
  
  useEffect(() => {
    dispatch(getListings(id))
  }, [id])
  
  return { subListings, listing}


}

 export function useCategories() {
    const categories = useSelector(appState => appState.userState.categories)
    const newListing = useSelector(appState => appState.userState.newListing)
    const subCategories = useSelector(appState => appState.userState.subCategories)
    const dispatch = useDispatch()

    const NewPost = (category_name, category_id,title, location, description)=>dispatch(createNewPost(category_name, category_id,title, location, description))
    useEffect(() => {
      dispatch(getCategories())
      dispatch(getSubCategories())
    }, [])

    return { newListing, categories, NewPost,subOne, subTwo, subThree,subFour,subFive,subSix,subSeven, subCategories }
}
