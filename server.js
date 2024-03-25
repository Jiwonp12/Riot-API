import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import axios from 'axios';
import cors from 'cors'


const key = process.env.KEY
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/riot-tag', async (req, res) => {
  const { summonerName, tag } = req.query;
  try {
    const response = await axios.get(`https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${summonerName}/${tag}?api_key=${key}`);
    res.send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

app.get('/riot-puuid', async (req, res) => {
    const { puuid} = req.query;
    try {
      const response = await axios.get(`https://asia.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}?api_key=${key}`);
      res.send(response.data);
    } catch (error) {
      res.status(error.response.status).send(error.response.data);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });