// loading
document.addEventListener("DOMContentLoaded", function(){
    let load_block = document.getElementById("loading");
    setTimeout(function(){
        load_block.remove();
        console.log("qq")
    },4000);
});

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

// 滑動特效
/*
function slip1(){
    let t1 =  document.getElementsByClassName("js_opac");  
    for(let i = 0; i < t1.length ; i++){
        let js_on_area = this.scrollY - t1[i].offsetTop;
        if(js_on_area < 150 && js_on_area > -600){
        t1[i].classList.add("js_on");
        }
    }
}
*/
    // 從右滑到左
        function slip2(){
            let t2 = document.getElementById("t2");
            console.log(t2.offsetTop)
            
            
                let js_on_area = this.scrollY - t2.offsetTop;
                if(js_on_area > 300 || js_on_area < -300){
                    t2.classList.remove("js_on");
                }
                else{
                    t2.classList.add("js_on");         
                }
                // 往下由另一方
                if(js_on_area > 300){
                    t2.classList.add("js_ll");
                }else{
                    t2.classList.remove("js_ll");
                }
            
        }

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
        
        window.addEventListener("scroll", slip2 );
        // window.addEventListener("scroll", slip1);





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
        <div class="cart_prd" prd_id="${carts[i].prd_id}" prd_index="${i}">
        <div class="cart_prd_pic"><a href="./product.html"><img src="./img/product/${carts[i].prd_id}_01.jpg" alt=""></a></div>
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
                        價錢<span class="prd_price">${carts[i].prd_price}</span>
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
var prd_wrp = document.getElementsByClassName("prd_wrapper")[0];
if(add_cart_btn != null && prd_wrp != null){
    add_cart_btn.addEventListener("click",function(e){
        e.preventDefault();

        //判斷商品數量
        var count_nub = document.getElementsByClassName("prd_nub")[0];
        switch(count_nub.value){
            case "0":
                alert("商品數量不可以為0");
                break;

            case "":
                alert("請填寫商品數量");
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
if(count_el !== undefined){
    console.log(count_el);
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
                 let cart_prd_index = cart_prd.getAttribute("prd_index");
                 let carts = JSON.parse(localStorage.getItem("carts"));
                 let updata = carts;
                 updata.splice(cart_prd_index,1);
                  localStorage.setItem("carts", JSON.stringify(updata));
                  cart_count_renew();
                  cart_total_renew();
                  cart_prd.classList.add("fade_out");
                  setTimeout(function(){
                      cart_prd.remove();
                  }, 800);
                  if(localStorage.carts == "[]"){
                    time_to_shop();
                  }
                }

            //修改數量
            // let cart_prd_count = document.getElementsByClassName("cart_prd_count");
            // console.log( cart_prd_count);

                //按下+號
                if(e.target.querySelector(".fa-plus") || e.target.classList.contains("fa-plus")){
                    // console.log("+")
                    if(e.target.parentElement.classList == "prd_count"){
                        let prd_countel = e.target.closest(".cart_prd_count");
                        prd_countel = prd_countel.querySelector("input");
                        // console.log(prd_count)
                        prd_countel.value++;

                        let prd_index = e.target.closest(".cart_prd").getAttribute("prd_index");
                        // console.log(prd_index);
                        //更新購物車
                        let carts = JSON.parse(localStorage.getItem("carts"));
                        // console.log(carts);
                        carts[prd_index].prd_count = prd_countel.value;
                        // console.log(carts[prd_index]);
                        localStorage.setItem("carts", JSON.stringify(carts));
                        
                    }else{
                        let prd_countel = e.target.parentElement.closest(".cart_prd_count");
                        // console.log(prd_count);
                        prd_countel = prd_countel.querySelector("input");
                        prd_countel.value++;
                        //更新購物車
                        let prd_index = e.target.closest(".cart_prd").getAttribute("prd_index");
                        let carts = JSON.parse(localStorage.getItem("carts"));
                        carts[prd_index].prd_count = prd_countel.value;
                        localStorage.setItem("carts", JSON.stringify(carts));
                    }
                    cart_total_renew();
                }

                 // 按下-號
                if(e.target.querySelector(".fa-minus") || e.target.classList.contains("fa-minus")){
                    // console.log("-");
                    if(e.target.parentElement.classList == "prd_count"){
                        let prd_countel = e.target.closest(".cart_prd_count");
                        prd_countel = prd_countel.querySelector("input");
                        if(prd_countel.value > 1){
                            prd_countel.value--;
                        }
                        let prd_index = e.target.closest(".cart_prd").getAttribute("prd_index");
                        let carts = JSON.parse(localStorage.getItem("carts"));
                        carts[prd_index].prd_count = prd_countel.value;
                        localStorage.setItem("carts", JSON.stringify(carts));
                    }else{
                        let prd_countel = e.target.parentElement.closest(".cart_prd_count");
                        prd_countel = prd_countel.querySelector("input");
                        if(prd_countel.value > 1){
                            prd_countel.value--;
                        }
                        let prd_index = e.target.closest(".cart_prd").getAttribute("prd_index");
                        let carts = JSON.parse(localStorage.getItem("carts"));
                        carts[prd_index].prd_count = prd_countel.value;
                        localStorage.setItem("carts", JSON.stringify(carts));
                    }
                    cart_total_renew();
                }                 
            });

            // 購物車總結品項、金額
            if(cart_count_el.length == 0){      
                time_to_shop();              
            }else{
                cart_total_renew();
            }

            
        }
        
        // 商城放入購物車
        if(document.title == "商城｜Animal Hat．官方網站"){
            document.addEventListener("click", function(e){
                // let e_pr = e.target.closest(".item_card")
                // console.log(e.target)
                if(e.target.classList[1] == "fa-shopping-cart" && e.target.closest(".item_card")){
                    e.preventDefault();
                    // console.log("add");
                    let item_el = e.target.closest(".item_card");
                    // console.log(item_el)
                    let prd_id = item_el.getAttribute("prd_id");
                    let prd_name = item_el.querySelector(".item_info_prd");
                    let prd_price = item_el.querySelector(".card_price");
                    let prd_conut = 1;

                    // 存入localStorage
                    let task = {
                        "prd_id":prd_id,
                        "prd_name":prd_name.innerText,
                        "prd_price":prd_price.innerText,
                        "prd_count":prd_conut,
                        "prd_text":''
                    };
                    // console.log(task)
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


        if(document.title == "客製商品｜Animal Hat．官方網站"){
            document.addEventListener("click", function(e){
                // console.log(e.target.tagName);

                // btn按鈕
                if(e.target.classList == "hat_cus-btn" || e.target.classList == "box_cus-btn"){
                    e.target.classList.toggle("cus-on");
                }
                let ff = e.target.parentElement;
                // console.log(ff)

                //布料按鈕
                if(ff.classList == "hat_cus-fabric"){
                    e.target.classList.toggle("fabric-sel");
                }

                //選好了OR重來一次
                if((ff.classList == "box_cus_btn" && e.target.tagName == "A") || (ff.classList == "hat_cus_btn" && e.target.tagName == "A")){
                    // console.log("a")
                    e.preventDefault();
                    let hat_result = document.getElementsByClassName("hat_result")[0];
                    let box_result = document.getElementsByClassName("box_result")[0];
                    let e_targ = e.target;
                    //帽子選好了
                    if(ff.classList[0] == "hat_cus_btn" && hat_result.classList[1] == "btn_none" && e_targ.innerText == "選好了"){
                        
                        hat_result.classList.toggle("btn_none");
                        setTimeout(function(){
                            hat_result.classList.toggle("re_on");
                        },500);
                        // console.log(ff.classList);

                        //帽子重來一次
                    }else if(ff.classList[0] == "hat_cus_btn" && hat_result.classList[1] == "re_on" && e_targ.innerText == "重來一次"){
                        hat_result.classList.toggle("btn_none");
                        hat_result.classList.toggle("re_on");
                        let hat_area = e.target.closest(".hat_area");
                        // console.log("bb")
                        let hat_btn = hat_area.querySelectorAll("button");
                        // console.log(hat_btn)
                        for(let i = 0; i < hat_btn.length; i++){
                            hat_btn[i].classList.remove("cus-on");
                        }
                        let feb = document.getElementsByClassName("hat_cus-fabric");
                        for(let i = 0; i < hat_btn.length; i++){
                            feb[i].classList.remove("fabric-sel");
                        }

                        //盒子選好了
                    }else if(ff.classList[0] == "box_cus_btn" && box_result.classList[1] == "btn_none" && e_targ.innerText == "選好了"){
                        box_result.classList.toggle("btn_none");
                        setTimeout(function(){
                            box_result.classList.toggle("re_on");
                            let cus_add_cart = document.getElementsByClassName("cus_add_cart")[0];
                            cus_add_cart.classList.remove("btn_none");
                        },500);


                        //盒子重來一次
                    }else if(ff.classList[0] == "box_cus_btn" && box_result.classList[1] == "re_on" && e_targ.innerText == "重來一次"){
                        box_result.classList.toggle("btn_none");
                        box_result.classList.toggle("re_on");
                        let box_area = e.target.closest(".box_area");
                        let box_btn = box_area.querySelectorAll("button");
                        for(let i = 0; i < box_btn.length; i++){
                            box_btn[i].classList.remove("cus-on");
                        }
                        let cus_add_cart = document.getElementsByClassName("cus_add_cart")[0];
                            cus_add_cart.classList.add("btn_none");
                    }
                }

                //客製商品放入購物車
                let e_targ = e.target;
                if(e_targ.innerText == "放入購物車"){
                    // console.log("add")
                    let count_nub = document.getElementsByClassName("prd_nub-input")[0];
                    let result_pp = document.getElementsByClassName("result-pp");
                    
                    let task = {
                        "prd_id":"c0000-0000",
                        "prd_name":"客製商品",
                        "prd_price":3200,
                        "prd_count":count_nub.value,
                        "prd_text":`${result_pp[1].innerHTML + "<br>" + result_pp[2].innerHTML}`
                    };
                    // console.log(task)
                    let carts = JSON.parse(localStorage.getItem("carts"));
                    if(count_nub.value !== 0 || count_nub.value !== ""){
                    // console.log(carts);
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

            //  數量按鈕  ========================
            let count_nub = document.getElementsByClassName("prd_nub-input")[0];
            // console.log(count_nub.value);
            count_nub.addEventListener("keyup", function(k){
                var str = (k.target.value).replace(/\D/g, "");
                k.target.value = str;
            })
            let count_plus = document.getElementsByClassName("prd_count")[1];
            count_plus.addEventListener("click", function(){
            count_nub.value++;
            })
        
            let count_minus = document.getElementsByClassName("prd_count")[0];  
            count_minus.addEventListener("click", function(){
                if(count_nub.value > 1){
                    count_nub.value--;
                }
             });
            // =============
        }



    });


function cart_total_renew(){
    // console.log("a")
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


//購物車沒商品的倒數
let s=5;
function time_to_shop(){
    let cart_total = document.getElementsByClassName("cart_total")[0];
        // console.log(cart_total);
    cart_total.style.display = "none";
    let cart_list_el = document.getElementsByClassName("cart_list")[0];
        // console.log(cart_list_el);
    cart_list_el.innerHTML =`<div style="text-align: center; margin: 50px 20px;">
                <p style="font-size: 24px; line-height: 1.5;">Sorry！購物車裡面沒有商品<br>將在<span id="time"></span>秒後刷新頁面...</p></div>`;
    let time = document.getElementById("time");
    if(s == 0){ location.href = "./shop.html";   }
    time.innerText = s;
    setTimeout(time_to_shop,1000)
    s--;
}






