exports.up = function ( knex, Promise ) {
    return knex.schema.createTable( 'flight', ( table ) => {
        table.increments()
        table.string( 'start' ).notNullable()
        table.string( 'destination' ).notNullable()
        table.integer( 'airline_id' )
            .references( 'id' )
            .inTable( 'airline' )
            .onDelete( 'CASCADE' )
            .index()
        table.timestamps( true, true )
    } )
};

exports.down = function ( knex, Promise ) {
    return knex.schema.dropTable( 'flight' )
};