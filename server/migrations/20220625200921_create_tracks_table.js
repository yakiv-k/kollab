exports.up = function (knex) {
  return knex.schema.createTable("tracks", (table) => {
    table.increments("id").primary();
    table
      .integer("producer_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("producers")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("title").notNullable();
    table.string("name").notNullable();
    table.string("caption").notNullable();
    table.string("BPM").notNullable();
    table.string("image_url").notNullable();
    table.string("audio_url").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tracks");
};
