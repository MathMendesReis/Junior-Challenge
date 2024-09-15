import TypeormRingsRepo from "../../../../infra/database/orm/repositorie/typeormRingsRepo";
import { CreateRingUseCase } from "../use-case/create-ring-use-case";

export function makeCreateRingUseCase() {
  const typeormRingsRepo = new TypeormRingsRepo();
  const createRingUseCase = new CreateRingUseCase(typeormRingsRepo);
  return createRingUseCase
}

