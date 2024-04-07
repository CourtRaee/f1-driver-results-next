import pool from "../index.js";

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
          ('21', '09.03.24', 'Jeddah', '1', '1:32.608'), 'No',
          ('22', '09.03.24', 'Jeddah', '2', '1:34.364'), 'No',
          ('23', '09'03'24', 'Jeddah', '3', '1:34.507'), 'No',
          ('24', '09.03.24', 'Jeddah', 'DNS', '1:34.090'), 'DNS',
          ('25', '09.03.24', 'Jeddah', '6', '1:35.065'), 'No',
          ('26', '09.03.24', 'Jeddah', '8', '1:34.476'), 'No',
          ('27', '09.03.24', 'Jeddah', '9', '1:34.722'), 'No',
          ('28', '09.03.24', 'Jeddah', '4', '1:34.983'), 'No',
          ('29', '09.03.24', 'Jeddah', '5', '1:34.199'), 'No',
          ('30', '09.03.24', 'Jeddah', 'NC', '1:35.632'), 'Yes',
          ('31', '09.03.24', 'Jeddah', '18', '1:35.458'), 'No',
          ('32', '09.03.24', 'Jeddah', '12', '1:35.570'), 'No',
          ('33', '09.03.24', 'Jeddah', '16', '1:35.163'), 'No',
          ('34', '09.03.24', 'Jeddah', '15', '1:35.833'), 'No',
          ('35', '09.03.24', 'Jeddah', '11', '1:35.723'), 'No',
          ('36', '09.03.24', 'Jeddah', '10', '1:34.834'), 'No',
          ('37', '09.03.24', 'Jeddah', '13', '1:36.226'), 'No',
          ('38', '09.03.24', 'Jeddah', 'NC', '1:34.805'), 'Yes',
          ('39', '09.03.24', 'Jeddah', '17', '1:36.202'), 'No',
          ('40', '09.03.24', 'Jeddah', '14', '1:34.735'), 'No',
          ('41', '09.03.24', 'Jeddah', '7', '1:34.735'), 'No',
          ('41', '09.03.24', 'Melbourne', 'DNF', '1:23.115'), 'Yes',
          ('42', '09.03.24', 'Melbourne', '5', '1:20.388'), 'No',
          ('43', '09'03'24', 'Melbourne', '1', '1:20.031'), 'No',
          ('44', '09.03.24', 'Melbourne', '2', '1:19.813'), 'DNS',
          ('45', '09.03.24', 'Melbourne', 'DNF', '1:35.065'), 'Yes', 
          ('46', '09.03.24', 'Melbourne', '3', '1:19.915'), 'No',
          ('47', '09.03.24', 'Melbourne', 'DNF', '1:22.444'), 'Yes',
          ('48', '09.03.24', 'Melbourne', '4', '1:20.199'), 'No',
          ('49', '09.03.24', 'Melbourne', '8', '1:20.493'), 'No',
          ('50', '09.03.24', 'Melbourne', '6', '1:20.930'), 'No',
          ('51', '09.03.24', 'Melbourne', '15', '1:35.458'), 'No',
          ('52', '09.03.24', 'Melbourne', '10', '1:21.082'), 'No',
          ('53', '09.03.24', 'Melbourne', '12', '1:21.239'), 'No',
          ('54', '09.03.24', 'Melbourne', '7', '1:21.145'), 'No',
          ('55', '09.03.24', 'Melbourne', '11', '1:21.618'), 'No',
          ('56', '09.03.24', 'Melbourne', '9', '1:34.834'), 'No',
          ('57', '09.03.24', 'Melbourne', '16', '1:21.354'), 'No',
          ('58', '09.03.24', 'Melbourne', '13', '1:21.090'), 'No',
          ('59', '09.03.24', 'Melbourne', '14', '1:21.422'), 'No',
          ('60', '09.03.24', 'Melbourne', '14', '1:34.735'), 'No',
          ('61', '09.03.24', 'Suzuka', '1', '1:32.608'), 'No',
          ('62', '09.03.24', 'Suzuka', '2', '1:34.364'), 'No',
          ('63', '09'03'24', 'Suzuka', '3', '1:34.507'), 'No',
          ('64', '09.03.24', 'Suzuka', '4', '1:34.090'), 'No',
          ('65', '09.03.24', 'Suzuka', '7', '1:35.065'), 'No',
          ('66', '09.03.24', 'Suzuka', '5', '1:34.476'), 'No',
          ('67', '09.03.24', 'Suzuka', '9', '1:34.722'), 'No',
          ('68', '09.03.24', 'Suzuka', '8', '1:34.983'), 'No',
          ('69', '09.03.24', 'Suzuka', '6', '1:34.199'), 'No',
          ('70', '09.03.24', 'Suzuka', '12', '1:35.632'), 'No',
          ('71', '09.03.24', 'Suzuka', 'NC', '1:35.458'), 'Yes',
          ('72', '09.03.24', 'Suzuka', '13', '1:35.570'), 'No',
          ('73', '09.03.24', 'Suzuka', 'NC', '1:35.163'), 'Yes',
          ('74', '09.03.24', 'Suzuka', '10', '1:35.833'), 'No',
          ('75', '09.03.24', 'Suzuka', 'NC', '1:35.723'), 'Yes',
          ('76', '09.03.24', 'Suzuka', '11', '1:34.834'), 'No',
          ('77', '09.03.24', 'Suzuka', '15', '1:36.226'), 'No',
          ('78', '09.03.24', 'Suzuka', '16', '1:34.805'), 'No',
          ('79', '09.03.24', 'Suzuka', '14', '1:36.202'), 'No',
          ('80', '09.03.24', 'Suzuka', '17', '1:34.735'), 'No',
`);
}

resetDatabase();
