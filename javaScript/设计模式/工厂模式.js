// 工厂模式是隐藏了创建对象的操作

// 简单工厂
function factory(role){
    function superMan(){
        this.name = '超级管理员'
        this.role = ['修改密码','发布消息','查看主页']
    }
    function commonMan(){
        this.name = '普通游客'
        this.role = ['查看主页']
    }
    switch(role){
        case 'superman':
            return new superMan()
            break;
        case 'commonman':
            return new commonMan()
            break;
        default:
            throw new Error('参数错误')
    }
}
// 工厂函数
function Factory(role){
    if(this instanceof Factory){
        var obj = this;
        if(obj[role]){
            throw new Error('参数错误')
        }else{
            return (new obj[role])()
        }
    }else{
        return new Factory(role)
    }
}
Factory.prototype.admin = function(){
    this.name = '平台用户'
    this.role = ['登陆页','主页']
}
Factory.prototype.common = function(){
    this.name = '游客'
    this.role = ['登陆页']
}