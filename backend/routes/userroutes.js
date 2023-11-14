const router = require("express").Router();
const UserModel = require("../models/Users");

//posting all user data to db
router.post("/createUser", async (req, res) => {
  let data = await UserModel.create(req.body);
  res.json(data);
});

router.get("/getUser", async (req, res) => {
  let data = await UserModel.find();
  res.json(data);
});

router.get("/getUser/:id", async (req, res) => {
  const id = req.params.id;

  let targetData = await UserModel.findById(id);
  res.json(targetData);
});

router.put("/updateUser/:id", async (req, res) => {
  const id = req.params.id;
  let updateData = await UserModel.findByIdAndUpdate(id, req.body);
  console.log(updateData);
  res.send(updateData);
});

router.delete("/deleteUser/:id", async (req, res) => {
  const id = req.params.id;
  let updateData = await UserModel.findByIdAndRemove(id, req.body);
  res.json(updateData);
});
module.exports = router;
