const express = require('express');
const cors = require('cors');
const app = express();

let corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:3000']
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json({ message: "Login, signUp & MFA NextJS project." });
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is listening to ${port}.`);
});