export const isValidInputNumber = (input: unknown): input is number => {
  return !isNaN(Number(input)) && Number(input) > 0
}