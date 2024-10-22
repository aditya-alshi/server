const express = require('express');
const app = express();
const cors = require('cors')
const { emailList, emailBodies } = require('./data')

app.use(cors());

app.get('/', (req, res) => {
    const page = parseInt(req.query.page);
    const id = parseInt(req.query.id);
    
    if (id) {
        const emailBody = emailBodies.find(eb => eb.id === id);
        return res.status(200).json(emailBody);
    }

    if (page && page === 1) {
        return res.status(200).json({
            list: emailList.slice(0, 10)
        });
    } else if (page && page === 2) {
        return res.status(200).json({
            list: emailList.slice(10)
        });
    }

    return res.status(200).json({
        list: emailList
    });;
});


app.listen(process.env.PORT || 3000 , () => {
    console.log("listening at port : ");
})