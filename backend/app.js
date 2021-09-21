let express = require("express")
let mongoose = require("mongoose")
let cors = require("cors")
let bodyParser = require("body-parser")
var usersRouter = require("./routes/users");

const { request } = require("express");

let app = express();

app.use(cors());
app.use(bodyParser.json())

let url = "mongodb+srv://vinay:qiE3vLLir5yGJGsj@cluster0.t9vqg.mongodb.net/TestingAngular?retryWrites=true&w=majority";
mongoose.connect(url).then(res => console.log("Database connected")).catch(error => console.log(error));

// mongoose.connect(
//   url,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log("Connected");
//   },
//   (err) => {
//     // Catch any potential error
//     console.log("Unable to connect to MongoDB. Error: " + err);
//   }
// );


// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use("/api/admin", usersRouter);

app.use("/api/user", usersRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

app.listen(8080, () => console.log("Server running on port number 8080"))

