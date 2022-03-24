 // switch to dark mode
 const mode = document.querySelector('.mood');
    
 mode.addEventListener('click', function(){
     const colorOne = document.querySelector('.darkOne')
     const colorTwo = document.querySelectorAll('.darkTwo');
     const chnge = document.querySelectorAll('.white');
     const lmood = document.querySelectorAll('.l-mood');
     const dmood = document.querySelectorAll('.d-mood');

     colorTwo.forEach(function(t){
         t.classList.toggle('darkTwo-c');
     })

     chnge.forEach(function(t){
         t.classList.toggle('black');
     })

     lmood.forEach(function(t){
         t.classList.toggle('l-mood-v')
     })
     dmood.forEach(function(t){
         t.classList.toggle('d-mood-h')
     })

     colorOne.classList.toggle('darkOne-c')

 })