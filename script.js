
function labelcreate(tagname,attrname,attrvalue,content)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
return ele;
}
function linebreaker(tagname)
{
    var ele=document.createElement(tagname);
    return ele;
}

function inputcreate(tagname,attrname,attrvalue,attrname1,attrvalue1)
{
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.setAttribute(attrname1,attrvalue1);
return ele;
}

var first=labelcreate("label","for","firstname","firstname");
var br=linebreaker("br");

var inputfirst=inputcreate("input","type","firstname","id","firstname");
var br1=linebreaker("br");
document.body.append(first,br,inputfirst,br1);

var middle=labelcreate("label","for","middlename","middlename");
var br=linebreaker("br");
var inputmiddle=inputcreate("input","type","middlename","id","middlename");
var br1=linebreaker("br");
document.body.append(middle,br,inputmiddle,br1);

var last=labelcreate("label","for","lastname","lastname");
var br=linebreaker("br");
var inputlast=inputcreate("input","type","lastname","id","lastname");
var br1=linebreaker("br");
document.body.append(last,br,inputlast,br1);

var email=labelcreate("label","for","email","email");
var br=linebreaker("br");
var inputemail=inputcreate("input","type","email","id","email");
var br1=linebreaker("br");
document.body.append(email,br,inputemail,br1);

var password=labelcreate("label","for","password","password");
var br=linebreaker("br");
var inputpass=inputcreate("input","type","password","id","password");
var br1=linebreaker("br");
document.body.append(password,br,inputpass,br1);


