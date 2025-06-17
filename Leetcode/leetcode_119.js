var getRow = function(rowIndex) {
    res = [1];
    if(rowIndex === 0){
        return res;
    }
    
    for(let i = 0; i< rowIndex; i++) {
        let nextRow = Array(res.length + 1).fill(0);

        for(let j = 0; j< res.length; j++) {
            nextRow[j] += res[j] ;
            nextRow[j + 1] += res[j];
        }
        res = nextRow;
    }

    return res
};