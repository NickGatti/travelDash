exports.up = function ( knex, Promise ) {
    return knex.schema.createTable( 'airline', ( table ) => {
        table.increments()
        table.string( 'name' ).notNullable()
        table.text( 'description' ).notNullable()
        table.timestamps( true, true )
    } )
};

exports.down = function ( knex, Promise ) {
    return knex.schema.dropTable( 'airline' )
};