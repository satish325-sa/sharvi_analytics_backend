const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

// Middleware to parse JSON requests
app.use(bodyParser.json());
var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));
// Import and use the router for UI routes
app.use('/api/ui', require('./app/routes/routes.js'));

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

