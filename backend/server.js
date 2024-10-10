import express from "express";

const app = express();

app.get("/", (req, res)=> {
    res.send("server is working")
})

app.listen(5000, () => {
  console.log("im server running http://localhost:5000/ here");
});
