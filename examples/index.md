# Demo

---

## Normal usage
````html
<button id="showToastOk">操作成功！</button>
<button id="showToastWarn">数据加载！</button>
<button id="showToastErr">操作失败！</button>
````
````javascript
seajs.use(['jquery','index'],function($,Toast) {
	$('#showToastOk').on('click',function(){
        Toast.show('操作成功！', 'ok');
    });
    $('#showToastWarn').on('click',function(){
        Toast.show('数据加载中...', 'warn');
    });
    $('#showToastErr').on('click',function(){
        Toast.show('操作失败，系统错误！', 'err');
    });
});
````
