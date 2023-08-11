'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemScpSchema extends Schema {
  up () {
    this.create('item_scps', (table) => {
      table.increments()
      table.string('name')
      table.string('item',100)
      table.text('description')
      table.string('avatar')

      table.integer('category_id').unsigned().references('id').inTable('categories')

      table.integer('user_id').unsigned().references('id').inTable('users')


      table.string("ip_creator",120).nullable();

      table.timestamps()
    })
  }

  down () {
    this.drop('item_scps')
  }
}

module.exports = ItemScpSchema
