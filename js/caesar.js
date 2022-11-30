function _de(data,offset) {
    let plain = "";
    for (let i = 0; i < data.length; i++) {
        let ccode = data.charCodeAt(i);
        let pcode = ccode;
        if (ccode >= 65 && ccode <= 90) {
            pcode = ((ccode - 65) - offset * 1 + 26) % 26 + 65;
        }
        if (ccode >= 97 && ccode <= 122) {
            pcode = ((ccode - 97) - offset * 1 + 26) % 26 + 97;
        }
        plain += String.fromCharCode(pcode);
    }
    return plain
}
function _en(data,offset){
    let ctext = "";
    for (let i = 0; i < data.length; i++) {
        let pcode = data.charCodeAt(i);
        let ccode = pcode;
        if (pcode >= 65 && pcode <= 90) {
            ccode = ((pcode - 65) + offset * 1) % 26 + 65;
        }
        if (pcode >= 97 && pcode <= 122) {
            ccode = ((pcode - 97) + offset * 1) % 26 + 97;
        }
        ctext += String.fromCharCode(ccode);
    }
    return ctext;
}
//爆破
function Caesar_blast() {
    var str = document.getElementById('input').value;
    var output = document.getElementById('output');
    for (var i = 0; i < 26; i++) {
        output.value = output.value + _de(str, i)+'\n';
    }
}
//加密
function en(){
    var key = document.getElementById('key').value;
    var str = document.getElementById('input').value;
    if (key != ''&& str != '') {  
    	document.getElementById('output').value = _en(str, key);    
    } else {
        alert('信息不完整');
    }
}
//解密
function de(){
    var key = document.getElementById('key').value;
    var str = document.getElementById('input').value;
    if (key != ''&& str != '') {  
    	document.getElementById('output').value = _de(str, key);    
    } else {
        alert('信息不完整');
    }
}
function _Caesar_varia(str,dis,step){
    var new_str = '';
    dis=parseInt(dis);
    step=parseInt(step);
    for (var i = 0; i < str.length; i++) {
        new_str += String.fromCharCode(str.charCodeAt(i) +dis);
        dis+=step;
    }
    return new_str;
}
//变异凯撒
function Caesar_varia() {
    var step=document.getElementById('step').value;
    var key=document.getElementById('key').value;
    var str=document.getElementById('input').value;
    document.getElementById('output').value=_Caesar_varia(str,key,step);
}
function empty(){
    document.getElementById('output').value='';
}