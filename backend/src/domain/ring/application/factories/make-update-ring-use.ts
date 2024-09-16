import TypeormRingsRepo from "../../../../infra/database/orm/repositorie/typeormRingsRepo";
import { UpdateRingUseCase } from "../use-case/update-rings-use-case";
export function makeUpdateRingUseCase() {
  const typeormRingsRepo = new TypeormRingsRepo();
  const instace = new UpdateRingUseCase(typeormRingsRepo);
  return instace
}
