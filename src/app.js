const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const users = require("./routes/Users.routes");
const usersRoutes = require("./routes/Users.routes")

const app = express()

app.use(cors());
app.use(express.json());
app.use(usersRoutes)
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1/users", users);

app.listen(3333, () => console.log('Running at 3333'))