import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


// import { environment } from './environments/environment';

// import firebase from 'firebase/app';
// import 'firebase/auth'; // Import other Firebase services as needed

// firebase.initializeApp(environment.firebaseConfig);



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
