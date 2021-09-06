import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Order } from "../entity/order";



export const getOrders = async (req: Request, res: Response): Promise<Response> => {
    const orders = await getRepository(Order).find();
    return res.json(orders);
};


export const createOrders = async (req: Request, res: Response): Promise<Response> => {
    const newOrder = getRepository(Order).create(req.body);
    const result = await getRepository(Order).save(newOrder);
    return res.json(result);
};






/*import { Request, Response } from "express";

import { connect } from '../database'


export async function getOrdens(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const ordenes = await conn.query('SELECT * FROM orden');
    return res.json(ordenes[0]);
}*/
