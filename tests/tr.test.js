import unitTestingTask from '../unitTestingTask';
import '../lang/tr';

describe('Turkish Language Configuration', () => {
  const lang = unitTestingTask._languages['tr'];

  test('it should return the correct month name', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.months(date)).toBe('Ocak');
  });

  test('it should return the correct short month name', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.monthsShort(date)).toBe('Oca');
  });

  test('it should return the correct weekday name', () => {
    expect(lang.weekdays[0]).toBe('Pazar');
    expect(lang.weekdays[6]).toBe('Cumartesi');
  });

  test('it should return the correct short weekday name', () => {
    expect(lang.weekdaysShort[0]).toBe('Paz');
    expect(lang.weekdaysShort[6]).toBe('Cts');
  });

  test('it should return the correct minimal weekday name', () => {
    expect(lang.weekdaysMin[0]).toBe('Pz');
    expect(lang.weekdaysMin[6]).toBe('Ct');
  });
});
