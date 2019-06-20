const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': '2',
            'image': 'https://placeimg.com/64/64/8',
            'name': '郑彩媛'
        },
        {
            'id': '3',
            'image': 'https://placeimg.com/64/64/6',
            'name': '金雪熙'
        }
    ]);

});

app.listen(port, () => console.log(`Listening on port ${port}`));