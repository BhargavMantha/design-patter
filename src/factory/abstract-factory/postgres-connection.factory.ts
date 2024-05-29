import { IDatabaseConnection } from '../db/interface/db..connection.interface';
import { PostgreSQLConnection } from '../db/interface/postgres-connection.service';
import { Log } from '../decorator/log.decorator';
import { MeasurePerformance } from '../decorator/measure.decorator';
import { IDatabaseConnectionFactory } from './interface/db-connection.factory';

export class PostgreSQLConnectionFactory implements IDatabaseConnectionFactory {
  @Log
  @MeasurePerformance
  getConnection(): IDatabaseConnection {
    return new PostgreSQLConnection();
  }
}
