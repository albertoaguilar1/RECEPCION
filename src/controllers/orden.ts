/*import { Request, Response } from "express";

import { connect } from '../database'


export async function getOrdens(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const ordenes = await conn.query('SELECT * FROM orden');
    return res.json(ordenes[0]);
}*/
