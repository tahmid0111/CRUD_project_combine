const app = require('./main')

// imported from .env file
require('dotenv').config()
const PORT = process.env.PORT || 8080


app.listen(PORT)