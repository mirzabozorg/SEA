const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({
        status: 200,
        success: true,
        result: 'OK',
        message: 'If you see this, You did it guys!',
        data: null
    })
})

app.listen(3000, () => {
    console.log('App running on http://localhost:3000')
})