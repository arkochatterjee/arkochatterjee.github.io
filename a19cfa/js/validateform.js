
var keys = ["name","college","regNumber","primaryPhone","email"];
var values = [false,false,false,false,false,false];
//alert(keys.indexOf("accommodation"));


var flag=1;
document.addEventListener("DOMContentLoaded", loadValidations());

/*$("#submit").click(function()
{
	if(!$("#submit").hasClass('disabled'))
	{
		if(flag)
		{
			$("body").focus();
			document.getElementById('submit').disabled=false;
			flag=0;
			document.getElementById('submit').innerHTML="Please wait.."
			
		}

	}
});*/

// $("form").submit(function(e) {
//     e.preventDefault();
// });

function loadValidations()
{

	removeInitialHelpMessages();
	toggleSubmit();


	$("#name").change(function()
	{
		validateText("name");
		toggleSubmit();
	});
	
	$("#prefernce").change(function()
	{
		validateText("prefernce");
		toggleSubmit();
	});
	

	$("#regNumber").change(function()
	{
		validateRegistrationNumber("regNumber");
		toggleSubmit();
	});
	
	$("#primaryPhone").change(function()
	{
		validatePhone("primaryPhone");
		toggleSubmit();
	});
	
	$("#email").change(function()
	{
		validateEmail("email");
		toggleSubmit();
	});

	
}

function validateText(elementID)
{
	var index = keys.indexOf(elementID);
	var helpDivID = "helpDiv"+elementID.charAt(0).toUpperCase() + elementID.slice(1);
	var helpID = "help"+elementID.charAt(0).toUpperCase() + elementID.slice(1);

	if($.trim($('#'+elementID).val()) == '')
	{
		values[index]=false;
		$('#'+helpDivID).addClass("has-error");
		$('#'+helpDivID).removeClass("has-success");
		$('#'+helpID).show();
	}
	else
	{
		values[index]=true;	
		$('#'+helpDivID).addClass("has-success");
		$('#'+helpDivID).removeClass("has-error");
		$('#'+helpID).hide();
	}
}

function validatePhone(elementID)
{
	var index = keys.indexOf(elementID);
	var helpDivID = "helpDiv"+elementID.charAt(0).toUpperCase() + elementID.slice(1);
	var helpID = "help"+elementID.charAt(0).toUpperCase() + elementID.slice(1);
	var phone = $("#"+elementID).val();

	var numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;

	if (phone !== "" && numberRegex.test(phone) && phone.length===10)
	{
		values[index]=true;	
		$('#'+helpDivID).addClass("has-success");
		$('#'+helpDivID).removeClass("has-error");
		$('#'+helpID).hide();
	}
	else
	{
		values[index]=false;
		$('#'+helpDivID).addClass("has-error");
		$('#'+helpDivID).removeClass("has-success");
		$('#'+helpID).show();
	}
}

function validateEmail(elementID)
{
	var index = keys.indexOf(elementID);
	var helpDivID = "helpDiv"+elementID.charAt(0).toUpperCase() + elementID.slice(1);
	var helpID = "help"+elementID.charAt(0).toUpperCase() + elementID.slice(1);

	var emailID = $("#"+elementID).val();

	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");

	if (atpos < 1 || (dotpos - atpos) < 2)
	{
		values[index]=false;
		$('#'+helpDivID).addClass("has-error");
		$('#'+helpDivID).removeClass("has-success");
		$('#'+helpID).show();
	}
	else
	{
		values[index]=true;	
		$('#'+helpDivID).addClass("has-success");
		$('#'+helpDivID).removeClass("has-error");
		$('#'+helpID).hide();
	}
}





function validateRegistrationNumber()
{
	var elementID = "regNumber";
	var index = keys.indexOf(elementID);
	
	var helpDivID = "regNumberDiv";
	var helpID = "help"+elementID.charAt(0).toUpperCase() + elementID.slice(1);

    var searchText = document.getElementById(elementID).value;
    if (searchText.length===15)
    {
		values[index]=true;	
		$('#'+helpDivID).addClass("has-success");
		$('#'+helpDivID).removeClass("has-error");
		$('#'+helpID).hide();
    }
    else
    {
    	values[index]=false;	
		$('#'+helpDivID).addClass("has-error");
		$('#'+helpDivID).removeClass("has-success");
		$('#'+helpID).show();
    }
}

function removeInitialHelpMessages()
{
	var helpID,elementID;
	for(var i = 0; i<keys.length; i++)
	{
		elementID = keys[i];
		helpID = "help"+elementID.charAt(0).toUpperCase() + elementID.slice(1);
		$('#'+helpID).hide();
	}
	$('#helpSubmit').hide();
}

/*function toggleSubmit()
{
	if(values.indexOf(false)==-1)
	{
		$("#submit").removeClass("disabled");
		document.getElementById('submit').disabled=false;
		$("#helpSubmit").hide();
	}
	else
	{
		$("#submit").addClass("disabled");
		$("#helpSubmit").show();
	}
}*/


