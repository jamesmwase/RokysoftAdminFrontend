import Dexie from 'dexie';

export const db = new Dexie('app_test');
//Tables
db.version(1).stores({
    Todo: 'id++, name, status',
    User: 'id++, fullName, phone, email, roleId, password ,status',
});
