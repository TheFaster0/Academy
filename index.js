function Block(letter, rate, used, father, code) {
 this.letter = letter;
 this.used = used;
 this.father = father;
 this code = code; 
 }
 
 function FindCode(block) {
 
  if (tree[block.father].code != '') {
   block.code= three[block.father].code + '1';
   }
   else {
    if (block.letter == three[minIndex].letter) {
     block.code = '0';
   }
    if (block.letter == three[preminIndex].letter) {
     block.code = '1';
    }
     else {
     FindCode(three[block.father];
     block.code = three[block.father].code + '0';
       }
      }
     }
