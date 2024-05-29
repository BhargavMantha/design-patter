import { IDatabaseConnectionFactory } from './abstract-factory/interface/db-connection.factory';
import { MySQLConnectionFactory } from './abstract-factory/my-sql-connection.factory';
import { PostgreSQLConnectionFactory } from './abstract-factory/postgres-connection.factory';

export class DatabaseFactory {
  private static instance: DatabaseFactory;
  private constructor() {}

  static getInstance(): DatabaseFactory {
    if (!DatabaseFactory.instance) {
      DatabaseFactory.instance = new DatabaseFactory();
    }
    return DatabaseFactory.instance;
  }

  getFactory(dbType: 'MySQL' | 'PostgreSQL'): IDatabaseConnectionFactory {
    switch (dbType) {
      case 'MySQL':
        return new MySQLConnectionFactory();
      case 'PostgreSQL':
        return new PostgreSQLConnectionFactory();
      default:
        throw new Error('Database type not supported.');
    }
  }
}
