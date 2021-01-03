
import * as SQLite from 'expo-sqlite';

export class DatabaseSqlLite {
  constructor() {
    this.sqlite = SQLite;
    this.sqlite = SQLite.openDatabase('db.db');
   }
   
   createUser = (user) => { 
   
      return new Promise((resolve, reject) => {
         let msg = {
            result: false,
            message:""
         };
         sqlite.transaction((tx) => {
            tx.executeSql('INSERT INTO users(HeroName) VALUES (?)', [hero.heroName], (tx, results) => {
                if (results.rowsAffected > 0) {
                   console.log('====================================');
                   console.log("berhasil");
                   console.log('====================================');
                } else {
                  console.log('====================================');
                  console.log("gagal");
                  console.log('====================================');
                }
                resolve({ result: msg.result, message: msg.message });
            }, (error) => {
                msg.result = false;
                msg.message = `${error.message}`;
                reject({ result: msg.result, message: msg.message });
            });
      })
   }

}



// import SQLite from 'react-native-sqlite-storage'

// let db = SQLite;
// db.enablePromise(true);
// db.DEBUG(true);
// let sqlLite = db.openDatabase({ "name": "test-db", "createFromLocation": "./test-db.sqlite" }).then(db => { 
// });




// // export class BaseManager {


// //   createTable() {
// //     return new Promise((resolve, reject) => {
// //       this.dbInstance.executeSql(
// //         "CREATE TABLE users ( " +
// //           "id	INTEGER," +
// //           "fullname	TEXT," +
// //           "username	TEXT," +
// //           "password	TEXT," +
// //           "level	TEXT," +
// //           "PRIMARY KEY(id AUTOINCREMENT);"
// //       ).then((val) => {
// //         resolve(true)
// //       }).catch((err) => {
// //         console.log(err);
// //         reject(false)
// //       })
// //     });
// //   }

// //   addData(fullname, username, password, level) {
// //     return new Promise((resolve, reject) => {
// //       this.dbInstance.executeSql(
// //         "INSERT INTO users (fullname, username, password, level)" +
// //         `VALUES('${fullname}','${username}','${password}','${level}')`
// //       ).then((username) => {
// //         resolve(true);
// //       }).catch((err) => {
// //         reject(false);
// //       })
// //     });
// //   }

// //   addDataHardcode() {
// //     return new Promise((resolve, reject) => {
// //       this.dbInstance.executeSql(
// //         "INSERT INTO users (fullname, username, password, level)" +
// //         `VALUES('test', 'test', 'test', 'admin')`
// //       ).then((username) => {
// //         resolve(true);
// //       }).catch((err) => {
// //         reject(false);
// //       })
// //     });
// //   }

// //   getTable() {
// //     return new Promise((resolve, reject) => {
// //       this.dbInstance.executeSql(
// //         "SELECT * FROM users"
// //       ).then(([values]) => {
// //         var array = [];
// //         for (let index = 0; index < values.rows.length; index++) {
// //           const element = values.rows.item(index);
// //           array.push(element);
// //         }
// //         resolve(array);
// //       }).catch((err) => {
// //         reject(false);
// //       })
// //     });
// //   }

// //   deleteUser(id) {
// //     return new Promise((resolve, reject) => {
// //       this.dbInstance.executeSql('DELETE FROM users WHERE id = ?', [id])
// //       .then((val) => {
// //         resolve(true);
// //       }).catch((err) => {
// //         reject(false);
// //       })
// //     });
// //   }

// //   dropTable() {
// //     return new Promise((resolve, reject) => {
// //       this.dbInstance.executeSql(
// //         "DELETE FROM  users"
// //       ).then((val) => {
// //         resolve(true);
// //       }).catch((err) => {
// //         reject(false);
// //       })
// //     });
// //   }
// // }