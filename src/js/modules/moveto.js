function moveTo(){

    const   
        nodeObj = document.getElementById('buy-button'),
        blockFor = document.getElementById('buy');

    nodeObj.addEventListener('click', function(){
        blockFor.scrollIntoView({
            behavior: "smooth"
        })
    })

}
export default moveTo;