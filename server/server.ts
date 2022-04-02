import express from 'express';
const app: express.Express = express();

// middleware
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.post('/register-medication', (req: express.Request, res: express.Response) => {
    res.send("server response");
});

app.listen(PORT, () => {
    console.log(`app listening port ${PORT}`);
});