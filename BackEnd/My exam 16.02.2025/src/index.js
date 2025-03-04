import express from 'express';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';

import routes from './routes.js';
import { auth } from './middlewares/authMiddleware.js';
import { tempData } from './middlewares/tempDataMiddleware.js';

const app = express();

// DB Setup
try {
    //!!!!! CHANGE DB NAME!!
    const uri = 'mongodb://localhost:27017/PowerOfNature'
    await mongoose.connect(uri);

    console.log('DB Connected');
} catch (error) {
    console.error('Cannot connect to DB!');
    console.log(err.message);
}

// Handlebars setup 
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    },
    helpers: {
        isTypeSelected: (optionValue, disasterType) => optionValue === disasterType
    }
}));


app.set('view engine', 'hbs');
app.set('views', './src/views');

// Express setup
app.use(express.static('src/public/'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
    secret: 'U434YGGYDGSYUAAGJ43434#/#T(RHY)@TYRTY',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true }
}));
app.use(auth);
app.use(tempData);
app.use(routes);

// Start express
app.listen(3000, () => console.log('Server is listenig on http://localhost:3000...'));
