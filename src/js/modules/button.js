function ToTop(){

    window.addEventListener('scroll', function(){
        let value = window.scrollY,
            button = document.getElementById('ToTop');

        if(value > 500){
            button.classList.add('show')
            button.addEventListener('click', function(){
                window.scrollTo(0, 0);
                button.classList.remove('show')
            })
        }
        else{
            button.classList.remove('show')
        }
    })
}

export default ToTop;