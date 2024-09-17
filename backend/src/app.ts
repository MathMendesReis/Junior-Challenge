import express from 'express'
import routes from './infra/http/controllers/routes'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'

const swaggerDocument = require('./swagger.json');

export const app = express()
app.get('/', (req: express.Request, res: express.Response) => {
  res.json({ status: 'API is running on /api' });
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json())
app.use(cors());
app.use(routes);




