import TypeormRingsRepo from "../../../../infra/database/orm/repositorie/example";
import TypeormfindRingByForgedByRepo from "../../../../infra/database/orm/repositorie/TypeormfindRingByForgedByRepo";
import TypeormSaveRingsRepo from "../../../../infra/database/orm/repositorie/TypeormSaveRingsRepo";
import { CreateRingUseCase } from "../use-case/create-ring-use-case";

export function makeCreateRingUseCase() {
  const typeormSaveRingsRepo = new TypeormSaveRingsRepo();
  const typeormfindRingByForgedByRepo = new TypeormfindRingByForgedByRepo();
  const createRingUseCase = new CreateRingUseCase(typeormSaveRingsRepo,typeormfindRingByForgedByRepo);
  return createRingUseCase
}

