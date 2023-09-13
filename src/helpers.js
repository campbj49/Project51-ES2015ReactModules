/**
 * @param {Array} items 
 * 
 * @returns random element of items
 */
function choice(items){
    return items[Math.floor(Math.random()*items.length)];
}

/**
 * 
 * @param {Array} items 
 * @param {any} findItem 
 * Removes first instance of findItem in items from items
 * @returns first instance of findItem in items if it exists, undefined if not
 */
function remove(items, findItem){
    for(item of items){
        if(item === findItem) {
            //delete item;
            return findItem;
        }
    }
}

export {choice, remove};