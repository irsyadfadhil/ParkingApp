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
    const newlevel: ParkingData = req.body.level;
    const conn = await connect();

    for (let i = 1; i <= req.body.slot; i++){
        const angka = i++;
        await conn.query('INSERT INTO parking_data SET ?', [newPost]);
    }

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
    const tempat_parkir = await conn.query('SELECT * FROM parking_data WHERE id = ?', [id]);
    await conn.query('UPDATE parking_data SET ? WHERE id = ?', [InParkingData, id]);
    return res.json(tempat_parkir[0]);

    // return res.json({
    //     message: ' "level": "B1", "slot": "10" '
    // });
}

export async function OutParkingData(req: Request, res: Response) {
    const id = req.params.id;
    const OutParkingData: ParkingData = req.body;
    const conn = await connect();
    const tempat_parkir = await conn.query('SELECT * FROM parking_data WHERE id = ?', [id]);
    await conn.query('UPDATE parking_data SET ? WHERE id = ?', [OutParkingData, id]);
    return res.json(tempat_parkir[0]);

    // return res.json({
    //     message: 'Out Parking Data'
    // });
}

// export async function updatearticle(req: Request) {
//     Article.findOneAndUpdate(
//         { "Username": req.body.username, "Email": req.body.email, "Info": "Deactivate" },
//         { "$set": { "Info": "Active" } },
//         { "new": true },
//         function (err, doc) {
//             if (err) { // err: any errors that occurred
//                 console.log(err);
//             } else { // doc: the document before updates are applied if `new: false`
//                 console.log(doc); // , the document returned after updates if `new  true`
//                 console.log(doc.Info);
//             }

//         }
//     );
// };