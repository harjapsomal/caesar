let converted = "";

function caesar(a1) {
  let val = document.getElementById("form1input").value;
  var ascii = [];
  var convertedBack = [];
  var joinedStr;
  var key;

  let keystr = document.getElementById("form4input").value;
  key = Number(keystr);

  if (!Number.isFinite(key)) {
    // validation on the key
    console.log("Key is not a number");
    document.getElementById("form2text").value = "INVALID KEY";
    return;
  }

  if (a1 === "encode") {
    console.log("encoding.....");
  }
  if (a1 === "decode") {
    console.log("decoding.....");
  }

  console.log("key is ", key);

  // document.getElementById("Form3").submit();
  // console.log(a1);
  // var x = document.getElementsByClassName.input1.value;
  // var text = "";

  if (key < 0 || key > 26) {
    document.getElementById("form2text").value = "INVALID KEY";
    console.log("Invalid key", key, keystr);
    alert(keystr);
    return;
  }

  while (key >= 26) {
    key = key - 26;
  }

  // convert each character to ascii and encode it or decode it
  for (i = 0; i < val.length; i++) {
    if (a1 === "encode") {
      ch = encodeChar(val[i], key);
    } else if (a1 === "decode") {
      ch = decodeChar(val[i], key);
    }
    ascii[i] = ch;
  }
  //                convert the ascii values back to characters
  for (i = 0; i < ascii.length; i++) {
    convertedBack[i] = String.fromCharCode(ascii[i]);
  }
  joinedStr = convertedBack.toString(); // separated by commas
  joinedStr = joinedStr.replaceAll(",", ""); // remove the commas
  console.log(joinedStr);
  document.getElementById("form2text").value = joinedStr;
}

// encode this one character -return the ascii code after the caesar cipher operation
function encodeChar(ch, key) {
  let upperCase = false;
  let lowerCase = false;
  var chAscii;
  var newch;

  chAscii = ch.charCodeAt(); // convert to ascii code

  if (chAscii === 32) {
    // if it's a space, make no change
    return chAscii;
  }

  if (chAscii >= 65 && chAscii <= 90) {
    upperCase = true;
  } else if (chAscii >= 97 && chAscii <= 122) {
    lowerCase = true;
  } else {
    return chAscii; // it's a special character - so leave it unchanged
  }

  newch = chAscii + key;

  if (upperCase && newch > 90) {
    // more than 'Z'
    newch = newch - 26; // bring it back into range
  }
  if (lowerCase && newch > 122) {
    // more than 'z'
    newch = newch - 26; // bring it back into range
  }
  return newch;
}

// decode this one character -return the ascii code after the caesar cipher operation
function decodeChar(ch, key) {
  let upperCase = false;
  let lowerCase = false;
  var chAscii;
  var newch;

  chAscii = ch.charCodeAt(); // convert to ascii code

  if (chAscii === 32) {
    // if it's a space, make no change
    return chAscii;
  }

  if (chAscii >= 65 && chAscii <= 90) {
    upperCase = true;
  } else if (chAscii >= 97 && chAscii <= 122) {
    lowerCase = true;
  } else {
    return chAscii; // it's a special character - so leave it unchanged
  }

  newch = chAscii - key;

  if (upperCase && newch < 65) {
    // less than 'A'
    newch = newch + 26; // bring it back into range
  }
  if (lowerCase && newch < 97) {
    // less than 'a'
    newch = newch + 26; // bring it back into range
  }
  return newch;
}
