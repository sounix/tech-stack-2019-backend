module.exports = {
  type: 'postgres',
  url: 'postgres://hellouser:hellouser@localhost:5432/hellodb',
  synchronize: false,
  logging: false,
  entities: [
   'dist/entity/**/*.js',
  ],
  migrations: [
   'dist/migration/**/*.js',
  ],
  subscribers: [
   'dist/subscriber/**/*.js',
  ],
  cli: {
   entitiesDir: 'src/entity',
   migrationsDir: 'src/migration',
   subscribersDir: 'src/subscriber',
  }
};
