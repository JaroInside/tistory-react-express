import express from 'express';
import api from './routes';

const app = express();
const port = 3100;

app.use('/', express.static(__dirname + '/../../build'));
app.use('/api', api);

app.listen(port, () => {
    console.log('Server is listening on port', port);
});
