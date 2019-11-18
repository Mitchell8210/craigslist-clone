const router = require("express").Router()
const db = require('../db')


// listening for calls to database
router.get("/something", (req, res, next) => {
  const sql = `SELECT name from categories`
  db.query(sql, (err, results, fields)=>{
    res.json(results)
  })
})

router.post("/", (req, res, next)=>{
  const category_name = req.body.category_name
  const category_id = req.body.category_id
  const title = req.body.title
  const location = req.body.location
  const description = req.body.description
  
  const sql = `INSERT INTO 
  listings (category_name, category_id, title, location, description) 
  VALUES('${category_name}', '${category_id}', '${title}', '${location}', '${description}')` 

  db.query(sql, (err,results, fields)=>{
    console.log(results)
    res.json(results)
  }) 
})
router.post("/test", (req,res,next)=>{
  const sql =`INSERT INTO listings (category_name, category_id, title, location, description)
  VALUES('test', '4', 'bitch', 'your moms house', 'shove it up your but')`

  db.query(sql, (err, results, fields)=>{
    console.log(results)
    res.json(results)
  })
} )
module.exports = router

