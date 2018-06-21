const database = require("./db-connection");

module.exports = {
    list() {
        return database("practitioners").select();
    },
    read(id) {
        return database("practitioners").select().where("id", id).first();
    },
    create(practitioner) {
        return database("practitioners")
            .insert(practitioner)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, practitioner) {
        return database("practitioners")
            .update(practitioner)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    delete(id) {
        return database("practitioners").delete().where("id", id);
    }
};
