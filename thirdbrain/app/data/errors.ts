export const errorMessages = [
  "ERROR 333: You're on the right path, Explorer.",
  "ERROR 404: Peace not found. Look within and try again.",
  "ERROR 101: Overthinking detected. Breathe.",
  "ERROR 500: Internal joy server overloaded.",
]

export function getRandomError(): string {
  return errorMessages[Math.floor(Math.random() * errorMessages.length)]
}
