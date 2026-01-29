
let balance = 1000;
const correctPin = "1234";

let enteredPin = prompt("Enter your ATM PIN:");

if (enteredPin !== correctPin) {
    alert("Incorrect PIN!");
} else {
    let choice = prompt(
        "Welcome to JS ATM 💳\n\n" +
        "1️⃣ Check Balance\n" +
        "2️⃣ Withdraw\n" +
        "3️⃣ Deposit\n" +
        "4️⃣ Exit\n\n" +
        "Enter your choice (1-4):"
    );
    if (choice === "1") {
        alert("Your balance is: $" + balance);
    } else if (choice === "2") {
        let withdrawAmount = +prompt("Enter amount to withdraw:");
        if (withdrawAmount > balance) {
            alert("Insufficient funds!");
        } else if (withdrawAmount <= 0) {
            alert("Invalid withdrawal amount!");
        } else {
            balance = balance - withdrawAmount;
            alert("Withdrawal successful! New balance: $" + balance);
        }
    } else if (choice === "3") {
        let depositAmount = +prompt("Enter amount to deposit:");
        if (depositAmount <= 0) {
            alert("Invalid deposit amount!");
        } else {
            balance = balance + depositAmount;
            alert("Deposit successful! New balance: $" + balance);
        }
    } else if (choice === "4") {
        alert("Thank you for using the ATM!");
    } else {
        alert("Invalid option!");
    }
}

