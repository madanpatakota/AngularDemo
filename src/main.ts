import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
//import { producttype ,productID ,addition } from "./18.Modules.js";

                         //startup
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
