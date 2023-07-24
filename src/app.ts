import express from "express";
import { errorHandler } from "./middlewares/errorHandler.middleware";

const app = express();
app.use(express.json());

/* app.use("/login",);
app.use("/user",);
app.use("/track",);
app.use("/album",);
app.use("/artist",); */

app.use(errorHandler);
export default app;