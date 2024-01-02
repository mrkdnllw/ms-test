const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', async(req, res) =>{
    try{
        const service2Response = await axios.get('http://localhost:3001');
        const service3Response = await axios.get('http://localhost:3002');
        const service4Response = await axios.get('http://localhost:3003');
        const service5Response = await axios.get('http://localhost:3004');

        res.json({

            service2Response: service2Response.data,
            service3Response: service3Response.data,
            service4Response: service4Response.data,
            service5Response: service5Response.data
        });

    }
    catch(error){
        res.status(500).json({error: error.message});

    }


});

app.listen(port, () => {

        console.log('Gateway service running on port ${port}');

})