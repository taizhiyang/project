function httpreplace(methods,a,b,callback) {
    /*
    * methods:协议类型
    * a:请求信息
    * b:服务器地址
    *callback:一个函数
    * */
    //第一步：创建一个网络请求对象（http),去服务端要数据，接收服务端数据
    var xhr=new XMLHttpRequest();
    //第二步：与服务端建立连接(get/post)请求方式，连接哪个服务器，用连接这个服务器的哪个接口
    xhr.open(methods,b);
    //设置请求头
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    //第三步：向服务器发送请求（传参）
    xhr.send(a);
    //第四步：接收服务器返回的数据
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4 && xhr.status==200){
            var responseData=JSON.parse(xhr.responseText);
            var str=responseData.data;
            callback(str,xhr.responseText);
        }
    }
}