import { Router } from 'express';
import Route from '../model/Route';
import routeController from '../controller/routeController';

const router = Router();
router.post('/create', routeController.create);
router.post('/:id/newStopPoint', routeController.newStopPoint);
router.post('/:id/newParticipant', routeController.newParticipant);
router.get('/:id/getAllParticipants/',routeController.getAllParticipants);
router.post('/getAll/',routeController.getAllRoutes);
router.get('/:id/getRoute',routeController.getRoute);
router.get('/:id/getAllPoints',routeController.getAllPoints);
router.put('/:id/updateRoute',routeController.updateRoute);
router.delete('/:id/deleteRoute',routeController.deleteRoute);

export default router;
