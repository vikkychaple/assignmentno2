3) var arr1=[3,8,7,6,5,-4,3,2,1];
document.write(arr1.sort());



2) myColour=["Red","Green","White","Black"];

document.write(myColour.join(","));

document.write(myColour.join("+"));


6)function removeDuplicates(num)
 { 
var x,
 len=num.length, 
out=[], 
obj={}; 
for (x=0; x<len; x++) 
{ 
obj[num[x]]=0; 
} 
for (x in obj)
 { out.push(x);
 } 
return out;
 } 
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]; 
result = removeDuplicates(Mynum); 
document.write(Mynum); 
document.write(result);

4)var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; var mf = 1;
 var m = 0;
 var item; 
for (var i=0; i<arr1.length; i++)
 {
 for (var j=i; j<arr1.length; j++)
 { 
if (arr1[i] == arr1[j]) m++; 
if (mf<m)
 { 
mf=m; 
item = arr1[i];
 }
 } 
m=0; 
}
 document.write(item+" ( " +mf +" times ) ") ; 

5)var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}

7)var x = document.getElementById("mySelect");
x.remove(2);
var x = document.getElementById("mySelect");
if (x.length > 0) {
  x.remove(x.length-1);
}
