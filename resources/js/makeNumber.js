function makeLotto() {
    var arr = [];

    for (var i = 0; i < 45; i++) {
        arr[i] = i + 1;
    }

    var random;
    var lottoNum = new Array();

    for (var i = 0; i < 6; i++) {
        random = Math.floor(Math.random() * arr.length);
        [arr[arr.length - 1], arr[random]] = [arr[random], arr[arr.length - 1]];
        lottoNum[i] = arr.pop();
    }

    return lottoNum.sort(function(a, b){return a - b});
};