import { DatabaseFactory } from './data-base.factory';

const factoryInstance = DatabaseFactory.getInstance();
const mysqlFactory = factoryInstance.getFactory('MySQL');
const connection = mysqlFactory.getConnection();
connection.connect();
connection.disconnect();
