module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'postgres-primary-db',
      user: 'badmckinney',
      password: 'password',
      database: 'express_gallery'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: 'postgres-primary-db',
      user: 'badmckinney',
      password: 'password',
      database: 'express_gallery'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
