import unitTestingTask from '../unitTestingTask';
import '../lang/pl';

describe('Polish Language Configuration', () => {
  const lang = unitTestingTask._languages['pl'];

  test('it should return the correct month name in nominative case', () => {
    const date = new Date(2025, 0, 1); 
    expect(lang.months(date, 'MMMM')).toBe('styczeń');
  });

  test('it should return the correct month name in accusative case', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.months(date, 'dd MMMM')).toBe('stycznia');
  });

  test('it should return the correct short month name in nominative case', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.monthsShort(date, 'MMMM')).toBe('sty');
  });

  test('it should return the correct short month name in accusative case', () => {
    const date = new Date(2023, 0, 1);
    expect(lang.monthsShort(date, 'dd MMMM')).toBe('sty');
  });

  test('it should return the correct weekday name', () => {
    expect(lang.weekdays[0]).toBe('niedziela');
    expect(lang.weekdays[6]).toBe('sobota');
  });

  test('it should return the correct short weekday name', () => {
    expect(lang.weekdaysShort[0]).toBe('nie');
    expect(lang.weekdaysShort[6]).toBe('sb');
  });

  test('it should return the correct minimal weekday name', () => {
    expect(lang.weekdaysMin[0]).toBe('N');
    expect(lang.weekdaysMin[6]).toBe('So');
  });

  test("it should return 'rano' for morning hours in meridiem", () => {
    expect(lang.meridiem(9)).toBe('rano');
  });

  test('it should return an empty string for afternoon hours in meridiem', () => {
    expect(lang.meridiem(15)).toBe('');
  });
});
