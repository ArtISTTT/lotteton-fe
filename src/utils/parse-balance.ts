export const parseBalance = (balance: BigInt) => {
    let balanceStr = balance.toString();
    
    while (balanceStr.length <= 9) {
        balanceStr = '0' + balanceStr;
    }
    
    let formattedBalance = balanceStr.slice(0, -9) + '.' + balanceStr.slice(-9);
    
    formattedBalance = formattedBalance.replace(/\.?0+$/, '');
    
    return formattedBalance;
}