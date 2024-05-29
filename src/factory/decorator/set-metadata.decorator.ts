export function setMetadata(target: any, key: string, data: any) {
  if (target.__metadata) {
    target.__metadata[key] = data;
  } else {
    target.__metadata = { [key]: data };
  }
}
