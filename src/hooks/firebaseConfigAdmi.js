
import admin from 'firebase-admin';
import serviceAccount from '../credentials/firebaseCredentials.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const collectionRef = db.collection('products');

export { collectionRef };