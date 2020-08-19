import express from "express";
import cors from "cors";

const app = express();
const router = express.Router();
const port = 3000;


app.use(cors());



router.get("/", (req, res) => {
    res.send("Hell Todo App From Dillon Brys!");
});

app.post("/", (req, res) => {
     // tslint:disable-next-line:no-console
    console.log(req)
    res.send("Item added");
});

app.use("/todos",router)

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});


