// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDfBvTsrmTypN0qzHS7u3nfynLvA3WlDIM",
    authDomain: "app-ventas-jjm.firebaseapp.com",
    databaseURL: "https://app-ventas-jjm.firebaseio.com",
    projectId: "app-ventas-jjm",
    storageBucket: "app-ventas-jjm.appspot.com",
    messagingSenderId: "387180098361",
    appId: "1:387180098361:web:a39b32acb7991f6e8eaee8",
    measurementId: "G-PY4T3T57MT"
  }
};
