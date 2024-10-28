const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const port = 3500;
const router = require("./Router/router");
const app = express();

// Set up multer for file uploads
const upload = multer({ dest: "uploads/" }); // Specify the directory for file uploads

app.use(express.json());
app.use(morgan("tiny"));
app.disable("x-powered-by");

// CORS configuration
app.use(
  cors({
    origin: "*", // Allow requests from this origin
    credentials: true, // Allow cookies and credentials (if needed)
  })
);

// Define the prediction endpoint
app.post("/api/predict", upload.single("file"), (req, res) => {
  // Check if a file was uploaded
  if (!req.file) {
    return res.status(422).json({ error: "No file uploaded" });
  }

  // Further processing of the file...
  // For example, you might want to do some image processing here.

  return res.json({ msg: "File uploaded successfully", file: req.file });
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
