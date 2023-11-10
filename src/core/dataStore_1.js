import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({name: 'teltonika_gps.db', location: 'default'});

class DataStore {
  constructor() {
    this.initDatabase();
  }

  initDatabase() {
    db.transaction(tx => {
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS customers (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT,
          full_name TEXT,
          last_name TEXT,
          imei TEXT,
          phone_number TEXT,
          card_number TEXT,
          date_of_birth TEXT
        )
      `);

      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS imei_db (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          imei TEXT UNIQUE,
          blacklist BOOLEAN
        )
      `);

      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS gps_data_devices (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          client_id INTEGER,
          imei TEXT,
          longitude REAL,
          latitude REAL,
          angle INTEGER,
          altitude INTEGER,
          satellites INTEGER,
          speed INTEGER,
          datetime TEXT
        )
      `);
    });
  }

  // Méthode pour récupérer les données des clients
  async getCustomerData() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM customers',
          [],
          (tx, results) => {
            const data = results.rows.raw();
            resolve(data);
          },
          (_, error) => {
            reject(error);
          },
        );
      });
    });
  }

  // Méthode pour récupérer les numéros IMEI
  async getImeiData() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM imei_db',
          [],
          (tx, results) => {
            const data = results.rows.raw();
            resolve(data);
          },
          (_, error) => {
            reject(error);
          },
        );
      });
    });
  }

  // Méthode pour récupérer les données GPS
  async getGpsData() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM gps_data_devices',
          [],
          (tx, results) => {
            const data = results.rows.raw();
            resolve(data);
          },
          (_, error) => {
            reject(error);
          },
        );
      });
    });
  }

  // Ajoutez d'autres méthodes pour les opérations CRUD au besoin
}

export default DataStore;
