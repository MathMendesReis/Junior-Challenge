import TypeormRingsRepo from "../../../../infra/database/orm/repositorie/typeormRingsRepo";
import { DeleteRingByIdUseCase } from "../use-case/delete-ring-by-id-use-case";
import { ListRingsUseCase } from "../use-case/list-rings-use-case";

export function makeDeleteRingByIdUseCase() {
  const typeormRingsRepo = new TypeormRingsRepo();
  const instance = new DeleteRingByIdUseCase(typeormRingsRepo);
  return instance
}

