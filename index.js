import express from "express";
import db from "./db/index.js";
import { merchantRoute, productRoute, authRoute } from "./routes/index.js";

const PORT = 3000;
const app = express();

app.use(express.json());

app.use("/merchant", merchantRoute);
app.use("/product", productRoute);
app.use("/product", authRoute);

app.listen(PORT, () => {
  db.connect((err) => {
    if (err) console.log(err);

    console.log("MYSQL connected");
  });

  console.log("API listening in PORT", PORT);
});
