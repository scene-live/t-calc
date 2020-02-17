export default class CalculatorStore {
  private current: string;
  private temp: number;
  private operator: string;
  private shouldClearDisplay: boolean;

  constructor () {
    this.current = '0'
    this.temp = 0
    this.operator = ''
    this.shouldClearDisplay = false
  }

  getCurrent () {
    return this.current
  }

  // advice: NUMBERS ではなく NUMERIC＿KEYPAD など
  static NUMBERS = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.']
  static OPERATORS = ['÷', '×', '-', '+', '=']
  static ACTIONS = ['AC', '+/-', '%']

  updateDisplay (value: string, isInput = false) {
    if (isInput) {
      this.inputNumber(value)
      return
    }

    this.pushNumberButton(value)
  }

  pushNumberButton (value: string) {
    if (value === '.' && this.current.indexOf('.') > -1) return

    if (this.operator && this.shouldClearDisplay) {
      this.current = '0'
      this.shouldClearDisplay = false
    }

    this.current = (this.current === '0' && value !== '.')
      ? value
      : this.current + value
  }

  inputNumber (value: string) {
    if (value.split('.').length > 2) return

    if (value === '' && this.current.length === 1) {
      this.current = '0'
      return
    }

    if (this.operator && this.shouldClearDisplay) {
      this.current = value.slice(this.current.length)
      this.shouldClearDisplay = false
      return
    }

    this.current = this.current === '0' && value.indexOf('.') < 0
      ? value.slice(1)
      : value
  }

  deleteLastNumber () {
    if (this.current.length === 1) {
      this.current = '0'
      return
    }

    this.current = this.current.slice(0, -1)
  }

  pushActionButton (action: string) {
    if (action === 'AC') this.clearAll()
    if (action === '+/-') this.switchNegativeNumber()
    if (action === '%') this.showPercentage()
  }

  clearAll () {
    this.current = '0'
    this.temp = 0
    this.operator = ''
    this.shouldClearDisplay = false
  }

  switchNegativeNumber () {
    this.current = String(Number(this.current) * -1)
  }

  showPercentage () {
    this.current = String(Number(this.current) * 0.01)
  }

  pushOperationButton (operator: string) {
    if (operator === '=' && this.operator) {
      this.calculate()
      return
    }

    this.temp = Number(this.current)
    this.operator = operator
    this.shouldClearDisplay = true
  }

  calculate () {
    if (this.operator === '+') this.add()
    if (this.operator === '-') this.minus()
    if (this.operator === '×') this.multiply()
    if (this.operator === '÷') this.divide()

    this.temp = 0
    this.operator = ''
    this.shouldClearDisplay = true
  }

  add () {
    this.current = String(this.temp + Number(this.current))
  }

  minus () {
    this.current = String(this.temp - Number(this.current))
  }

  multiply () {
    this.current = String(this.temp * Number(this.current))
  }

  divide () {
    this.current = String(this.temp / Number(this.current))
  }
}
