import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const authController = async (req, res) => {
  try {
    const loginHtmlPath = path.join(__dirname, "../static/login.html");
    const html = await fs.readFile(loginHtmlPath, "utf8");
    res.send(html);
  } catch (error) {
    console.error("Error reading login.html:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default authController;
