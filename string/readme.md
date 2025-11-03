there are some method to extract subtring from the main string.


does not support negative index
1- str.substring(1,5);

commonly used method and used 99% by the developers
2- str.slice(1,5)


=> index of method are use to find the perticuler index of any sting

=> spit method are use to make array to any sting.

=> toUpperCase method and toLowerCase method are use to make character into lowercase and uppercase

=> join method are use to make sting to any array







Do these ques

Level 3 — Extracting Parts

Extract "World" from "HelloWorld" in 3 different ways.
(Use: slice(), substring(), substr())

From the string "parvez", extract the last three letters using negative indexes.
(Use: slice(-3))

Extract the first name and last name from "John_Doe".
(Use: split("_"))

🔹 Level 4 — Modifying Strings

Replace "dog" with "cat" in "I love my dog".
(Use: replace())

Replace all "is" with "was" in "This is a string, this is nice".
(Use: replaceAll())

Remove extra spaces from " Hello World ".
(Use: trim(), trimStart(), trimEnd())

Convert "app_dsd_sdda" to camelCase → "appDsdSdda".
(Use: split(), toUpperCase(), slice())

Pad "123" with "0" on the left until its length becomes 5 → "00123".
(Use: padStart())

Pad "ID" with "*" at the end to make it length 6 → "ID****".
(Use: padEnd())

Create "ha ha ha ha" using a single line of code.
(Use: repeat())

Replace all spaces in "Hello World JS" with "-".
(Use: split(), join(), or replaceAll())

🔹 Level 5 — Comparison & Locale

Compare "apple" and "Banana" alphabetically (lexicographically).
(Use: localeCompare())

Convert "istanbul" to uppercase according to Turkish locale.
(Use: toLocaleUpperCase("tr-TR"))

🔹 Level 6 — Regex & Advanced

Find all digits in "abc123xyz456".
(Use: match(/\d+/g))

Count how many vowels are in "JavaScript".
(Use: match(/[aeiou]/gi) and check .length)

Replace every word’s first letter with uppercase in "hello world js".
(Use: replace(/\b\w/g, ch => ch.toUpperCase()))

Normalize the Unicode text "é" (accented e).
(Use: normalize("NFD") and replace() accents if needed)

🔹 Level 7 — Miscellaneous & Combination

Reverse a string "hello" manually.
(Use: split(''), reverse(), join(''))

Given "frontenddeveloper", insert a space before each capital letter (simulate camelCase separation).
(Use: replace(/([A-Z])/g, " $1"))

Check whether "madam" is a palindrome.
(Use: split(), reverse(), join())

Convert "Hello\nWorld" into "Hello\\nWorld" (raw string).
(Use: String.raw)

🔹 Bonus Challenge

Given "the quick brown fox", make the first letter of each word uppercase → "The Quick Brown Fox".
(Combine: split(' '), map(), charAt(0).toUpperCase(), slice(1))

Create a function truncate(str, n) that shortens a string and adds "..." if its length exceeds n.
Example: truncate("JavaScript", 5) → "JavaS..."
(Use: slice(), length)