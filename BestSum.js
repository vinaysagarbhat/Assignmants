const subsetsOfSize = (a, used, startIndex, currentSize, k,arr=[]) =>{
    arr1 = [];
    if (currentSize === k) {
      for (let i = 0; i < a.length; i++) {
        if (used[i]){
            arr1.push(a[i]);
        }
      }
      arr.push(arr1);
    }
      
    if (startIndex === a.length)
      return arr;
      
    used[startIndex] = true;
    subsetsOfSize(a, used, startIndex+1, currentSize+1, k,arr);
  
    used[startIndex] = false;
    subsetsOfSize(a, used, startIndex+1, currentSize, k,arr);
    return arr
  }
  

  const chooseBestSum = (t, k, ls) =>{
    let sum2=0
    let combi = subsetsOfSize(ls, Array(ls.length).fill(false), 0, 0, k);
    for (var i = 0; i < combi.length; i++) {
        let sum1=combi[i].reduce(function(a, b) { return a + b; }, 0);
        if(sum1>t)
            continue
        sum2=sum2>sum1?sum2:sum1
    }

    if(sum2==0)
        return null
    return sum2
  }



ls = [50, 55, 56, 57, 58]
console.log(chooseBestSum(163,3,ls));