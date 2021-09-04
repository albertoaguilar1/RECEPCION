import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { order_item } from "../entity/order_item";



export const getItems = async (req: Request, res: Response): Promise<Response> => {
    const order_items = await getRepository(order_item).find();
    return res.json(order_items);
};

/*import { Request, Response } from "express";

import { connect } from '../database'


export async function getOrderitem(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const ordenItems = await conn.query('SELECT * FROM orderitem');
    return res.json(ordenItems[0]);
}*/
