import TypeormRingsRepo from "../../../../infra/database/orm/repositorie/typeormRingsRepo";
import { ListRingsUseCase } from "../use-case/list-rings-use-case";

export function makeListRingsUseCase() {
  const typeormRingsRepo = new TypeormRingsRepo();
  const listRingsUseCase = new ListRingsUseCase(typeormRingsRepo);
  return listRingsUseCase
}

