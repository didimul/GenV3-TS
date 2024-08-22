# GenV3 - TS

#### GenV3 (formerly GenLetter) is a TypeScript library for generating random strings of letters and numbers, with customizable length.

## Installation

```bash
npm install genv3-ts
```

## Usage

``` typescript
import { Gen } from 'genv3';

const howMany: number = 10;
console.log(Gen.generate('all', howMany)); // axiifjn08o
console.log(Gen.generate('numbers', howMany)); // 8878209589
console.log(Gen.generate('letters', howMany)); // tcamvlmqbe
```

## API

### Gen.generate(type: 'all' | 'numbers' | 'letters', howMany: number): string

- **type**: Specifies the type of characters to include in the generated string.
  - `'all'` - Letters and numbers
  - `'numbers'` - Only numbers
  - `'letters'` - Only letters
- **howMany**: The length of the generated string.