import mongoose from 'mongoose';

mongoose.connect(String(process.env.DB_URI), {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log('>>> DB IS CONNECTED <<<');
});

db.on('error', (err: Error) => {
    console.log('>>> ERROR >>>', err.message);
});