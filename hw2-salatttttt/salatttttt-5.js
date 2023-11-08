function getRootProperty(object, num, current = null) {
    for (let key in object) {
        if (Array.isArray(object[key])) {
            if (object[key].includes(num)) {
                return current || key;
            }
        } else if (typeof object[key] === 'object') {
            let result = getRootProperty(object[key], num, current || key);
            if (result !== null) {
                return result;
            }
        }
    }
    return null;
}


object = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            },
            "fv": [1, 3, 6, 9]
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250]
        }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
}

console.log(getRootProperty(object, 111));



