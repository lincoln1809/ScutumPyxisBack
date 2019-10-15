module.exports = {
	client: 'postgresql',
	connection: {
		database: 'scutum',
		user: 'postgres',
		password: 'xsw234RFV'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
