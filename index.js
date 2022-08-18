const express = require("express");
const cors = require("cors");
const router = express();
router.set("port", process.env.PORT || 4864);
router.use(express.json());
router.use(cors());

const productRoute = require("./Routes/Route");
router.get("/", (req, res) => {
  res.json({ msg: "ur mom" });
});

router.get("/", (req, res) => {
  res.sendFile(__dirname + "./" + "index.html");
});
router.use("/product", productRoute);
router.listen(router.get("port"), () => {
  console.log("server running");
});
// static
router.use(express.static("public"));
