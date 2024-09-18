import TypeormRingsRepo from "../../../../infra/database/orm/repositorie/example";
import TypeormFindRingByIdRingsRepo from "../../../../infra/database/orm/repositorie/TypeormFindRingByIdRingsRepo";
import { TypeormUpdateRIngRepo } from "../../../../infra/database/orm/repositorie/typeormUpdateRingRepo";
import { UpdateRingUseCase } from "../use-case/update-rings-use-case";
export function makeUpdateRingUseCase() {
  const typeormUpdateRIngRepo = new TypeormUpdateRIngRepo();
  const typeormFindRingByIdRingsRepo = new TypeormFindRingByIdRingsRepo()
  const instace = new UpdateRingUseCase(typeormUpdateRIngRepo,typeormFindRingByIdRingsRepo);
  return instace
}
