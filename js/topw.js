tap = [
    ['A', 'B', 'C', 'K', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z'],
]
function _(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[i] == arr2[j]) {
                return arr1[i]
            }
        }
    }
}
function de() {
    var str = document.getElementById('input').value;
    if (str) {
        var new_str = '', arr;
        var str_arr = str.split('/')
        if (str_arr.length == 1) {
            str_arr = str.split(' ')
            for (let i = 0; i < str_arr.length; i++) {
                arr = str_arr[i].split('');
                if (arr.length > 1) {
                    new_str += tap[parseInt(arr[0])-1][parseInt(arr[1])-1]
                }
            }
        }else{
            for (let i = 0; i < str_arr.length; i++) {
                arr = str_arr[i].split(' ');
                if (arr.length > 1) {
                    new_str += tap[arr[0].length - 1][arr[1].length - 1]
                }
            }
        }
    }
    document.getElementById('output').value=new_str;
}
function en() {
    var str = document.getElementById('input').value;
    if (str) {
        var new_str = [], _ = '', $ = [], s = '';
        var str_arr = str.split('');
        for (let i = 0; i < str_arr.length; i++) {
            for (let j = 0; j < tap.length; j++) {
                for (let k = 0; k < tap[j].length; k++) {
                    if (str_arr[i] == tap[j][k]) {
                        new_str[i] = []
                        new_str[i].push(j + 1)
                        new_str[i].push(k + 1)
                    }
                }
            }
            _ += new_str[i].toString().replace(',', '') + ' ';
            for (let q = 0; q < 2; q++) {
                $[q] = []
                for (let w = 0; w < new_str[i][q]; w++) {
                    $[q].push('.')
                }
                s += $[q].join('')
                s += q == 0 ? ' ' : ''
            }
            s += '/'
        }
        document.getElementById('output').value = _ + '\n\n' + s;
    }
}
function empty() {
    document.getElementById('output').value = '';
    document.getElementById('input').value = '';
}