(function(){
    var module = angular.module('board.module');

    module.controller("board.ctrl", function($interval){
        var vm = this;
        vm.boardArray=fillArrayWithNumbers(9);


        vm.onClick = function onSquareClick(idNum){
            var table = document.getElementsByClassName("cell");
            if(idNum+3 > table.length){
                table[idNum-1].innerText="";
            }
        };


        function fillArrayWithNumbers(n) {
            var arr = Array.apply(null, Array(n));
            return arr.map(function (x, i) { if(i==8) {return ""} else { return i+1 } });
        }

    });
})();
