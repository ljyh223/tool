


function check(maxWidth, maxHeight) {
    var image={width:window.wh[0],height:window.wh[1]}
    if (image.width / image.height >= maxWidth / maxHeight) {
        if (image.width > maxWidth) {
            tempWidth = maxWidth;
            tempHeight = (image.height * maxWidth) / image.width;
        } else {
            tempWidth = image.width;
            tempHeight = image.height;
        }
    } else {
        if (image.height > maxHeight) {
            tempHeight = maxHeight;
            tempWidth = (image.width * maxHeight) / image.height;
        } else {
            tempWidth = image.width;
            tempHeight = image.height;
        }
    }

    console.log(image.width, image.height)
    console.log('调整后', tempWidth, tempHeight)
    return [tempWidth, tempHeight]
}


function smallquas(wid,hei){

}
function oneFile() {
    var url = document.getElementById('path').value.replaceAll('"', '')
    const i = new Image()
    i.src = url
    const e = document.createElement('img')
    e.src = url

    e.onload = () => {
        var f=document.body.childNodes[3]
        var e1 = document.getElementById('pic')
        f.removeChild(e1)
        e.id = "pic"
        f.insertBefore(e,document.getElementById('one'))
        window.wh = [e.width, e.height]
        const p = check(100, 100)
        e.width = p[0]
        e.height = p[1]
    }
    i.id = "pic"
}
function imgON(){
    var pic=document.getElementById('pic')
    let e2=check(100,100)
    console.log('e2',e2)
    pic.width=e2[0]
    pic.height=e2[1]

}

function makeFragments(sim) {
    var m = document.getElementById("m").value;
    var n = document.getElementById("n").value;
    var frags = "<table id = 'fragTable' border='0'>";
    var k = 0
    for (var i = 0; i < m; i++) {
        frags += "<tr>";
        for (var j = 0; j < n; j++) {

            frags += "<td><div id='div" + k + "'draggable='true' ondragstart='onDragStart(event)' ondragover='onDragOver(event)' ondrop='onDrop(event)'></div></td>";
            k++
        }
        frags += "</tr>";
    }

    frags += "</table>";

    document.getElementById("fragments").innerHTML = frags;
    if (sim) {
        addImage();
    }

}
function addImage() {
    var m = document.getElementById("m").value;
    var n = document.getElementById("n").value;
    const getwh = check(1080,1080)
    console.log(getwh)
    var k = 0
    var url = document.getElementById('pic').src
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var curdiv = document.getElementById("div" + k.toString());
            var wid = getwh[0]
            var hgt = getwh[1]
            //下面修改
            curdiv.style.background = 'url(' + url + ') no-repeat scroll';
            curdiv.style.backgroundSize = getwh[0] + 'px ' + getwh[1] + 'px';
            curdiv.style.width = (wid / n) + "px";
            curdiv.style.height = (hgt / m) + "px";
            curdiv.style.backgroundPosition = getInverse(j * (wid / n)) +
                "px" + ' ' + getInverse(i * (hgt / m)) + "px";
            k = k + 1
        }
    }

    var dumpster=document.getElementsByClassName('dumpster')
    for (let c of dumpster) {
        c.style.border_collapse='collapse';
    }
    var d = document.getElementsByClassName('dumpster')
    if (d) {
        for (let j = 0; j < 10; j++) {
            d[j].style.width = (wid / n) + "px"
            d[j].style.height = (hgt / m) + "px"
        }
    }
}
function getInverse(num) {
    return (0 - num);
}
// 存放拖拽的元素
var dragElement = null
function onDragStart(e) {
    // 获取当前拖拽元素
    dragElement = e.currentTarget
}
function onDragOver(e) {
    // 默认的当你dragover的时候会阻止你做drop的操作，所以需要取消这个默认
    e.preventDefault()
}
function onDrop(e) {
    // 当拖动结束的时候，给拖动div所在的位置下面的div做drop事件
    let dropElement = e.currentTarget
    if (dragElement != null && dragElement != dropElement) {
        let wrapper = dropElement.parentElement
        // 临时 div 用于存储 box
        let temp = document.createElement('div')
        // 添加 temp 到父元素 wrapper 中
        wrapper.appendChild(temp)
        // 交换
        wrapper.replaceChild(temp, dropElement)//没有
        wrapper = dragElement.parentElement
        wrapper.replaceChild(dropElement, dragElement)
        wrapper = temp.parentElement
        wrapper.replaceChild(dragElement, temp)
    }
}




function create_table(l) {
    var columns = document.getElementById("m").value;
    var row = (l % columns) > 0 ? (l / columns) + 1 : l / columns
    var frags = "<table id = 'fragTable' border='0'>";
    var k = 0
    for (var i = 0; i < columns; i++) {
        frags += "<tr>";
        for (var j = 0; j < row; j++) {
            frags += "<td><div id='div" + k + "'draggable='true' ondragstart='onDragStart(event)' ondragover='onDragOver(event)' ondrop='onDrop(event)'></div></td>";
            k++
        }
        frags += "</tr>";
    }

    frags += "</table>";

    document.getElementById("fragments").innerHTML = frags;
}
function showImg() {
    var files = document.getElementById('img_file').files;
    var path=document.getElementById('path').value.replaceAll('"','')
    var img=new Image()
    img.src=path + files[1].name
    window.wh=[img.width,img.height]
    console.log(window.wh)
    if (files.length > 1) {
        console.log('共计', files.length)
        create_table(files.length)

        for (let i = 0; i < files.length; i++) {
            console.log(path+files[i].name)
            document.getElementById('div' + i).style.background = "url(" + path + files[i].name + ")";
            document.getElementById('div' + i).style.backgroundSize = "100% 100%";
            document.getElementById('div' + i).style.width = document.getElementById('W').value + 'px'
            document.getElementById('div' + i).style.height = document.getElementById('H').value + 'px'
        }


    }
}

