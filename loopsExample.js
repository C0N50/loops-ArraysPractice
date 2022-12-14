console.log('Loops Example');


let index = 0;
const max = 10;
//while Loop
while( index < max) {
    console.log ('in while loop, the value of index is ', index );
    index++;
} //end while loop

console.log ('after while loop, the value of index is' , index);

//for loop
for ( let i=0; i < max; i++) {
    console.log ('in for loop, the value of i is ', i)
}

//console.log ('after for loop, the value of i is' , i);


//loops over arrays
let hand = ['Q', '3', 'J', '9', '6', 'K', 'A'];

for (let i=0; i < hand.length; i++) {
    console.log('In For Loop, I have a ', hand[i]);
    if (hand[i] === 'Q') {
        console.log('match!!');
    } //end match
} //end for loop

index=0;

while (index < hand.length) {
    console.log('In While loop, I have a ', hand[index]);
    if (hand[index] === 'K') {
        console.log('match!!');
    } //end match
    index++;
} //end while loop


//for in loop
for( i in hand) {
    console.log('in for in loop:', hand[i]);
    if (hand[i] === '3') {
        console.log('match!!');
    } //end match
} // end for off

//for of loop
for ( card of hand) {
    console.log('in for of loop:', card);
    if (card === 'Q') {
        console.log('match!!');
    } //end match
} //end for in