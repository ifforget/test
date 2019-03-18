$(function () {
    init();

    function init() {
        enentList()
        pagemove ()
    };


    // 注册下拉点击事件
    function pagemove () { 
        $.get("http://193.112.55.79:9090/api/getmoneyctrl",function (result) { 
            let totalpage=Math.ceil(result.totalCount/result.pagesize)
            let index=0
            let html1=``;
            for(let i=0;i<totalpage;i++ ){
                index++
              html1+=`
              <option value="${index}"> <a href="fs-detail.html?pageid:${index}"> ${index}/${totalpage} </a> </option>
            `   
            }
           $(".fs_page").html(html1)   

         })
         select ()
        nextpage ()
     }


    //  注册下拉框中的点击事件

    function select () { 
        console.log(12121);
        $(".fs_page").on("tap","option",function () { 
            console.log(12121);
            
            console.log(this.parent.val());
             
         })
     }

    //  注册切换按钮 的点击事件
     function nextpage () { 
         $(".fs_next").on("tap",function () { 
             let num=$("option").val()
             console.log(num);
          })
      }

    // 动态生成页面结构
    function enentList() {
        $.get("http://193.112.55.79:9090/api/getmoneyctrl", {pageid:0}, function (result) {
            let html = ``;
            for (let i = 0; i < result.result.length; i++) {
                let data = result.result[i];
                // 获取字符串中的数值
                var s = data.productComCount;
                var num = s.replace(/[^0-9]/ig, "");
                // 拼接数据
                html += `
                <a href="fs-detail.html?productid=${data.productId}" >
                    <div class="fs_goods">
                        <div class="fs_goods_img">
                            ${data.productImgSm}
                        </div>
                        <div class="fs_goods_right">
                            <div>
                                <span class="fs_goods_name">${data.productName}0</span>
                                <span class="fs_goods_price">${data.productPinkage} </span>
                            </div>
                            <div class="fs_goods_ft">
                                <div>
                                    <span class="fs_goods_from">${data.productFrom}</span> |
                                    <span class="fs_goods_time">${data.productTime}</span>
                                </div>
                                <span class="fs_goods_count"> 评论数： ${num}</span>
                            </div>
                        </div>
                    </div>
                </a>
                `
            }
            // 渲染到页面
            $(".fs_goods_list").html(html)
        })
    }


    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }



})