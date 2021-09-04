import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./item";
import { Order } from "./order";
@Entity()
export class order_item extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number
    @ManyToOne(type => Order, order => order.id) @JoinColumn()
    order!: Order
    @OneToOne(type => Item) @JoinColumn()
    item!: Item
}