function header() {
    var text = document.getElementById('input').value.replace('://', '\/\/'), h = {}, s, S = '{';
    text = text.split('\n')
    for (let i = 0, l = text.length; i < l; i++) {
        s = text[i].split(':', 2);
        S += "\'" + s[0] + "\'" + ':' + "\'" + s[1].toString().replace(' ', '') + "\',\n";
    }
    document.getElementById('output').value = S.slice(0, -2) + '\n}';
}
function from() {
    var text = document.getElementById('input').value, h = {}, s;
    text = text.split('&')
    for (let i = 0, l = text.length; i < l; i++) {
        s = text[i].split('=', 2);
        h[s[0]] = s[1];
    }
    document.getElementById('output').value = JSON.stringify(h).split('\",\"').join('\",\n\"');
}
var escapeList=['\\n','\\r','\\t']
function Replace() {
    var before = document.getElementById('before').value;
    var after = document.getElementById('after').value;
    console.log(after)
    var s= document.getElementById('input').value;
    s=s.replaceAll(before,after.replace(/\\n/,'\n'))
    document.getElementById('output').value = ''+s;
    // document.getElementById('num').innerHTML = before.find(after);
}
function empty() {
    document.getElementById('input').value = '', document.getElementById('output').value = '', document.getElementById('after').value = '', document.getElementById('before').value = '';
}
function copy() {
    var word = document.getElementById('output')
    if (word.value.length != 0) {
        word.select();
        document.execCommand('Copy');
    }
}
function exchange(){
    var str=document.getElementById('input').value;
    document.getElementById('input').value=document.getElementById('output').value;
    document.getElementById('output').value=str;
}
function order(){
    switch (document.getElementById('before').value) {
        case "reverse":
            document.getElementById("output").value=document.getElementById("input").value.split('').reverse().join('')
            break;
    
        default:
            break;
    }
}
