import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MainComponent } from './modules/layout/main/main.component';

bootstrapApplication(MainComponent, appConfig)
  .catch((err) => console.error(err));
