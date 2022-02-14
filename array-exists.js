function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'please provide an array';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend ;
        }
    }
    return mega ;
}

const friends = ['arif', 'badhon', 'konok', 'saiful'];
const myBigBuddy = megaFriend(1234);
// console.log(myBigBuddy);

// indexof
if(friends.indexOf('arifa') != -1){
    console.log('arifa is exist');
}
else{
    console.log('arifa dose not exist');
}

// includes 
if(friends.includes('arif')){
    console.log('arif exist');
}

const first = [1, 2, 5];
const second = [3, 4, 6];
const add = first.concat(second);
console.log(add);