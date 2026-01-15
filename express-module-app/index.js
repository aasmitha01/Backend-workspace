import express from "express";
import os from "os";
import dns from "dns";
import { readFileData } from "./read.js";

const app = express();
const PORT = 3000;

/* ---------------- TEST ROUTE ---------------- */
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

/* ---------------- READ FILE ROUTE ---------------- */
app.get("/readfile", (req, res) => {
  const data = readFileData();

  if (!data) {
    return res.status(500).send("Error reading file");
  }

  res.send(data);
});

/* ---------------- SYSTEM DETAILS ROUTE ---------------- */
app.get("/systemdetails", (req, res) => {
  const totalMemory = (os.totalmem() / (1024 ** 3)).toFixed(2);
  const freeMemory = (os.freemem() / (1024 ** 3)).toFixed(2);
  const cpuInfo = os.cpus();

  res.json({
    platform: os.platform(),
    totalMemory: `${totalMemory} GB`,
    freeMemory: `${freeMemory} GB`,
    cpuModel: cpuInfo[0].model,
    cpuCores: cpuInfo.length   // Bonus
  });
});

/* ---------------- GET IP ROUTE ---------------- */
app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
    if (err) {
      return res.status(500).json({ error: "DNS lookup failed" });
    }

    res.json({
      hostname: "masaischool.com",
      ipAddresses: addresses.map(addr => ({
        address: addr.address,
        family: addr.family
      }))
    });
  });
});

/* ---------------- START SERVER ---------------- */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
