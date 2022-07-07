function createAccount(pin, amount=0) {
    let userPin = pin;
    let userAmount = amount;
    return {
        checkBalance(pin) {
            if(pin === userPin) {
                return `$${userAmount}`
            }
            else {
                return "Invalid PIN."
            }
        },
        deposit(pin, depositAmt) {
            if(pin === userPin) {
                userAmount = userAmount + depositAmt;
                console.log(userAmount, depositAmt)
                return `Succesfully deposited $${depositAmt}. Current balance: $${userAmount}.`
            }
            else {
                return "Invalid PIN."
            }
        },
        withdraw(pin, withdarwAmt) {
            if(pin === userPin) {
                if(withdarwAmt > userAmount) {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled."
                }
                else {
                    userAmount = userAmount - withdarwAmt;
                    return `Succesfully withdrew $${withdarwAmt}. Current balance: $${userAmount}.`
                }
            }
            else {
                return "Invalid PIN."
            }
        },
        changePin(pin, newPin) {
            if(pin === userPin) {
                userPin = newPin;
                return "PIN successfully changed!"
            }
            else {
                return "Invalid PIN."
            }

        }
    }
}

module.exports = { createAccount };
