import express, { Application } from "express";
import morgan from "morgan";
import 'reflect-metadata';
import indexRoute from './router/index.routes';
import Orderitem from './router/orderitem.routes';
import Orden from './router/orden.routes';
import user from './router/usuario.routes';
import Items from './router/item.routes';

import { createConnection } from "typeorm";


// Create contructor para  app y un apropiedad de tipo Application
export class App {
    app: Application;

    //puerto opcional
    constructor(private port?: number | string) {
        this.app = express();
        this.setting();
        this.middlewares();
        this.routes();
        createConnection();


    }


    //puerto por default 3000
    setting() {

        this.app.set('port', this.port || process.env.PORT || 3000);

    }

    middlewares() {

        this.app.use(morgan('dev'));
        this.app.use(express.json())

    }
    routes() {


        this.app.use('/api', indexRoute);
        this.app.use('/Items', Items);
        this.app.use('/Orden', Orden);
        this.app.use('/Orderitem', Orderitem);
        this.app.use('/user', user);

    }


    async listen() {
        await this.app.listen(this.app.get('port'));

        console.log('App is running at port ', this.app.get('port'))
        console.log("  Press CTRL-C to stop\n");
    }

}


