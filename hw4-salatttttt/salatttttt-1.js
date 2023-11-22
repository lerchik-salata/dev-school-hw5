class VigenèreCipher {
    constructor(key, abc) {
        this.key = key;
        this.abc = abc;
    }

    generateKey(message) {
        let keyword = "";
        for (let i = 0; i < message.length; i++) {
            keyword += this.key[i % this.key.length];
        }
        return keyword;
    }

    processMessage(message, key, operation) {
        let result = "";
        for (let i in message) {
            if (this.abc.includes(message[i])) {
                const messageIndex = this.abc.indexOf(message[i]);
                const keyIndex = this.abc.indexOf(key[i]);
                const newIndex = operation(messageIndex, keyIndex, this.abc.length);
                result += this.abc[newIndex];
            } else {
                result += message[i];
            }
        }
        return result;
    }

    encode(message) {
        const key = this.generateKey(message);
        const encodeOperation = (a, b, len) => (a + b) % len;
        return this.processMessage(message, key, encodeOperation);
    }

    decode(message) {
        const key = this.generateKey(message);
        const decodeOperation = (a, b, len) => (a - b + len) % len;
        return this.processMessage(message, key, decodeOperation);
    }
}