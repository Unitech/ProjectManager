<HEAD>
<SCRIPT language="JavaScript">
<!--
function startclock()
{
var thetime=new Date();

var nhours=thetime.getHours();
var nmins=thetime.getMinutes();
var nsecn=thetime.getSeconds();
var AorP=" ";

if (nhours>=12)
    AorP="P.M.";
else
    AorP="A.M.";

if (nhours>=13)
    nhours-=12;

if (nhours==0)
 nhours=12;

if (nsecn<10)
 nsecn="0"+nsecn;

if (nmins<10)
 nmins="0"+nmins;

document.clockform.clockspot.value=nhours+":"+nmins+":"+nsecn+" "+AorP;

setTimeout('startclock()',1000);

}

//-->
</SCRIPT>
</HEAD>
<BODY onLoad="startclock()">
<FORM name="clockform">
Current Time: <INPUT TYPE="text" name="clockspot" size="15">
</FORM>
</BODY>