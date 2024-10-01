
  export function distinct<T>(collection: T[], attribute: keyof T): T[] {
    const seen = new Set();
    return collection.filter(item => {
      const value = item[attribute];
      if (seen.has(value)) {
        return false;
      }
      seen.add(value);
      return true;
    });
  }
  export function groupBy<T>(collection: T[], attribute: keyof T): Record<string, T[]> {
    return collection.reduce((acc, item) => {
      const key = String(item[attribute]);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {} as Record<string, T[]>);
  }

  export function orderBy<T>(collection: T[], attribute: keyof T): T[] {
    return [...collection].sort((a, b) => {
      if (a[attribute] < b[attribute]) return -1;
      if (a[attribute] > b[attribute]) return 1;
      return 0;
    });
  }

  export function fold<T, R>(reducer: (acc: R, item: T) => R, init: R, array: T[]): R {
    return array.reduce(reducer, init);
  }

  export function compose<T>(f1: (arg: T) => T, f2: (arg: T) => T): (arg: T) => T {
    return (arg: T) => f1(f2(arg));
  }
