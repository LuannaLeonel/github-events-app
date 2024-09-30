
// Função distinct: Remove duplicatas com base em um atributo específico
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

  // Função groupBy: Agrupa os objetos por um determinado atributo
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

  // Função orderBy: Ordena a coleção por um atributo específico
  export function orderBy<T>(collection: T[], attribute: keyof T): T[] {
    return [...collection].sort((a, b) => {
      if (a[attribute] < b[attribute]) return -1;
      if (a[attribute] > b[attribute]) return 1;
      return 0;
    });
  }

  // Função fold: Reduz um array de objetos a um valor
  export function fold<T, R>(reducer: (acc: R, item: T) => R, init: R, array: T[]): R {
    return array.reduce(reducer, init);
  }

  // Função compose: Composição de funções de alta ordem
  export function compose<T>(f1: (arg: T) => T, f2: (arg: T) => T): (arg: T) => T {
    return (arg: T) => f1(f2(arg));
  }
