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

 							invalidUrl:"Url you have entered is in wrong format",
 						invalidNumber:"Number you have entered is in wrong format",
 						invalidEmail:"Email is not valid",
 						invalidPhone:"Phone number is in not valid format",
 						invalidZipCode:"Zip code is invalid",
 						invalidCreditCard:"Credit card number is invalid"

 		};

 		/*Main function of lib to validate data*/
 		Checkjs.validate = function(data_obj, result)
 		{
 			switch(data_obj.rule)
 			{
 				case "Url": if(new RegExp(urlRegex).test(data_obj.data))
 								result(true, "");
 							else
 								result(false, messeges.invalidUrl);
 							break;
 				case "Email": if(new RegExp(emailRegex).test(data_obj.data))
 								result(true, "");
 							  else
 								result(false, messeges.invalidEmail);
 							  break;
 				case "Number": if(new RegExp(numericRegex).test(data_obj.data))
 								result(true, "");
 							   else
 								result(false, messeges.invalidNumber);
 							   break;
 				case "Phone": if(new RegExp(usPhoneRegex).test(data_obj.data))
 								result(true, "");
 							  else
 								result(false, messeges.invalidPhone);
 							  break;
 				case "ZipCode": if(new RegExp(usZipcodeRegex).test(data_obj.data))
 								 result(true, "");
 							    else
 								 result(false, messeges.invalidZipCode);
 							    break;
 				case "CreditCard": if(new RegExp(creditCardRegex).test(data_obj.data))
 									result(true, "");
 								   else
 									result(false, messeges.invalidCreditCard);
 								   break;
 				default : result(false,"invalid rule");
 						  break;				   															

 			}
 		}
 		
 		return Checkjs;	
 			
			
	}

	/*Check if Checkjs is initiated in DOM or not*/
	if(typeof(Checkjs) === 'undefined') {
   	    window.Checkjs = define_Checkjs();

    }
    else {
        console.log("Checkjs already defined.");
    }

    
	
})(window);