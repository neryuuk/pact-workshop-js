const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

app.use(cors());
app.use(bodyParser());
app.use(routes);

app.listen(
  process.env.PORT,
  () => {
    console.log(`## CI Simulator ## Broker webhook is listening on port ${process.env.PORT}...`)
  }
);
