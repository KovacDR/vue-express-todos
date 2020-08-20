//AMOR TE AMO
import dotenv from 'dotenv';
dotenv.config();
import App from './app';

import './database/conn';
const app = new App();

app.start();