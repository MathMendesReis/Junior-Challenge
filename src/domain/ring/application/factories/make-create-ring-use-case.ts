import { InMemoryRingDatabase } from "../../../../infra/database/in-memory/in-memory-ring-database";
import { CreateRingUseCase } from "../use-case/create-ring-use-case";

export function makeCreateRingUseCase() {
  const inMemoryRepository = new InMemoryRingDatabase();
  const createRingUseCase = new CreateRingUseCase(inMemoryRepository);
  return createRingUseCase
}

