const path = require('path');
const jsonServer = require("json-server");

// Create the server
const server = jsonServer.create();

// Set the JSON file as the database
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// Middleware for default settings
const middlewares = jsonServer.defaults();

// Use the middlewares
server.use(middlewares);

// Use the router
server.use(router);

// Start the server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running at http://localhost:${PORT}`);
});