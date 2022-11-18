function Palindrome() {
    const isPalindrome = () => {
        let regex = /\s/g;
        let word = document.getElementById("typed-word");
        let theWord = word.value.replaceAll(regex, "").toLowerCase();
        let test = theWord.split("").reverse().join("");
        document.getElementById("p-tag").innerHTML = (test == theWord);
        return;
    };
    return (
        <div>
            <input id="typed-word" type="text" placeholder="Type your word" />
            <button onClick={isPalindrome}>Submit</button>
            <p id="p-tag"></p>
        </div>
    );
}

export default Palindrome;
