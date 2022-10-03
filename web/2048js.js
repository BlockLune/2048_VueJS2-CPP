var box_c = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
var map = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
var bs1,
    bs2,
    bs3,
    bs4,
    bs5,
    bs6,
    bs7,
    bs8,
    bs9,
    bs10,
    bs11,
    bs12,
    bs13,
    bs14,
    bs15,
    bs16;

function getRandomNum(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min, 10);
}

function getTwoOrFour() {
    if (getRandomNum(1, 2) == 1) {
        return 2;
    }
    return 4;
}

function generateNewNum() {
    for (var i = 0; i < 1;) {
        var possibleI = getRandomNum(0, 3);
        var possibleJ = getRandomNum(0, 3);
        if (box_c[possibleI][possibleJ] == 0) {
            i++;
            box_c[possibleI][possibleJ] = getTwoOrFour();
        }
    }
}

function map_refresh() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            map[i][j] = 0;
        }
    }
}


function show() {
    console.log(box_c);
}

function dataUpdate() {
    if (box_c[0][0] != 0) {
        bs1 = box_c[0][0];
    }
    else {
        bs1 = "";
    }
    if (box_c[0][1] != 0) {
        bs2 = box_c[0][1];
    }
    else {
        bs2 = "";
    }
    if (box_c[0][2] != 0) {
        bs3 = box_c[0][2];
    }
    else {
        bs3 = "";
    }
    if (box_c[0][3] != 0) {
        bs4 = box_c[0][3];
    }
    else {
        bs4 = "";
    }
    if (box_c[1][0] != 0) {
        bs5 = box_c[1][0];
    }
    else {
        bs5 = "";
    }
    if (box_c[1][1] != 0) {
        bs6 = box_c[1][1];
    }
    else {
        bs6 = "";
    }
    if (box_c[1][2] != 0) {
        bs7 = box_c[1][2];
    }
    else {
        bs7 = "";
    }
    if (box_c[1][3] != 0) {
        bs8 = box_c[1][3];
    }
    else {
        bs8 = "";
    }
    if (box_c[2][0] != 0) {
        bs9 = box_c[2][0];
    }
    else {
        bs9 = "";
    }
    if (box_c[2][1] != 0) {
        bs10 = box_c[2][1];
    }
    else {
        bs10 = "";
    }
    if (box_c[2][2] != 0) {
        bs11 = box_c[2][2];
    }
    else {
        bs11 = "";
    }
    if (box_c[2][3] != 0) {
        bs12 = box_c[2][3];
    }
    else {
        bs12 = "";
    }
    if (box_c[3][0] != 0) {
        bs13 = box_c[3][0];
    }
    else {
        bs13 = "";
    }
    if (box_c[3][1] != 0) {
        bs14 = box_c[3][1];
    }
    else {
        bs14 = "";
    }
    if (box_c[3][2] != 0) {
        bs15 = box_c[3][2];
    }
    else {
        bs15 = "";
    }
    if (box_c[3][3] != 0) {
        bs16 = box_c[3][3];
    }
    else {
        bs16 = "";
    }
}

// 初始化
/* for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        box_c[i][j] = 0;
        map[i][j] = 0;
    }
} */

// 直接用两遍这个函数生成两个初始数字
generateNewNum();
generateNewNum();
dataUpdate();

/* document.onkeydown = function (event) {
    // console.log(event); 
    if (event.code == 'KeyW' || 'ArrowUp') {
        myv.moveUp();
    }
    if (event.code == 'KeyA' || 'ArrowLeft') {
        myv.moveLeft();
    }
    if (event.code == 'KeyS' || 'ArrowRight') {
        myv.moveDown();
    }
    if (event.code == 'KeyD' || 'ArrowDown') {
        myv.moveRight();
    }
} */

var theBox = {
    b1: bs1,
    b2: bs2,
    b3: bs3,
    b4: bs4,
    b5: bs5,
    b6: bs6,
    b7: bs7,
    b8: bs8,
    b9: bs9,
    b10: bs10,
    b11: bs11,
    b12: bs12,
    b13: bs13,
    b14: bs14,
    b15: bs15,
    b16: bs16
}

var myv = new Vue({
    el: '#app',
    data: theBox,
    methods: {
        refreshShow: function () {
            Vue.set(theBox, 'b1', bs1);
            Vue.set(theBox, 'b2', bs2);
            Vue.set(theBox, 'b3', bs3);
            Vue.set(theBox, 'b4', bs4);
            Vue.set(theBox, 'b5', bs5);
            Vue.set(theBox, 'b6', bs6);
            Vue.set(theBox, 'b7', bs7);
            Vue.set(theBox, 'b8', bs8);
            Vue.set(theBox, 'b9', bs9);
            Vue.set(theBox, 'b10', bs10);
            Vue.set(theBox, 'b11', bs11);
            Vue.set(theBox, 'b12', bs12);
            Vue.set(theBox, 'b13', bs13);
            Vue.set(theBox, 'b14', bs14);
            Vue.set(theBox, 'b15', bs15);
            Vue.set(theBox, 'b16', bs16);
        },
        ifEnd: function () {
            console.log("正在检测游戏是否结束！");
            var flag = 0;
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    // 如果有空位，说明必定可以继续
                    if (box_c[i][j] == 0) {
                        flag = 1;
                        console.log("检测到游戏仍然有空位，游戏继续！");
                        break;
                    }
                }
                if (flag == 1) {
                    break;
                }
            }
            // 为0则说明没有空位了
            if (flag == 0) {
                console.log("检测到游戏没有空位了，下面检测是否有可合并方块！");
                var flag2 = 0;
                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 3; j++) {
                        if ((box_c[i][j] == box_c[i][j + 1]) || (box_c[i][j] == box_c[i + 1][j])) {
                            flag2 = 1;
                            console.log("检测到可合并方块，游戏继续！");
                            break;
                        }
                    }
                    if (flag2 == 1) {
                        break;
                    }
                }
                // 最后一列单独检测
                for (var i = 0; i < 3; i++) {
                    if (box_c[i][3] == box_c[i + 1][3]) {
                        flag2 = 1;
                        console.log("检测到可合并方块，游戏继续！");
                        break;
                    }
                }
                // 最后一行单独检测
                for (var j = 0; j < 3; j++) {
                    if (box_c[3][j] == box_c[3][j + 1]) {
                        flag2 = 1;
                        console.log("检测到可合并方块，游戏继续！");
                        break;
                    }
                }
                if (flag2 == 0) {
                    console.log("检测到游戏无空位且无法继续移动，游戏结束！");
                    alert('游戏结束，即将重新开始！');
                    location.reload();
                }
            }
        },
        moveUp: function () {
            this.ifEnd();
            console.log("向上移动！");
            /* alert("向上移动！"); */
            for (var j = 0; j < 4; j++) {
                for (var i = 3; i > 0; i--) {
                    if (box_c[i - 1][j] == 0) {
                        box_c[i - 1][j] = box_c[i][j];
                        box_c[i][j] = 0;
                        // 将下边的全部平移过来
                        for (var k = i; k < 3; k++) {
                            box_c[k][j] = box_c[k + 1][j];
                            box_c[k + 1][j] = 0;
                        }
                    }
                    if (box_c[i - 1][j] == box_c[i][j] && map[i - 1][j] == 0 && map[i][j] == 0) {
                        box_c[i - 1][j] *= 2;
                        map[i - 1][j] = 1; //标识此次合并
                        box_c[i][j] = 0;
                        // 将下边的全部平移过来
                        for (var k = i; k < 3; k++) {
                            box_c[k][j] = box_c[k + 1][j];
                            box_c[k + 1][j] = 0;
                        }
                    }
                }
            }
            show();
            generateNewNum();
            map_refresh();
            dataUpdate();
        },
        moveDown: function () {
            this.ifEnd();
            console.log("向下移动！");
            /* alert("向下移动！"); */
            for (var j = 0; j < 4; j++) {
                for (var i = 0; i < 3; i++) {
                    if (box_c[i + 1][j] == 0) {
                        box_c[i + 1][j] = box_c[i][j];
                        box_c[i][j] = 0;
                        // 将上边的全部平移过来
                        for (var k = i; k > 0; k--) {
                            box_c[k][j] = box_c[k - 1][j];
                            box_c[k - 1][j] = 0;
                        }
                    }
                    if (box_c[i + 1][j] == box_c[i][j] && map[i + 1][j] == 0 && map[i][j] == 0) {
                        box_c[i + 1][j] *= 2;
                        map[i + 1][j] = 1; //标识此次合并
                        box_c[i][j] = 0;
                        // 将上边的全部平移过来
                        for (var k = i; k > 0; k--) {
                            box_c[k][j] = box_c[k - 1][j];
                            box_c[k - 1][j] = 0;
                        }
                    }
                }
            }
            show();
            generateNewNum();
            map_refresh();
            dataUpdate();
            this.refreshShow();
        },
        moveLeft: function () {
            this.ifEnd();
            console.log("向左移动！");
            /* alert("向左移动！"); */
            for (var i = 0; i < 4; i++) {
                for (var j = 3; j > 0; j--) {
                    if (box_c[i][j - 1] == 0) {
                        box_c[i][j - 1] = box_c[i][j];
                        box_c[i][j] = 0;
                        // 将右边的全部平移过来
                        for (var k = j; k < 3; k++) {
                            box_c[i][k] = box_c[i][k + 1];
                            box_c[i][k + 1] = 0;
                        }
                    }
                    if (box_c[i][j - 1] == box_c[i][j] && map[i][j - 1] == 0 && map[i][j] == 0) {
                        box_c[i][j - 1] *= 2;
                        map[i][j - 1] = 1; //标识此次合并
                        box_c[i][j] = 0;
                        // 将右边的全部平移过来
                        for (var k = j; k < 3; k++) {
                            box_c[i][k] = box_c[i][k + 1];
                            box_c[i][k + 1] = 0;
                        }
                    }
                }
            }
            show();
            generateNewNum();
            map_refresh();
            dataUpdate();
            this.refreshShow();
        },
        moveRight: function () {
            this.ifEnd();
            console.log("向右移动！");
            /* alert("向右移动！"); */
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 3; j++) {
                    if (box_c[i][j + 1] == 0) {
                        box_c[i][j + 1] = box_c[i][j];
                        box_c[i][j] = 0;
                        // 将左边的全部平移过来
                        for (var k = j; k > 0; k--) {
                            box_c[i][k] = box_c[i][k - 1];
                            box_c[i][k - 1] = 0;
                        }
                    }
                    if (box_c[i][j + 1] == box_c[i][j] && map[i][j + 1] == 0 && map[i][j] == 0) {
                        box_c[i][j + 1] *= 2;
                        map[i][j + 1] = 1; //标识此次合并
                        box_c[i][j] = 0;
                        // 将右边的全部平移过来
                        for (var k = j; k > 0; k--) {
                            box_c[i][k] = box_c[i][k - 1];
                            box_c[i][k - 1] = 0;
                        }
                    }
                }
            }
            show();
            generateNewNum();
            map_refresh();
            dataUpdate();
            this.refreshShow();
        }
    }
});