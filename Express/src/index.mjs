import express from "express";
import { createUserValidationSchema } from "./utils/validationSchemas.mjs";
import { validationResult, matchedData, checkSchema } from "express-validator";
import userRouter from "./routes/users.mjs";
import { users } from "./utils/constants.mjs";
//import { getUserIndexById } from "../src/utils/middlewares.mjs";
import cookieParser from "cookie-parser";
import session from 'express-session'

const app = express();
app.use(express.json());
app.use(cookieParser("code io"));

app.use(session({
    secret:"romba secret",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:60000 * 60
    }
}))
app.use(userRouter);

const PORT = 3000;

app.get("/", (req, res) => {
  res.cookie("user", "Admin", {maxAge: 60000 * 60, signed: true });
  console.log(req.session)
  console.log(req.session.id)
  res.send({ msg: "Root" });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

//localhost:3000/users?filter=user_name&value=go
