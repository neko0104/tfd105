        // RWD漢堡
        var hburg_open = document.getElementsByClassName('rwd_nav');
        var hburg = document.getElementsByClassName('hburg')[0];
        document.addEventListener("DOMContentLoaded", function () {
            hburg.addEventListener("click", function () {
                this.classList.toggle("active");
                for (let i = 0; i < hburg_open.length; i++) {
                    hburg_open[i].classList.toggle("active");
                }
            });
        })



//資料2 讀入待辦事項
function get_takes(){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    // console.log(tasks);
    if(tasks != null){
      for(let i=0 ; i < tasks.length ; i++){
        let list_html = `
        <div class="cart_prd">
        <div class="cart_prd_pic"><a href="./product.html"><img src="./img/product/sheep_01.jpg" alt=""></a></div>
        <div class="cart_prd_info">
            <a href="#"><i class="fas fa-times"></i></a>
            <h5><a href="./product.html">商品名稱</a></h5>
            <div class="cart_prd_text">
                <p>耳朵的樣式：貓耳<br>
                    帽子的顏色：杏仁色<br>
                    帽子的裝飾：蝴蝶結<br>
                    裝飾布料：布料名稱A</p>
            </div>
            
                <div class="cart_prd_count">
                    <span class="count-t">數量</span><button class="prd_count"><i class="fas fa-minus"></i></button><input type="text" class="prd_nub prd_nub-input" value="1" name="add_prd_nub">
                    <button class="prd_count"><i class="fas fa-plus"></i></button>
                    
                    <div class="cart_card_price">
                        價錢<span class="prd_price">123</span>
                    </div>
                </div>
            
        </div>
    </div>
            `
            //定義 ul_task_list 
            let ul_task_list = document.getElementsByClassName("cart_list")[0];
                ul_task_list.insertAdjacentHTML("beforeEnd",list_html);
      }
      
    }
  }


//   商品頁加入購物車
var add_cart_btn = document.getElementsByClassName("prd-btn")[0];

add_cart_btn.addEventListener("click",function(){
    let prd_name = document.getElementsByTagName("h4")[0];
    let prd_id = prd_name.getAttribute("prd_id");
    // console.log(prd_id);
    // console.log(prd_name.innerText)
    let prd_conut = document.getElementsByTagName("input")[0];
    let prd_price = document.getElementsByClassName("prd_price")[0];

    // 存入localStorage
    let task = {
        "prd_id":prd_id,
        "prd_name":prd_name.innerText,
        "prd_price":prd_price.innerText,
        "prd_count":prd_price.innerText
    };
    let carts = JSON.parse(localStorage.getItem("carts"));
    // console.log(carts);

    if(carts){ // 若存在
      carts.unshift(task); // [{}, {}]
    }else{ // 若不存在
      carts = [task];
    }
    localStorage.setItem("carts", JSON.stringify(carts));

  
});

function add_cart(){

}

// 購物車的數字
var cart_count = JSON.parse(localStorage.getItem("carts"));
// console.log(cart_count.length);
var nav_cart_el = document.getElementsByClassName("fa-shopping-cart")[0];
// console.log(nav_cart_el.classList);