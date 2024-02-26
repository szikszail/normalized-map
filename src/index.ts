import debug = require("debug");

const log = debug("normalized-map");

export class NormalizedMap<V> extends Map<string, V> {
  constructor(entries?: ReadonlyArray<readonly [string, V]> | null) {
    super(entries?.map(([key, value]) => [NormalizedMap.normalizeKey(key), value]));
  }

  public get(key: string): V | undefined {
    log(`get: ${key}`);
    return super.get(NormalizedMap.normalizeKey(key));
  }

  public has(key: string): boolean {
    log(`has: ${key}`);
    return super.has(NormalizedMap.normalizeKey(key));
  }

  public delete(key: string): boolean {
    log(`delete: ${key}`);
    return super.delete(NormalizedMap.normalizeKey(key));
  }

  public set(key: string, value: V): this {
    log(`set: ${key} => ${value}`);
    return super.set(NormalizedMap.normalizeKey(key), value);
  }

  private static normalizeKey(key: string): string {
    return key.toString()
      .toLowerCase()
      .replace(/\W/g, "");
  }
}