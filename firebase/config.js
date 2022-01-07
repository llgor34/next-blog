import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  const serviceAccount = require('yourpathname.here');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// firestore
export const projectFirestore = admin.firestore();
