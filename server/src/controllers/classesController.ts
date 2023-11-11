import convertHourToMinutes from "../utils/convertHourToMinutes";
import { Request, Response } from "express";
import db from "../database/connection";

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

class ClassesController {
    async index (req: Request, res: Response) {
        const filters = req.query;

        if(!filters.week_day || !filters.subject || !filters.time) {
            return res.status(400).json({
                error: 'Missing filters to search classes'
            })
        }

        const timeInMinutes = convertHourToMinutes(filters.time as string);

        const classes = await db('classes')
            .whereExists(function() {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id`=`classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day`= ??', [Number(filters.week_day)])
                    .whereRaw('`class_schedule`.`from`<= ??', [timeInMinutes])
                    .whereRaw('`class_schedule`.`to`> ??', [timeInMinutes])
            })
            .where ('classes.subject', '=', filters.subject as string)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);

        return res.json(classes);
    }

    async create (req: Request, res: Response) {
        const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

        const trx = await db.transaction() // Transaction para garantir os inserts no banco de dados.

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

}
export default ClassesController