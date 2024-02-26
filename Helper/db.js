import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('smarttools');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tq) => {
            tq.executeSql('CREATE TABLE IF NOT EXISTS user(id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, content TEXT NOT NULL)', [],
                () => {
                    resolve();
                }, (_, err) => {
                    reject();
                });
        });
    });
    return promise;
}
export const insertUser = (Title, Content) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tq) => {
            tq.executeSql('INSERT INTO user(title,content) VALUES (?,?)'
                , [Title, Content],
                (_, result) => {
                    resolve(result)
                }, (_, err) => {
                    reject(err)
                });
        });
    });
    return promise;
}
export const getAllUsers = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tq) => {
            tq.executeSql('SELECT * FROM user',
                [],
                (_, result) => {
                    resolve(result)
                }, (_, err) => {
                    reject(err)
                });
        });
    });
    return promise;
}
export const getSingleuser = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tq) => {
            tq.executeSql('SELECT * FROM user WHERE id = ?',
                [id],
                (_, result) => {
                    resolve(result)
                }, (_, err) => {
                    reject(err)
                });
        });
    });
    return promise;
}
export const getAllDeleteUsers = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tq) => {
            tq.executeSql('DELETE FROM user WHERE id=?'
                , [id],
                (_, result) => {
                    resolve(result)
                },(_, err) => {
                    reject(err)
                });
        });
    });
    return promise;
}
export const updateUser = (Title, Content, id) => {
    console.log("update===========->", id);
    const promise = new Promise((resolve, reject) => {
        db.transaction((tq) => {
            tq.executeSql('UPDATE user SET title=?, content=? WHERE id = ?',
                [Title, Content, id],
                (_, result) => {
                    resolve(result)
                }, (_, err) => {
                    reject(err)
                });
        });
    });
    return promise;
}

