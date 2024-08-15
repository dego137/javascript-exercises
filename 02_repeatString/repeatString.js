const repeatString = function(phrase,number) {
    let string=''
    if (number>=0){
        for(let i=0;i<number;i++){
            string+=phrase
        }
        return string
    }else{
        return 'ERROR'
    }
    
};

// Do not edit below this line
module.exports = repeatString;
