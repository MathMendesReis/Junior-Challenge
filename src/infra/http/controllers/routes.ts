import { Router } from 'express';
import createRingController from './ring/create-ring-controller'
import listAllRingController from './ring/list-rings-controller'
import deleteRingByIdController from './ring/delete-ring-by-id-controller'





const api = Router()
  .use(createRingController)
  .use(deleteRingByIdController)
  .use(listAllRingController);

export default Router().use('/api', api);