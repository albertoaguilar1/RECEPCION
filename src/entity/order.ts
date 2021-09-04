import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { order_item } from "./order_item";
@Entity()
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number
    @OneToMany(type => order_item, order_item => order_item.item) @JoinColumn() order_items!: order_item
    @Column()
    subtotal!: number
    @Column()
    vat!: number
    @Column()
    total!: number
    @Column()
    token!: string
    @Column()
    total_items!: number
    @Column()
    customer_name!: string
    @Column()
    status!: string
}