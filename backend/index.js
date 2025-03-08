require('dotenv').config();
const express = require('express');
const app = express();
const {port} = process.env;
const routers = require('./server/routers/routers');
const cors = require('cors');
app.use(cors());
// Routs
app.use(express.json());
app.use(routers);



// DB Connections
require('./server/config/db')
const connectDb = require('./server/config/db');
connectDb();

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});

