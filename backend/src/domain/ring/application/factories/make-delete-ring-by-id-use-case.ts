import TypeormRingsRepo from "../../../../infra/database/orm/repositorie/example";
import { TypeormDeleteRingByIdRepo } from "../../../../infra/database/orm/repositorie/TypeormDeleteRingByIdRepo";
import TypeormFindRingByIdRingsRepo from "../../../../infra/database/orm/repositorie/TypeormFindRingByIdRingsRepo";
import { DeleteRingByIdUseCase } from "../use-case/delete-ring-by-id-use-case";

export function makeDeleteRingByIdUseCase() {
  const deleteService = new TypeormDeleteRingByIdRepo()
  const FindRingByIdService = new TypeormFindRingByIdRingsRepo()
  const instance = new DeleteRingByIdUseCase(FindRingByIdService,deleteService);
  return instance
}

