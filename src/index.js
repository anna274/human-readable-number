module.exports = function toReadable (number) {
  
  
    function readNumber(num){
        if(num < 10){
  
            switch(num){
                case 1:
                    return 'one';
                case 2:
                    return 'two';
                case 3:
                    return 'three';
                case 4:
                    return 'four';
                case 5:
                    return 'five';
                case 6:
                    return 'six';
                case 7:
                    return 'seven';
                case 8:
                    return 'eight';
                case 9:
                    return 'nine';
                default:
                    return '';
            }
  
        }else{
            if(num > 9 && num < 20){
                switch(num){
                    case 11:
                        return 'eleven';
                    case 12:
                        return 'twelve';
                    case 13:
                        return 'thirteen';
                    case 14:
                        return 'fourteen';
                    case 15:
                        return 'fifteen';
                    case 16:
                        return 'sixteen';
                    case 17:
                        return 'seventeen';
                    case 18:
                        return 'eighteen';
                    case 19:
                        return 'nineteen';
                    default:
                        return 'ten';
                }
                
            }else{
                switch(num){
                    case 20:
                        return 'twenty';
                    case 30:
                        return 'thirty';
                    case 40:
                        return 'forty';
                    case 50:
                        return 'fifty';
                    case 60:
                        return 'sixty';
                    case 70:
                        return 'seventy';
                    case 80:
                        return 'eighty';
                    case 90:
                        return 'ninety';
                }
            }
        }   
    }

    if(number == 0){
        return 'zero';
    }
  
    let result = [];
    number = (number + '').split('').reverse();
  
    for(let i = 0; i < number.length; i++){
        switch(i){
            case 0: {
                result.push(readNumber(Number.parseInt(number[i])));
                break;
            }
            case 1:{
                if(number[i] == '1' || number[i - 1] == '0'){
                    result.pop()
                    result.push(readNumber(Number.parseInt(number[i] + number[i - 1])));
                }else{
                  if(number[i] != '0'){
                    result.push(readNumber(Number.parseInt(number[i] + '0')));
                  }
                }
                break;
            }
            case 2:{
                result.push('hundred', readNumber(Number.parseInt(number[i])));
                break;
            }
        }
    }
    return result.reverse().join(' ').trim();
 }
