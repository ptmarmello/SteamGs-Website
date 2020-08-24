
exports.up = function(knex) {
    return knex.schema.createTable('accounts',function(table){
        table.string('secret_id').primary();
        table.string('owners_id').notNullable();
        table.foreign('owners_id').references('users.id');

        table.specificType('account','STRING[]').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('accounts');
};
