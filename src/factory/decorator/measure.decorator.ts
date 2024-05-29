import { setMetadata } from './set-metadata.decorator';

export function MeasurePerformance(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const duration = performance.now() - start;
    console.log(`${propertyName} executed in ${duration.toFixed(2)}ms`);
    return result;
  };
  setMetadata(target, propertyName, { measured: true });
}
