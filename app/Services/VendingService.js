import { ProxyState } from "../AppState.js";


class VendingService{
purchasedCoke(){
   ProxyState.cash -= ProxyState.soda[0].price
};
purchasedRootBeer(){
    ProxyState.cash -= ProxyState.soda[1].price
};

purchasedMountainDew(){
    ProxyState.cash -= ProxyState.soda[2].price
};

purchasedSprite(){
    ProxyState.cash -= ProxyState.soda[3].price
    debugger
};

}
export const vendingService = new VendingService()
