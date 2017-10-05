// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: { // Replace this section with your own data - this will fail with these values
    apiKey: "AIzaSyAYWh7rfqAs1r1102c7HwQxLLPWIWL03ZU",
    authDomain: "browncountylibraryevents.firebaseapp.com",
    databaseURL: "https://browncountylibraryevents.firebaseio.com",
    projectId: "browncountylibraryevents",
    storageBucket: "browncountylibraryevents.appspot.com",
    messagingSenderId: "346952864544"
  }
};
