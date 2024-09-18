import type { FindRingByForgedBy } from "../find-ring-by-forged-by-repositorie";
import type { SaveRingRepository } from "../save-ring-repository";
import { mock } from 'vitest-mock-extended';

const mockFindRingByForgedByRepo = mock<FindRingByForgedBy>();

export {mockFindRingByForgedByRepo}
