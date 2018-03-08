'use strict'

const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.string('photo', 254)

    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
      table.dropColumn('photo')
    })
  }
}

module.exports = UsersSchema
