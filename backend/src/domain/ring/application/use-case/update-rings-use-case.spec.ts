import { beforeEach, describe, it } from "vitest";
import { UpdateRingUseCase } from "./update-rings-use-case";
import { MockUpdateRingByIdRepository } from "../repostitories/update-ring-repository";
import { MockFindRingByIdRepository } from "../repostitories/find-ring-by-id-repository";
import { Ring } from "../../enterprise/model/ring";
let sut:UpdateRingUseCase

beforeEach(()=>{
  sut = new UpdateRingUseCase(MockUpdateRingByIdRepository,MockFindRingByIdRepository)
})

describe('update ring use case',()=>{
describe('sucess case',()=>{
  it('Deve ser possiveil atualizar um usuario',async()=>{
    const ring = new Ring({
      id: "8f8fa756-4cf2-42a4-b7df-085cbde87d47",
      name: "One Ring",
      power: "Invisibility",
      forgedBy: "Elfos",
      imageURL: "http://example.com/one-ring.jpg",
      userId: "c26517f6-5c2e-42da-b525-7453ee2f716f"
    })
    MockFindRingByIdRepository.findRingById.mockResolvedValue(ring)
    const update = new Ring({
      id: "8f8fa756-4cf2-42a4-b7df-085cbde87d47",
      name: "One Ring",
      power: "Invisibility",
      forgedBy: "Elfos",
      imageURL: "http://example.com/one-ring.jpg",
      userId: "c26517f6-5c2e-42da-b525-7453ee2f716f"
    })
    MockUpdateRingByIdRepository.updateRingById(update)

  })
})

})