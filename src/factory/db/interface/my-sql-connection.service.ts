import { IDatabaseConnection } from './db..connection.interface';

export class MySQLConnection implements IDatabaseConnection {
  connect(): void {
    console.log('MySQL: Connecting to database...');
  }
  disconnect(): void {
    console.log('MySQL: Disconnecting from database...');
  }
}
