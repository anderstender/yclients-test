/*
* конкретно в данной задаче рекурсивный алгоритм не даёт никаких преимуществ
* так как преимуществ в скорости работы нет
* при переполнении стека упадёт
* c натяжкой можно назвать этот код проще,
* возможно, код для поиска именно N-го члена последовательности будет проще и нагляднее
* но тут нужно запомнить ряд чисел чисел, и на рекурсию добавляется больше накладных расходов,
* нежели на цикл for, который фактически работает без накладных расходов
* из минусов итеративного подхода можно назвать то, что если передать ему на вход
* большое число, то for подвесит весь браузер пока не исполнится весь код
* */

let getFibonacciSequenceRecursion = (count) => {
    if (count < 2) {
        return [0, 1].slice(count);
    }
    let sequence = getFibonacciSequenceRecursion(count - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 1]);
    return sequence;
};



let start = (new Date()).getTime();
console.log('start recursion test');
for(let i = 0; i < 10000; i++){
    let seq = getFibonacciSequenceRecursion(1000);
}
console.log('time ' + ((new Date()).getTime() - start) +' ms');
console.log('=====');

/*
* итеративный алгоритм
* */
let getFibonacciSequenceIteration = (count) => {
    let sequence = [0,1];
    for(let cnt = count - 2; cnt >=0; cnt--){
        sequence.push(sequence[sequence.length-2] + sequence[sequence.length-1]);
    }
    return sequence.slice(0, count);
};

start = (new Date()).getTime();
console.log('start iterations test');

for(let i = 0; i < 10000; i++){
    let seqIter = getFibonacciSequenceIteration(1000);
}

console.log('time ' + ((new Date()).getTime() - start) +' ms');
