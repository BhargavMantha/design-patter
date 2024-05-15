export function Singleton<T extends { new (...args: any[]): object }>(constructor: T) {
  return class extends constructor {
    private static _instance: InstanceType<T>;

    constructor(...args: any[]) {
      super(...args);
      if ((constructor as any)._instance) {
        return (constructor as any)._instance;
      }
      (constructor as any)._instance = this;
    }

    static getInstance(...args: any[]): InstanceType<T> {
      if (!(constructor as any)._instance) {
        (constructor as any)._instance = new this(...args);
      }
      return (constructor as any)._instance;
    }
  } as T;
}
