import express from 'express';
import "reflect-metadata"
import { DataSource } from 'typeorm';
import { Prescription } from '../entities/Prescription';
import { AppDataSource } from '../data-source';
import { Users } from '../entities/User';

const app: express.Express = express();
const prescription = new Prescription();
const user = new Users();

const main = async () => {
    try {
        await AppDataSource.initialize();    
        
        // middleware
        app.use(express.json());
        
        const PORT = process.env.PORT || 8000;

        // endpoint to register new prescription
        app.post('/register-prescription', async (req: express.Request, res: express.Response) => {
            try {
                const { medicationName, pharmacyName, hospitalName, prescriptionDate } = req.body;
                prescription.medicationName = medicationName;
                prescription.pharmacyName = pharmacyName;
                prescription.hospitalName = hospitalName;
                prescription.prescriptionDate = prescriptionDate;
                await AppDataSource.manager.save(prescription);
                console.log("prescription saved");
                res.send("server response");
            } catch (error) {
                res.send("Invalid request");
            }
        });

        app.post('/user-signup', async (req: express.Request, res: express.Response) => {
            try {
                const { userName, email, password } = req.body;
                user.userName = userName;                
                user.email = email;                
                user.password = password;
                await AppDataSource.manager.save(user);
                console.log("user registered!!");
                res.send("user registered");
            } catch (err) {
                console.error(err);
            }
        });

        
        app.listen(PORT, () => {
            console.log(`app listening port ${PORT}`);
        });
        
    } catch (error) {
        console.error(error);
    }
}

main();
