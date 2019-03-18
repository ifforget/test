$(function () {

        //1.渲染categorytitle分类标题
        $.ajax({
            type: "get",
            url: "http://193.112.55.79:9090/api/getcategorytitle",
           
            success: function (res) {
                let html=template('catTitleTpl',{data:res.result});
                $('.mui-table-view').html(html);

            }
        });

        //2.点击分类标题，传递标题ID，获取具体分类数据，并进行二级列表渲染        
        $('.mui-table-view').on('tap','a.mui-navigate-right',function () {
            console.log(123)
                let titleId=$(this).data('titleid');                  
                     $.ajax({
                        type: "get",
                        url: "http://193.112.55.79:9090/api/getcategory?titleid="+titleId,
                        success: function (res) {
                            let data = res.result;
                            let html = template("catTpl",{arr:data})
                            $('.items').html(html)
                    }                
                    });
        })
  })