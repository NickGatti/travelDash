exports.up = function ( knex, Promise ) {
    return knex.schema.createTable( 'trips', ( table ) => {
        table.increments()
        table.text( 'description' ).notNullable()
        table.integer( 'user_id' )
            .references( 'id' )
            .inTable( 'users' )
            .onDelete( 'CASCADE' )
            .index()
        table.integer( 'flight_id' )
            .references( 'id' )
            .inTable( 'airline' )
            .onDelete( 'CASCADE' )
            .index()
        table.timestamps( true, true )
    } )
};

exports.down = function ( knex, Promise ) {
    return knex.schema.dropTable( 'trips' )
};