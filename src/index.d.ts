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
export declare function toSatisfySchema(actual: unknown, schema: Schema): {
    pass: boolean;
    message: () => string;
};
declare const matchers: {
    toSatisfySchema: typeof toSatisfySchema;
};
export default matchers;
