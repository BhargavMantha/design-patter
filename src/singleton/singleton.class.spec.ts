import { Singleton } from './singleton.class';

@Singleton
class DatabaseConnection {
  connectionId: number;

  constructor() {
    this.connectionId = Math.floor(Math.random() * 1000);
  }
}

describe('Singleton Decorator', () => {
  it('should create only one instance', () => {
    const instance1 = (DatabaseConnection as any).getInstance();
    const instance2 = (DatabaseConnection as any).getInstance();
    expect(instance1).toBe(instance2);
    expect(instance1).toBeInstanceOf(DatabaseConnection);
    expect(instance2).toBeInstanceOf(DatabaseConnection);
    expect(instance1.connectionId).toEqual(instance2.connectionId);
  });

  it('should maintain the same properties across instances', () => {
    const instance1 = (DatabaseConnection as any).getInstance();
    const instance2 = (DatabaseConnection as any).getInstance();
    expect(instance1.connectionId).toBe(instance2.connectionId);
  });

  it('should prevent direct instantiation', () => {
    const directInstance = new DatabaseConnection();
    const singletonInstance = (DatabaseConnection as any).getInstance();
    expect(directInstance).toBe(singletonInstance);
  });
});
