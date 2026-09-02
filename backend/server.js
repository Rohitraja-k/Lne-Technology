const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("LNE Technologies Backend is running");
});


app.post("/api/enquiries", (req, res) => {

  const {
    fullName,
    company,
    email,
    phone,
    enquiryType,
    project,
    message
  } = req.body;

  console.log("New enquiry received:");
  console.log({
    fullName,
    company,
    email,
    phone,
    enquiryType,
    project,
    message
  });

  res.status(200).json({
    success: true,
    message: "Enquiry received successfully"
  });

});

app.listen(5000, () => {
  console.log("LNE Technologies backend running on port 5000");
});
