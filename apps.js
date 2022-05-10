let hey = "h i"

let fname = new String(hey)

console.log(hey[1])

function encode(message) {
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++) {
        let index = letters.indexOf(message[i]);
        if (message.indexOf(" ") >= 0) {
            result += " " + newletters[index];
        } else {
            result += newletters[index];

        }
    }
    return result;
}


function decode(message, securityKey) {
    securityKey = parseInt(securityKey)
    message = message.toLowerCase();
    newletters = "";
    for (let i = 0; i < message.length; i++) {
        if (message[i] == " ") {
            newletters += " "
        } else {
            for (let j = 0; j < letters.length; j++) {
                if (message[i] == letters[j]) {
                    if ((j - securityKey) < 0) {
                        newletters += letters[(j - securityKey) + 26]
                    } else {
                        newletters += letters[(j - securityKey)]
                    }

                }
            }
        }
    }
    return newletters

}