export interface Runnable {
  wasLastRunFine: boolean
  wasLastRunBad: boolean
  isRunning: boolean
  wasRunCount: boolean
  run: Function
}
