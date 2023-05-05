function getManchesterLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▁∣▔';
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0) symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}

function nonReturnToZeroLevel(bits){
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if(parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i-1].value) == 1) symbol = '∣▁▁';
        else if (parseInt(bits[i].value) == 0) symbol = '▁▁';
        if(parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i-1].value) == 0) symbol = '|▔▔';
        else if (parseInt(bits[i].value) == 1) symbol = '▔▔';
        result.push(symbol);
    }
    return result;
}

function nonReturnToZeroMark(bits){
    var result = [];
    let level = false;

    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if(parseInt(bits[i].value) == 1)
            {
                level = !level;
                symbol = '|';
            }
        else
            symbol = '';

        if(level === false)
            symbol = symbol + '▁▁';
        else
            symbol = symbol + '▔▔';

        result.push(symbol);
    }
    return result;
}

function nonReturnToZeroSpace(bits){
    var result = [];
    let level = false;

    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if(parseInt(bits[i].value) == 0)
            {
                level = !level;
                symbol = '|';
            }
        else
            symbol = '';

        if(level === false)
            symbol = symbol + '▁▁';
        else
            symbol = symbol + '▔▔';

        result.push(symbol);
    }
    return result;
}

function returnToZero(bits){
    var result = [];
    for (var i = 0; i < bits.length; i++) {
    if(parseInt(bits[i].value) == 1)
        result.push('|▔|_');
    else
        result.push('▁▁');
    }

    return result;
}

function byphaseLevel(bits){
    var result = [];
    
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if(parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i-1].value) == 0) symbol = '▔|_';
        else if (parseInt(bits[i].value) == 1) symbol = '|▔|_';
        if(parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i-1].value) == 0) symbol = '|_|▔';
        else if (parseInt(bits[i].value) == 0) symbol = '_|▔';
        
        result.push(symbol);
    }
    
    return result;
}