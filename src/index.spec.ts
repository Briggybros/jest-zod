import { z } from 'zod';
import zodMatchers from './index';

expect.extend(zodMatchers);

describe('zodMatchers', () => {
  it('should reject values that do not match the schema', () => {
    const schema = z.string();
    const data: unknown = 123;
    expect(data).not.toSatisfySchema(schema);
  });

  it('should accept values that match the schema', () => {
    const schema = z.string();
    const data: unknown = 'abc';
    expect(data).toSatisfySchema(schema);
  });

  it('can be used as an asymmetric matcher', () => {
    const schema = z.string();
    const data1 = ['abc', 123];
    const data2 = [123, false];
    expect(data1).toStrictEqual(expect.arrayContaining([expect.toSatisfySchema(schema)]));
    expect(data2).not.toStrictEqual(expect.arrayContaining([expect.toSatisfySchema(schema)]));
  });
});
