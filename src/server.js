import express from 'express';
import axios from 'axios';
import cors from 'cors'
const key = import.meta.env.VITE_RIOT_API;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/riot-proxy', async (req, res) => {
  const { summonerName, tag } = req.query;
  try {
    const response = await axios.get(`https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${summonerName}/KR${tag}?api_key=${key}`);
    res.send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});