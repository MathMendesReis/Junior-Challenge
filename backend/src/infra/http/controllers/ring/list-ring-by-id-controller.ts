import { NextFunction, Request, Response, Router } from 'express';
import { MakeFindRingById } from '../../../../domain/ring/application/factories/make-find-ring-by-id-use-case';

const router = Router()
router.get('/ring/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params
    const result = await MakeFindRingById().execute(id)
    res.status(200).json(result);
  } catch (error) {
      res.status(400).json({message:error});
  }

})
export default router