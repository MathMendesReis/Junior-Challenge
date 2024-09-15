import { NextFunction, Request, Response, Router } from 'express';
import { AppError } from '../../../utils/app-error';
import { makeUpdateRingUseCase } from '../../../../domain/ring/application/factories/make-update-ring-use';
import { z, ZodError } from 'zod';
const bodySchema = z.object({
  name: z.string({required_error:'name is required',}).min(3,{ message: "Must be 3 or more characters long" }).nullish(),
  power: z.string({required_error:'power is required'}).min(3,{ message: "Must be 3 or more characters long" }).nullish(),
  forgedBy: z.enum(['Elfos','Anoes','Homens','Sauron']).nullish(),
  imageURL: z.string({required_error:'imageURL is required'}).url().nullish(),
})
const router = Router()
router.put('/ring/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const {name,forgedBy,imageURL,power} = bodySchema.parse(req.body)
    const result = await makeUpdateRingUseCase().execute({id,name,forgedBy,imageURL,power})
    res.status(200).json(result);
  } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({message:error.message});
      }
      if(error instanceof ZodError){
        res.status(400).json({message:error.message, issues:error.format()});
      }
  }

})
export default router