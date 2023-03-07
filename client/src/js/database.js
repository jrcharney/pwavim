// TODO: Eventually rename all the "jate" stuff to "pwavim"
import { openDB } from 'idb';

const dbName = 'jate';
const dbVersion = 1;

const initdb = async () =>
  openDB(dbName, dbVersion, {
    upgrade(db) {
      if (db.objectStoreNames.contains(dbName)) {
        console.log(`${dbName} database already exists`);
        return;
      }
      db.createObjectStore(dbName, { keyPath: 'id', autoIncrement: true });
      console.log(`${dbName} database created`);
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // console.error('putDb not implemented');

  // Create connection to the jate database and indicate what version we want to use.
  const jateDB = await openDB(dbName,dbVersion);
  // Create new transaction and specify ('readwrite' since we are making changes)
  const tx = jateDB.transaction(dbName,'readwrite');
  // Open up the desired object storage.
  const store = tx.objectStore(dbName);
  // Use the .put() method on the store to pass in the content 
  // Note: .add() is deprecated? Use .put instead.
  const req = store.put({id: 1, value: content});
  // Get confirmation of the request
  const res = await req;
  console.log("Data saved to the database",res);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // console.error('getDb not implemented');

  // Create connection to the jate database and indicate what version we want to use.
  const jateDB = await openDB(dbName,dbVersion);
  // Create new transaction and specify ('readonly' this time since we're just reading)
  const tx = jateDB.transaction(dbName,'readonly');
  // Open up the desired object storage.
  const store = tx.objectStore(dbName);
  // Use the .getAll() to get all the data in the database.
  const req = store.getAll();
  // Get confirmation of the request
  const res = await req;
  console.log("res.value",res);
  return res;
}

initdb();
