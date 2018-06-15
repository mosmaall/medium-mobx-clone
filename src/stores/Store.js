import UserStore from './UserStore'
import CommonStore from './CommonStore'

export const initStore = () => ({
  //Add Store here
  UserStore: new UserStore(),
  CommonStore: new CommonStore(),
})

let instanceStores
export const getInstanceStores = () => {
  if (!instanceStores) {
    instanceStores = initStore()
  }
  return instanceStores
}
