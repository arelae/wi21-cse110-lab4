for(stat in statistics){
    if(stat.charAt(0) == ("r")){
        console.log(`${statistics[stat]}`);
    }
    else if(statistics[stat] % 2 == 1){
        console.log(`${statistics[stat]}`);
    }
}