const countries = {
    "AF": "AFN", // Afghanistan - Afghan Afghani
    "AL": "ALL", // Albania - Albanian Lek
    "DZ": "DZD", // Algeria - Algerian Dinar
    "AD": "EUR", // Andorra - Euro
    "AO": "AOA", // Angola - Angolan Kwanza
    "AG": "XCD", // Antigua and Barbuda - East Caribbean Dollar
    "AR": "ARS", // Argentina - Argentine Peso
    "AM": "AMD", // Armenia - Armenian Dram
    "AU": "AUD", // Australia - Australian Dollar
    "AT": "EUR", // Austria - Euro
    "AZ": "AZN", // Azerbaijan - Azerbaijani Manat
    "BS": "BSD", // Bahamas - Bahamian Dollar
    "BH": "BHD", // Bahrain - Bahraini Dinar
    "BD": "BDT", // Bangladesh - Bangladeshi Taka
    "BB": "BBD", // Barbados - Barbadian Dollar
    "BY": "BYN", // Belarus - Belarusian Ruble
    "BE": "EUR", // Belgium - Euro
    "BZ": "BZD", // Belize - Belize Dollar
    "BJ": "XOF", // Benin - West African CFA Franc
    "BT": "BTN", // Bhutan - Bhutanese Ngultrum
    "BO": "BOB", // Bolivia - Bolivian Boliviano
    "BA": "BAM", // Bosnia and Herzegovina - Convertible Mark
    "BW": "BWP", // Botswana - Botswana Pula
    "BR": "BRL", // Brazil - Brazilian Real
    "BN": "BND", // Brunei - Brunei Dollar
    "BG": "BGN", // Bulgaria - Bulgarian Lev
    "BF": "XOF", // Burkina Faso - West African CFA Franc
    "BI": "BIF", // Burundi - Burundian Franc
    "KH": "KHR", // Cambodia - Cambodian Riel
    "CM": "XAF", // Cameroon - Central African CFA Franc
    "CA": "CAD", // Canada - Canadian Dollar
    "CF": "XAF", // Central African Republic - Central African CFA Franc
    "TD": "XAF", // Chad - Central African CFA Franc
    "CL": "CLP", // Chile - Chilean Peso
    "CN": "CNY", // China - Chinese Yuan
    "CO": "COP", // Colombia - Colombian Peso
    "KM": "KMF", // Comoros - Comorian Franc
    "CG": "XAF", // Congo - Central African CFA Franc
    "CD": "CDF", // DR Congo - Congolese Franc
    "CR": "CRC", // Costa Rica - Costa Rican Colón
    "HR": "HRK", // Croatia - Croatian Kuna
    "CU": "CUP", // Cuba - Cuban Peso
    "CY": "EUR", // Cyprus - Euro
    "CZ": "CZK", // Czechia - Czech Koruna
    "DK": "DKK", // Denmark - Danish Krone
    "DJ": "DJF", // Djibouti - Djiboutian Franc
    "DM": "XCD", // Dominica - East Caribbean Dollar
    "DO": "DOP", // Dominican Republic - Dominican Peso
    "EC": "USD", // Ecuador - US Dollar
    "EG": "EGP", // Egypt - Egyptian Pound
    "SV": "USD", // El Salvador - US Dollar
    "GQ": "XAF", // Equatorial Guinea - Central African CFA Franc
    "ER": "ERN", // Eritrea - Eritrean Nakfa
    "EE": "EUR", // Estonia - Euro
    "SZ": "SZL", // Eswatini - Swazi Lilangeni
    "ET": "ETB", // Ethiopia - Ethiopian Birr
    "FJ": "FJD", // Fiji - Fijian Dollar
    "FI": "EUR", // Finland - Euro
    "FR": "EUR", // France - Euro
    "GA": "XAF", // Gabon - Central African CFA Franc
    "GM": "GMD", // Gambia - Gambian Dalasi
    "GE": "GEL", // Georgia - Georgian Lari
    "DE": "EUR", // Germany - Euro
    "GH": "GHS", // Ghana - Ghanaian Cedi
    "GR": "EUR", // Greece - Euro
    "GD": "XCD", // Grenada - East Caribbean Dollar
    "GT": "GTQ", // Guatemala - Guatemalan Quetzal
    "GN": "GNF", // Guinea - Guinean Franc
    "GW": "XOF", // Guinea-Bissau - West African CFA Franc
    "GY": "GYD", // Guyana - Guyanese Dollar
    "HT": "HTG", // Haiti - Haitian Gourde
    "HN": "HNL", // Honduras - Honduran Lempira
    "HU": "HUF", // Hungary - Hungarian Forint
    "IS": "ISK", // Iceland - Icelandic Króna
    "IN": "INR", // India - Indian Rupee
    "ID": "IDR", // Indonesia - Indonesian Rupiah
    "IR": "IRR", // Iran - Iranian Rial
    "IQ": "IQD", // Iraq - Iraqi Dinar
    "IE": "EUR", // Ireland - Euro
    "IL": "ILS", // Israel - Israeli New Shekel
    "IT": "EUR", // Italy - Euro
    "JM": "JMD", // Jamaica - Jamaican Dollar
    "JP": "JPY", // Japan - Japanese Yen
    "JO": "JOD", // Jordan - Jordanian Dinar
    "KZ": "KZT", // Kazakhstan - Kazakhstani Tenge
    "KE": "KES", // Kenya - Kenyan Shilling
    "KI": "AUD", // Kiribati - Australian Dollar
    "KR": "KRW", // South Korea - South Korean Won
    "KW": "KWD", // Kuwait - Kuwaiti Dinar
    "KG": "KGS", // Kyrgyzstan - Kyrgyzstani Som
    "LA": "LAK", // Laos - Lao Kip
    "LV": "EUR", // Latvia - Euro
    "LB": "LBP", // Lebanon - Lebanese Pound
    "LS": "LSL", // Lesotho - Lesotho Loti
    "LR": "LRD", // Liberia - Liberian Dollar
    "LY": "LYD", // Libya - Libyan Dinar
    "LI": "CHF", // Liechtenstein - Swiss Franc
    "LT": "EUR", // Lithuania - Euro
    "LU": "EUR", // Luxembourg - Euro
    "MG": "MGA", // Madagascar - Malagasy Ariary
    "MW": "MWK", // Malawi - Malawian Kwacha
    "MY": "MYR", // Malaysia - Malaysian Ringgit
    "MV": "MVR", // Maldives - Maldivian Rufiyaa
    "ML": "XOF", // Mali - West African CFA Franc
    "MT": "EUR", // Malta - Euro
    "MR": "MRU", // Mauritania - Mauritanian Ouguiya
    "MU": "MUR", // Mauritius - Mauritian Rupee
    "MX": "MXN", // Mexico - Mexican Peso
    "MD": "MDL", // Moldova - Moldovan Leu
    "MC": "EUR", // Monaco - Euro
    "MN": "MNT", // Mongolia - Mongolian Tögrög
    "ME": "EUR", // Montenegro - Euro
    "MA": "MAD", // Morocco - Moroccan Dirham
    "MZ": "MZN", // Mozambique - Mozambican Metical
    "MM": "MMK", // Myanmar - Myanmar Kyat
    "NA": "NAD", // Namibia - Namibian Dollar
    "NP": "NPR", // Nepal - Nepalese Rupee
    "NL": "EUR", // Netherlands - Euro
    "NZ": "NZD", // New Zealand - New Zealand Dollar
    "NI": "NIO", // Nicaragua - Nicaraguan Córdoba
    "NE": "XOF", // Niger - West African CFA Franc
    "NG": "NGN", // Nigeria - Nigerian Naira
    "NO": "NOK", // Norway - Norwegian Krone
    "OM": "OMR", // Oman - Omani Rial
    "PK": "PKR", // Pakistan - Pakistani Rupee
    "PA": "PAB", // Panama - Panamanian Balboa
    "PG": "PGK", // Papua New Guinea - Papua New Guinean Kina
    "PY": "PYG", // Paraguay - Paraguayan Guarani
    "PE": "PEN", // Peru - Peruvian Sol
    "PH": "PHP", // Philippines - Philippine Peso
    "PL": "PLN", // Poland - Polish Zloty
    "PT": "EUR", // Portugal - Euro
    "QA": "QAR", // Qatar - Qatari Rial
    "RO": "RON", // Romania - Romanian Leu
    "RU": "RUB", // Russia - Russian Ruble
    "RW": "RWF", // Rwanda - Rwandan Franc
    "WS": "WST", // Samoa - Samoan Tālā
  };
  