import { Ring, type RingProps } from "../../enterprise/model/ring";
import type { forgedBy } from "../../enterprise/types/forgedBy";
import { AppError } from "../../../../infra/utils/app-error";
import type { UpdateRingByIdRepository } from "../repostitories/update-ring-repository";
import type { FindRingByIdRepository } from "../repostitories/find-ring-by-id-repository";


export interface updateRingRequestDTO{
  id:string
  name?: string;
  power?: string;
  forgedBy?: forgedBy;
  imageURL?: string;
}
export class UpdateRingUseCase{
  constructor(
    private readonly updateRingById:UpdateRingByIdRepository,
    private readonly findRingById:FindRingByIdRepository

  ){}
  async execute({id,forgedBy,imageURL,name,power}:updateRingRequestDTO){
    const existingRings = await this.findRingById.findRingById(id)

    if(!existingRings){
      throw new AppError('Not found', 404)
    }
    const update = this.updateRing({id,forgedBy,imageURL,name,power},existingRings)

    return await this.updateRingById.updateRingById(update)
  }

  private updateRing({id,forgedBy,imageURL,name,power}:updateRingRequestDTO,existingRings: Ring){
    return new Ring({
      id: existingRings.getId,
      name: name?? existingRings.getName,
      power: power?? existingRings.getPower,
      forgedBy: forgedBy?? existingRings.getForgedBy,
      imageURL: imageURL?? existingRings.getImageUrl,
      userId:existingRings.getUserId
    })
  }
}