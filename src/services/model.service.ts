import SQLite from 'react-native-sqlite-storage';
import { mockData } from 'src/mock-data/models-data';
import { Model } from 'src/types/model.types';

const db = SQLite.openDatabase(
  { name: 'MainDB', location: 'default' },
  () => {},
  e => {
    console.log('🚀 ~ file: App.tsx:10 ~ e: Error in Opening DB🚀', e);
  },
);

export const createModelsTable = async () => {
  await db.transaction(tx => {
    tx.executeSql(
      ` CREATE TABLE IF NOT EXISTS models (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        code TEXT,
        name TEXT,
        type TEXT,
        cost REAL,
        category TEXT,
        description TEXT,
        image_link TEXT
      );`,
    );
  });
};

export const insertInitialData = async () => {
  const data = await db.transaction(async tx => {
    mockData.forEach(async row => {
      const { code, name, type, cost, category, description, image_link } = row;

      tx.executeSql(
        `INSERT INTO models (code, name,type, cost, category, description, image_link) VALUES (?,?,?,?,?,?,?);`,
        [code, name, type, cost, category, description, image_link],
        (_, result) => {
          console.log(`Row inserted with ID: ${result.insertId}`);
        },
        (_, error) => {
          console.log('Error inserting row:', error);
          return false;
        },
      );
    });
  });

  return data;
};

export const resetDatabase = () => {
  // Drop tables
  db.transaction(tx => {
    tx.executeSql('DROP TABLE IF EXISTS models', [], () => {
      // Table dropped successfully
      console.log('Table dropped');
    });
  });
};

export const getModels = ({ searchKey }: { searchKey?: string }) => {
  return new Promise<Model[]>((resolve, reject) => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM models WHERE name LIKE ?',
          [`%${searchKey}%`],
          (_, results) => {
            resolve(results.rows.raw());
          },
        );
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const getModelById = (id: number) => {
  return new Promise<Model>((resolve, reject) => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM models WHERE id =?',
          [id],
          (_, results) => {
            const model = results.rows.raw()[0];
            if (model) {
              resolve(model);
            }

            reject('Not found');
          },
        );
      });
    } catch (error) {
      reject(error);
    }
  });
};
