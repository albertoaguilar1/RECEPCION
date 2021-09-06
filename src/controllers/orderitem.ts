import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { order_item } from "../entity/order_item";



export const getOrderItems = async (req: Request, res: Response): Promise<Response> => {
    const order_items = await getRepository(order_item).find();
    return res.json(order_items);
};

export const createOrderItems = async (req: Request, res: Response): Promise<Response> => {
    const newItem = getRepository(order_item).create(req.body);
    const result = await getRepository(order_item).save(newItem);
    return res.json(result);
};


/*import { Request, Response } from "express";

import { connect } from '../database'


export async function getOrderitem(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const ordenItems = await conn.query('SELECT * FROM orderitem');
    return res.json(ordenItems[0]);
}*/
