import express from "express"
import morgan from "morgan"
import quizRoutes from "./routes/quizRoutes.js"

const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.use("/api/quizzes", quizRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Server is running on port 5000")
})
