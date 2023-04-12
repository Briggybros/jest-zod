# jest-zod #

## Usage ##

```js
it('should return data matching my schema', () => {
    const result = functionUnderTest();
    expect(result).toSatisfySchema(myZodSchema);
});
```

## Setup ##

### testSetup.js: ###
```js
import zodMatchers from 'jest-zod';

expect.extend(zodMatchers);
```

### package.json ###
```json
"jest": {
  "setupFilesAfterEnv": ["./testSetup.js"]
}
```
