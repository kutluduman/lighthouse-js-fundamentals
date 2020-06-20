const loopyLighthouse = (range, multiples, words) => {

  let output = "";


  for(let i = range[0] ; i <= range[i] ; i++) {
    output = "";
    if(i % multiples[0] === 0) output += words[0];
    if(i % multiples[1] === 0) output += words[1];
    console.log(output || i);

  }
}


