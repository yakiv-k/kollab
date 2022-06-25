exports.up = function (knex) {
  return knex.schema.createTable("stems", (table) => {
    table.increments("id").primary();
    table
      .integer("tracks_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("tracks")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.jsonb("files").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("stems");
};
