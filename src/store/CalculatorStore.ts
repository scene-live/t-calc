interface History {
  lfs: number|null;
  operator: string;
  rhs: number|null;
  result: string;
}

export default class CalculatorStore {
  private current: string;
  private temp: number;
  private operator: string;
  private shouldClearDisplay: boolean;
  private errors: string[];
  private histories: History[];
  private history: History;
  private lastHistory: History;
  private isCalcurating: boolean;
  private isAllCLeared: boolean;

  constructor () {
    this.current = '0'
    this.temp = 0
    this.operator = ''
    this.shouldClearDisplay = false
    this.errors = []
    this.histories = []
    this.history = {
      lfs: null,
      operator: '',
      rhs: null,
      result: ''
    }
    this.lastHistory = {
      lfs: null,
      operator: '',
      rhs: null,
      result: ''
    }
    this.isCalcurating = false
    this.isAllCLeared = false
  }

  getCurrent () {
    return this.current
  }

  getOperator () {
    return this.operator
  }

  getErrors () {
    return this.errors
  }

  getHistories () {
    return this.histories
  }

  getIsAllCleared () {
    return this.isAllCLeared
  }

  // advice: NUMBERS ではなく NUMERIC＿KEYPAD など
  static NUMBERS = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.']
  static OPERATORS = ['÷', '×', '-', '+', '=']
  static ACTIONS = ['AC', '+/-', '%']

  updateDisplay (value: string, isInput = false) {
    this.isCalcurating = true
    this.history.result = ''
    this.isAllCLeared = false

    if (isInput) {
      this.inputNumber(value)
      this.createHistory()
      this.isCalcurating = false
      return
    }

    this.pushNumberButton(value)
    this.createHistory()
    this.isCalcurating = false
  }

  pushNumberButton (value: string) {
    if (value === '.' && this.current.indexOf('.') > -1) {
      this.addError('小数点は2つ以上入力できません。')
      return
    }

    this.errors = []

    if (this.shouldClearDisplay) {
      this.current = '0'
      this.shouldClearDisplay = false
    }

    this.current = (this.current === '0' && value !== '.')
      ? value
      : this.current + value
  }

  inputNumber (value: string) {
    if (!(/^[-]?[0-9.]*$/.test(value))) {
      this.addError('半角数字と小数点以外は入力できません。')
      return
    }

    if (value.split('.').length > 2) {
      this.addError('小数点は2つ以上入力できません。')
      return
    }

    this.errors = []

    if (value === '' && this.current.length === 1) {
      this.current = '0'
      return
    }

    if (this.shouldClearDisplay) {
      this.current = value.slice(this.current.length)
      this.shouldClearDisplay = false
      return
    }

    this.current = this.current === '0' && value.indexOf('.') < 0
      ? value.slice(1)
      : value
  }

  addError (message: string) {
    if (this.errors.indexOf(message) < 0) this.errors.push(message)
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
    this.lastHistory = { ...this.history }
    this.current = '0'
    this.temp = 0
    this.operator = ''
    this.errors = []
    this.histories = []
    this.shouldClearDisplay = false
    this.history = {
      lfs: null,
      operator: '',
      rhs: null,
      result: ''
    }
    this.isAllCLeared = true
  }

  switchNegativeNumber () {
    this.current = String(Number(this.current) * -1)
  }

  showPercentage () {
    this.current = String(Number(this.current) * 0.01)
  }

  pushOperationButton (operator: string) {
    this.shouldClearDisplay = true
    if (operator === '=' && this.operator) {
      this.calculate()
      return
    }

    if (operator === '=') return

    this.temp = Number(this.current)
    this.operator = operator
    this.createHistory()
  }

  calculate () {
    const rhs = Number(this.current)

    if (this.operator === '+') this.add()
    if (this.operator === '-') this.minus()
    if (this.operator === '×') this.multiply()
    if (this.operator === '÷') this.divide()

    this.addHistory(rhs)

    this.history.result = this.current
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

  addHistory (rhs: number) {
    const history = {
      lfs: this.temp,
      operator: this.operator,
      rhs,
      result: this.current
    }

    this.histories.unshift(history)
  }

  backSelectedHistory (index: number) {
    this.current = this.histories[index].result
    this.history = { ...this.histories[index] }
    this.histories = this.histories.filter(h => this.histories.indexOf(h) >= index)
  }

  createHistory () {
    this.history.lfs = this.operator ? this.temp : Number(this.current)
    this.history.operator = this.operator
    this.history.rhs = (this.operator && this.isCalcurating) ? Number(this.current) : null
  }

  getCalculating () {
    return `${this.history.lfs !== null ? this.history.lfs : ''}
      ${this.history.operator}
      ${this.history.rhs !== null ? this.history.rhs : ''}
      ${this.history.result !== '' && this.history.rhs !== null ? '=' : ''}`
  }

  back () {
    this.history = { ...this.lastHistory }
    this.current = this.history.result ? this.history.result : this.history.rhs ? String(this.history.rhs) : String(this.history.lfs)
    this.operator = this.history.result ? '' : this.history.operator
    this.temp = (this.history.operator && !this.history.result) ? Number(this.history.lfs) : 0

    if ((this.history.operator && !this.history.rhs) || this.history.result) this.shouldClearDisplay = true

    this.lastHistory = {
      lfs: null,
      operator: '',
      rhs: null,
      result: ''
    }
    this.isAllCLeared = false
  }
}
