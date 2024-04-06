import { pool } from "../index.js";

// >>> MAKE SURE YOU UNDERSTAND THIS FILE AND WHAT IT'S DOING <<<
// >>> FEEL FREE TO CHANGE IT TO MAKE YOUR OWN RESOURCES (TABLES AND PROPERTIES) - YOU DON'T HAVE TO USE ALBUMS AND ARTISTS <<<

async function resetDatabase() {
  try {
    await pool.query(`
        DROP TABLE IF EXISTS drivers CASCADE;
        DROP TABLE IF EXISTS results CASCADE;
        `);
  } catch {}

  // Create the drivers table

  await pool.query(`
  CREATE TABLE drivers (
    id INT GENERATED ALWAYS AS IDENTIFY PRIMARY KEY,
    driver_name VARCHAR(255) NOT NULL,
    driver_team VARCHAR(255) NOT NULL
  );
`);

  // Create the results table with a foreign key to the artist table

  await pool.query(`
    CREATE TABLE results (
      id INT GENERATED ALWAYS AS IDENTIFY PRIMARY KEY,
      date VARCHAR(255) NOT NULL,
      race_location VARCHAR(255) NOT NULL,
      race_result VARCHAR(255) NOT NULL,
      fastest_lap VARCHAR(255) NOT NULL,
      retired VARCHAR(255) NOT NULL
    );
`);

  // Seed the drivers table - fill in the data
  await pool.query(`
      INSERT INTO drivers (id, driver_name, driver_team)
      VALUES
          ('1', 'Max Verstappen', 'RED BULL RACING HONDA RBPT'),
          ('2', 'Sergio Perez', 'RED BULL RACING HONDA RBPT'),
          ('3', 'Carlos Sainz', 'FERRARI'),
          ('4', 'Charles Leclerc', 'FERRARI'),
          ('5', 'George Russell', 'MERCEDES'),
          ('6', 'Lando Norris', 'MCLAREN MERCEDES'),
          ('7', 'Lewis Hamilton', 'MERCEDES'),
          ('8', 'Oscar Piastri', 'MCLAREN MERCEDES'),
          ('9', 'Fernando Alonso', 'ASTON MARTIN ARAMCO MERCEDES'),
          ('10', 'Lance Stroll', 'ASTON MARTIN ARAMCO MERCEDES'),
          ('11', 'Zhou Guanyu', 'KICK SAUBER FERRARI'),
          ('12', 'Kevin Magnussen', 'HAAS FERRARI'),
          ('13', 'Daniel Ricciardo', 'RB HONDA RBPT'),
          ('14', 'Yuki Tsunoda', 'RB HONDA RBPT'),
          ('15', 'Alexander Albon', 'WILLIAMS MERCEDES'),
          ('16', 'Nico Hulkenberg', 'HAAS FERRARI'),
          ('17', 'Esteban Ocon', 'ALPINE RENAULT'),
          ('18', 'Pierre Gasly', 'ALPINE RENAULT'),
          ('19', 'Valtteri Bottas', 'KICK SAUBER FERRARI'),
          ('20', 'Logan Sargeant', 'WILLIAMS MERCEDES'),
`);

  // Seed the results table - fill in the data
  await pool.query(`
      INSERT INTO results (id, date, race_location, race_result, fastest_lap, retired)
      VALUES
          ('1', '02.03.24', 'Bahrain', '1', '1:32.608'), 'No',
          ('2', '02.03.24', 'Bahrain', '2', '1:34.364'), 'No',
          ('3', '02'03'24', 'Bahrain', '3', '1:34.507'), 'No',
          ('4', '02.03.24', 'Bahrain', '4', '1:34.090'), 'No',
          ('5', '02.03.24', 'Bahrain', '5', '1:35.065'), 'No',
          ('6', '02.03.24', 'Bahrain', '6', '1:34.476'), 'No',
          ('7', '02.03.24', 'Bahrain', '7', '1:34.722'), 'No',
          ('8', '02.03.24', 'Bahrain', '8', '1:34.983'), 'No',
          ('9', '02.03.24', 'Bahrain', '9', '1:34.199'), 'No',
          ('10', '02.03.24', 'Bahrain', '10', '1:35.632'), 'No',
          ('11', '02.03.24', 'Bahrain', '11', '1:35.458'), 'No',
          ('12', '02.03.24', 'Bahrain', '12', '1:35.570'), 'No',
          ('13', '02.03.24', 'Bahrain', '13', '1:35.163'), 'No',
          ('14', '02.03.24', 'Bahrain', '14', '1:35.833'), 'No',
          ('15', '02.03.24', 'Bahrain', '15', '1:35.723'), 'No',
          ('16', '02.03.24', 'Bahrain', '16', '1:34.834'), 'No',
          ('17', '02.03.24', 'Bahrain', '17', '1:36.226'), 'No',
          ('18', '02.03.24', 'Bahrain', '18', '1:34.805'), 'No',
          ('19', '02.03.24', 'Bahrain', '19', '1:36.202'), 'No',
          ('20', '02.03.24', 'Bahrain', '20', '1:34.735'), 'No',
`);

  // Seed the drivers table - fill in the data
  await pool.query(`
      INSERT INTO drivers (id, driver_name, driver_team)
      VALUES
          ('1', 'Max Verstappen', 'RED BULL RACING HONDA RBPT'),
          ('2', 'Sergio Perez', 'RED BULL RACING HONDA RBPT'),
          ('4', 'Charles Leclerc', 'FERRARI'),
          ('8', 'Oscar Piastri', 'MCLAREN MERCEDES'),
          ('9', 'Fernando Alonso', 'ASTON MARTIN ARAMCO MERCEDES'),
          ('5', 'George Russell', 'MERCEDES'),
          ('21', 'Oliver Bearman', 'FERRARI'),
          ('6', 'Lando Norris', 'MCLAREN MERCEDES'),
          ('7', 'Lewis Hamilton', 'MERCEDES'),
          ('16', 'Nico Hulkenberg', 'HAAS FERRARI'),
          ('15', 'Alexander Albon', 'WILLIAMS MERCEDES'),
          ('12', 'Kevin Magnussen', 'HAAS FERRARI'),
          ('17', 'Esteban Ocon', 'ALPINE RENAULT'),
          ('20', 'Logan Sargeant', 'WILLIAMS MERCEDES'),
          ('14', 'Yuki Tsunoda', 'RB HONDA RBPT'),
          ('13', 'Daniel Ricciardo', 'RB HONDA RBPT'),
          ('19', 'Valtteri Bottas', 'KICK SAUBER FERRARI'),
          ('11', 'Zhou Guanyu', 'KICK SAUBER FERRARI'),
          ('10', 'Lance Stroll', 'ASTON MARTIN ARAMCO MERCEDES'),
          ('18', 'Pierre Gasly', 'ALPINE RENAULT'),
`);

  // Seed the results table - fill in the data
  await pool.query(`
      INSERT INTO results (id, date, race_location, race_result, fastest_lap, retired)
      VALUES
          ('1', '09.03.24', 'Jeddah', '1', '1:32.608'), 'No',
          ('2', '09.03.24', 'Jeddah', '2', '1:34.364'), 'No',
          ('3', '09'03'24', 'Jeddah', '3', '1:34.507'), 'No',
          ('4', '09.03.24', 'Jeddah', 'DNS', '1:34.090'), 'DNS',
          ('5', '09.03.24', 'Jeddah', '6', '1:35.065'), 'No',
          ('6', '09.03.24', 'Jeddah', '8', '1:34.476'), 'No',
          ('7', '09.03.24', 'Jeddah', '9', '1:34.722'), 'No',
          ('8', '09.03.24', 'Jeddah', '4', '1:34.983'), 'No',
          ('9', '09.03.24', 'Jeddah', '5', '1:34.199'), 'No',
          ('10', '09.03.24', 'Jeddah', 'NC', '1:35.632'), 'Yes',
          ('11', '09.03.24', 'Jeddah', '18', '1:35.458'), 'No',
          ('12', '09.03.24', 'Jeddah', '12', '1:35.570'), 'No',
          ('13', '09.03.24', 'Jeddah', '16', '1:35.163'), 'No',
          ('14', '09.03.24', 'Jeddah', '15', '1:35.833'), 'No',
          ('15', '09.03.24', 'Jeddah', '11', '1:35.723'), 'No',
          ('16', '09.03.24', 'Jeddah', '10', '1:34.834'), 'No',
          ('17', '09.03.24', 'Jeddah', '13', '1:36.226'), 'No',
          ('18', '09.03.24', 'Jeddah', 'NC', '1:34.805'), 'Yes',
          ('19', '09.03.24', 'Jeddah', '17', '1:36.202'), 'No',
          ('20', '09.03.24', 'Jeddah', '14', '1:34.735'), 'No',
          ('21', '09.03.24', 'Jeddah', '7', '1:34.735'), 'No',
`);

  await pool.query(`
      INSERT INTO drivers (id, driver_name, driver_team)
      VALUES
          ('1', 'Max Verstappen', 'RED BULL RACING HONDA RBPT'),
          ('2', 'Sergio Perez', 'RED BULL RACING HONDA RBPT'),
          ('3', 'Carlos Sainz', 'FERRARI'),
          ('4', 'Charles Leclerc', 'FERRARI'),
          ('5', 'George Russell', 'MERCEDES'),
          ('6', 'Lando Norris', 'MCLAREN MERCEDES'),
          ('7', 'Lewis Hamilton', 'MERCEDES'),
          ('8', 'Oscar Piastri', 'MCLAREN MERCEDES'),
          ('9', 'Fernando Alonso', 'ASTON MARTIN ARAMCO MERCEDES'),
          ('10', 'Lance Stroll', 'ASTON MARTIN ARAMCO MERCEDES'),
          ('11', 'Zhou Guanyu', 'KICK SAUBER FERRARI'),
          ('12', 'Kevin Magnussen', 'HAAS FERRARI'),
          ('13', 'Daniel Ricciardo', 'RB HONDA RBPT'),
          ('14', 'Yuki Tsunoda', 'RB HONDA RBPT'),
          ('15', 'Alexander Albon', 'WILLIAMS MERCEDES'),
          ('16', 'Nico Hulkenberg', 'HAAS FERRARI'),
          ('17', 'Esteban Ocon', 'ALPINE RENAULT'),
          ('18', 'Pierre Gasly', 'ALPINE RENAULT'),
          ('19', 'Valtteri Bottas', 'KICK SAUBER FERRARI'),
          ('20', 'Logan Sargeant', 'WILLIAMS MERCEDES'),
`);

  await pool.query(`
      INSERT INTO results (id, date, race_location, race_result, fastest_lap, retired)
      VALUES
          ('1', '09.03.24', 'Melbourne', '1', '1:32.608'), 'No',
          ('2', '09.03.24', 'Melbourne', '2', '1:34.364'), 'No',
          ('3', '09'03'24', 'Melbourne', '3', '1:34.507'), 'No',
          ('4', '09.03.24', 'Melbourne', 'DNS', '1:34.090'), 'DNS',
          ('5', '09.03.24', 'Melbourne', '6', '1:35.065'), 'No',
          ('6', '09.03.24', 'Melbourne', '8', '1:34.476'), 'No',
          ('7', '09.03.24', 'Melbourne', '9', '1:34.722'), 'No',
          ('8', '09.03.24', 'Melbourne', '4', '1:34.983'), 'No',
          ('9', '09.03.24', 'Melbourne', '5', '1:34.199'), 'No',
          ('10', '09.03.24', 'Melbourne', 'NC', '1:35.632'), 'Yes',
          ('11', '09.03.24', 'Melbourne', '18', '1:35.458'), 'No',
          ('12', '09.03.24', 'Melbourne', '12', '1:35.570'), 'No',
          ('13', '09.03.24', 'Melbourne', '16', '1:35.163'), 'No',
          ('14', '09.03.24', 'Melbourne', '15', '1:35.833'), 'No',
          ('15', '09.03.24', 'Melbourne', '11', '1:35.723'), 'No',
          ('16', '09.03.24', 'Melbourne', '10', '1:34.834'), 'No',
          ('17', '09.03.24', 'Melbourne', '13', '1:36.226'), 'No',
          ('18', '09.03.24', 'Melbourne', 'NC', '1:34.805'), 'Yes',
          ('19', '09.03.24', 'Melbourne', '17', '1:36.202'), 'No',
          ('20', '09.03.24', 'Melbourne', '14', '1:34.735'), 'No',
          ('21', '09.03.24', 'Melbourne', '7', '1:34.735'), 'No',
`);
}

resetDatabase();
