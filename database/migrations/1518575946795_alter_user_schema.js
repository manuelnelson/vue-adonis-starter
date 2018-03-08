'use strict'

const Schema = use('Schema')

class AlterUserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.dropColumn('username')
      table.string('name', 80)
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
      // alter table
      table.string('username', 80).notNullable().unique()
      table.dropColumn('name')
    })
  }
}

module.exports = AlterUserSchema
