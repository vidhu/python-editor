import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Docker from 'dockerode';

const app = express();
app.use(cors());
app.use(bodyParser.json());


const docker1 = new Docker({
  socketPath: 'npipe:////./pipe/docker_engine',
});

app.get('/', async (req, res) => {
  const info = await docker1.info();
  res.json({ success: info });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
