import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import type { forgedBy } from "../../../../domain/ring/enterprise/types/forgedBy";
@Entity()
export class RingDB {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ nullable: false, type:'text' })
    name: string;
    @Column({ nullable: false, type:'text' })
    power: string;
    @Column({ nullable: false, type:'text' })
    forgedBy: forgedBy;
    @Column({ nullable: false, type:'text' })
    imageURL: string;
    @Column({ nullable: false, type:'text' })
    userId: string;
  }