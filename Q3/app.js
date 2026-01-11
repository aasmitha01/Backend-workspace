// Import built-in modules using ES Modules
import os from "os";
import fs from "fs";

// --------------------
// Part A – OS Module
// --------------------

try {
  const freeMemory = os.freemem();
  const cpuCores = os.cpus().length;

  console.log("Free Memory:", freeMemory);
  console.log("Total CPU Cores:", cpuCores);
} catch (error) {
  console.error("OS Module Error:", error.message);
}

// --------------------
// Part B – FS Module
// --------------------

// 1. Create data.txt
fs.writeFile("data.txt", "Hello World", (err) => {
  if (err) {
    console.error("Error creating data.txt:", err.message);
    return;
  }

  console.log("data.txt created");

  // 2. Create Readme.md
  fs.writeFile(
    "Readme.md",
    "## This is first line in Readme",
    (err) => {
      if (err) {
        console.error("Error creating Readme.md:", err.message);
        return;
      }

      console.log("Readme.md created");

      // 3. Read data.txt
      fs.readFile("data.txt", "utf8", (err, data) => {
        if (err) {
          console.error("Error reading data.txt:", err.message);
          return;
        }

        console.log("Content of data.txt:");
        console.log(data);

        // 4. Append second line
        fs.appendFile(
          "data.txt",
          "\nThis is second line",
          (err) => {
            if (err) {
              console.error("Error appending to data.txt:", err.message);
              return;
            }

            console.log("Second line appended");

            // 5. Delete Readme.md
            fs.unlink("Readme.md", (err) => {
              if (err) {
                console.error("Error deleting Readme.md:", err.message);
                return;
              }

              console.log("Readme.md deleted");
            });
          }
        );
      });
    }
  );
});
