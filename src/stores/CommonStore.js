import { observable, action, computed, reaction } from 'mobx'

export default class CommonStore {
  @observable token = window.localStorage.getItem('jwt')

  constructor() {
    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItem('jwt', token)
        } else {
          window.localStorage.removeItem('jwt')
        }
      }
    )
  }

  @action
  setToken(token) {
    this.token = token
  }
}
