import { expect, test } from 'vitest';

import Utils from '../../src/helpers/Utils.js';

test('should work as expected', () => {
  expect(Utils.add(1, 1)).toBe(2);
});
