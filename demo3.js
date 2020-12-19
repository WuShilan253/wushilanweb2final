var bannerinput = document.getElementById("bannerinput");
bannerinput.onclick = function () {
    bannerinput.value = "";
}
//交互效果1：实现banner图的轮播图的交互效果
var banner02 = document.getElementById("banner02");
var bannerimg = document.getElementById("bannerimg");
var imgList = ["./img/banner1.png", "./img/banner2.png", "./img/banner3.png", "./img/banner4.png"];
var index = 0;
var timerId = setInterval(function () {
    bannerimg.removeAttribute("src");
    bannerimg.setAttribute("src", imgList[index]);
    index = index + 1;
    if (index == 3) {
        index = 0;
    }
}, 3000)

//交互效果2：实现banner图的点击播放的交互效果
var showimg = document.getElementById("showimg");
var liList = showimg.getElementsByTagName("li");

liList[0].onclick = function () {
    bannerimg.removeAttribute("src");
    bannerimg.setAttribute("src", imgList[0]);
}
liList[1].onclick = function () {
    bannerimg.removeAttribute("src");
    bannerimg.setAttribute("src", imgList[1]);
}
liList[2].onclick = function () {
    bannerimg.removeAttribute("src");
    bannerimg.setAttribute("src", imgList[2]);
}
liList[3].onclick = function () {
    bannerimg.removeAttribute("src");
    bannerimg.setAttribute("src", imgList[3]);
}

//交互效果3：实现保持顶端nav持续悬浮效果
function goTop() {
    var top = document.getElementById("top");
    document.documentElement.scrollTop = document.body.scrollTop = 0;
}

window.onscroll = function () {
    var before = document.getElementById("before");
    var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (_scroll >= 58) {
        before.style.position = "fixed";
    } else {
        before.style.position = "absolute";
    }
    //交互效果4：实现一键回到顶部的效果
    var top = document.getElementById("top");

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 200) {
        top.style.display = "block";
    } else {
        top.style.display = "none"
    }
}
//交互效果5：实现我的抗疫态度的小调查的效果。
var pic = document.getElementById("pic");
var picList = pic.getElementsByTagName("img");
var txt = document.getElementById("txt");
var subbtn = document.getElementById("subbtn");
var comments = ["害怕、恐惧，觉得人类几乎无法战胜病毒。", "悲观，总感觉自己浑身无力，不敢外出。", "我不知道未来会是怎样，但我相信科学，相信医生们能战胜病毒！", "我坚信人类定能战胜病毒，我愿意为前线捐物捐资！", "我坚信人类定能战胜病毒，我愿意投身抗疫前线！"];
var flag = true;

for (var i = 0; i < picList.length; i++) {
    picList[i].onmouseover = function () {
        if (!flag) {
            return;
        }
        var index = this.getAttribute("title");
        var imgSrc = "";
        if (index <= 2) {
            imgSrc = "./img/star1.png";
        }
        else {
            imgSrc = "./img/star2.png";
        }
        for (var j = 0; j < index; j++) {
            picList[j].src = imgSrc;
        }
        txt.innerHTML = comments[index - 1];
    }
    picList[i].onmouseout = function () {
        if (!flag) {
            return;
        }
        for (var j = 0; j < picList.length; j++) {
            picList[j].src = "./img/star0.png";
        }
        txt.innerHTML = "欢迎大家进行评论交流~";
    }
    picList[i].onclick = function () {
        flag = !flag;
    }
}
subbtn.onclick = function () {
    txt.innerHTML = "欢迎大家进行评论交流~";
    for (var i = 0; i < picList.length; i++) {
        picList[i].src = "./img/star0.png";
    }
}

var wrong = document.getElementById("wrong");
var contibute = document.getElementById("contirbute");
var wrongtemp = document.getElementById("wrongtemp");
var contributetemp = document.getElementById("contributetemp");
var wtxt = document.getElementById("wtxt");
var ctxt = document.getElementById("ctxt");
var wbtn = document.getElementById("wbtn");
var cbtn = document.getElementById("cbtn");
var wclose = document.getElementById("wclose");
var cclose = document.getElementById("cclose");
//交互效果6：报错样式的出现和消失
wrongtemp.style.display = "none";
contributetemp.style.display = "none";
wrong.onclick = function () {
    wrongtemp.style.display = "block";
    wtxt.onfocus = function () {
        wtxt.innerHTML = null;
    }
}
wbtn.onclick = function () {
    console.log(wtxt.value);
    wrongtemp.style.display = "none";
    if (wtxt.value != "" && wtxt.innerHTML != "点击我，输入你找到的错误吧~") {
        alert("报错成功，感谢您！");
    }
    else {
        alert("您什么也没有输入，欢迎下次报错！");
    }
    wtxt.innerHTML = "点击我，输入你找到的错误吧~";
}
wclose.onclick = function () {
    wrongtemp.style.display = "none";
}
//交互效果7：投稿样式的出现和消失
contribute.onclick = function () {
    contributetemp.style.display = "block";
    ctxt.onfocus = function () {
        ctxt.innerHTML = null;
    }
}
cbtn.onclick = function () {
    contributetemp.style.display = "none";
    if (ctxt.value != "" && ctxt.innerHTML != "点击我，开始输入你的稿件吧~") {
        alert("投稿成功，感谢您！");
    } else if (ctxt.innerHTML != "") {
        alert("您什么也没有输入，欢迎下次投稿！");
    } else if (ctxt.innerHTML != "点击我，输入你的稿件吧~") {
        alert("您什么也没有输入，欢迎下次投稿！");
    }
    ctxt.innerHTML = "点击我，开始输入你的稿件吧~";
}
cclose.onclick = function () {
    contributetemp.style.display = "none";
}
//交互效果8：切换背景颜色
var protect1 = document.getElementById("protect1");
var protect2 = document.getElementById("protect2");
var body = document.getElementById("body");
var whole = document.getElementById("whole");
var last = document.getElementById("last");
protect1.onclick = function () {
    var flag = false;
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    var colorStr = "#";
    for (var i = 0; i < 6; i++) {
        var index = parseInt(Math.random() * arr.length);
        colorStr = colorStr + arr[index];
    }
    body.style.backgroundColor = colorStr;
    whole.style.backgroundColor = colorStr;
    last.style.backgroundColor = colorStr;
}
protect2.onclick = function () {
    body.style.backgroundColor = "#FFFAF4";
    whole.style.backgroundColor = "#FFFAF4";
    last.style.backgroundColor = "#fff";
}