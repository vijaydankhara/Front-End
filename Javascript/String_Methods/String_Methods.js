//  String Method
/*
String Length           ==> count the String Length
String slice            ==> start position, and end position (end not included).
String Substring        ==> start and end values less than 0 are treated as 0
String Substr           ==> the second parameter specifies the length of the extracted part.
String Replace          ==>  replace word
String ReplaceAll       ==>  replace all word
String toUpperCase      ==> Sting convert in UpperCase(VIJAY)
String toLowerCase      ==> Sting convert in LowerCase(vijay)
String Concat           ==> two string Murge
String trim             ==> remove All Space
String trimStart        ==> remove All Space to Start
String trimEnd          ==> remove All Space to End
String PadStart         ==> add to icone in start => (####123456)
String PadEnd           ==> add to icone in End   => (123456####)
String CharAt           ==> returns the character at a specified index (position) in arry
String CharCodeAt       ==> his return indexnumber of ASCII value.
String Split            ==> converted to an array with the split()

*/

// length
// let arr="javascript";
// let txt = arr.length;
// console.log(txt);   // 10

// slice
// let arr = "banana,kiwi,apple,orange,mango";
// let txt = arr.slice(12,17);
// console.log(txt);    // APPLE

// subString
// let arr = 'javascript is most popular programing language';
// // let txt = arr.substring(11);     // is most popular programing language
// let txt = arr.substring(11,26);     // is most popular
// console.log(txt);    

//   SubStr
// let arr = "banana,kiwi,apple,orange,mango";
// let txt = arr.substr(7);     // kiwi,apple,orange,mango
// console.log(txt);


// string replace
// let arr = " i am abhishek sharma";
// let txt = arr.replace('abhishek', 'rohit');
// console.log(txt);     //  i am rohit sharma

// String replaceAll
// let arr = 'hello surat welcome to surat';
// let txt = arr.replaceAll('surat','dubai');
// console.log(txt);   // hello dubai welcome to dubai

//string strim
// let arr = '           hello surat , how are you';
// let txt = arr.trim();    // remove space
// console.log(txt);        // hello surat , how are you


//string strimStart
// let arr = '           hello surat , how are you';
// let txt = arr.trimStart();     // remove space to the start
// console.log(txt);             //  hello surat , how are you


// string strimEnd
// let arr = '    hello  surat           ';
// let txt = arr.trimEnd();
// console.log(txt);    //     hello  surat


// string Padstart
// let arr = '67890';
// let txt = arr.padStart(10,"#");
// console.log(txt);    // #####67890


// String PadEnd
// let arr = '12345';
// let txt = arr.padEnd(10,"#");
// console.log(txt);    // 12345#####


//   CharAt (one argument)     ==> returns the character at a specified index (position) in arry
// let arr = 'javascript';
// // let txt = arr.charAt(2);    // v
// // let txt = arr.charAt(0);    // j
// let txt = arr.charAt(9);       // t
// console.log(txt);   


// chatCodeAt (one argument)   ==> his return indexnumber of ASCII value.
// let arr = 'How Are You';
// // let txt = arr.charCodeAt(0);      // 72
// // let txt = arr.charCodeAt(4);      // 32
// let txt = arr.charCodeAt(8);      // 89
// console.log(txt);

// string split      ==> converted to an array with the split()
// let arr = 'HELLO WORLD HOW ARY YOU';
// let txt = arr.split(" ");          // [ 'HELLO', 'WORLD', 'HOW', 'ARY', 'YOU' ]
// // let txt = arr.split("H");       // [ '', 'ELLO WORLD ', 'OW ARY YOU' ]
// console.log(txt);