const Sequelize = require("sequelize");

const connectDB = () => {
  const sequelize = new Sequelize(process.env.DATABASE_URL);

  sequelize

    .authenticate()

    .then(() => {
      console.log("Connection has been established successfully.");
    })

    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });

  const User = sequelize.define(
    "user",
    {
      // attributes

      firstName: {
        type: Sequelize.STRING,

        allowNull: false,
      },

      lastName: {
        type: Sequelize.STRING,

        // allowNull defaults to true
      },
    },
    {
      // options
    }
  );

  // Note: using `force: true` will drop the table if it already exists

  User.sync({ force: true }); // Now the `users` table in the database corresponds to the model definition
};

export default connectDB;
