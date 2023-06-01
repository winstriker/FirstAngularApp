import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import PocketBase from 'pocketbase'
import { AppModule } from './app/app.module';

const pocketbaseInstance = new PocketBase('http://127.0.0.1:8090');
export{pocketbaseInstance}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
