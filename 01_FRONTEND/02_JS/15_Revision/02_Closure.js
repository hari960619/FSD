// Closure gives you an access to an outer function scope from the inner function.
// Closure is a function bind together with its lexical scope.

const accountBalance = (name) => {
  const minBal = 1790;
  return (deposit) => {
    console.log(`Hi ${name}, new deposit of ${deposit}.`);
    console.log(`Now the new balance is ${minBal + deposit}`);
  };
};

const harishAccount = accountBalance("Harish S");
harishAccount(10000);

const newAccount = (name, InitialDeposit) => {
  let balance = InitialDeposit;

  const addDeposit = (deposit) => {
    return `New Deposit after deposit is ${(balance += deposit)}.`;
  };

  const withdrawal = (withdrawalAmount) => {
    if (withdrawalAmount > balance) {
      return `Your broke ${balance - withdrawalAmount}`;
    }
    return `New Deposit after withdrawal is ${(balance -= withdrawalAmount)}`;
  };

  const balanceEnquiry = () => {
    return `Balance is ${balance}`;
  };

  return { addDeposit, withdrawal, balanceEnquiry };
};

const alpha = newAccount("Harish S", 10000);
console.log(alpha.balanceEnquiry());
alpha.addDeposit(7000);
console.log(alpha.balanceEnquiry());
alpha.withdrawal(6000);
console.log(alpha.balanceEnquiry());
