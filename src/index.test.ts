import { xbinrange, binrange } from './index';

describe('xbinrange', () => {
  test('xbinrange(0, 0)', () => {
    const res = [...xbinrange(0, 0)];
    expect(res).toEqual([]);
  });
  test('xbinrange(0, -1)', () => {
    const res = [...xbinrange(0, -1)];
    expect(res).toEqual([]);
  });
  test('xbinrange(0, 1)', () => {
    const res = [...xbinrange(0, 1)];
    expect(res).toEqual([0]);
  });
  test('xbinrange(0, 2)', () => {
    const res = [...xbinrange(0, 2)];
    expect(res).toMatchInlineSnapshot(`
      Array [
        1,
        0,
      ]
    `);
  });
  test('xbinrange(0, 4)', () => {
    const res = [...xbinrange(0, 4)];
    expect(res).toMatchInlineSnapshot(`
      Array [
        2,
        1,
        3,
        0,
      ]
    `);
  });
  test('xbinrange(0, 7)', () => {
    const res = [...xbinrange(0, 7)];
    expect(res).toMatchInlineSnapshot(`
      Array [
        3,
        1,
        5,
        0,
        2,
        4,
        6,
      ]
    `);
  });
  test('xbinrange(0, 13)', () => {
    const res = [...xbinrange(0, 13)];
    expect(res).toMatchInlineSnapshot(`
      Array [
        6,
        3,
        10,
        1,
        5,
        8,
        12,
        0,
        2,
        4,
        7,
        9,
        11,
      ]
    `);
  });
  test('xbinrange(0, 5, 0.25)', () => {
    const res = [...xbinrange(0, 5, 0.25)];
    expect(res).toMatchInlineSnapshot(`
      Array [
        2.5,
        1.25,
        3.75,
        0.5,
        2,
        3.25,
        4.5,
        0.25,
        1,
        1.75,
        2.25,
        3,
        3.5,
        4.25,
        4.75,
        0,
        0.75,
        1.5,
        2.75,
        4,
      ]
    `);
  });
  test('binrange(0, 5.1, 0.25)', () => {
    const res = binrange(0, 5.1, 0.25);
    expect(res).toMatchInlineSnapshot(`
      Array [
        2.5,
        1.25,
        4,
        0.5,
        2,
        3.25,
        4.75,
        0.25,
        1,
        1.75,
        2.25,
        3,
        3.75,
        4.5,
        5,
        0,
        0.75,
        1.5,
        2.75,
        3.5,
        4.25,
      ]
    `);
  });
  test('binrange(0, 5.25, 0.25)', () => {
    const res = binrange(0, 5.25, 0.25);
    expect(res).toMatchInlineSnapshot(`
      Array [
        2.5,
        1.25,
        4,
        0.5,
        2,
        3.25,
        4.75,
        0.25,
        1,
        1.75,
        2.25,
        3,
        3.75,
        4.5,
        5,
        0,
        0.75,
        1.5,
        2.75,
        3.5,
        4.25,
      ]
    `);
  });
  test('binrange(0, 0, 0.25)', () => {
    const res = binrange(0, 0, 0.25);
    expect(res).toMatchInlineSnapshot(`Array []`);
  });
  test('binrange(0, 2, 0)', () => {
    expect(() => binrange(0, 2, 0)).toThrowErrorMatchingInlineSnapshot(
      `"Step can not be falsy value"`,
    );
  });
});
