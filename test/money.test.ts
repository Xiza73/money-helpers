import { pattern, format, parse } from '../src';

describe('pattern', () => {
  it('works base', () => {
    expect(pattern('a1f2as5123f6fh...515..5.1,5.25')).toEqual('1,251,236.25');
  });
  it('works with separator', () => {
    expect(pattern('a1f2as5123f6fh...5.5,5.25', { separator: '.' })).toEqual(
      '125.123.655,52'
    );
  });
});

describe('format', () => {
  it('works base', () => {
    expect(format(12.5)).toEqual('$12.50');
  });
  it('works USD', () => {
    expect(format(1251.236, 'USD')).toEqual('$1,251.24');
  });
  it('works PHP', () => {
    expect(format(1251.236, 'PHP')).toEqual('₱1,251.24');
  });
  it('works GBP', () => {
    expect(format(1251.236, 'GBP')).toEqual('£1,251.24');
  });
  it('works AUD', () => {
    expect(format(1251.236, 'AUD')).toEqual('$1,251.24');
  });
  it('works CAD', () => {
    expect(format(1251.236, 'CAD')).toEqual('$1,251.24');
  });
  it('works CNY', () => {
    expect(format(1251.236, 'CNY')).toEqual('¥1,251.24');
  });
});

describe('parse', () => {
  it('works base', () => {
    expect(parse('1,251,236.25')).toEqual(1251236.25);
  });
  it('works CZK', () => {
    expect(parse('1.251,24 Kč', '.')).toEqual(1251.24);
  });
  it('works HUF', () => {
    expect(parse('1 251,24 Ft', '.')).toEqual(1251.24);
  });
  it('works ILS', () => {
    expect(parse('₪1,251.24')).toEqual(1251.24);
  });
  it('works PHP', () => {
    expect(parse('₱1,251.24')).toEqual(1251.24);
  });
  it('works ZAR', () => {
    expect(parse('R1,251.24')).toEqual(1251.24);
  });
  it('works EUR', () => {
    expect(parse('€1,251.24')).toEqual(1251.24);
  });
  it('works GBP', () => {
    expect(parse('£1,251.24')).toEqual(1251.24);
  });
  it('works AUD', () => {
    expect(parse('A$1,251.24')).toEqual(1251.24);
  });
  it('works BRL', () => {
    expect(parse('R$1,251.24')).toEqual(1251.24);
  });
  it('works CAD', () => {
    expect(parse('$1,251.24')).toEqual(1251.24);
  });
  it('works CNY', () => {
    expect(parse('¥1,251.24')).toEqual(1251.24);
  });
});
