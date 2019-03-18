$(function () {
    init()

    function init() {
        eventList()
        save()
    }

    // 绑定点击显示影藏有货地区
    function save() {
        $('.is_detail_info').on("tap", ".btn1", function () {
            $(".address").toggle("hide")
        })
    }

    //  获取数据渲染评论
    function eventList() {
        $.get("http://193.112.55.79:9090/api/getmoneyctrl", {
            productid: getQueryString("productid")
        }, function (result) {
            console.log(result);
            let data = result.result[0]
            let html = ``;
            html += `
                <div class="info_name" >${data.productName}</div>
                <div class="info_price" >${data.productPinkage}</div>
                <div class="info_msg" >
                    <div class="info_msg1" >
                        <span>${data.productFrom}</span>
                        <span>${data.productTime}</span>
                        <span>${data.productTips}</span>
                    </div>
                    ${data.productImgLg}
                </div>
                <div class="input" >
                <input type="button" value="查看库存" class="btn1">
                <input type="button" value="前往购买" class="btn2" > 
                </div>
                <div  class="hide address" >${data.productCity}</div>
                ${data.productComment}
                ${data.productInfo2}
                `
            $(".fs_detail_info").html(html)

        })
    }

    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

})