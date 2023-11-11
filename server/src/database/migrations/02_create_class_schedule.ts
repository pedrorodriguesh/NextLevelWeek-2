import { Knex } from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary()
        table.integer('week_day').notNullable()
        table.integer('from').notNullable()
        table.integer('to').notNullable()

        // Relacionamento com a tabela classes => Um professor pode ter várias aulas
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            // Caso o professor seja deletado, as aulas também serão
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}; 

export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule')
}