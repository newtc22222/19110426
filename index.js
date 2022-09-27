const express = require('express');

const app = express();
const PORT = 5000;

const indexRouter = require('./routes/index-routes.js');
const mssvRouter = require('./routes/mssv-routes.js');
const messageRouter = require('./routes/message-routes.js');

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/', indexRouter);
app.use('/19110426', mssvRouter);
app.use('/message', messageRouter);

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));