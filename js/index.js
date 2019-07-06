let counter = 0;
let btn = $('#s-h-btn');
btn.on('click', function () {
    if(counter===0){
        btn.html(`<i class="fas fa-angle-up"></i> Show less`);
        counter++;
        console.log('dupa');
    }
    else{
        btn.html(`<i class="fas fa-angle-down"></i> Show more`);
        counter--
    }
  });
