import { Request, Response } from 'express';

import { connect } from '../database'
import { ParkingData } from '../interface/ParkingData';

export async function getParkingDatas(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const courses = await conn.query('SELECT * FROM parking_data');
    return res.json(courses[0]);
}

export async function createParkingData(req: Request, res: Response) {
    const newPost: ParkingData = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO parking_data SET ?', [newPost]);
    return res.json({
        message: 'Parking Data Created'
    });
}

export async function getParkingData(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const conn = await connect();
    const post = await conn.query('SELECT * FROM parking_data WHERE id = ?', [id]);

    return res.json(post[0]);
}

export async function deleteParkingData(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM parking_data WHERE id = ?', [id]);
    return res.json({
        message: 'Parking Data deleted'
    });
}

export async function updateParkingData(req: Request, res: Response) {
    const id = req.params.id;
    const updateParkingData: ParkingData = req.body;
    const conn = await connect();
    await conn.query('UPDATE parking_data SET ? WHERE id = ?', [updateParkingData, id]);
    return res.json({
        message: 'Parking Data updated'
    });
}

export async function InParkingData(req: Request, res: Response) {
    const id = req.params.id;
    const InParkingData: ParkingData = req.body;
    const conn = await connect();
    await conn.query('UPDATE parking_data SET ? WHERE id = ?', [InParkingData, id]);
    return res.json({
        message: 'In Parking Data'
    });
}

export async function OutParkingData(req: Request, res: Response) {
    const id = req.params.id;
    const OutParkingData: ParkingData = req.body;
    const conn = await connect();
    await conn.query('UPDATE parking_data SET ? WHERE id = ?', [OutParkingData, id]);
    return res.json({
        message: 'Out Parking Data'
    });
}