import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number
    @Column("varchar", { length: 50 })
    name!: string
    @Column({ type: "int" })
    price!: number
}