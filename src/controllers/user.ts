import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/user";



export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await getRepository(User).find();
    return res.json(users);
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const newUser = getRepository(User).create(req.body);
    const result = await getRepository(User).save(newUser);
    return res.json(result);
}