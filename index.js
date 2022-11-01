const express = require('express');
const hbs = require('hbs'); 
const path = require('path');

const app = express();
const PORT = 5000;

const indexRouter = require('./routes/index-routes.js');
const mssvRouter = require('./routes/mssv-routes.js');
const messageRouter = require('./routes/message-routes.js');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// app.use('/', express.static(path.join(__dirname, 'public')));


app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/home', (req, res) => {
    res.render('index',  {
        title: "Home",
        content: "Hello from index",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F100791a048be5d7bab568720fba1f79c%2Ftenor.gif%3Fitemid%3D16605201&f=1&nofb=1&ipt=b1f11bc8bfb45a09ae7ba673510f47c32713d00f61595027acf7abd05851f54e&ipo=images"
    });
});
app.use('/', indexRouter);
app.use('/19110426', mssvRouter);
app.use('/message', messageRouter);

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));