const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const stripeRoutes = require('./routes/stripeRoutes');
const sequelize = require('./utils/sequelizeConnection')
const photographerRouter = require('./routes/PhotographerRoute')
const accountsRouter = require('./routes/accountsRoute');
const app = express();
const port = process.env.PORT || 3000;
var cors = require("cors");
const authenticateToken = require('./MiddleWare/authenticate')
const ua = require('universal-analytics');

// Initialize Google Analytics
const visitor = ua('418281512');
visitor.event('Category', 'Action').send();

// Send a pageview
visitor.pageview('/api').send();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/user', userRoutes);
app.use('/api/stripe', stripeRoutes);
app.use('/api/photographer',photographerRouter)
app.get('/', (req, res, next) => {
  res.sendStatus(200)
})
app.use(authenticateToken);
app.use('/api/account/settings', accountsRouter);
app.use((error, req, res, next) => {
  console.log(error)
   if (error && error.name === "SequelizeUniqueConstraintError") {
     // Handle the duplicate entry error
     return res
       .status(409)
       .json({ error: "Duplicate entry error", message:error?.errors[0].message });
   }
  return res.status(500).json(error);
})
sequelize.sync().then(() => {
  console.log("database Connected");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error) => {
  console.log("Error while connecting to database",error);
})

