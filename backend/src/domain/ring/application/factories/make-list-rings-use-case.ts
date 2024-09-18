import TypeormFindAllRingsRepo from "../../../../infra/database/orm/repositorie/TypeormFindAllRingsRepo";
import { ListRingsUseCase } from "../use-case/list-rings-use-case";

export function makeListRingsUseCase() {
  const typeormFindAllRingsRepo = new TypeormFindAllRingsRepo();
  const listRingsUseCase = new ListRingsUseCase(typeormFindAllRingsRepo);
  return listRingsUseCase
}

