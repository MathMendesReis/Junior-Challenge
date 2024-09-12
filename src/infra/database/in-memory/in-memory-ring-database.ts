import type { RingRepository } from "../../../domain/ring/application/repostitories/ring-repository";
import type { Ring } from "../../../domain/ring/enterprise/model/ring";
import type { forgedBy } from "../../../domain/ring/enterprise/types/forgedBy";

export class  InMemoryRingDatabase implements RingRepository{
 
  public items: Ring[] = [
    
  ]
  private limites = {
    Elfos: 3,
    Anões: 7,
    Homens: 9,
    Sauron: 1,
  };

  async save(ring: Ring): Promise<Ring> {
    this.items.push(ring)
    return ring;
  }
  async existingRings(data: forgedBy): Promise<Ring[]|null> {
    const anéisExistentes = this.items.filter(a => a.getProps.forgedBy === data);
    if (anéisExistentes.length >= this.limites[data]) {
      return anéisExistentes
    }
    return null
  }


 async rings(): Promise<Ring[]> {
   return this.items;
 }

}

