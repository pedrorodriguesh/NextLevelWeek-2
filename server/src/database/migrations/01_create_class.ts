import { Knex } from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary()
        table.string('subject').notNullable()
        table.decimal('cost').notNullable()

        // Relacionamento com a tabela users => Um professor pode ter várias aulas
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            // Caso o professor seja deletado, as aulas também serão
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}; 

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes')
}