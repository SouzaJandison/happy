import { createConnection } from 'typeorm';

createConnection().then(() => console.log('- successful connected with database'))