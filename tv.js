const tv = {
    resulotion: "4k",
    size: "42",
    type: "LCD",
    madeIn: "SEI",
    isTurnedOn: false,
    togglePower: function(){
        // if (tv.isTurnedOn === true) {
        //     isTurnedOn = false;}
        //     else {
        //         isTurnedOn=true;
        tv.isTurnedOn = !tv.isTurnedOn;         
    },
    valume: 50,
    increaseValume:function(){
        tv.valume +=1;
    },
    decreaseValume:function(){
        tv.valume -=1;
    },
    curentChannel:42,
    changeChannelTo:function(channelNumber){
              tv.curentChannel = channelNumber ;
    },
    increaseChannel: function(){
        tv.changeChannelTo(tv.curentChannel + 1);
    },
    decreaseChannel: function(){
        tv.changeChannelTo(tv.curentChannel - 1);
    },  
};