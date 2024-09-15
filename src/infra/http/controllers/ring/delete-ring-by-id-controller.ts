import { NextFunction, Request, Response, Router } from 'express';
import { makeDeleteRingByIdUseCase } from '../../../../domain/ring/application/factories/make-delete-ring-by-id-use-case';
import { AppError } from '../../../utils/app-error';

const router = Router()
router.delete('/ring/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
     const result = await makeDeleteRingByIdUseCase().execute(id)
    res.status(200).json(result);
  } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({message:error.message});
      }
  }

})
export default router