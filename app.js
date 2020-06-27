function inpp(num){
    var name=document.getElementById("inp")
    name.value += num
}
function clearall(){
    var name=document.getElementById('inp')
    name.value =""
}
function equals(){
    var name=document.getElementById('inp')
    name.value = eval(name.value)
}
function percentage(){
    var name=document.getElementById('inp')
   var namee=eval(name.value)
    var x=namee*100
    name.value=x+'%'
    
    

}
function bcksp(){
    // var name=document.getElementById('inp')
    // var x=name.value;
    // var y=x
    // y.pop();
    // alert(y)
    
    var value = document.getElementById("inp").value;
    document.getElementById("inp").value = value.substr(0, value.length - 1);

}   