import { Router } from 'express';
import createRingController from './ring/create-ring-controller'
import listAllRingController from './ring/list-rings-controller'
import deleteRingByIdController from './ring/delete-ring-by-id-controller'
import updateRingController from './ring/update-ring-controller'



const api = Router()
  .use(createRingController)
  .use(deleteRingByIdController)
  .use(updateRingController)
  .use(listAllRingController);

export default Router().use('/api', api);