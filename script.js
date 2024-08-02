window.addEventListener('resize', function() {
    location.reload();
});

function sidebar(){
    // const hammenu = document.getElementById('hammenu')
    let category = document.getElementById('category');
    if (category.style.display == 'flex'){
        category.style.display = 'none'
        // console.log('flex')
    }
    else{
        category.style.display = 'flex';
        // console.log('not flex')
    }
    
}