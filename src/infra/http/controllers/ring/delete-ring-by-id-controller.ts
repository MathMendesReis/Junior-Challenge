import { NextFunction, Request, Response, Router } from 'express';

const router = Router()
router.delete('/ring/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  try {
     const result = 'execute'
    res.status(200).json({id});
  } catch (error) {
      res.status(400).json({message:error});
  }

})
export default router