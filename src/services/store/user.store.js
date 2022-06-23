import { db } from "./db"

export default class useUserStore {
    get = async (id) => {
        try {
            if (id == null) {
                return await db.User.orderBy("id").toArray();
            } else {
                return await db.User.get(Number(id));
            }
        } catch (error) {
            throw error;
        }
    };

    signin = async (criteria) => {
        try {
            // if (id == null) {
            //     return await db.User.orderBy("id").toArray();
            // } else {
                return await db.User.where(criteria).first();
            // }
        } catch (error) {
            throw error;
        }
    };

    count = async () => {
        try {
            return db.User.count();
        } catch (error) {
            throw error;
        }
    };

    create = async (data) => {
        try {
            return db.User.add(data);
        } catch (error) {
            throw error;
        }
    };

    update = async (data) => {
        try {
            return db.User.update(data.id, data);
        } catch (error) {
            throw error;
        }
    };

    remove = async (id) => {
        try {
            return db.User.delete(Number(id));
        } catch (error) {
            throw error;
        }
    };

    clean = async (id) => {
        try {
            return db.User.clear();
        } catch (error) {
            throw error;
        }
    };
}
