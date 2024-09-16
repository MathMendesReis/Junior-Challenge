import { NextFunction, Request, Response, Router } from 'express';
import { makeCreateRingUseCase } from "../../../../domain/ring/application/factories/make-create-ring-use-case";
import z, { ZodError } from 'zod';
import { AppError } from '../../../utils/app-error';
const bodySchema = z.object({
  name: z.string({required_error:'name is required',}).min(3,{ message: "Must be 3 or more characters long" }),
  power: z.string({required_error:'power is required'}).min(3,{ message: "Must be 3 or more characters long" }),
  forgedBy: z.enum(['Elfos','Anoes','Homens','Sauron']),
  imageURL: z.string({required_error:'imageURL is required'}).url(),
})

const router = Router()
router.post('/ring/:userId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {name,forgedBy,imageURL,power} = bodySchema.parse(req.body)
    const {userId} = req.params
     const result = await makeCreateRingUseCase().execute({
      name,forgedBy,imageURL,power,userId
     })
    return res.status(201).json(result);
  } catch (error) {
    if(error instanceof ZodError){
      res.status(400).json({message:error.message, issues:error.format()});
    }
    if(error instanceof AppError){
      res.status(error.statusCode).json({message:error.message});
    }
  }

})
export default router