const express = require('express');
require('dotenv').config();
const { configuration, OpenAIApo } = require('openai');

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server listening on port ${port}`));
