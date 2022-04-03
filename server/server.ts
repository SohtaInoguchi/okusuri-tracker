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

        prescription.medicationName = "tylenole";
        await AppDataSource.manager.save(prescription);
        console.log("prescription saved");

        app.post('/register-medication', (req: express.Request, res: express.Response) => {
            const { medicationName, pharmacyName, hospitalName, prescriptionDate } = req.body;
            console.log('medication name', medicationName);
            try {
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
