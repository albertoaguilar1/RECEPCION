import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Item } from "../entity/item";



export const getItems = async (req: Request, res: Response): Promise<Response> => {
    const items = await getRepository(Item).find();
    return res.json(items);
};


/*import { Request, Response } from "express";

import { connect } from '../database'


export async function getItems(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const items = await conn.query('SELECT * FROM item');
    return res.json(items[0]);
}*/
