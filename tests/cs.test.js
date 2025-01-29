import unitTestingTask from '../unitTestingTask';
import '../lang/cs';

describe('Czech Language Configuration', () => {
  const lang = unitTestingTask._languages['cs'];

  test('it should return the correct month name in nominative case', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.months(date, 'MMMM')).toBe('leden');
  });

  test('it should return the correct month name in accusative case', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.months(date, 'dd MMMM')).toBe('ledna');
  });

  test('it should return the correct short month name in nominative case', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.monthsShort(date, 'MMMM')).toBe('led');
  });

  test('it should return the correct short month name in accusative case', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.monthsShort(date, 'dd MMMM')).toBe('led');
  });

  test('it should return the correct weekday name', () => {
    expect(lang.weekdays[0]).toBe('neděle');
    expect(lang.weekdays[6]).toBe('sobota');
  });

  test('it should return the correct short weekday name', () => {
    expect(lang.weekdaysShort[0]).toBe('ne');
    expect(lang.weekdaysShort[6]).toBe('so');
  });

  test('it should return the correct minimal weekday name', () => {
    expect(lang.weekdaysMin[0]).toBe('ne');
    expect(lang.weekdaysMin[6]).toBe('so');
  });

  test('it should return the correct meridiem for morning', () => {
    expect(lang.meridiem(8)).toBe('dopoledne');
  });

  test('it should return the correct meridiem for afternoon', () => {
    expect(lang.meridiem(14)).toBe('odpoledne');
  });
});
