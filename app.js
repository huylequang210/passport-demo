const express = require('express');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

// Passport config
require('./config/passport')(passport);

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Express Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variable
app.use((req,res,next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next(); 
});

mongoose.connect("mongodb+srv://bon123:bon123@cluster0-szvzj.mongodb.net/passport?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('mongodb connected...'))
.catch(error => console.log(error));

app.use(express.static('public'));
app.use(express.static('files'))


app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use('/', require('./route/index'));
app.use('/users', require('./route/users'));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});