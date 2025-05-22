var interpret = function (command) {
  //   let str = "";
  //   for (let i = 0; i < command.length; i++) {
  //     if (command[i] === "G") {
  //       str += "G";
  //     } else if (command[i] === "(" && command[i + 1] === ")") {
  //       str += "o";
  //       i++;
  //     } else {
  //       str += "al";
  //       i = i + 3;
  //     }
  //   }
  //   return str;

  let str = command.replaceAll("()", "o");
  return str.replaceAll("(al)", "al");
};

console.log(interpret("G()(al)")); // Goal
console.log(interpret("G()()()()(al)")); // Gooooal
console.log(interpret("(al)G(al)()()G")); // alGalooG
// ()
// (al)
