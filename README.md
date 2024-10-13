# NodeJS and MongoDB with docker compose

A simple nodejs app that connects to mongodb. Mongo-express is included with basic authentication.

### Building and running your application

>Before starting the app, make sure change the **db.env.example** file to **db.env**, **db-ui.env.example** file to **db-ui.env** and **.env.example** file in app/ dir to **.env**, and change the password values inside.

When you're ready, start your application by running:

`$ docker compose up -d`

Your application will be available at http://localhost:3000.
MongoDB can be managed at http://localhost:8081 with default username(admin) and password(pass).

### Note to Remember

1. For NodeJS app:
    >**dotenv** work storing environment variables in .env file and can be accessed by (process.env). (As far as I know). So nodejs can use environment variables for connecting mongodb.
2. For MongoDB:
    >db.env file store env variables for username and password, creating new mongodb admin user.
    >Healthcheck can be done ``mongosh -u $${MONGO_INITDB_ROOT_USERNAME} $${MONGO_INITDB_ROOT_PASSWORD} --eval "db.stats().ok"``. Env variables need to be called by double dollar sign($$).
3. Mongo-Express:
    >db-ui.env file store env variables for username, password and servername to connect to mongodb.
    >ME_CONFIG_MONGODB_URL=mongodb://username:password@mongo:27017/  variable can replace all username, password and servername variable by one.

