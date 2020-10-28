//Budget API
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const budgetModel = require('./models/budget_schema')
let url = 'mongodb://localhost:27017/budget';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static('public'));

app.get('/budget', (req, res) => {
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        budgetModel.find({})
            .then((data) => {
                console.log(data)
                res.json(data);
                mongoose.connection.close();
            })
            .catch((connectionError) => {
                console.log(connectionError);
            });
    })
    .catch((connectionError) => {
        console.log(connectionError)
    });
});

app.put('/addBudget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
         newBudget = {
             title: req.body.title,
             value: req.body.value,
             color: req.body.color,
         }
        budgetModel.insertMany(newBudget)
            .then((data) => {
            res.json(data);
            mongoose.connection.close();
        })
        .catch((connectionError) => {
            console.log(connectionError)
        });
    })
        .catch((connectionError) => {
            console.log(connectionError)
    });
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});