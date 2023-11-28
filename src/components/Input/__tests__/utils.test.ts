import {isValidInputNumber} from "../utils";

test('String input returns false', () => {
  function getRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  const input = getRandomString(Math.round(Math.random() * 10))

  expect(isValidInputNumber(input)).toBe(false)
})

test('Negative number returns false', () => {
  const input = Math.round(Math.random() * 100) * -1

  expect(isValidInputNumber(input)).toBe(false)
})

test('Zero returns false', () => {
  const input = 0

  expect(isValidInputNumber(input)).toBe(false)
})

test('Positive non-null number returns true', () => {
  const input = Math.round(Math.random() * 100)

  expect(isValidInputNumber(input)).toBe(true)
})