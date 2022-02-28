
// document.addEventListener("Load", function(){
document.addEventListener("DOMContentLoaded", function(){
    let load_block = document.getElementById("loading");
    
    setTimeout(function(){
        load_block.remove();
        console.log("qq")
    },4000);
});


















// 滑動效果
let slideBlocks = document.getElementsByClassName('js_opac');

// function doScroll() {
//     // Y軸視窗最底
//     let dY = window.scrollY + window.innerHeight;
//     for (let i = 0; i < slideBlocks.length; i++) {
//         if (dY > slideBlocks[i].offsetTop) {
//             slideBlocks[i].classList.add('js_on');
//         } else {
//             slideBlocks[i].classList.remove('js_on');
//         }
//     }
// }
// window.addEventListener('scroll', doScroll);


    // console.log(this)
    // console.log(0 - this.scrollY)
    // console.log(this.offsetTop)
    


    /*
    let js_on_area = this.scrollY - t3.offsetTop;
    // console.log(js_on_area)
  
    
    if(js_on_area > 150 || js_on_area < -600){
        t3.classList.remove("js_on");
        
    }else{
        t3.classList.add("js_on");
    }   
    */    

// )


function slip3(){
    let t3 = document.getElementsByClassName("js_opac");
    // console.log(t3.offsetTop)
    
    for(let i = 0; i < t3.length ; i++){
        let js_on_area = this.scrollY - t3[i].offsetTop;
        if(js_on_area > 150 || js_on_area < -600){
            t3[i].classList.remove("js_on");
            
        }else{
            t3[i].classList.add("js_on");
        }   
    }
}

window.addEventListener("scroll", slip3);