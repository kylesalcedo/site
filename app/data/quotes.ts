export const quotes = [
  "[we build the world we build in]",
  "[build cool stuff, heal the world]",
  "[build cool shit, heal the world]",
  "[from the terminal to the treatment table, these hands hack and heal]",
  "[build, build, build, build, build...]",
  "[friendly reminder we can just make stuff]",
  "[to master a craft is a spiritual, and sometimes digital, process]",
  "[inner peace, outer peace, middle-out compression peace]",
  "[the best posture is your next posture]",
  "[build 'til u flow, then build 'til you float]",
  "[ctrl+alt+heal]",
  "[your IP address is ___]",
]

export function getRandomQuote(): string {
  return quotes[Math.floor(Math.random() * quotes.length)]
}
