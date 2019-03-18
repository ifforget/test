$(function () {
    init()

    function init() {
        eventList()

    }
    // 编辑添加模板
    function eventList() {
        $.get("http://193.112.55.79:9090/api/getinlanddiscount", function (result) {
        let html =``;
            for (let i = 0; i < result.result.length; i++) {
                let data = result.result[i];
                html +=`
                <a href="is-detail.html?productid=${data.productId}" >
                    <div class="is_goods">${data.productImg}
                        <div class="is_goods_name">${data.productName}</div>
                        <div class="is_goods_price">${data.productPrice}</div>
                        <div class="is_goods_from_time">
                            <span>${data.productFrom}</span> |
                            <span>${data.productTime}</span>
                        </div>
                    </div>
                </a> `
            }
            console.log(result);
            
            $(".is_goods_list").html(html)
        })
    }

})