import db from "../database/connection";
import { Request, Response } from "express";

class ClassesController {
    async create (req: Request, res: Response) {
        const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

        const user = {
            name,
            avatar,
            whatsapp,
            bio
        }
        const insertedUsersIds = await db('users').insert(user);


        return res.json({ message: 'User registered!'})
    }
}
export default ClassesController