var dict = {
    A: "01",
    B: "1000",
    C: "1010",
    D: "100",
    E: "0",
    F: "0010",
    G: "110",
    H: "0000",
    I: "00",
    J: "0111",
    K: "101",
    L: "0100",
    M: "11",
    N: "10",
    O: "111",
    P: "0110",
    Q: "1101",
    R: "010",
    S: "000",
    T: "1",
    U: "001",
    V: "0001",
    W: "011",
    X: "1001",
    Y: "1011",
    Z: "1100",
    0: "11111",
    1: "01111",
    2: "00111",
    3: "00011",
    4: "00001",
    5: "00000",
    6: "10000",
    7: "11000",
    8: "11100",
    9: "11110",
    ".": "010101",
    ",": "110011",
    "?": "001100",
    "'": "011110",
    "!": "101011",
    "/": "10010",
    "(": "10110",
    ")": "101101",
    "&": "01000",
    ":": "111000",
    ";": "101010",
    "=": "10001",
    "+": "01010",
    "-": "100001",
    _: "001101",
    '"': "010010",
    $: "0001001",
    "@": "011010"
},d = {};
for (var k in dict) {
    d[dict[k]] = k;
}

function e(e) {
    return e = e || {},
        [e[0] || "/", e[1] || "-", e[2] || "."]
}

function en_unicode(ch) {
    let r = [];
    for (let i = 0; i < ch.length; i++)
        r[i] = ('00' + ch.charCodeAt(i).toString(16)).slice(-4);
    r = r.join('');
    r = parseInt(r, 16).toString(2);
    return r;
}

function de_nuicode(mor) {
    mor = parseInt(mor, 2);
    if (isNaN(mor))
        return '';
    return decodeURI('%u' + mor.toString(16));
}

function _encode(str, conf) {
    conf = e(conf);
    var morse = [];
    str = str.replace(/\s+/g, '').toLocaleUpperCase().split('');
    for (var i = 0; i < str.length; i++) {
        c = str[i];
        m = dict[c];
        if (!m) {
            m = en_unicode(c);
        }
        morse.push(m.replace(/0/g, conf[2]).replace(/1/g, conf[1]));
    }
    return morse.join(conf[0]);
}

function _decode(str, conf) {
    conf = e(conf);
    var msg = [],
        mor;
    str = str.split(conf[0]);
    for (var i = 0; i < str.length; i++) {
        mor = str[i].replace(/\s+/g, '').replace(new RegExp('\\' + conf[2], 'g'), '0').replace(new RegExp('\\' + conf[1], 'g'), '1');
        s = d[mor];
        if (!s) {
            s = de_nuicode(mor);
        }
        msg.push(s)
    }
    return msg.join('').toLowerCase();
}
function conf(){
    return [document.getElementById('space').value,document.getElementById('long').value,document.getElementById('short').value]
}
function encode() {
    document.getElementById('output').value = _encode(document.getElementById('input').value,conf());
}

function decode() {
    document.getElementById('output').value = _decode(document.getElementById('input').value,conf());
}

function empty() {
    document.getElementById('input').value = '', document.getElementById('output').value = '';
}