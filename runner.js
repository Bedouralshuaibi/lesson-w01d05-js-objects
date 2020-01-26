const user = {
    name: "bedour fsh",
    email: "email@gmail.com",
    age: undefined,
    runs: [
        {
            date: "01-01-2020 12:00:00",
            distance: 10,
            timeTaken: 180,
        },
        {
            date: "15-01-2020 01:00:00",
            distance: 12,
            timeTaken: 30,
        }
    ],
    totolDistance:function() {
        let total = 0;
        for (let i=0;i< user.runs.length; i++){
            total += user.runs[i].distance ;
        }

        return total;
    },
    longestRunDistance: function(){
        let theLongestRun = 0;
        // for (i=0; i < user.runs.length; i++){
        //     if (user.runs[i].distance > theLongestRun){
        //         theLongestRun = user.runs[i].distance;
        //     }
        // } 
        ///////////////// Other way with (this)
        for (i=0; i < this.runs.length; i++){
            if (this.runs[i].distance > theLongestRun){
                theLongestRun = this.runs[i].distance;
            }
        } ;

        return theLongestRun;
    },
    averageSpped: function(){


    },
};