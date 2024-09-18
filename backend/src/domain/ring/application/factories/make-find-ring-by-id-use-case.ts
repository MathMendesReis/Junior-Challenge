import TypeormFindRingByIdRingsRepo from "../../../../infra/database/orm/repositorie/TypeormFindRingByIdRingsRepo";
import { ListRingByIdUseCase } from "../use-case/list-ring-by-id-use.case";

export function MakeFindRingById() {
  const FindRingByIdService = new TypeormFindRingByIdRingsRepo()
  return new ListRingByIdUseCase(FindRingByIdService)
}