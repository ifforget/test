$(function () {
    init()
    function init() {
        proList();
        click();
    }

    function proList() {
        $.get("http://193.112.55.79:9090/api/getcouponproduct", { couponid:getUrl("couponid")}, result => {
            console.log(result);
            let data = result.result;
            let html = "";
            for (let i = 0; i < data.length; i++) {
                html += `
                <li>
                    <a href="#">
                        <div class="item_left">
                        ${data[i].couponProductImg}
                        </div>
                        <div class="item_right">
                            <div class="pro_name">
                            ${data[i].couponProductName}
                            </div>
                            <div class="pro_price">
                            ${data[i].couponProductPrice}
                            </div>
                            <div class="pro_date">
                            ${data[i].couponProductTime}
                            </div>              
                        </div>
                    </a>
                </li>
                `;
            }           
            $(".pro_list ul").html(html);
        })
    }
    function click(){
      if(getUrl("couponid")==0){
        $(".mui-title").text('肯德基优惠券');
      }else if(getUrl("couponid")==1){
        $(".mui-title").text('必胜客优惠券');
      }else if(getUrl("couponid")==2){
        $(".mui-title").text('棒约翰优惠券');  
      }else{
        $(".mui-title").text('哈根达斯优惠券');    
      }
    }
    
    // 获取url上的参数 的值
    function getUrl(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
   }  
})