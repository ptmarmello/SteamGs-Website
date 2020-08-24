
exports.up = function(knex) {
    return knex.schema.createTable('users',function(table){
        table.increments('id').primary();
        table.string('secret_id').notNullable();
        table.string('name').notNullable();
        table.string('date_born').notNullable();
        table.string('email').notNullable();
        table.string('university').notNullable();

        table.string('login').notNullable();
        table.string('password').notNullable();

        table.integer('points');
        table.string('account_Id');
        table.foreign('account_Id').references('accounts.id')
    }).createTable('wallet',function(table){
        table.integer('badges_Id');
        table.foreign('badges_Id').references('badges.id');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('wallet')
    .dropTable('users');
};
