import { IDatabaseConnection } from '../../db/interface/db..connection.interface';

export interface IDatabaseConnectionFactory {
  getConnection(): IDatabaseConnection;
}
