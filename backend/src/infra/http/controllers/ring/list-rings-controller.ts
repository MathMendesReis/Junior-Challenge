import { NextFunction, Request, Response, Router } from 'express';
import { makeListRingsUseCase } from '../../../../domain/ring/application/factories/make-list-rings-use-case';

const router = Router()
router.get('/ring', async (req: Request, res: Response, next: NextFunction) => {
  try {
     const result = await makeListRingsUseCase().execute()
    res.status(200).json({rings: result});
  } catch (error) {
      res.status(400).json({message:error});
  }

})
export default router