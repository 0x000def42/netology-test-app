# REST API on Node + Express + sqlite

# Requirements

- git
- nodejs + npm
- npx

# Start up

1. `npm i`
2. `npx sequelize-cli db:migrate`
3. `npm run dev`

# Project structure

- `nodemon.json` - hot module replacement node wrapper
- `.sequalizerc` - configuration file for sequalize package
- `config` - configuration files
`config/config.json` - database configuration for sequalize
- `db` - database managment files
- `db/migrations` - sequalize migrations
`db/database.sqlite` - sqlite database instance
- `src` - core project files
- `src/index.js` - entrypoint
- `src/app.js` - express wrapper
- `src/core` - base classes, using via nesting etc.
- `src/middlewares` - list of express middlewares
- `src/models` - list of seqialize models
- `src/models/index.js` - autogenerates sequalize model-file
- `src/controllers` - incapsulated express routes

# References

- https://sequelize.org/
- https://expressjs.com
