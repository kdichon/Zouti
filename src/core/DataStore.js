// DataStore.js
// import Medoo from 'medoo'; // Assurez-vous d'installer le package Medoo ou d'utiliser une alternative appropriée

class DataStore {
  constructor() {
    this.database = new Medoo({
      database_type: 'mysql',
      database_name: 'teltonika_gps',
      server: '37.187.1.92',
      username: 'root',
      password: 'PBbshrQqozWr96RT!',
    });
  }

  // Méthode pour récupérer les données des clients
  async getCustomerData() {
    return this.database.select('customers', '*');
  }

  // Méthode pour récupérer les numéros IMEI
  async getImeiData() {
    return this.database.select('imei_db', '*');
  }

  // Méthode pour récupérer les données GPS
  async getGpsData() {
    return this.database.select('gps_data_devices', '*');
  }

  // Ajoutez d'autres méthodes pour les opérations CRUD au besoin
}

export default DataStore;
