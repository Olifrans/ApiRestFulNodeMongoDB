//config
const express = require("express");
const app = express();

//ler json / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//retas endpoint
app.get("/", (req, res) => {
    //mostr

    res.json({message: 'Oi NodeJs'})

});

// porta de entrega
app.listen(3000);
