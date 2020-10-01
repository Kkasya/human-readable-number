module.exports = function toReadable (number) {
    let numbers = ['zero', 'one', 'two', "three", 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decades = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    function calculate(number) {
        switch (true) {
            case (number < 20):
                result += numbers[number];
                break;
            case (number < 100): {
                result = decades[Math.floor(number / 10) - 2];
                if (number % 10 != 0) result += ` ${numbers[number % 10]}`;
                break;
            }
            case (number < 1000):
                let hundred = `${numbers[Math.floor((number / 100))]} hundred`;
                if (number % 100 != 0) {
                    result += `${hundred} ${calculate(number % 100)}`;
                } else result = hundred;
                break;
        };
        return result;
    }
    result += calculate(number);
    return result;
}
