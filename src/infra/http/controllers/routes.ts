import { Router } from 'express';
import createRingController from './ring/create-ring-controller'


const api = Router()
  .use(createRingController);

export default Router().use('/api', api);