import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";

function _draw(){
    let moneyElem = document.getElementById("vending-cash")
    moneyElem.innerText = ProxyState.cash.toString()
}
export default class VendingController{ 
constructor(){
    ProxyState.on("cash", _draw)
}
purchasedCoke(){
    vendingService.purchasedCoke()
};

purchasedRootBeer(){
    vendingService.purchasedRootBeer()
};

purchasedMountainDew(){
    vendingService.purchasedMountainDew()
    
};

purchasedSprite(){
    vendingService.purchasedSprite()
    console.log("Hi from VendingController");
};

}

