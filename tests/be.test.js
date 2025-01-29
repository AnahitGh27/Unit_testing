import unitTestingTask from '../unitTestingTask';
import '../lang/be';

describe('Belarusian Language Configuration', () => {
  const lang = unitTestingTask._languages['be'];

  test('it should return the correct month name in nominative case', () => {
    const date = new Date(2025, 0, 1);
    expect(lang.months(date, 'MMMM')).toBe('студзень');
  });

  test('it should return the correct month name in accusative case', () => {
    const date = new Date(2025, 0, 1); 
    expect(lang.months(date, 'dd MMMM')).toBe('студзеня');
  });

  test('it should return the correct short month name', () => {
    const date = new Date(2025, 0, 1); 
    expect(lang.monthsShort(date)).toBe('сту');
  });

  test('it should return the correct weekday name', () => {
    expect(lang.weekdays[0]).toBe('нядзеля');
    expect(lang.weekdays[6]).toBe('субота');
  });

  test('it should return the correct short weekday name', () => {
    expect(lang.weekdaysShort[0]).toBe('ндз');
    expect(lang.weekdaysShort[6]).toBe('сб');
  });

  test('it should return the correct minimal weekday name', () => {
    expect(lang.weekdaysMin[0]).toBe('ндз');
    expect(lang.weekdaysMin[6]).toBe('сб');
  });

  test('it should return the correct meridiem for early morning', () => {
    expect(lang.meridiem(3)).toBe('ночы');
  });

  test('it should return the correct meridiem for morning', () => {
    expect(lang.meridiem(8)).toBe('раніцы');
  });

  test('it should return the correct meridiem for afternoon', () => {
    expect(lang.meridiem(14)).toBe('дня');
  });

  test('it should return the correct meridiem for evening', () => {
    expect(lang.meridiem(18)).toBe('вечара');
  });
});
