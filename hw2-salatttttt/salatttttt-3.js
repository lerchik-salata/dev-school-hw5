function groupAnagrams(arr) {
    let seenAnagrams = {};
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let sortedWord = word.split('').sort().join('');

        if (seenAnagrams[sortedWord]) {
            seenAnagrams[sortedWord].push(word);
        } else {
            seenAnagrams[sortedWord] = [word];
        }
    }

    for (let sortedWord in seenAnagrams) {
        let anagramGroup = seenAnagrams[sortedWord];

        if (anagramGroup.length > 0) {
            newArr.push(anagramGroup);
        }
    }
    console.log(newArr);
}

groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);