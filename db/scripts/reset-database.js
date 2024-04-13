import pool from "../index.js";

async function resetDatabase() {
  // try {
  await pool.query(`
        DROP TABLE IF EXISTS drivers CASCADE;
        DROP TABLE IF EXISTS results CASCADE;
        `);

  // Create the drivers table

  await pool.query(`
  CREATE TABLE drivers (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    driver_name VARCHAR(255) NOT NULL,
    driver_team VARCHAR(255) NOT NULL
  );
`);

  // Create the results table with a foreign key to the artist table

  await pool.query(`
    CREATE TABLE results (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      driver_id INT REFERENCES drivers(id),
      date VARCHAR(255) NOT NULL,
      race_location VARCHAR(255) NOT NULL,
      race_result VARCHAR(255) NOT NULL,
      fastest_lap VARCHAR(255) NOT NULL,
      retired VARCHAR(255) NOT NULL
    );
`);

  // Seed the drivers table - fill in the data
  await pool.query(`
      INSERT INTO drivers (driver_name, driver_team)
      VALUES
          ('Max Verstappen', 'RED BULL RACING HONDA RBPT'),
          ('Sergio Perez', 'RED BULL RACING HONDA RBPT'),
          ('Carlos Sainz', 'FERRARI'),
          ('Charles Leclerc', 'FERRARI'),
          ('George Russell', 'MERCEDES'),
          ('Lando Norris', 'MCLAREN MERCEDES'),
          ('Lewis Hamilton', 'MERCEDES'),
          ('Oscar Piastri', 'MCLAREN MERCEDES'),
          ('Fernando Alonso', 'ASTON MARTIN ARAMCO MERCEDES'),
          ('Lance Stroll', 'ASTON MARTIN ARAMCO MERCEDES'),
          ('Zhou Guanyu', 'KICK SAUBER FERRARI'),
          ('Kevin Magnussen', 'HAAS FERRARI'),
          ('Daniel Ricciardo', 'RB HONDA RBPT'),
          ('Yuki Tsunoda', 'RB HONDA RBPT'),
          ('Alexander Albon', 'WILLIAMS MERCEDES'),
          ('Nico Hulkenberg', 'HAAS FERRARI'),
          ('Esteban Ocon', 'ALPINE RENAULT'),
          ('Pierre Gasly', 'ALPINE RENAULT'),
          ('Valtteri Bottas', 'KICK SAUBER FERRARI'),
          ('Logan Sargeant', 'WILLIAMS MERCEDES'),
          ('Oliver Bearman', 'FERRARI')
`);

  // Seed the results table - fill in the data
  await pool.query(`
      INSERT INTO results (driver_id, date, race_location, race_result, fastest_lap, retired)
      VALUES
          ('1', '02.03.24', 'Bahrain', '1', '1:32.608', 'No'),
          ('2', '02.03.24', 'Bahrain', '2', '1:34.364', 'No'),
          ('3', '02.03.24', 'Bahrain', '3', '1:34.507', 'No'),
          ('4', '02.03.24', 'Bahrain', '4', '1:34.090', 'No'),
          ('5', '02.03.24', 'Bahrain', '5', '1:35.065', 'No'),
          ('6', '02.03.24', 'Bahrain', '6', '1:34.476', 'No'),
          ('7', '02.03.24', 'Bahrain', '7', '1:34.722', 'No'),
          ('8', '02.03.24', 'Bahrain', '8', '1:34.983', 'No'),
          ('9', '02.03.24', 'Bahrain', '9', '1:34.199', 'No'),
          ('10', '02.03.24', 'Bahrain', '10', '1:35.632', 'No'),
          ('11', '02.03.24', 'Bahrain', '11', '1:35.458', 'No'),
          ('12', '02.03.24', 'Bahrain', '12', '1:35.570', 'No'),
          ('13', '02.03.24', 'Bahrain', '13', '1:35.163', 'No'),
          ('14', '02.03.24', 'Bahrain', '14', '1:35.833', 'No'),
          ('15', '02.03.24', 'Bahrain', '15', '1:35.723', 'No'),
          ('16', '02.03.24', 'Bahrain', '16', '1:34.834', 'No'),
          ('17', '02.03.24', 'Bahrain', '17', '1:36.226', 'No'),
          ('18', '02.03.24', 'Bahrain', '18', '1:34.805', 'No'),
          ('19', '02.03.24', 'Bahrain', '19', '1:36.202', 'No'),
          ('20', '02.03.24', 'Bahrain', '20', '1:34.735', 'No'),
          ('1', '09.03.24', 'Jeddah', '1', '1:32.608', 'No'),
          ('2', '09.03.24', 'Jeddah', '2', '1:34.364', 'No'),
          ('3', '09.03.24', 'Jeddah', '3', '1:34.507', 'No'),
          ('4', '09.03.24', 'Jeddah', 'DNS', '1:34.090', 'DNS'),
          ('5', '09.03.24', 'Jeddah', '6', '1:35.065', 'No'),
          ('6', '09.03.24', 'Jeddah', '8', '1:34.476', 'No'),
          ('7', '09.03.24', 'Jeddah', '9', '1:34.722', 'No'),
          ('8', '09.03.24', 'Jeddah', '4', '1:34.983', 'No'),
          ('9', '09.03.24', 'Jeddah', '5', '1:34.199', 'No'),
          ('10', '09.03.24', 'Jeddah', 'NC', '1:35.632', 'Yes'),
          ('11', '09.03.24', 'Jeddah', '18', '1:35.458', 'No'),
          ('12', '09.03.24', 'Jeddah', '12', '1:35.570', 'No'),
          ('13', '09.03.24', 'Jeddah', '16', '1:35.163', 'No'),
          ('14', '09.03.24', 'Jeddah', '15', '1:35.833', 'No'),
          ('15', '09.03.24', 'Jeddah', '11', '1:35.723', 'No'),
          ('16', '09.03.24', 'Jeddah', '10', '1:34.834', 'No'),
          ('17', '09.03.24', 'Jeddah', '13', '1:36.226', 'No'),
          ('18', '09.03.24', 'Jeddah', 'NC', '1:34.805', 'Yes'),
          ('19', '09.03.24', 'Jeddah', '17', '1:36.202', 'No'),
          ('20', '09.03.24', 'Jeddah', '14', '1:34.735', 'No'),
          ('21', '09.03.24', 'Jeddah', '7', '1:34.735', 'No'),
          ('1', '24.03.24', 'Melbourne', 'DNF', '1:23.115', 'Yes'),
          ('2', '24.03.24', 'Melbourne', '5', '1:20.388', 'No'),
          ('3', '24.03.24', 'Melbourne', '1', '1:20.031', 'No'),
          ('4', '24.03.24', 'Melbourne', '2', '1:19.813', 'DNS'),
          ('5', '24.03.24', 'Melbourne', 'DNF', '1:35.065', 'Yes'),
          ('6', '24.03.24', 'Melbourne', '3', '1:19.915', 'No'),
          ('7', '24.03.24', 'Melbourne', 'DNF', '1:22.444', 'Yes'),
          ('8', '24.03.24', 'Melbourne', '4', '1:20.199', 'No'),
          ('9', '24.03.24', 'Melbourne', '8', '1:20.493', 'No'),
          ('10', '24.03.24', 'Melbourne', '6', '1:20.930', 'No'),
          ('11', '24.03.24', 'Melbourne', '15', '1:35.458', 'No'),
          ('12', '24.03.24', 'Melbourne', '10', '1:21.082', 'No'),
          ('13', '24.03.24', 'Melbourne', '12', '1:21.239', 'No'),
          ('14', '24.03.24', 'Melbourne', '7', '1:21.145', 'No'),
          ('15', '24.03.24', 'Melbourne', '11', '1:21.618', 'No'),
          ('16', '24.03.24', 'Melbourne', '9', '1:34.834', 'No'),
          ('17', '24.03.24', 'Melbourne', '16', '1:21.354', 'No'),
          ('18', '24.03.24', 'Melbourne', '13', '1:21.240', 'No'),
          ('19', '24.03.24', 'Melbourne', '14', '1:21.422', 'No'),
          ('20', '24.03.24', 'Melbourne', '14', '1:34.735', 'No'),
          ('1', '07.04.24', 'Suzuka', '1', '1:32.608', 'No'),
          ('2', '07.04.24', 'Suzuka', '2', '1:34.364', 'No'),
          ('3', '07.04.24', 'Suzuka', '3', '1:34.507', 'No'),
          ('4', '07.04.24', 'Suzuka', '4', '1:34.090', 'No'),
          ('5', '07.04.24', 'Suzuka', '7', '1:35.065', 'No'),
          ('6', '07.04.24', 'Suzuka', '5', '1:34.476', 'No'),
          ('7', '07.04.24', 'Suzuka', '9', '1:34.722', 'No'),
          ('8', '07.04.24', 'Suzuka', '8', '1:34.983', 'No'),
          ('9', '07.04.24', 'Suzuka', '6', '1:34.199', 'No'),
          ('10', '07.04.24', 'Suzuka', '12', '1:35.632', 'No'),
          ('11', '07.04.24', 'Suzuka', 'NC', '1:35.458', 'Yes'),
          ('12', '07.04.24', 'Suzuka', '13', '1:35.570', 'No'),
          ('13', '07.04.24', 'Suzuka', 'NC', '1:35.163', 'Yes'),
          ('14', '07.04.24', 'Suzuka', '10', '1:35.833', 'No'),
          ('15', '07.04.24', 'Suzuka', 'NC', '1:35.723', 'Yes'),
          ('16', '07.04.24', 'Suzuka', '11', '1:34.834', 'No'),
          ('17', '07.04.24', 'Suzuka', '15', '1:36.226', 'No'),
          ('18', '07.04.24', 'Suzuka', '16', '1:34.805', 'No'),
          ('19', '07.04.24', 'Suzuka', '14', '1:36.202', 'No'),
          ('20', '07.04.24', 'Suzuka', '17', '1:34.735', 'No')
`);
  // } catch (e) {
  //   console.log(JSON.stringify(e, null, 2));
  // }
}

resetDatabase();
