import "dotenv/config";
import express from "express";
import cors from "cors";
import sosRoutes from "./routes/sosRoutes.js";
import broadcastRoutes from "./routes/broadcastRoutes.js";
import storeTokenRoutes from "./routes/storeTokenRoutes.js";
import dashboardRoutes from "./routes/dashboardRoute.js";
import authRoutes from "./routes/authRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import authMiddleware from "./middlewares/authMiddleware.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(morgan('combined'));

// Mount API routes
app.use("/api", sosRoutes);
app.use("/api", storeTokenRoutes);
app.use("/api", broadcastRoutes);

// Authentication routes
app.use("/api", authRoutes);
app.use("/api", loginRoutes); // loginRoute handles POST /login

app.use("/dashboard", authMiddleware, dashboardRoutes);

app.get("/", (req, res) => {
    res.redirect("/dashboard");
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
