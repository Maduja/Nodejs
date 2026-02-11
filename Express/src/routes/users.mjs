import { Router } from "express";
import { getUserIndexById } from "../utils/middlewares.mjs";
import { users } from "../utils/constants.mjs";
import { createUserValidationSchema } from "../utils/validationSchemas.mjs";
import { validationResult, matchedData, checkSchema } from "express-validator";
import { User } from "../mongoose/schemas/user.mjs";

const router = Router();

router.get("/api/users", (req, res) => {
  console.log(req.signedCookies);
  if(req.signedCookies.user && req.signedCookies.user ==="Admin"){
    const {query: { filter, value },} = req;
    console.log(filter, value);
    if (filter && value) {
        return res.send(users.filter((user) => user[filter].toLowerCase().includes(value)));
    }
    return res.send(users);
  }else{
    return res.send({msg:"you are not an Admin"})
  }
  
});

router.get("/api/users/:id", (req, res) => {
  //console.log(req.params)
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(404).send({ msg: "invalid" });
  }
  const user = users.find((user) => user.id === id);
  if (user) {
    return res.send(user);
  }
  return res.status(404).send({ msg: "user not found" });
});

router.patch("/api/users/:id", getUserIndexById, (req, res) => {
  // const id = parseInt(req.params.id)
  // if(isNaN(id)){
  //     res.status(404).send({msg:"invalid"})
  // }
  // const userIndex = users.findIndex((user)=>user.id === id)
  // if(userIndex === -1){
  //     return res.status(404).send({msg:"user not found"})
  // }
  const userIndex = req.userIndex;
  const { body } = req;
  users[userIndex] = { ...users[userIndex], ...body };
  return res.sendStatus(200);
});

router.delete("/api/users/:id", getUserIndexById, (req, res) => {
  // const id = parseInt(req.params.id)
  // if(isNaN(id)){
  //     res.status(404).send({msg:"invalid"})
  // }
  // const userIndex = users.findIndex((user)=>user.id === id)
  // if(userIndex === -1){
  //     return res.status(404).send({msg:"user not found"})
  // }
  const userIndex = req.userIndex;
  console.log(userIndex);
  users.splice(userIndex, 1);
  res.sendStatus(200);
});

router.put("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(404).send({ msg: "invalid" });
  }
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return res.status(404).send({ msg: "user not found" });
  }
  const { body } = req;
  users[userIndex] = { id: id, ...body };
  return res.status(200).send({ msg: "user updated" });
});

router.post(
  "/api/users",
  checkSchema(createUserValidationSchema),
  async(req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).send({ error: result.array() });
    }
    const body = matchedData(req);
    // const newUser = { id: users[users.length - 1].id + 1, ...body };
    // users.push(newUser);

    const newUser = new User(body)
    try{
      const savedUser = await newUser.save()
      return res.status(201).send(savedUser);
    }catch(err){
      console.log(err)
      return res.status(400).send({msg:"user not saved"})
    }
  
});
export default router;
