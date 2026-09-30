const express = require("express");
const connectDB = require("./config/database");
const config = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// ✅ Trust proxy for Render
app.set("trust proxy", 1);

const PORT = process.env.PORT || config.port || 8000;
connectDB();

// ✅ CORS with multiple Vercel URLs allowed
app.use(cors({
    credentials: true,
    origin: [
        'http://localhost:5173',
        'https://restro-plum-six.vercel.app'
    ].filter(Boolean)
}));

app.use(express.json());
app.use(cookieParser());

// Root Endpoint
app.get("/", (req, res) => {
    res.json({ message: "Hello from POS Server!" });
});

// Other Endpoints
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/order", require("./routes/orderRoute"));
app.use("/api/table", require("./routes/tableRoute"));
app.use("/api/payment", require("./routes/paymentRoute"));

// Global Error Handler
app.use(globalErrorHandler);

// Server
app.listen(PORT, () => {
    console.log(`☑️  POS Server is listening on port ${PORT}`);
});