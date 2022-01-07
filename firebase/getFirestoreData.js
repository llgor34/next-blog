import { projectFirestore } from './config';

// Returns promise
export const getFirestoreData = async (collectionName, id, query) => {
  let ref = projectFirestore.collection(collectionName);

  if (id) {
    ref = ref.doc(id);
  }

  if (query) {
    ref = ref.where(...query);
  }

  const snapshots = await ref.get();

  if (snapshots.docs) {
    const data = snapshots.docs.map((snapshot) => ({
      id: snapshot.id,
      ...snapshot.data(),
      date: snapshot.data().date.toDate(),
    }));
    return data;
  }
  const data = {
    id: snapshots.id,
    ...snapshots.data(),
    date: snapshots.data().date.toDate(),
  };
  return data;
};
