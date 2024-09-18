import { beforeEach, expect, test } from "vitest";
import { DeleteRingByIdUseCase } from "./delete-ring-by-id-use-case";
import { MockDeleteRingByIdRepository } from "../repostitories/DeleteRingByIdRepository";
import { MockFindRingByIdRepository } from "../repostitories/find-ring-by-id-repository";
import { describe } from "node:test";
import { Ring } from "../../enterprise/model/ring";

let sut:DeleteRingByIdUseCase

beforeEach(()=>{
  sut = new DeleteRingByIdUseCase(MockFindRingByIdRepository,MockDeleteRingByIdRepository)
})

describe('Delete ring use case',()=>{
  describe('Sucess case', async()=>{
    test('Deve retornar a mensagem de sucesso', async ()=>{
      const ring = new Ring({
        id: "8f8fa756-4cf2-42a4-b7df-085cbde87d47",
        name: "One Ring",
        power: "Invisibility",
        forgedBy: "Elfos",
        imageURL: "http://example.com/one-ring.jpg",
        userId: "c26517f6-5c2e-42da-b525-7453ee2f716f"
      })
      MockFindRingByIdRepository.findRingById.mockResolvedValue(ring)
      const res = await sut.execute('testid')
      expect(res).toStrictEqual({
      message:"sucess"
      })
    })
    describe('Fail case', async()=>{
      test('Deve retornar a mensagem de error', async ()=>{
        MockFindRingByIdRepository.findRingById.mockResolvedValue(null)
        await expect( sut.execute('testid')).rejects.toThrow('Ring not found')
      })
    })
  })
})