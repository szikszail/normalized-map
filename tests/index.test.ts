import { NormalizedMap } from "../src";

describe("NormalizedMap", () => {
  it("get", () => {
    const map = new NormalizedMap<number>();
    map.set("a", 1);
    expect(map.get("a")).toBe(1);
    expect(map.get("A")).toBe(1);
    expect(map.get(" a ")).toBe(1);
    expect(map.get("a!")).toBe(1);
  });

  it("has", () => {
    const map = new NormalizedMap<number>();
    map.set("a", 1);
    expect(map.has("a")).toBe(true);
    expect(map.has("A")).toBe(true);
    expect(map.has(" a ")).toBe(true);
    expect(map.has("a!")).toBe(true);
  });

  it("delete", () => {
    const map = new NormalizedMap<number>();
    map.set("a", 1);
    expect(map.delete("a")).toBe(true);
    expect(map.delete("A")).toBe(false);
    expect(map.delete(" a ")).toBe(false);
    expect(map.delete("a!")).toBe(false);
  });

  it("set", () => {
    const map = new NormalizedMap<number>();
    map.set("a", 1);
    expect(map.get("a")).toBe(1);
    map.set("A", 2);
    expect(map.get("a")).toBe(2);
    map.set(" a ", 3);
    expect(map.get("a")).toBe(3);
    map.set("a!", 4);
    expect(map.get("a")).toBe(4);
  });

  it("constructor", () => {
    const map = new NormalizedMap<number>([
      ["a", 1],
      ["A", 2],
      [" a ", 3],
      ["a!", 4]
    ]);
    expect(map.get("a")).toBe(4);
  });

  it("keys", () => {
    const map = new NormalizedMap<number>([
      ["a", 1],
      ["A", 2],
      [" a ", 3],
      ["a!", 4]
    ]);
    expect(Array.from(map.keys())).toEqual(["a"]);
  });

  it("keys with non-string keys", () => {
    const map = new NormalizedMap<number>([
      // @ts-expect-error
      [1, 1],
      // @ts-expect-error
      [2, 2],
      // @ts-expect-error
      [3, 3],
      // @ts-expect-error
      [4, 4]
    ]);
    expect(Array.from(map.keys())).toEqual(["1", "2", "3", "4"]);
  });
});
