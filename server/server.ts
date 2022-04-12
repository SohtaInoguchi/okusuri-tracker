import express from 'express';
import "reflect-metadata"
import { DataSource } from 'typeorm';
import { Prescription } from '../entities/Prescription';
import { AppDataSource } from '../data-source';

const app: express.Express = express();
const prescription = new Prescription();

const main = async () => {
    try {
        await AppDataSource.initialize();    
        
        // middleware
        app.use(express.json());
        
        const PORT = process.env.PORT || 8000;

        app.post('/register-medication', async (req: express.Request, res: express.Response) => {
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
        
        app.listen(PORT, () => {
            console.log(`app listening port ${PORT}`);
        });
        
    } catch (error) {
        console.error(error);
    }
}

main();
