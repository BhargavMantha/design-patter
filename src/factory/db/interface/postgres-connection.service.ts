import { IDatabaseConnection } from './db..connection.interface';

export class PostgreSQLConnection implements IDatabaseConnection {
  connect(): void {
    console.log('PostgreSQL: Connecting to database...');
  }
  disconnect(): void {
    console.log('PostgreSQL: Disconnecting from database...');
  }
}
