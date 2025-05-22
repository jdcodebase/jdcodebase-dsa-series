var defangIPaddr = function (address) {
  //   let str = "";

  //   for (let i = 0; i < address.length; i++) {
  //     if (address[i] === ".") {
  //       str += "[.]";
  //     } else {
  //       str += address[i];
  //     }
  //   }

  //   return str;
  return address.replaceAll(".", "[.]");
};

console.log(defangIPaddr("1.1.1.1")); // "1[.]1[.]1[.]1"
console.log(defangIPaddr("255.100.50.0")); // "255[.]100[.]50[.]0"
