(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        // todo: подсчитать кол-во островов на карте
        var oneAmoint = 0;
        var islandsAmount = 0;

        {
            newLine = [];
            for (var i = 0; i < map[0].length + 2; i++) {
                newLine[i] = 0;
            }

            for (i = 0; i < map.length; i++) {
                map[i].unshift(0);
                map[i].push(0);
            }
            map.unshift(newLine);
            map.push(newLine);
        }

        var mapRez = map;

        /*var islands = [];
        islands[0] = {
            id: "1",
            name: "firstArrElement"
        };*/

        function isBeginning() {
            return ( (i > 0) && (map[i][j - 1] !== ISLAND) && (map[i - 1][j] !== ISLAND) )
                || ( (i === 0) && (map[i][j - 1] !== ISLAND) );
        }


        function isEnding() {
            return ((map[i][j + 1] === ISLAND) || ((i < map.length - 1) && (map[i + 1][j] === ISLAND))) && (map[i][j - 1] !== ISLAND) && ((i > 0) && (map[i - 1][j] !== ISLAND));
        }

        for(i=0;i<map.length;i++){
            for(var j=0;j<map[0].length;j++){

                console.log(map[i][j] + ": на месте " + "[" + i + "]"+ "[" + j + "]");

                if(map[i][j] === ISLAND){
                    oneAmoint++;
                    //islandsAmount++;
                    if(isBeginning()){
                        console.log('новый остров +1');
                        islandsAmount++;
                    }
                    if((map[i][j+1] === ISLAND) && (map[i-1][j + 1] === ISLAND)){
                        console.log('не начало');
                        islandsAmount--;
                    }
                    if((map[i][j+1] === ISLAND) && (map[i][j + 2] === ISLAND)&& (map[i-1][j + 2] === ISLAND)){
                        console.log('не начало');
                        islandsAmount--;
                    }
                    if( isEnding() ){
                        console.log('конец острова -1');
                        islandsAmount--;
                    }
                    if(map[i][j-1] === ISLAND){
                        console.log('вспышка слева -1');
                        islandsAmount--;
                    }
                    if((i>0) && (map[i-1][j] === ISLAND)){
                        console.log('вспышка сверху -1');
                        islandsAmount--;
                    }
                    if((i<map.length-1) && (map[i+1][j] === ISLAND)){
                        console.log('остров снизу +1');
                        islandsAmount++;
                    }
                    if(map[i][j+1] === ISLAND){
                        console.log('остров справа +1');
                        islandsAmount++;
                    }
                }

            }
            console.log('\n');
        }
        //map[i][j] = WATER;
        console.log('Всего единиц:' + oneAmoint);
        console.log('Всего островов:' + islandsAmount);

        return islandsAmount;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
