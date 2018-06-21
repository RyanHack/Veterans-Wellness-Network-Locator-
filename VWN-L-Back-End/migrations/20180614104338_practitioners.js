exports.up = function (knex, Promise) {
    return knex.schema.createTable('practitioners', (table) => {
        table.increments()
        table.text('name')
        table.integer('modality')
        table.text('address')
        table.string('phone')
        table.string('company')
        table.decimal('lat')
        table.decimal('lng')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('practitioners')
};
