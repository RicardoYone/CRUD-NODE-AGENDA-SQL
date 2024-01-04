const express = require("express");
const mysql = require("mysql");
const morgan = require("morgan");
const path = require("path");
const myConecction = require("express-myconnection");

const app = express();

const customerRoutes = require("./routes/customer");

//SETTINGS
const port = process.env.PORT || 3000;

//VIEWS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//MIDDLEWARES
app.use(morgan("dev"));
app.use(
  myConecction(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "root",
      port: 3306,
      database: "crudnodejsmysql",
    },
    "single"
  )
);
app.use(express.urlencoded({ extended: false }));

//ROUTES
app.use("/", customerRoutes);

//STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

//STARTING THE SERVER
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
