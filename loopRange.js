const range = (start,end,step) => {

 const arr = [];

  if(start===undefined || end === undefined || step === undefined) {

    return [];

  } else if (start>end) {

    return [];

  } else if (step<=0) {

    return [];

  } else {

    for(let i = start ; i<=end ; i+=step) {

      arr.push(i);
    }

    return arr;

  }

}

console.log(range(0, 10, 2));

