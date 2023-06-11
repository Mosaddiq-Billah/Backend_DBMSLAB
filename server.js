const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/index");
app.use(express.json());

app.use("/api", router);

app.get("/test", (req,res) => {
    res.send("server js is working");
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
