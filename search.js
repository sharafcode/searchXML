<script language="JavaScript" type="text/javascript">
function loadXMLDoc(dname)
{
    if (window.XMLHttpRequest)
    {
        xhttp=new XMLHttpRequest();
    }
    else
    {
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET",dname,false);
    xhttp.send();
    return xhttp.responseXML;
} 
function searchXML()
{
    xmlDoc=loadXMLDoc("Main_database.xml");
    var x=xmlDoc.getElementsByTagName("title");
    var input = document.getElementById("input").value;
    var size = input.length;
    if (input == null || input == "")
    {
        document.getElementById("results").innerHTML= "Please enter a character or name!";
        return false;
    }
    for (i=0;i<x.length;i++)
    {
        startString = title.substring(0,size);
        if (startString.toLowerCase() == input.toLowerCase())
        {
            title =xmlDoc.getElementsByTagName("title")[i].childNodes[0].nodeValue;
            creator =xmlDoc.getElementsByTagName("creator")[i].childNodes[0].nodeValue;
            contributor =xmlDoc.getElementsByTagName("contributor")[i].childNodes[0].nodeValue;
            subject =xmlDoc.getElementsByTagName("subject")[i].childNodes[0].nodeValue;
            publisher =xmlDoc.getElementsByTagName("publisher")[i].childNodes[0].nodeValue;
            date =xmlDoc.getElementsByTagName("date")[i].childNodes[0].nodeValue;
            type =xmlDoc.getElementsByTagName("type")[i].childNodes[0].nodeValue;
            divText = "<h1>Book metadata is:</h1><br /><table border=1><tr><th>title</th><th>creator</th><th>contributor</th><th>subject</th><th>publisher</th><th>date</th><th>type</th></tr>" + "<tr><td>" + title + "</td><td>" + creator + "</td><td>" + contributor + "</td><td>" + subject + "</td><td>" + publisher + "</td><td>" + date + "</td><td>" + type + "</td></tr>" + "</table>";
            break;
        }
        else
        {
            divText = "<h2>The book does not exist.</h2>";
        }
    }
    document.getElementById("results").innerHTML= divText;
}
</script>