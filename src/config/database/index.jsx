import SQLite from 'react-native-sqlite-storage'

let db = SQLite;
db.enablePromise(true);
db.DEBUG(true);
db.openDatabase({ "name": "test-db", "createFromLocation": "./test-db.sqlite" })


const resultMessage = (status, message) => { 
   return {
      status: status,
      message:message,
   }
}



const createUser = (user) => { 
   return new Promise((resolve, reject) => { 
      if (!param) {
         return resultMessage(false,"Parameter is Rejected")
      } else { 
         db.transaction((trx) => { 
            trx.executeSql(`insert into users (fullname, username, password, level) 
            values
            (${user.fullname},${user.username},${user.password},${user.level})`, (trx, result) => {
               var message;
                  if (result.rowsAffected > 0) {
                      message = resultMessage(true, "User has been created..!")
                  } else { 
                      message = resultMessage(true, "Create user failed..!")
                  }
                  resolve({ result: message.status,message:message.message });
            }, err => { 
                  var message = resultMessage(true, err.message)
                  resolve({ result: message.status,message:message.message });
            });
         })
      }
   })
}

export { createUser }

// export class BaseManager {


//   createTable() {
//     return new Promise((resolve, reject) => {
//       this.dbInstance.executeSql(
//         "CREATE TABLE users ( " +
//           "id	INTEGER," +
//           "fullname	TEXT," +
//           "username	TEXT," +
//           "password	TEXT," +
//           "level	TEXT," +
//           "PRIMARY KEY(id AUTOINCREMENT);"
//       ).then((val) => {
//         resolve(true)
//       }).catch((err) => {
//         console.log(err);
//         reject(false)
//       })
//     });
//   }

//   addData(fullname, username, password, level) {
//     return new Promise((resolve, reject) => {
//       this.dbInstance.executeSql(
//         "INSERT INTO users (fullname, username, password, level)" +
//         `VALUES('${fullname}','${username}','${password}','${level}')`
//       ).then((username) => {
//         resolve(true);
//       }).catch((err) => {
//         reject(false);
//       })
//     });
//   }

//   addDataHardcode() {
//     return new Promise((resolve, reject) => {
//       this.dbInstance.executeSql(
//         "INSERT INTO users (fullname, username, password, level)" +
//         `VALUES('test', 'test', 'test', 'admin')`
//       ).then((username) => {
//         resolve(true);
//       }).catch((err) => {
//         reject(false);
//       })
//     });
//   }

//   getTable() {
//     return new Promise((resolve, reject) => {
//       this.dbInstance.executeSql(
//         "SELECT * FROM users"
//       ).then(([values]) => {
//         var array = [];
//         for (let index = 0; index < values.rows.length; index++) {
//           const element = values.rows.item(index);
//           array.push(element);
//         }
//         resolve(array);
//       }).catch((err) => {
//         reject(false);
//       })
//     });
//   }

//   deleteUser(id) {
//     return new Promise((resolve, reject) => {
//       this.dbInstance.executeSql('DELETE FROM users WHERE id = ?', [id])
//       .then((val) => {
//         resolve(true);
//       }).catch((err) => {
//         reject(false);
//       })
//     });
//   }

//   dropTable() {
//     return new Promise((resolve, reject) => {
//       this.dbInstance.executeSql(
//         "DELETE FROM  users"
//       ).then((val) => {
//         resolve(true);
//       }).catch((err) => {
//         reject(false);
//       })
//     });
//   }
// }