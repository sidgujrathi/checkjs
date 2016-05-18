Checkjs
===========

Checkjs is a simple Javascript library for validating your data. Currently it supports URL, Number, US Phone Number, Credit Card Number, Email and US Zip Code. 

## Installation


### Browser

```html
<script src="checkjs.min.js"></script>
```

### Basic Usage

```js
Checkjs.validate(data, callback);
```

__data__ {Object} - The data and rule you want to validate

__callback__ A callback function with result and error messege if any

#### Example Usage - Validating email

```js
var data_object = {
	data: 'johndoe@gmail.com',
	rule: "Email"
};

Checkjs.validate(data_object, function(result, messege){
	
	console.log(result +" "+messege)
});
```
### Available Rules

Currently Checkjs accepts and validates against only 6 rules. []

#### Url

This rule validates data for valid Url formate as http://google.com. 

#### Number

This rule checks weather data is number or not.

#### Email

This rule validates data for valid email address.

#### Phone

This rule check weather given data is in correct US phone number format or not.

####ZipCode

This rule check weather given data is in correct US zip code format or not.

#### CreditCard

This rule check for valid credit card number format.

##Refernces
For library skeleton.

[Postfeed.js](https://github.com/sidgujrathi/postfeed.js)

For regular expression refernce 

[ValidatorJS](https://github.com/skaterdav85/validatorjs)

## License 

Checkjs is distributed under the MIT license.

