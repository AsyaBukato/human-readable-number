module.exports = function toReadable (number) {
    const dict = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };

    if (number < 20) {
        return dict[number];
    } else if (number < 100) {
        if (number % 10 === 0) {
            return dict[number];
        } else {
            return dict[Math.floor(number / 10) * 10] + ' ' + dict[number - Math.floor(number / 10) * 10];
        }
    } else if (number < 1000) {
        if (number % 100 === 0) {
            return dict[Math.floor(number / 100)] + ' hundred';
        } else {
            let dec = number - Math.floor(number / 100) * 100;
            if (dec < 20) {
                return dict[Math.floor(number / 100)] + ' hundred ' + dict[dec];
            } else {
                if (dec % 10 === 0) {
                    return dict[Math.floor(number / 100)] + ' hundred ' + dict[dec];
                } else {
                    return dict[Math.floor(number / 100)] + ' hundred ' + dict[Math.floor(dec / 10) * 10] + ' ' + dict[dec - Math.floor(dec / 10) * 10];
                }
            }
        }
    }
}
