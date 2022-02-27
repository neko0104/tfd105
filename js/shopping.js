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


// 檢查購物車資料是否存在
document.addEventListener("DOMContentLoaded", function(){
    if(localStorage.carts == null){
        localStorage.carts = '[]';
        console.log("[[[]]]]");
    }
});


var cart_count_el = JSON.parse(localStorage.getItem("carts"));
// console.log(cart_count_el.length);
// 購物車的數字和即時更新
var nav_cart_el = document.getElementsByClassName("cart_count")[0];
// console.log(nav_cart_el.innerText);
function cart_count_renew (){
    cart_count_el = JSON.parse(localStorage.getItem("carts"));
    if(cart_count_el !== null){
        nav_cart_el.innerText = cart_count_el.length;
    // console.log("aaa");
    } 
}

cart_count_renew();


// 讀入localS購物車
function get_takes(){
    let carts = JSON.parse(localStorage.getItem("carts"));
    // console.log(tasks);
    if(carts != null){
      for(let i=0 ; i < carts.length ; i++){
        let list_html = `
        <div class="cart_prd" prd_id="${carts[i].prd_id}">
        <div class="cart_prd_pic"><a href="./product.html"><img src="./img/product/sheep_01.jpg" alt=""></a></div>
        <div class="cart_prd_info">
            <a href="#"><i class="fas fa-times"></i></a>
            <h5><a href="./product.html">${carts[i].prd_name}</a></h5>
            <div class="cart_prd_text">
                <p>${carts[i].prd_text}</p>
            </div>
            
                <div class="cart_prd_count">
                    <span class="count-t">數量</span><button class="prd_count"><i class="fas fa-minus"></i></button><input type="text" class="prd_nub prd_nub-input" value="${carts[i].prd_count}" name="add_prd_nub">
                    <button class="prd_count"><i class="fas fa-plus"></i></button>
                    
                    <div class="cart_card_price">
                        價錢<span class="prd_price">${ carts[i].prd_count * carts[i].prd_price}</span>
                    </div>
                </div>
            
        </div>
    </div>
            `
            //定義 ul_task_list 
            let ul_task_list = document.getElementsByClassName("cart_list")[0];
                ul_task_list.insertAdjacentHTML("afterbegin",list_html);
      }
      
    }
  }


//   商品頁加入購物車
var add_cart_btn = document.getElementsByClassName("prd-btn")[0];
if(add_cart_btn != null){
    add_cart_btn.addEventListener("click",function(e){
        e.preventDefault();

        //判斷商品數量
        var count_nub = document.getElementsByClassName("prd_nub")[0];
        switch(count_nub.value){
            case "0":
            alert("商品數量不可以為0");
            break;

            default:
                let prd_name = document.getElementsByTagName("h4")[0];
                let prd_id = prd_name.getAttribute("prd_id");
                // console.log(prd_id);
                // console.log(prd_name.innerText)
                let prd_conut = document.getElementsByTagName("input")[0];
                let price = document.getElementsByClassName("price")[0];
                let prd_price = price.querySelector(".prd_price");
                console.log(prd_price);
                // 存入localStorage
                let task = {
                    "prd_id":prd_id,
                    "prd_name":prd_name.innerText,
                    "prd_price":prd_price.innerText,
                    "prd_count":prd_conut.value,
                    "prd_text":''
                };
                
                let carts = JSON.parse(localStorage.getItem("carts"));
                if(prd_conut.value !== 0 || prd_conut.value !== ""){
                // console.log(carts);
                // console.log(prd_conut.value);
                if(carts){ // 若存在
                    carts.unshift(task); // [{}, {}]
                    }else{ // 若不存在
                    carts = [task];
                    }
                    localStorage.setItem("carts", JSON.stringify(carts));
                    alert("已加入購物車！");
                    cart_count_renew();
                }
        }
 
    });
};







// 商品頁數量調整

var count_el = document.getElementsByClassName("prd_stock_count")[0];
if(count_el !== null){
    // console.log(count_el);
var count_nub = document.getElementsByClassName("prd_nub")[0];
    // console.log(count_nub.value);
    count_nub.addEventListener("keyup", function(k){
        var str = (k.target.value).replace(/\D/g, "");
        k.target.value = str;
    })
var count_plus = document.getElementsByClassName("prd_count")[1];
count_plus.addEventListener("click", function(){
    count_nub.value++;
})

var count_minus = document.getElementsByClassName("prd_count")[0];  
    count_minus.addEventListener("click", function(){
        if(count_nub.value > 1){
            count_nub.value--;
        }
     });
};




    //切到購物車頁面
    document.addEventListener("DOMContentLoaded",function(e){
        // console.log(document.title);
        if(document.title == "購物車｜Animal Hat．官方網站"){
            get_takes();

            // let cart_list = document.getElementsByClassName("cart_prd");
            // console.log(cart_list.length);
            let cart_prd_x = document.getElementsByClassName("fa-times");
            
            // 刪除一項商品
            document.addEventListener("click", function(e){
                if(e.target.classList.contains("fa-times")){
                // console.log(e);
                e.preventDefault();
                // console.log(e.target.parentElement.parentElement.parentElement);
                 let cart_prd = e.target.parentElement.parentElement.parentElement;
                 let cart_prd_id = cart_prd.getAttribute("prd_id");
                 let carts = JSON.parse(localStorage.getItem("carts"));
                 let updata = [];
                 carts.forEach(function(task, i){
                    if(cart_prd_id != carts.prd_id){
                      updata.push(task);
                    }
                  });
                  localStorage.setItem("carts", JSON.stringify(updata));
                  cart_prd.classList.add("fade_out");
                  setTimeout(function(){
                      cart_prd.remove();
                  }, 800);
                  cart_count_renew();
                }
            });

            //修改數量
            let cart_prd_count = document.getElementsByClassName("cart_prd_count");
            // console.log( cart_prd_count);
            


            // 購物車總結品項、金額
            if(cart_count_el.length == 0){
            }else{
                let cart_total_el = document.getElementsByClassName("cart_total")[0]
                let cart_total_price = cart_total_el.firstElementChild.nextElementSibling.firstElementChild;
                // console.log(cart_total_price);
                let task = JSON.parse(localStorage.getItem("carts"));
                let local_total_price = 0;
                for(let i=0; i < task.length; i++){
                    // console.log("商品數量" + task[i].prd_count + ";商品價錢" + task[i].prd_price + ";商品金額" + (task[i].prd_count *task[i].prd_price))
                    local_total_price += (parseInt( task[i].prd_price) * parseInt( task[i].prd_count));
                }
                // console.log(local_total_price);
                cart_total_price.innerText = local_total_price;

                // 購物車總結品項
                let cart_total_count = cart_total_el.firstElementChild.firstElementChild;
                // console.log(cart_total_count.innerText);
                let local_total_count = 0;
                for(let i=0; i < task.length; i++){
                    local_total_count += parseInt(task[i].prd_count);
                }
                // console.log(local_total_count);
                cart_total_count.innerText = local_total_count;
            }

            
        }
    });



