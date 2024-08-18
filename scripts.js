const button = document.getElementById('convert-button')
const select_main = document.getElementById('currency-select-main')
const select = document.getElementById('currency-select')

let euro
let dolar
let bitcoin
let real
let meticais
let peso
let kwanza


const ButtonConvertValues = () => {
    const inputCurrency = document.getElementById('input-currency').value
    const CurrencyValueText = document.getElementById('currency-value-text')
    const Currency_Value_Text_Converted = document.getElementById('currency-value-text-converted')
    const CurrencyConvert = document.getElementById('currency-convert')
    const CurrencyImgConvert= document.getElementById('currency-img-convert')

    switch (select_main.value) {
        case "KZ Angolano":
            euro = 0.0010
            dolar = 0.0011
            bitcoin = 0.0000000186
            real = 0.0062
            meticais = 0.0711
            peso = 4.51
        
            CurrencyConvert.innerHTML = "KZ Angolano"
            CurrencyImgConvert.src = "./assets/img/ao.png"
            
            CurrencyValueText.innerHTML = new Intl.NumberFormat("pt-AO", {
                style: "currency",
                currency: "AOA"
            }).format(inputCurrency);

            if (select.value === "KZ Angolano") {
                CurrencyValueText.innerHTML = new Intl.NumberFormat("pt-AO", {
                    style: "currency",
                    currency: "AOA"
                }).format(inputCurrency);
            }

            if (select.value === "€ Euro") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("de-De", {
                    style: "currency",
                    currency: "EUR"
                }).format(inputCurrency * euro)
            }

            if (select.value === "US$ Dólar Americano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(inputCurrency * dolar)
            }

            if (select.value === "฿ Bitcoin") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "BTC",
                    minimumFractionDigits: 6
                }).format(inputCurrency * bitcoin)
            }

            if (select.value === "R$ Brasileiro") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(inputCurrency * real)
            }

            if (select.value === "$ Peso Colombiano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "COP",
                }).format(inputCurrency * peso)
            }

            if (select.value === "MZN Meticais Moçambicanos") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-MZ", {
                    style: "currency",
                    currency: "MZN",
                }).format(inputCurrency * meticais)
            }
            break;

        case "€ Euro":
            dolar = 1.10
            peso = 4412.20
            real = 6.04
            meticais = 70.42
            kwanza = 980.15
            bitcoin = 0.000018

            CurrencyConvert.innerHTML = "Euro"
            CurrencyImgConvert.src = "./assets/img/euro.png"

            CurrencyValueText.innerHTML = new Intl.NumberFormat("de-De", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrency)

            if (select.value === "US$ Dólar Americano") {
                CurrencyValueText.innerHTML = new Intl.NumberFormat("de-De", {
                    style: "currency",
                    currency: "EUR"
                }).format(inputCurrency)
            }

            if (select.value === "US$ Dólar Americano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(inputCurrency * dolar)
            }

            if (select.value === "$ Peso Colombiano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "COP",
                }).format(inputCurrency * peso)
            }

            if (select.value === "R$ Brasileiro") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(inputCurrency * real)
            }

            if (select.value === "฿ Bitcoin") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "BTC",
                    minimumFractionDigits: 6
                }).format(inputCurrency * bitcoin)
            }

            if (select.value === "MZN Meticais Moçambicanos") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-MZ", {
                    style: "currency",
                    currency: "MZN",
                }).format(inputCurrency * meticais)
            }

            if (select.value === "KZ Angolano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-AO", {
                    style: "currency",
                    currency: "AOA"
                }).format(inputCurrency * kwanza);
            }

            break;

        case "US$ Dólar Americano":
            euro = 0.91
            kwanza = 888.50
            real = 5.47
            peso = 3999.64
            metical = 63.62
            bitcoin = 0.00001685

            CurrencyConvert.innerHTML = "US$ Dólar Americano"
            CurrencyImgConvert.src = "./assets/img/eua.png"

            CurrencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrency)

            if (select.value === "US$ Dólar Americano") {
                CurrencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(inputCurrency)
            }

            if (select.value === "€ Euro") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("de-De", {
                    style: "currency",
                    currency: "EUR"
                }).format(inputCurrency * euro)
            }

            if (select.value === "$ Peso Colombiano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "COP",
                }).format(inputCurrency * peso)
            }

            if (select.value === "R$ Brasileiro") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(inputCurrency * real)
            }

            if (select.value === "฿ Bitcoin") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "BTC",
                    minimumFractionDigits: 6
                }).format(inputCurrency * bitcoin)
            }

            if (select.value === "MZN Meticais Moçambicanos") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-MZ", {
                    style: "currency",
                    currency: "MZN",
                }).format(inputCurrency * meticais)
            }

            if (select.value === "KZ Angolano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-AO", {
                    style: "currency",
                    currency: "AOA"
                }).format(inputCurrency * kwanza);
            }

            break;

        case "฿ Bitcoin":
            euro = 54263.08
            dolar = 59926.60
            real = 327966.30
            peso = 239684706.50
            kwanza = 53244784.10
            meticais = 3791129.54

            CurrencyConvert.innerHTML = "฿ Bitcoin"
            CurrencyImgConvert.src = "./assets/img/bitcoin.png"

            CurrencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC",
            }).format(inputCurrency)

            if (select.value === "฿ Bitcoin") {
                CurrencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "BTC",
                }).format(inputCurrency)
            }

            if (select.value === "€ Euro") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("de-De", {
                    style: "currency",
                    currency: "EUR"
                }).format(inputCurrency * euro)
            }

            if (select.value === "US$ Dólar Americano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(inputCurrency * dolar)
            }

            if (select.value === "R$ Brasileiro") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(inputCurrency * real)
            }

            if (select.value === "$ Peso Colombiano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "COP",
                }).format(inputCurrency * peso)
            }

            if (select.value === "MZN Meticais Moçambicanos") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-MZ", {
                    style: "currency",
                    currency: "MZN",
                }).format(inputCurrency * meticais)
            }

            if (select.value === "KZ Angolano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-AO", {
                    style: "currency",
                    currency: "AOA"
                }).format(inputCurrency * kwanza);
            }
 
            break;

        case "R$ Brasileiro":
            euro = 0.17
            dolar = 0.18
            peso = 730.82
            kwanza = 162.35
            meticais = 11.61
            bitcoin = 0.000003045

            CurrencyConvert.innerHTML = "R$ Brasileiro"
            CurrencyImgConvert.src = "./assets/img/br.png"
            
            CurrencyValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(inputCurrency)

            if (select.value === "R$ Brasileiro") {
                CurrencyValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(inputCurrency)
            }

            if (select.value === "€ Euro") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("de-De", {
                    style: "currency",
                    currency: "EUR"
                }).format(inputCurrency * euro)
            }

            if (select.value === "US$ Dólar Americano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(inputCurrency * dolar)
            }

            if (select.value === "฿ Bitcoin") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "BTC",
                    minimumFractionDigits: 6
                }).format(inputCurrency * bitcoin)
            }

            if (select.value === "$ Peso Colombiano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "COP",
                }).format(inputCurrency * peso)
            }

            if (select.value === "MZN Meticais Moçambicanos") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-MZ", {
                    style: "currency",
                    currency: "MZN",
                }).format(inputCurrency * meticais)
            }

            if (select.value === "KZ Angolano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-AO", {
                    style: "currency",
                    currency: "AOA"
                }).format(inputCurrency * kwanza);
            }

            break;

        case "$ Peso Colombiano":
            euro = 0.00023
            dolar = 0.00025
            real = 0.0014
            kwanza = 0.22
            meticais = 0.015
            bitcoin = 0.00000000417

            CurrencyConvert.innerHTML = "$ Peso Colombiano"
            CurrencyImgConvert.src = "./assets/img/colombia.png"
            
            CurrencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "COP",
            }).format(inputCurrency)

            if (select.value === "$ Peso Colombiano") {
                CurrencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "COP",
                }).format(inputCurrency)
            }

            if (select.value === "€ Euro") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("de-De", {
                    style: "currency",
                    currency: "EUR"
                }).format(inputCurrency * euro)
            }

            if (select.value === "US$ Dólar Americano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(inputCurrency * dolar)
            }

            if (select.value === "฿ Bitcoin") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "BTC",
                    minimumFractionDigits: 6
                }).format(inputCurrency * bitcoin)
            }

            if (select.value === "R$ Brasileiro") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(inputCurrency * real)
            }

            if (select.value === "MZN Meticais Moçambicanos") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-MZ", {
                    style: "currency",
                    currency: "MZN",
                }).format(inputCurrency * meticais)
            }

            if (select.value === "KZ Angolano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-AO", {
                    style: "currency",
                    currency: "AOA"
                }).format(inputCurrency * kwanza);
            }
            break;

        case "MZN Meticais Moçambicanos":
            euro = 0.014
            dolar = 0.016
            kwanza = 13.91
            real = 0.086
            peso = 62.60
            bitcoin = 0.000000262

            CurrencyConvert.innerHTML = "MZN Meticais Moçambicanos"
            CurrencyImgConvert.src = "./assets/img/moz.png"


            CurrencyValueText.innerHTML = new Intl.NumberFormat("pt-MZ", {
                style: "currency",
                currency: "MZN",
            }).format(inputCurrency )

            if (select.value === "MZN Meticais Moçambicanos") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-MZ", {
                    style: "currency",
                    currency: "MZN",
                }).format(inputCurrency )
            }

            if (select.value === "€ Euro") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("de-De", {
                    style: "currency",
                    currency: "EUR"
                }).format(inputCurrency * euro)
            }

            if (select.value === "US$ Dólar Americano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(inputCurrency * dolar)
            }

            if (select.value === "฿ Bitcoin") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "BTC",
                    minimumFractionDigits: 6
                }).format(inputCurrency * bitcoin)
            }

            if (select.value === "R$ Brasileiro") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(inputCurrency * real)
            }

            if (select.value === "KZ Angolano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("pt-AO", {
                    style: "currency",
                    currency: "AOA"
                }).format(inputCurrency * kwanza);
            }

            if (select.value === "$ Peso Colombiano") {
                Currency_Value_Text_Converted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "COP",
                }).format(inputCurrency * peso)
            }
            break;
        default:
            break;
    }
}

ValueConverted = () => {
    const CurrencyName = document.getElementById('currency-Name')
    const CurrencyImg = document.getElementById('currency-img')

    if (select.value === "€ Euro") {
        CurrencyName.innerHTML = "Euro"
        CurrencyImg.src = "./assets/img/euro.png"
    }

    if (select.value === "US$ Dólar Americano") {
        CurrencyName.innerHTML = "US$ Dólar Americano"
        CurrencyImg.src = "./assets/img/eua.png"
    }

    if (select.value === "฿ Bitcoin") {
        CurrencyName.innerHTML = "฿ Bitcoin"
        CurrencyImg.src = "./assets/img/bitcoin.png"
    }

    if (select.value === "R$ Brasileiro") {
        CurrencyName.innerHTML = "R$ Brasileiro"
        CurrencyImg.src = "./assets/img/br.png"
    }

    if (select.value === "$ Peso Colombiano") {
        CurrencyName.innerHTML = "$ Peso Colombiano"
        CurrencyImg.src = "./assets/img/colombia.png"
    }

    if (select.value === "MZN Meticais Moçambicanos") {
        CurrencyName.innerHTML = "MZN Meticais Moçambicanos"
        CurrencyImg.src = "./assets/img/moz.png"
    }

    if(select.value === "KZ Angolano"){
        CurrencyName.innerHTML = "KZ Angolano"
        CurrencyImg.src = "./assets/img/ao.png"
    }

    ButtonConvertValues()
}

button.addEventListener('click',ButtonConvertValues)
select_main.addEventListener('change',ButtonConvertValues)
select.addEventListener('change', ValueConverted)