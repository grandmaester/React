export function addTrade(tradeDetails){
    return{
        type:'AddTrade',
        tradeDetails:tradeDetails
    }
}