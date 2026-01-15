import fs from "fs";

export function readFileData() {
  try {
    const data = fs.readFileSync("Data.txt", "utf-8");
    return data;
  } catch (error) {
    return null;
  }
}
