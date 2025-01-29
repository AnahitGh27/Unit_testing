import unitTestingTask from '../unitTestingTask';
import '../lang/kk';

describe('Kazakh Language Configuration', () => {
  const lang = unitTestingTask._languages['kk'];

  test('it should return the correct month name in nominative case', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.months(date, 'MMMM')).toBe('қаңтар');
  });

  test('it should return the correct month name in accusative case', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.months(date, 'dd MMMM')).toBe('қаңтардың');
  });

  test('it should return the correct short month name', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.monthsShort(date)).toBe('қаң');
  });

  test('it should return the correct weekday name', () => {
    expect(lang.weekdays[0]).toBe('жексенбі');
    expect(lang.weekdays[6]).toBe('сенбі');
  });

  test('it should return the correct short weekday name', () => {
    expect(lang.weekdaysShort[0]).toBe('жк');
    expect(lang.weekdaysShort[6]).toBe('сб');
  });

  test('it should return the correct minimal weekday name', () => {
    expect(lang.weekdaysMin[0]).toBe('жк');
    expect(lang.weekdaysMin[6]).toBe('сб');
  });
});
