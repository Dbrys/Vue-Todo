"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const router = express_1.default.Router();
const port = 3000;
app.use(cors_1.default());
router.get("/", (req, res) => {
    res.send("Hell Todo App From Dillon Brys!");
});
app.post("/", (req, res) => {
    // tslint:disable-next-line:no-console
    console.log(req);
    res.send("Item added");
});
app.use("/todos", router);
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map