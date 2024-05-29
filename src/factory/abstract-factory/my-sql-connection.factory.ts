import { IDatabaseConnection } from '../db/interface/db..connection.interface';
import { MySQLConnection } from '../db/interface/my-sql-connection.service';
import { Log } from '../decorator/log.decorator';
import { MeasurePerformance } from '../decorator/measure.decorator';
import { IDatabaseConnectionFactory } from './interface/db-connection.factory';

export class MySQLConnectionFactory implements IDatabaseConnectionFactory {
  @Log
  @MeasurePerformance
  getConnection(): IDatabaseConnection {
    return new MySQLConnection();
  }
}
