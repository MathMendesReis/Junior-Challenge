import express from 'express'
import routes from './infra/http/controllers/routes'


export const app = express()
app.get('/', (req: express.Request, res: express.Response) => {
  res.json({ status: 'API is running on /api' });
});
app.use(express.json())
app.use(routes);



