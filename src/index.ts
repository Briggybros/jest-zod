import { Schema } from 'zod';

declare global {
  namespace jest {
      interface Matchers<R, T> {
          toSatisfySchema(schema: Schema<T>): T;
      }
      interface Expect {
          toSatisfySchema<O>(schema: Schema<O>): O;
      }
  }
}

export function toSatisfySchema(actual: unknown, schema: Schema) {
  if (!schema || !(schema instanceof Schema)) {
    throw new Error('toSatisfySchema must be called with a ZodSchema');
  }

  const pass = schema.safeParse(actual).success;
  return {
    pass,
    message: pass
      ? () => `expected ${actual} not to satisfy schema ${schema}`
      : () => `expected ${actual} to satisfy schema ${schema}`,
  };
}

const matchers = {
  toSatisfySchema,
};

export default matchers;
