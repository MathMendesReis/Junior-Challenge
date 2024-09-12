import { NextFunction, Request, Response, Router } from 'express';
import { makeCreateRingUseCase } from "../../../../domain/ring/application/factories/make-create-ring-use-case";
import z, { ZodError } from 'zod';
const bodySchema = z.object({
  name: z.string({required_error:'name is required'}),
  power: z.string({required_error:'power is required'}),
  forgedBy: z.enum(['Elfos','Anões','Homens','Sauron']),
  imageURL: z.string({required_error:'imageURL is required'}),
})
const router = Router()
router.post('/ring', async (req: Request, res: Response, next: NextFunction) => {
  const {name,forgedBy,imageURL,power} = bodySchema.parse(req.body)
  try {
     const result = await makeCreateRingUseCase().execute({
      name,forgedBy,imageURL,power
     })
    res.status(201).json({result});
  } catch (error) {
    if(error instanceof ZodError){
      res.status(201).json({message:error.message, issues:error.format()});
    }
  }

})
export default router