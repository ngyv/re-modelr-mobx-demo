import { observable, computed } from 'mobx'

class Notification {
  @observable messages = []
  @computed get message() {
    return this.messages.length ? this.messages[0] : ''
  }

  push(message) {
    this.messages.push(message)
    if (!this.shiftScheduled) {
      this.shiftScheduled = new Date()
      this.shift()
    }
  }

  shift() {
    setTimeout(() => {
      this.messages.shift()
      if (this.messages.length) {
        this.shift()
      } else {
        this.shiftScheduled = null
      }
    }, 2000)
  }
}

export default new Notification()
