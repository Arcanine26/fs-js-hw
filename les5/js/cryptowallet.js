let cryptoWallet = {
    userName : "",
    coin : {
        bitcoin : {
            name : "Bitcoin",
            logo : `https://s2.coinmarketcap.com/static/img/coins/64x64/1.png`,
            balance : Math.floor(Math.random() * 50),
            rate : 27100
        },
        etherium : {
            logo : `https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png`,
            name : "Etherium",
            balance : Math.floor(Math.random() * 50),
            rate : 16400
        },
        stellar : {
            logo : `https://s2.coinmarketcap.com/static/img/coins/64x64/512.png`,
            name : "Stellar",
            balance : Math.floor(Math.random() * 50),
            rate : 0.11
        }
    }
};

cryptoWallet.userName = prompt("Введіть ваше ім'я", "Ім'я");
if (cryptoWallet.userName === null || cryptoWallet.userName === "Ім'я"){
    alert("Вихід не відбувся, спробуйте ще раз");
    document.write(`Невірно введено ім'я, функція перегляду балансу неможлива. Повертайтеся ще!`);
    stop
} else {
const checkBalance = function() {
    let currency = document.getElementById("input").value.toLowerCase();
    if (currency==="bitcoin"){
        document.write(`Доброго дня, ${cryptoWallet.userName}! На вашому балансі <img style = "height: 16px; width: 16px" src="${cryptoWallet.coin.bitcoin.logo}"> 
        ${cryptoWallet.coin.bitcoin.name} залишилося ${cryptoWallet.coin.bitcoin.balance} монет, якщо ви сьогодні продасте їх, то отримаєте
        ${parseInt(cryptoWallet.coin.bitcoin.balance * cryptoWallet.coin.bitcoin.rate)} $`);
    } else if (currency==="etherium") {
        document.write(`Доброго дня, ${cryptoWallet.userName}! На вашому балансі <img style = "height: 16px; width: 16px" src="${cryptoWallet.coin.etherium.logo}"> 
        ${cryptoWallet.coin.etherium.name} залишилося ${cryptoWallet.coin.etherium.balance} монет, якщо ви сьогодні продасте їх, то отримаєте
        ${parseInt(cryptoWallet.coin.etherium.balance * cryptoWallet.coin.etherium.rate)} $`);
    } else if (currency==="stellar"){
        document.write(`Доброго дня, ${cryptoWallet.userName}! На вашому балансі <img style = "height: 16px; width: 16px" src="${cryptoWallet.coin.stellar.logo}"> 
        ${cryptoWallet.coin.stellar.name} залишилося ${cryptoWallet.coin.stellar.balance} монет, якщо ви сьогодні продасте їх, то отримаєте
        ${parseInt(cryptoWallet.coin.stellar.balance * cryptoWallet.coin.stellar.rate)} $`);
    } else {
        alert("Невірно введено назву гаманця, спробуйте ще раз");
    }
}

let show = document.getElementById("btn");
show.onclick = function() {
    checkBalance()
}
}