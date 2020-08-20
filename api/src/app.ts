import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';

export default class App {
    app: express.Application;

    constructor(){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', 5000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use(routes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port', this.app.get('port'));
        });
    }
}