
function arrayBypass() {
    function showElements(array){
        for ( let i=0; i<array.length; i++){
            console.log(`[element with index ${i}] is array ${array[i]}`);
        }
    }
    let array = [ 4, 5, 2, 7];
    showElements(array);
   console.log (array.length);
}
arrayBypass();

