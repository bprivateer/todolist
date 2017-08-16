const express = require("express");
const router = express.Router();

let list = [];

router.get("/", function(req, res){
  res.render("view");
})

router.post("/tasks", function(req, res){
  let task = req.body.tasks
  list.push(task);
  console.log(list);
  // req.checkBody("tasks", "cannot be empty").notEmpty();
  // let errors = req.getValidationResult();
  // let messages = [];
  // let task = req.body.tasks
  // list.push(task);
  //
  // errors.then(function(result) {
  // result.array().forEach(function(error) {
  //   messages.push(error.msg);
  // });
  //
  // let info = {
  //   errors: messages,
  //   names:list,
  //
  // };

  res.render("view", {lists: list});
});


  // res.render("view", info);
// });

router.post("/tasks", function(req, res){
  res.redirect("view")
});





module.exports = router;
