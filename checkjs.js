(function(window)
{
	'use strict';
	/*Initialization of checkjs in case of Undefined*/
	function define_Checkjs() {
		var Checkjs={};
		
		/*Define regular expression rules*/	
		
		var numericRegex = /^[0-9]+$/,
            emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        	urlRegex = /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        	usPhoneRegex = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$ | [0-9]{3} [0-9]{3}-[0-9]{4}$/,
        	usZipcodeRegex = /^\d{5}(?:[-\s]\d{4})?$/,
        	creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})? |  5[1-5][0-9]{14}|  3[47][0-9]{13}|  3(?:0[0-5]|[68][0-9])[0-9]{11}| 6(?:011|5[0-9]{2})[0-9]{12} | (?:2131|1800|35\d{3})\d{11}) | \d{16} $/;
 		
 		/*Validation error messeges*/
 		var messeges = {

 						invalidUrl:"Url you have entered is in wrong formate",
 						invalidNumber:"",
 						invalidEmail:"",
 						invalidPhone:"",
 						invalidZipCode:"",
 						invalidCreditCard:""
 		};
 			
			
	}

	if(typeof(Checkjs) === 'undefined') {
   	    window.Checkjs = define_Checkjs();

    }
    else {
        console.log("Checkjs already defined.");
    }

    
	
})(window);