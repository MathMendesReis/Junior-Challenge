import { InMemoryRingDatabase } from "../../../../infra/database/in-memory/in-memory-ring-database";
import { ListRingsUseCase } from "../use-case/list-rings-use-case";

export function makeListRingsUseCase() {
  const inMemoryRepository = new InMemoryRingDatabase();
  const listRingsUseCase = new ListRingsUseCase(inMemoryRepository);
  return listRingsUseCase
}

