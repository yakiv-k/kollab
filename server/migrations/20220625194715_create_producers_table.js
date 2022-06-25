exports.up = function(knex) {
    return knex.schema.createTable("producers", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("contact").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("producers");
};