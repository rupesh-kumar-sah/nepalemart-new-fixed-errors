
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';
import productsData from '../src/lib/products.json';
import { firebaseConfig } from '../src/lib/firebase'; // Corrected import

// Initialize a temporary Firebase app for the script
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seedDatabase() {
  const productsCollection = collection(db, 'products');
  const batch = writeBatch(db);

  productsData.products.forEach((product: any) => {
    const docRef = doc(productsCollection, product.id);
    batch.set(docRef, product);
  });

  try {
    await batch.commit();
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase().then(() => {
    console.log('Seeding finished. Exiting...');
    process.exit(0);
});
