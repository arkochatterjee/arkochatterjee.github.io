var committee = ["TEAM ENVISION","Challenges","Creatives","Corporate Strategy and Implementation(CSI)","Operation and Resource Management(ORM)","Public Relations(PR)","Finance","Deco and Arts","Quality Assurance(QA)","Sponsorship and Marketing","Highlights","Workshops","Championships","Initiatives","Robogyan","Yuddhame","Online","Magefficie","Fundaz","Vimanaz","Konstruktion","Architecture","Bluebook","Praesentatio","Machination","Electrizite","Digital Design","X-Zone"];

//document.addEventListener("DOMContentLoaded", addCountries());
document.addEventListener("DOMContentLoaded", addCommittees());

document.addEventListener("DOMContentLoaded", loadFunctions());


function loadFunctions()
{
	$(document).ready(function()
	{
		$("#committee1").change(function()
	    {
	        addCountries("committee1");
	    });
	    $("#committee2").change(function()
	    {
	        addCountries("committee2");
	    });
	    $("#committee3").change(function()
	    {
	        addCountries("committee3");
	    });
	    $("#gender").change(function()
	    {
	        askIfHosteller();
	    });
	    $("#collegeOption").change(function()
	    {
	        askIfHosteller();
	    });
	    $("#collegeOption").change(function()
	    {
	        accomodationToggle();
	    });
	    $("#hostellerYes").change(function()
	    {
	        getHostellerAddress();
	    });
	    $("#hostellerNo").change(function()
	    {
	        getHostellerAddress();
	    });

	    $("#collegeOption").change(function()
	    {
	        if(document.getElementById("collegeOption").selectedIndex===1)
	        {
	        	$("#collegeDiv").show();
	        	$("#college").val("");
	        	$("#regNumberDiv").hide();
	        	$("#regNumber").val("");

	        	var elementID = "college";
	        	var helpDivID = "helpDiv"+elementID.charAt(0).toUpperCase() + elementID.slice(1);

	        	$('#'+helpDivID).addClass("has-error");
				$('#'+helpDivID).removeClass("has-success");
	        }
	        else if(document.getElementById("collegeOption").selectedIndex===0) 
	        {
	        	$("#collegeDiv").hide();
	        	$("#college").val($("#collegeOption option").eq(0).val());
	        	$("#regNumberDiv").show();
	        	$("#regNumber").val("");

	        	var elementID = "college";
	        	var helpDivID = "helpDiv"+elementID.charAt(0).toUpperCase() + elementID.slice(1);

	        	$('#'+helpDivID).addClass("has-success");
				$('#'+helpDivID).removeClass("has-error");

	        }
	        else $("#collegeDiv").hide($("#college").val());
	    });
	});

	document.addEventListener("DOMContentLoaded", doDefaults());
	document.getElementById("collegeOption").selectedIndex=-1;

	$("#experienceDelegateReporter").change(function()
	    {
	        if($("#experienceDelegateReporter").val()>0)
	        	$("#detailedExperienceDelegateReporterDiv").show();
	        else
	        {
	        	$("#detailedExperienceDelegateReporterDiv").hide();
	        	$("#detailedExperienceDelegateReporter").val("");
	        }
	});

	$("#experienceMemberLead").change(function()
	    {
	        if($("#experienceMemberLead").val()>0)
	        	$("#detailedExperienceMemberLeadDiv").show();
	        else
	        {
	        	$("#detailedExperienceMemberLeadDiv").hide();
	        	("#detailedExperienceMemberLead").val("");
	        }
	});

	$("#committee1").change(function()
	    {
	        if(!document.getElementById("committee1").selectedIndex===-1)
	        {
	        	$("#committee1Countries").hide();
				$("#committee1Countries").children("select").prop('selectedIndex', -1);
			}
	        else
	        {
				$("#committee1Countries").show();
			}
	    });

	$("#committee2").change(function()
	    {
	        if(!document.getElementById("committee2").selectedIndex===-1)
	        {
	        	$("#committee2Countries").hide();
				$("#committee2Countries").children("select").prop('selectedIndex', -1);
			}
	        else
	        {
				$("#committee2Countries").show();
			}
	    });

	$("#committee3").change(function()
	    {
	        if(!document.getElementById("committee3").selectedIndex===-1)
	        {
	        	$("#committee3Countries").hide();
				$("#committee3Countries").children("select").prop('selectedIndex', -1);
			}
	        else
	        {
				$("#committee3Countries").show();
			}
	    });

	
}

function doDefaults()
{
	
	$("#hosteller").hide();
	$("#accomodation").hide();
	$("#hostellerAddressDiv").hide();
	$("#detailedExperienceDelegateReporterDiv").hide();
	$("#detailedExperienceMemberLeadDiv").hide();
	$("#committee1Countries").hide();
	$("#committee2Countries").hide();
	$("#committee3Countries").hide();

	$("[type='number']").keypress(function (evt) {
    evt.preventDefault();
	});
	$("[type='number']").keydown(function(e) {
    if (e.keyCode === 8) {
        return false;
    };
});
}

//Edited 31/10/2017 
function addCountries(committeeID)
{
	var selectedCommittee = document.getElementById(committeeID).value;
	var array;

	if(selectedCommittee==committee[0])
		array = dataDISEC;
	else if(selectedCommittee==committee[1])
		array = dataECOFIN;
	else if(selectedCommittee==committee[2])
		array = dataUNDP;
	else if(selectedCommittee==committee[3])
		array = dataNATO;
	else if(selectedCommittee==committee[4])
		array = dataCFR;
	else if(selectedCommittee==committee[5])
		array = dataAU;
	else if(selectedCommittee==committee[6])
		array = dataNSG;
	else if(selectedCommittee==committee[7])
		array = dataUNICEF;
	else if(selectedCommittee==committee[8])
		array = dataOIC;
	else if(selectedCommittee==committee[9])
		array = dataHRC;
	else if(selectedCommittee==committee[10])
		array = dataASEAN;
	else if(selectedCommittee==committee[11])
		array = dataAIPPM;
	else if(selectedCommittee==committee[12])
		array = dataECJ;
	else if(selectedCommittee==committee[13])
		array = dataUNSC;
	else if(selectedCommittee==committee[14])
		array = dataJCCAxis;
	else if(selectedCommittee==committee[15])
		array = dataJCCAllies;

	var select;

	//Removing existing options
	for (var i=1;i<=3;i++)
	document.getElementById(committeeID+"country"+i).options.length = 0;

	//adding array to selectbox
	for(var j = 1;j<=3;j++)
	{
		var countryID = committeeID+"country"+j;
		select = document.getElementById(countryID);
		for(var i = 0; i < array.length; i++)
	    {
		    var option = document.createElement('option');
		    option.text = option.value = array[i];
		    select.add(option);
		}
		select.selectedIndex=-1;
	}
	for(var j = 1;j<=3;j++)
	{
		var countryID = committeeID+"country"+j;
		var helpDivID = "helpDiv"+countryID.charAt(0).toUpperCase() + countryID.slice(1);
		var helpID = "help"+countryID.charAt(0).toUpperCase() + countryID.slice(1);

		$('#'+helpDivID).removeClass("has-error");
		$('#'+helpDivID).removeClass("has-success");
		$('#'+helpID).hide();
	}
}

function addCommittees()
{
	for(var j = 1;j<=3;j++)
	{
	    var select = document.getElementById("committee"+j);
	    for(var i = 0; i < committee.length; i++)
	    {
	    var option = document.createElement('option');
	    option.text = option.value = committee[i];
	    select.add(option);
		}
	select.selectedIndex=-1;
	}
}

function askIfHosteller(){
	var female = document.getElementById('genderFemale');
	var college = document.getElementById('collegeOption');

	if(female.checked&&college.selectedIndex===0)
		$("#hosteller").show();
	else 
		{
			$("#hosteller").hide();
			$("#hostellerYes").prop('checked', false);
			$("#hostellerNo").prop('checked', false);
			getHostellerAddress();
		}
}

function getHostellerAddress()
{

	if(hostellerYes.checked)
		$("#hostellerAddressDiv").show();
	else 
		{
			$("#hostellerAddressDiv").hide();
			$("#hostellerRoomNumber").val("");
			$("#hostellerBlockName").val("");
		}
}

function accomodationToggle()
{
	var college = document.getElementById('collegeOption');
	if(college.selectedIndex===0)
	{
		$("#accomodation").hide();
	}
	else
	{
		$("#accomodation").show();
		$("#accomodationYes").prop("checked", false);
		$("#accomodationNo").prop("checked", false);
	}
}