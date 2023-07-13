import SQLite from 'react-native-sqlite-storage';
import { Note } from 'src/types/note.types';

const db = SQLite.openDatabase(
  { name: 'MainDB', location: 'default' },
  () => {},
  e => {
    console.log('🚀 ~ file: App.tsx:10 ~ e: Error in Opening DB🚀', e);
  },
);

export const createNotesTable = async () => {
  await db.transaction(tx => {
    tx.executeSql(
      ` CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        note_by TEXT,
        created_at DATE,
        details TEXT,
        model_id INTEGER
      );`,
    );
  });
};

export const addNewNote = async (note: {
  details: string;
  model_id: number;
}) => {
  return new Promise<string>((resolve, reject) => {
    db.transaction(async tx => {
      const { details, model_id } = note;

      const currentDate = new Date();

      // Format the date for SQLite in the format 'YYYY-MM-DD HH:MM:SS'
      const formattedDate = currentDate
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ');

      tx.executeSql(
        `INSERT INTO notes (note_by, created_at, details, model_id) VALUES (?,?,?,?);`,
        ['Mustafa', formattedDate, details, model_id],
        (_, result) => {
          console.log(`Row inserted with ID: ${result.insertId}`);
          resolve('success');
        },
        (_, error) => {
          console.log('🚀 ~ file: note.service.ts:50 ~ error:', error);
          reject(error);
          return false;
        },
      );
    });
  });
};

export const getNotesByModelId = (modelId: number) => {
  return new Promise<Note[]>((resolve, reject) => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM notes WHERE model_id = ? ORDER BY created_at DESC;',
          [modelId],
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
