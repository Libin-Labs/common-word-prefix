import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('finds common prefix', () => {
  assert.equal(api.commonWordPrefix(['flower', 'flow', 'flight']), 'fl');
});
test('returns full match', () => {
  assert.equal(api.commonWordPrefix(['same', 'same']), 'same');
});
test('returns empty for no common chars', () => {
  assert.equal(api.commonWordPrefix(['a', 'b']), '');
});
test('handles empty collection', () => {
  assert.equal(api.commonWordPrefix([]), '');
});
test('compares Unicode code points', () => {
  assert.equal(api.commonWordPrefix(['😀a', '😀b']), '😀');
});
test('rejects non-string member', () => {
  assert.throws(() => api.commonWordPrefix([1]), TypeError);
});
