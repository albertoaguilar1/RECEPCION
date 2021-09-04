import { Request, Response } from "express";

import testData from "../../data/test.json";


export function loadApi(req: Request, res: Response): Response {
    return res.json(testData)
}

