import unitTestingTask from '../unitTestingTask';
import '../lang/ru';

describe('Russian Language Configuration', () => {
  const lang = unitTestingTask._languages['ru'];

  test('it should return the correct month name in nominative case', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.months(date, 'MMMM')).toBe('январь');
  });

  test('it should return the correct month name in accusative case', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.months(date, 'dd MMMM')).toBe('января');
  });

  test('it should return the correct short month name in nominative case', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.monthsShort(date, 'MMMM')).toBe('янв');
  });

  test('it should return the correct short month name in accusative case', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.monthsShort(date, 'dd MMMM')).toBe('янв');
  });

  test('it should return the correct weekday name', () => {
    expect(lang.weekdays[0]).toBe('воскресенье');
    expect(lang.weekdays[6]).toBe('суббота');
  });

  test('it should return the correct short weekday name', () => {
    expect(lang.weekdaysShort[0]).toBe('вс');
    expect(lang.weekdaysShort[6]).toBe('сб');
  });

  test('it should return the correct minimal weekday name', () => {
    expect(lang.weekdaysMin[0]).toBe('вс');
    expect(lang.weekdaysMin[6]).toBe('сб');
  });

  test("it should return 'ночи' for hours between 0 and 3 in meridiem", () => {
    expect(lang.meridiem(2)).toBe('ночи');
  });

  test("it should return 'утра' for hours between 4 and 11 in meridiem", () => {
    expect(lang.meridiem(9)).toBe('утра');
  });

  test("it should return 'дня' for hours between 12 and 16 in meridiem", () => {
    expect(lang.meridiem(14)).toBe('дня');
  });

  test("it should return 'вечера' for hours between 17 and 23 in meridiem", () => {
    expect(lang.meridiem(20)).toBe('вечера');
  });
});
