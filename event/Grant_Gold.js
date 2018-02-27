// ====================================================================================================
//
// Cloud Code for Grant_Gold, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var newGold=Spark.getData().gold;
Spark.getPlayer().credit("gold",newGold, "test");
Spark.getPlayer().credit2(newGold);
