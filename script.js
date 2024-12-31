const fromAmountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.converted-amount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');
const resultElement = document.querySelector('.result');

//Array the populate the select tags with these countries
const countries = [
    { code: "USD", name: "United State Dollor" },
    { code: "INR", name: "Indian Rupee" },
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "ARS", name: "Argentine Peso" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CLP", name: "Chilean Peso" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "COP", name: "Colombian Peso" },
    { code: "CZK", name: "Czech Koruna" },
    { code: "DKK", name: "Danish Krone" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "HKD", name: "Hong Kong Dollar" },
];

//showing countries from array to select tag
countries.forEach(country => {

    const option1 = document.createElement('option');
    option1.value = country.code;
    option1.textContent = `${country.code} (${country.name})`;
    fromCurrencyElement.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = country.code;
    option2.textContent = `${country.code} (${country.name})`;
    toCurrencyElement.appendChild(option2);

    //setting default value of selecting tags
    fromCurrencyElement.value = "USD";
    toCurrencyElement.value = "INR";

    //function to get exchange rate using API

    const getExchangerate = () =>{
        const amount = parseFloat(fromAmountElement.value);
        const fromCurrency = fromCurrencyElement.value;
        const toCurrency = toCurrencyElement.value; 
    }

})