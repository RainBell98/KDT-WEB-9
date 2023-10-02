const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const db = require('./models/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('dotenv').config();

//CORS오류방지
app.use(cors());

app.use(express.urlencoded({ extended: true }));

//router 분리
const router = require('./routes');
app.use('/', router);

//오류처리
app.use('*', (req, res) => {
  res.status(404).render('404');
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
});
