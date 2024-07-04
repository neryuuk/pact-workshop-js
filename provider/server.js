const app = require('express')();
const cors = require('cors');
const routes = require('./product/product.routes');
const authMiddleware = require('./middleware/auth.middleware');

const init = () => {
  app.use(cors());
  app.use(routes);
  app.use(authMiddleware);
  return app.listen(
    process.env.PORT,
    () => console.log(`Provider API listening on port ${process.env.PORT}...`)
  );
};

init();
