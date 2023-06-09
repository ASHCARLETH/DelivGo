
import { Router } from "express";
import authController from "../controllers/auth.controller";
import billController from "../controllers/bill.controller";

class BillsRoutes {

    router = Router();

    constructor() {

        this.initRoutes();

    };

    initRoutes = () => {

        this.router.get('/', authController.verifyToken, billController.getAllBills)
                .get('/user', authController.verifyToken, billController.getBills)
                .post('/', authController.verifyToken, billController.createBill);

    };

}

export default new BillsRoutes();
