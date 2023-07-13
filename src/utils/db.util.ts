import SQLite from 'react-native-sqlite-storage';

export const checkIfTableExist = async (tableName: string) => {
  const db = await SQLite.openDatabase({ name: 'MainDB' });

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
