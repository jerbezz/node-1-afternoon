const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const messages = require('./controllers/messages_controller')


app.use(bodyParser.json())
app.use( express.static('public/build' ) );

app.post('/api/messages', messages.create)
app.get('/api/messages', messages.read)
app.put('/api/messages/:id', messages.update)
app.delete('/api/messages/:id', messages.delete)



const PORT = 3001
app.listen(PORT, () => console.log(`listening on ${PORT}`))