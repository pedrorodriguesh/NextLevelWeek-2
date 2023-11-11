import convertHourToMinutes from "../utils/convertHourToMinutes";
import { Request, Response } from "express";
import db from "../database/connection";

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

class ClassesController {
    async create (req: Request, res: Response) {
        const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

        const trx = await db.transaction()

        try{
            const user = {
                name,
                avatar,
                whatsapp,
                bio
            }
    
            const insertedUsersIds = await trx('users').insert(user);
            const user_id = insertedUsersIds[0];
    
            const classes = {
                subject,
                cost,
                user_id
            }
    
            const insertedClassesIds = await trx('classes').insert(classes);
            const class_id = insertedClassesIds[0];
    
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                }
            })
    
            await trx('class_schedule').insert(classSchedule);
    
            await trx.commit();
    
            return res.status(201).json({ message: 'User registered!' });
        } catch(err) {
            await trx.rollback();
            return res.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        } 
    }

    async index (req: Request, res: Response) {

    }
}
export default ClassesController