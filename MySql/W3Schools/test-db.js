var db = require("mysql");


var con = db.createConnection({
    host: "localhost",
    user: "...",
    password: process.env.DB_PASSWORD,
});

con.connect((err) => {
    if(err) throw err;
    console.log("conectado!");
})

// Não farei login no mysql...