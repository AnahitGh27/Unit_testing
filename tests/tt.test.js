import unitTestingTask from '../unitTestingTask';
import '../lang/tt';

describe('Tatar Language Configuration', () => {
  const lang = unitTestingTask._languages['tt'];

  test('it should return the correct month name', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.months(date)).toBe('гыйнвар');
  });

  test('it should return the correct short month name', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.monthsShort(date)).toBe('гыйнв');
  });

  test('it should return the correct weekday name', () => {
    expect(lang.weekdays[0]).toBe('якшәмбе');
    expect(lang.weekdays[6]).toBe('шимбә');
  });

  test('it should return the correct short weekday name', () => {
    expect(lang.weekdaysShort[0]).toBe('як');
    expect(lang.weekdaysShort[6]).toBe('шм');
  });

  test('it should return the correct minimal weekday name', () => {
    expect(lang.weekdaysMin[0]).toBe('як');
    expect(lang.weekdaysMin[6]).toBe('шм');
  });
});
