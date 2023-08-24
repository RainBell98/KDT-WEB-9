const express = require('express');
const app = express();
const port = 8000;
const db = require('./models/index')

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
const userRouter = require('./routes/user');
app.use('/user', userRouter);

//404
app.use('*', (req, res) => {
    res.render('404');
});

db.sequelize.sync({force:false}).then(()=>{
    app.listen(port,()=>{
        console.log(`http://localhost:${port}`)
    })
})
