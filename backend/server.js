const fs = require("fs");
const fetchFiles = async () => {
  // path for searching directory
  const files = await fs.readdirSync(`C:/Users/harshit/Desktop/ASH`);
  return files;
};

const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const { filename } = req.query;
  const files = await fetchFiles();
  if (files.includes(filename, 0)) {
    // path for output file
    const prev = fs.readFileSync(`C:/Users/harshit/Desktop/output.txt`, {
      encoding: "utf-8",
    });

    // path for output file
    fs.writeFileSync(
      `C:/Users/harshit/Desktop/output.txt`,
      prev + filename + "\n",
      {
        encoding: "utf-8",
      }
    );
    return res.send("available");
  } else {
    return res.send("file not found");
  }
});

app.listen(1234, () => {
  console.log("server running");
});
