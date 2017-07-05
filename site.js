var highestUseCase = 0; // This is to know what the highest use-case is.
// It will be important when we make our list of lists

var wordListList = [[]]; // This is a list of lists of words

var listHolder; // This will be used to manipulate lists within lists

// This is the click function for the first button. It sends the word to the first
// list in the list of lists, and then it runs the updateWordList function
// {
$("#submitWord").click(function() {
    var inWord = $("#newWord").val();
    listHolder = wordListList[0];
    listHolder.push(inWord);
    updateWordList();
});
// }


// This is the click function of the text input element where you type in words to be
// completed.
// {
$("#newIncomplete").on("keypress", function() {
    setTimeout(function() {
        updateComplete()
    }, 50);
});
// }

// This function is run after adding a new word to update the element "listOfWords." It
// creates the empty string "allWords" that will eventually hold everything that
// gets pushed into the HTML of listOfWords. Then it runs a for loop for every
// list in wordListList, and then another for loop for every word within that list.
// Every word gets pushed into the allWords string, followed by an html break.
// listHolder is used because referencing the index of a list within a list doesn't seem
// to work.
// {
function updateWordList() {
    var allWords = "";
    for (i = 0; i < wordListList.length; i++) {
        if (wordListList[i]) {
            wordListList[i] = wordListList[i].sort();
            listHolder = wordListList[i];
            for (j = 0; j < listHolder.length; j++) {
                allWords = allWords.concat(listHolder[j]);
                allWords = allWords.concat(" <br />");
            }
        }
    }
    console.log(allWords);
    $("#listOfWords").html(allWords);
}
// }

// This function is run to check the inputed text against availabe words. It begins
// by creating an empty string called allAnswers, that will eventually hold all
// HTML that will be injected into listOfAnswers. inValue is the value of the
// text box where you're typing in the incomplete word.
// {
function updateComplete() {
    var allAnswers = "";
    var inValue = $("#newIncomplete").val();
    console.log(inValue);
    for (i = 0; i < wordListList.length; i++) {
        if (wordListList[i]) {
            listHolder = wordListList[i];
            console.log(listHolder);
            for (j = 0; j < listHolder.length; j++) {
                var stringsMatch = false;
                var stringHolder = listHolder[j];
                stringsMatch = true;
                for (k = 0; k < inValue.length; k++) {
                    console.log(inValue[k], stringHolder[k]);
                    console.log(k);
                    console.log(inValue, inValue.length);
                    if (inValue[k] != stringHolder[k]) {
                        stringsMatch = false;
                    }
                }
                console.log(stringsMatch);
                if (stringsMatch) {
                    allAnswers = allAnswers.concat(stringHolder);
                    allAnswers = allAnswers.concat(" <br />");
                }
                else {
                    allAnswers = "";
                }
            }
        }
    $("#listOfAnswers").html(allAnswers)
    }
}
// }

/*
function fuzzyComplete() {
    return "a";
}

function updateWordList() {
    return "a";
}

This should get the list of words you type and portray them below the text box.
It should regularly update the order of submitted words by checking off a dictionary
that includes how m

I want to keep alphabetical order, but use order above that. So it could be good
to use a list for every group of words that have a specific number of uses


I need a number that refers to the highest use value, and then I need to make a list
of lists, where the list length is determined by the highest use value, and a new list
is created by every set of use values. Then I can return all items from each list in
alphabetical order, and I'll have the correct hierarchical ordering

*/
