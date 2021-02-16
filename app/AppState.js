import Soda from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js" 



let Coke = new Soda ("Coke", 1, "Coke")
let MountainDew = new Soda ("MountainDew", 2, "Pepsi")
let RootBeer = new Soda ("Rootbeer", 3, "Coke")
let Sprite = new Soda ("Sprite", 2, "Pepsi")
class AppState extends EventEmitter {
  /** @type {Soda[]} */
  values = []
  cash = 10
  soda=[Coke, MountainDew, Sprite, RootBeer]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
