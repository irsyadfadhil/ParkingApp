import { Router } from 'express';
const router = Router();

import { getParkingDatas, createParkingData, getParkingData, deleteParkingData, updateParkingData, InParkingData, OutParkingData } from '../controllers/ParkingData.controller';

router.route('/')
      .get(getParkingDatas)
      .post(createParkingData);

router.route('/:id')
      .get(getParkingData)
      .delete(deleteParkingData)
      .put(updateParkingData);

router.route('/InParking/:id')
      .put(InParkingData);

router.route('/OutParking/:id')
      .put(OutParkingData);

export default router;  