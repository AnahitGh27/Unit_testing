import unitTestingTask from '../unitTestingTask';
import '../lang/uk';

describe('Ukrainian Language Configuration', () => {
  const lang = unitTestingTask._languages['uk'];

  test('it should return the correct month name in nominative case', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.months(date, 'MMMM')).toBe('січень');
  });

  test('it should return the correct month name in accusative case', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.months(date, 'dd MMMM')).toBe('січня');
  });

  test('it should return the correct short month name', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.monthsShort(date)).toBe('січ');
  });

  test('it should return the correct weekday name', () => {
    expect(lang.weekdays[0]).toBe('неділя');
    expect(lang.weekdays[6]).toBe('субота');
  });

  test('it should return the correct short weekday name', () => {
    expect(lang.weekdaysShort[0]).toBe('нд');
    expect(lang.weekdaysShort[6]).toBe('сб');
  });

  test('it should return the correct minimal weekday name', () => {
    expect(lang.weekdaysMin[0]).toBe('нд');
    expect(lang.weekdaysMin[6]).toBe('сб');
  });

  test('it should return the correct meridiem for night', () => {
    expect(lang.meridiem(3)).toBe('ночі');
  });

  test('it should return the correct meridiem for morning', () => {
    expect(lang.meridiem(8)).toBe('ранку');
  });

  test('it should return the correct meridiem for afternoon', () => {
    expect(lang.meridiem(14)).toBe('дня');
  });

  test('it should return the correct meridiem for evening', () => {
    expect(lang.meridiem(18)).toBe('вечора');
  });
});
