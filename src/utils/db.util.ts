import SQLite from 'react-native-sqlite-storage';

export const db = SQLite.openDatabase(
  { name: 'MainDB', location: 'default' },
  () => {},
  e => {
    console.log('🚀 ~ file: App.tsx:10 ~ e: Error in Opening DB🚀', e);
  },
);

export const checkIfTableExist = async (tableName: string) => {
  return new Promise((resolve, reject) => {
    db.transaction(async tx => {
      tx.executeSql(
        `PRAGMA table_info(${tableName});`,
        [],
        (_, resultSet) => {
          const rows = resultSet.rows;
          const tableExists = rows.length > 0;

          if (tableExists) {
            resolve(true);
          } else {
            resolve(false);
          }
        },
        (_, error) => {
          reject(error);
        },
      );
    });
  });
};
