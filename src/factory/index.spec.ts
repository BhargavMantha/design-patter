import { DatabaseFactory } from './data-base.factory';

describe('DatabaseFactory', () => {
  it('should ensure DatabaseFactory is a singleton', () => {
    const instance1 = DatabaseFactory.getInstance();
    const instance2 = DatabaseFactory.getInstance();
    expect(instance1).toBe(instance2);
  });

  it('should get a MySQL factory and create a connection', () => {
    const factoryInstance = DatabaseFactory.getInstance();
    const mysqlFactory = factoryInstance.getFactory('MySQL');
    const connection = mysqlFactory.getConnection();

    expect(connection).toBeDefined();
    expect(connection.connect).toBeDefined();
    expect(connection.disconnect).toBeDefined();
  });

  it('should call connect and disconnect on the MySQL connection', () => {
    const factoryInstance = DatabaseFactory.getInstance();
    const mysqlFactory = factoryInstance.getFactory('MySQL');
    const connection = mysqlFactory.getConnection();
    const connectionConnectSpy = jest.spyOn(connection, 'connect');
    const connectionDisconnectSpy = jest.spyOn(connection, 'disconnect');
    connection.connect();
    connection.disconnect();

    expect(connectionConnectSpy).toHaveBeenCalledTimes(1);
    expect(connectionDisconnectSpy).toHaveBeenCalledTimes(1);
  });
});
