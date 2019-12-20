const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const nocache = require('nocache');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const sendGrid = require('@sendgrid/mail');

require('./configs/database');

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(nocache());

// Set "Access-Control-Allow-Origin" header
app.use(
	cors({
		origin: (origin, cb) => {
			cb(null, process.env.NODE_ENV !== 'production');
		},
		optionsSuccessStatus: 200,
		credentials: true
	})
);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set the public folder to "~/client/build/"
// Example: http://localhost:5000/favicon.ico => Display "~/client/build/favicon.ico"
app.use(express.static(path.join(__dirname, '../client/build')));

// Enable authentication using session + passport
app.use(
	session({
		secret: process.env.SESSION_SECRET || 'irongenerator',
		resave: true,
		saveUninitialized: true,
		store: new MongoStore({ mongooseConnection: mongoose.connection })
	})
);
require('./passport')(app);

//SendGrid emailing
app.post('/api/sendMail', (req, res, next) => {
	// sendGrid.setApiKey('');
	// using Twilio SendGrid's v3 Node.js Library
	// https://github.com/sendgrid/sendgrid-nodejs
	sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
		to: 'vitor.c.tomazzi@gmail.com',
		from: req.body.email,
		subject: 'Contact Request from Vitor[Codes]',
		text: req.body.message
	};
	sendGrid
		.send(msg)
		.then((result) => {
			res.status(200).json({
				success: true
			});
		})
		.catch((err) => {
			console.log('error', err);
			res.status(401).json({
				success: false
			});
		});
});

// app.use('/api', require('./routes/index'));
// app.use('/api', require('./routes/auth'));
// app.use('/api/countries', require('./routes/countries'));

// For any routes that starts with "/api", catch 404 and forward to error handler
app.use('/api/*', (req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// For any other routes, redirect to the index.html file of React
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Error handler
app.use((err, req, res, next) => {
	console.error('----- An error happened -----');
	console.error(err);

	// only render if the error ocurred before sending the response
	if (!res.headersSent) {
		res.status(err.status || 500);

		// A limited amount of information sent in production
		if (process.env.NODE_ENV === 'production') res.json(err);
		else res.json(JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err))));
	}
});

module.exports = app;
