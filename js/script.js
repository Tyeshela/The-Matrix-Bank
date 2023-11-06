let accounts = {};

function createAccount() {
    let name = prompt("Enter your name: ");
    let accountNumber = Object.keys(accounts).length + 1;
    accounts[accountNumber] = {
        'name': name,
        'balance': 0
    };
    document.getElementById("output").innerHTML = `Account created successfully. Your account number is ${accountNumber}`;
}

function depositFunds() {
    let accNumber = parseInt(prompt("Enter your account number: "));
    if (accounts.hasOwnProperty(accNumber)) {
        let amount = parseFloat(prompt("Enter the deposit amount: "));
        accounts[accNumber]['balance'] += amount;
        document.getElementById("output").innerHTML = "Deposit successful";
    } else {
        document.getElementById("output").innerHTML = "Account not found.";
    }
}

function withdrawFunds() {
    let accNumber = parseInt(prompt("Enter your account number: "));
    if (accounts.hasOwnProperty(accNumber)) {
        let amount = parseFloat(prompt("Enter the withdrawal amount: "));
        if (amount <= accounts[accNumber]['balance']) {
            accounts[accNumber]['balance'] -= amount;
            document.getElementById("output").innerHTML = "Withdrawal successful";
        } else {
            document.getElementById("output").innerHTML = "Insufficient balance";
        }
    } else {
        document.getElementById("output").innerHTML = "Account not found.";
    }
}

function checkBalance() {
    let accNumber = parseInt(prompt("Enter your account number: "));
    if (accounts.hasOwnProperty(accNumber)) {
        let balance = accounts[accNumber]['balance'];
        document.getElementById("output").innerHTML = `Your account balance is: ${balance}`;
    } else {
        document.getElementById("output").innerHTML = "Account not found.";
    }
}

function exit() {
    document.getElementById("output").innerHTML = "Exiting the program. Goodbye";
}