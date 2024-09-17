
const app = require('./infrastructure/server')

const PORT = process.env.PORT || 3000;

app.server.listen(PORT, () => console.log(`App started at ${PORT}`));