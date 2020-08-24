
exports.up = function(knex) {
    return knex.schema.createTable('badges',function(table){
        table.increments('id').primary();
        table.string('secret_Id').notNullable();
        table.string('title').notNullable();
        table.string('subtitle').notNullable();
        table.string('desc').notNullable();
        table.datetime('date_created').notNullable();

        table.integer('belongsTo_Id');
        table.foreign('belongsTo_Id').references('belongsTo.id');    
    }).createTable('belongsTo', function(table){
        table.increments('id').primary();
        table.integer('badges_Id');
        table.foreign('badges_Id').references('badges.id');
        table.integer('owners_Id');
        table.foreign('owners_Id').references('users.id');
        table.datetime('allocated_date').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('belongsTo')
    .dropTable('badges');
};
