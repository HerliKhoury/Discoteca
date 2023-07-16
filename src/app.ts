import express from "express";

const app = express();
app.use(express.json());

/* app.use("/login",);
app.use("/user",);
app.use("/track",);
app.use("/album",);
app.use("/artist",); */


export default app;