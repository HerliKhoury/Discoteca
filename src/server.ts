import { MyDataSource } from "./data-source";
import app from "./app";

MyDataSource.initialize()
    .then(() => {
        console.log("Server is running");
        app.listen(3000, () => {
            console.log("Server executing on port 3000");
        });
    }).catch((err) => {
        console.error("Data Source initialization failiure", err);
    });