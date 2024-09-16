const app = require('./infrastructure/server')

app.server.listen(3000, () => console.log('App started'))