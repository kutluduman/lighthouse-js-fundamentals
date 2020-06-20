const lastIndexOf = (array,value) => {

  for(let i = array.length ; i > 0 ; i--) {

    if(array[i-1] === value) {
      return i - 1;
    }
  }
  return -1;

}
