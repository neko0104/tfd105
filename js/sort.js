    let aaa = document.getElementsByClassName("item_list");
    aaa = aaa[0].querySelectorAll("li");

            let prd_id = document.getElementsByClassName("item_card");
            let prd_price = document.getElementsByClassName("card_price");
            let prd_name = document.getElementsByClassName("item_info_prd");
            let item_list = [];
            for(let i=0; i<aaa.length;i++){
                let task = {
                    "prd_id":prd_id[i].getAttribute("prd_id"),
                    "prd_name":prd_name[i].innerText,
                    "prd_price":prd_price[i].innerText,
                    "prd_uptime":prd_id[i].getAttribute("prd_uptime"),
                    "prd_HTML":aaa[i].innerHTML,
                };
                item_list.push(task);
            }

            // console.log( item_list);

            // console.log( item_list);            

            var sort = document.getElementById("shop_sort");
            sort.addEventListener("change", function(){
                switch(document.getElementById("shop_sort").value){
                                case "1":
                                    // console.log(1)
                                    item_list.sort(function(a,b){
                                        return -(a.prd_uptime - b.prd_uptime);
                                    });
                                    for(let i=0; i<aaa.length;i++){
                                        aaa[i].innerHTML = item_list[i].prd_HTML;
                                    }
                                    break;
                                case "2":
                                    // console.log(2)
                                    item_list.sort(function(a,b){
                                        return a.prd_uptime - b.prd_uptime;
                                    });
                                    for(let i=0; i<aaa.length;i++){
                                        aaa[i].innerHTML = item_list[i].prd_HTML;
                                    }
                                    break;
                                case "3":
                                    // console.log(3)
                                    item_list.sort(function(a,b){
                                        return -(a.prd_price - b.prd_price);
                                    });
                                    for(let i=0; i<aaa.length;i++){
                                        aaa[i].innerHTML = item_list[i].prd_HTML;
                                    }
                                    break;
                                case "4":
                                    // console.log(4)
                                    item_list.sort(function(a,b){
                                        return a.prd_price - b.prd_price;
                                    });
                                    for(let i=0; i<aaa.length;i++){
                                        aaa[i].innerHTML = item_list[i].prd_HTML;
                                    }
                                    break;
                            }
            });
            
