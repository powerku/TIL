    // const bridge_length = 2;
    // const weight = 10;
    // const truck_weights = [7,4,5,6];
    // const result = 8;

    // const bridge_length = 100;
    // const weight = 100;
    // const truck_weights = [10];
    // const result = 101;

    const bridge_length = 100;
    const weight = 100;
    const truck_weights = [10,10,10,10,10,10,10,10,10,10];
    const result = 110;
    
    console.log(Solution2(bridge_length,weight,truck_weights));
    function Solution(bridge_length,weight,truck_weights){
      var answer = 1;
      var onBridgeTruck = [];
      var onBridgeWeight;
      var thisTruck;
      var truckObj = truck_weights.map((weight,i)=>({
        weight : weight,
        distant : bridge_length
      }))

      do{
        if(onBridgeTruck.length === 0){
          onBridgeTruck.push(truckObj.shift());
        }
        else if(truckObj.length != 0){
          onBridgeWeight = 0;
          onBridgeTruck.forEach(function(truck){
            onBridgeWeight += truck.weight;
          })
          thisTruck = truckObj[0].weight;
          if(onBridgeWeight + thisTruck <= weight){
            onBridgeTruck.push(truckObj.shift());
          }
        }
        onBridgeTruck.map(function(truck){
          truck.distant --;
        })
        answer++;
        if(onBridgeTruck[0].distant === 0){
          onBridgeTruck.shift();
        }
      }while(truckObj.length != 0 || onBridgeTruck != 0);
      return answer;
    }

    function Solution2(bridge_length,weight,truck_weights){
      var answer = 1;
      var onWeight = 0;
      var onBridgeTruck = [];
      do{
        if(truck_weights[0] + onWeight <= weight){
          onWeight += truck_weights[0];
          onBridgeTruck.push({weight : truck_weights.shift(),
                              distant : bridge_length
                            });
        }
        onBridgeTruck.forEach(function(truck,idx){
          onBridgeTruck[idx].distant--;
        })
        if(onBridgeTruck[0].distant === 0){
          onWeight -= onBridgeTruck[0].weight;
          onBridgeTruck.shift();
        }
        answer++;
      }while(truck_weights.length != 0 || onBridgeTruck.length != 0);
      return answer;
    }