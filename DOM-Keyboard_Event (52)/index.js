// Keuboard Even Object
// 1. keyboard - pressing a key , can repeat
// 2. keypress (may not supported by some browser)
// 3. keyup
// 4. some properties - key, keyCode, code, shiftKey, ctlKey, repeat


const textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', function(e){

    if (e.repeat){
        alert('Do not repeat')
    }
    
})

// textarea.addEventListener('keypress', function(){

//     console.log('keypress');
// })





// textarea.addEventListener('keyup', function(e){

//     if (e.shiftKey) {
//         console.log("shifte+" + e.key);
//     }
    
// })