const router = require("express").Router()
const db = require('../db')


// listening for calls to database
router.get("/", (req, res, next) => {
  const sql = `SELECT name,slug, id, parent_id
  FROM categories c
WHERE parent_id IS NOT NULL;`
  db.query(sql, (err, results, fields)=>{
    res.json(results) 
  })
})
router.post("/", (req, res, next)=>{
  const sql = `INSERT INTO listings (name, title, location, description) VALUES(name, title, location, description)` 

  db.query(sql, (err,results, fields)=>{
    console.log(results)
    res.json(results)
  }) 
}) 
module.exports = router
