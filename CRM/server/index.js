import "dotenv/config";
import { startServer } from "./server.js";
import { connectDB } from "./db/db.js";

await connectDB();
startServer();
