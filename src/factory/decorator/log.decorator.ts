import { setMetadata } from './set-metadata.decorator';

export function Log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const params = args.map(a => JSON.stringify(a)).join();
    const result = method.apply(this, args);
    console.log(`Calling ${propertyName}(${params}) returned ${JSON.stringify(result)}`);
    return result;
  };

  setMetadata(target, propertyName, { logged: true });
}
