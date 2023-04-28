// chap 21 to 25

// var name=prompt("Enter first name")
// var l_name=prompt("Enter last name")

// var full_name=name + " " +l_name;
// alert(full_name)

// var mobile=prompt("favourite Mobile ?")
// document.write(mobile +"</br>")

// var length=mobile.length
// document.write(length)

// var word="pakistani"

// var index=word.indexOf('n')
// console.log(index)

// for(var i=0;i<word.length;i++){

//     if(word[i]=='n'){
//         console.log("index of "+i)
//     }
// }

// var word="hello world"

// var index=word.lastIndexOf('l')
// console.log(index)

// var word="pakistani"
// var index=3

// var char=word.charAt(index)
// console.log("character at index 3 is "+char)

// var name=prompt("Enter first name")
// var l_name=prompt("Enter last name")

// var full_name=name.concat(" "+l_name)
// alert(full_name)

// var city="hyderabad"

// for (var i=0; i<city.length;i++){
//     if (city.slice(i,i+5)==="hyder"){
//         city=city.slice(0,i)+"islam"+city.slice(i+5)
//     console.log(city)
//     }
// }

// var i=city.indexOf("hyder")
// console.log(i)

// if(i !== -1){
//     city=city.slice(0,i)+"islam"+city.slice(i+5)
//     console.log(city)
// }
// city=city.replace("hyder","islam")
// console.log(city)

// var message="“Ali and Sami are best friends. They play cricket and football together and study in same class"
// message=message.replace(/and/g,"&")
// console.log(message)

// var value="472"
// console.log(value)
// console.log(typeof value)
// console.log(value)
// var num=parseInt(value)
// console.log(typeof num)

// var input=prompt("enter string");
// var case_change=input.toUpperCase()
// console.log(case_change)

// var input=prompt("enter string");
// var title=input.toUpperCase()
// console.log("Title case "+title)

// var num=35.35
// num=num.toString()
// console.log(typeof num)

// num=num.replace(".","")
// console.log(num)

// var username=prompt("enter username");

// var special_char=/[!@,.]/

// if (special_char.test(username)){

//     console.log(" invalid")
// }
// else{
//  console.log(username)
// }

// var arr=["cake", "apple pie", "cookie", "chips" ,"patties"]
// var search=prompt("Welcome to ABC bakery what do you want")

// search=search.toLowerCase()

// if(arr.indexOf(search) !== -1){
//     alert(search+" available")
// }
// else{
//     alert("sorry")
// }

// var password=prompt("enter password")

// var alphabet=/[a-zA-z]/.test(password)
// var number=/\d/.test(password)

// var max_length=password.length>=6

// var firstchar=/^[a-zA-z]/.test(password)

// if(alphabet && number && max_length && firstchar){
//     console.log(password)
// }
// else{
//     console.log("invalid")
// }

// var uni="university of karachi"
//  var character=uni.split("")
//  console.log(character)

//  for(var i=0; i<character.length; i++)
// {
//     document.write(character[i] +"</br>")

// }

// var user_input=prompt("enter string")
// var last=user_input[user_input.length-1]
// console.log(last)

// var line="The quick brown fox jumps over The lazy dog"
// var arr=line.split(" ")
// var count=0

// for(var i=0;i<=arr.length;i++){
//     if(arr[i]==="The")
//     {
//         count++
//     }
// }
// console.log("the word 'the' contain "+ count +"times")

// var num=+prompt("enter a positive number")
// var r,c,f
// if(num>=0){
//     console.log(num)
//   r =  Math.round(num)
//     console.log(r)
//   c =  Math.ceil(num)
//     console.log(c)
//   f = Math.floor(num)
//     console.log(f)
// }

// else{
//     console.log("enter positive number")
// }

// var num=+prompt("enter a negative number")
// var r,c,f
// if(num<0){
//     console.log(num)
//   r =  Math.round(num)
//     console.log(r)
//   c =  Math.ceil(num)
//     console.log(c)
//   f = Math.floor(num)
//     console.log(f)
// }

// else{
//     console.log("enter negative number")
// }

// var num=+prompt("enter a number")

// if(num<0)
// {
//     num=-num;
//     console.log(num)
// }
// else{
//     console.log(num)
// }

// var num=Math.random()
// var dice=(num*6)+1
// var dice_num=Math.floor(dice)
// console.log(dice_num)

// var coin=Math.random()
// var toss=(coin*2)+1
// var Floor=Math.floor(toss)
// if(Floor==1){
//     console.log(Floor)
//     console.log("random coin value tail")    
// }
// else{
// console.log(Floor)
// console.log("random coin head")    
// }

// var num=Math.random()
// var Random_num=(num*100)
// var Round_num=Math.round(Random_num)
// console.log(Round_num)

// var secret_num=8
// var user_input=+prompt("Enter a number")
// if(user_input==secret_num){
//     alert("match it")
// }
// else{
//     alert("try again")
// }

// var user_input=+prompt("enter weight")
// document.write("The weight of the user is "+user_input)

// chap 31-34

// var today=new Date()
// console.log(today)

// var month=["january","febuary","march","april","may","june","july","august","september","october","november","december"]
// var index=today.getMonth()
// var current_month=month[index]
// console.log(current_month)

// var days=["sun","mon","tues","wed","thurs","fri","sat"]
// var index=today.getDay()
// var now=days[index]
// alert("today is "+now)

// var now=days[0]
// console.log(now)

// if(now=="sat" || now=="sun"){
//     alert("its fun day")
// }
// else{
//     alert("working day")
// }

// var date=today.getDate()
// if(date<16){
//    alert("first fifteen days")
// }
// else{
//     alert("last day of month")
// }

// var c_date=new Date()
// console.log(c_date)
// var m_sec=c_date.getTime()
// console.log(m_sec)
// var min=(c_date.getTime()/1000)/60
// console.log(min)

// var today=new Date()
// var time=today.getHours()
// console.log(time)

// if(time<12){
//     alert("its AM")
// }
// else{
//     alert("its PM")
// }

// var later_date=new Date("Dec,31,2020")
// console.log(later_date)

// var f_ramadan=new Date("june,18,2015")
// var f_time=f_ramadan.getTime()
// var today=new Date()
// var c_time=today.getTime()

// var diff=c_time-f_time
// var oneday=24*60*60*1000
// var day=Math.round(Math.abs(diff/oneday))
// console.log(day)

// var c_date=new Date()
// var ref_date=new Date("dec,1,2015")

// var current_time=c_date.getTime()
// console.log(current_time)

// var ref_time=ref_date.getTime()
// console.log(ref_time)

// var diff=current_time-ref_time
// var seconds= (diff/1000)
// console.log(seconds)

// var date = new Date()
// console.log(date)
// var hour=date.getHours()
// console.log(hour)

// var reset_hour=date.setHours(10)
// console.log(date)

// var c_date= new Date()
// console.log(c_date)

// var year_back=new Date("1923")
// console.log(year_back)

// var c_date= new Date()
// c_date.setFullYear(c_date.getFullYear()-100)

// var year_back=c_date.toDateString()
// console.log(year_back)

// var c_year=new Date()
// var b_year=new Date("july,22,2003")

// var diff=c_year.getTime()-b_year.getTime()
// var oneday=365*24*60*60*1000
// var b_date=diff/oneday
// console.log(b_date)

// var c_name="rohail"
// var c_month="april"
// var units=256
// var charges=256*22

// document.write("customer name = "+c_name +"<br/>")
// document.write("month = "+c_month +"<br/>")
// document.write("units charge = "+units +"<br/>")
// document.write("Net Payable with in due date = "+charges +"<br/>")
// var late_charges=580
// document.write("late charges ="+late_charges +"<br/>")
//  late_charges=charges+late_charges
// document.write("Gross Amount Payable (after Due Date) = "+late_charges) +"<br/>"

// chap 35-38 function

// function Time(){
//     var c_date= new Date()
//     console.log(c_date)
// }
// Time()

// var f_name,l_name,full_name

// function FullName(){
//     f_name=prompt("Enter first name")
//     l_name=prompt("enter last name");
//     full_name=f_name+l_name
//     console.log(full_name)
// }
// FullName()

// var num1,num2,sum
// function add(){
//     num1=+prompt("number1")
//     num2=+prompt("number2")
//     sum=num1+num2
//     return sum
// }

// var result=add()
// console.log(result)

// var num1, num2, operator, sum, sub, product, divide, mod

// function calculator() {
//     num1 = +prompt("number1")
//     num2 = +prompt("number2")
//     operator = prompt("enter operator")

//     switch (operator) {
//         case "+":
//             sum = num1 + num2
//             return sum
//             break
//         case "-":
//             sub = num1 - num2
//             return sub
//             break
//         case "*":
//             product = num1 * num2
//             return product
//             break
//         case "/":
//             divide = num1 / num2
//             return divide
//             break
//         case "%":
//             mod=num1 % num2
//             return mod
//             break
//            default :
//            alert("plz enter valid operator") 
//     }
// }
// var result=calculator()
// console.log(result)
// var sq
// function square(num1){
//      sq=num1*num1
//      console.log(sq)
// }
// square(8)
// var num=5
// var sum=1
// function factorial(){
//     for( var i=5;i>=1;i--){ 
//         sum=sum*i

//     }
//     console.log(sum)
// }
// factorial()

// var start_num, end_num
// function numbers(){
// start_num=+prompt("Enter starting number")
// end_num=+prompt("Enter ending number")

// for(var i=start_num; i<=end_num;i++){
//     console.log(i);
// }
// }
// numbers()

// function area(width,height){
//     var a=width*height
//     console.log(a)
// }
// area(5,4)

// function palindrome(str){
//     str=str.toLowerCase().replace(/[^a-zA-Z0-9]/g,'')
//     var reversed_str=str.split('').reverse().join('')

//     if(reversed_str===str){
//         console.log(reversed_str)
//     }
//     else{
//         console.log("not a palindrome")
//     }
// }
// palindrome("madam")

// function  casechange(str){
//         var arr=str.split(' ')
//         for(var i=0; i<arr.length;i++){
//             var firstchar=arr[i].charAt(0)
//             var capital=firstchar.toUpperCase()

//             arr[i]=capital+arr[i].slice(1)

//         }
//         return arr.join(' ')
// }
// var x= casechange("rohail rizwan")
// console.log(x)

// function longestword(str){

//     var word=str.split(' ')
//     var longest=''
//     for(var i=0; i<word.length; i++){
//         if(word[i].length>longest.length){
//             longest=word[i]
//         }

//     }
//     return longest
// }
// var x=longestword("web development tutorial")
// console.log(x)

// function numoccurence(str1,str2){
//         var combine=str1+str2
//         var count=0
//         for(var i=0; i<combine.length; i++){
//             if(combine[i]=='o'){
//                 count++
//             }

//         }
//         return count

// }
// var x= numoccurence("JSResourceS.com","o")
// console.log("num of occurrence of o is "+x)

// function hypotenous(base,perpendicular){

//         function square(x){
//             return x*x
//         }
//         var hypo=square(base)+square(perpendicular)
//         var root=Math.sqrt(hypo)
//         console.log(root)
// }
// hypotenous(2,4)


// function calcircumference(radius){
// var pi=3.142
//     var circum=2*pi*radius
//     console.log(circum)
// }
// calcircumference(5)

// function calArea(radius){
//     var area=Math.pow(radius,2)
//     console.log(area)
// }
// calArea(4)

// chap 38-42

// function Power(a,b){
//     var p=Math.pow(a,b)
//     console.log(p)
// }
// Power(2,4)

// function leapyear(){
//     var input_year=+prompt("Enter year")

//     if((input_year%4==0 && (input_year%100!=0 || input_year%400==0))){
//         console.log(input_year+"leapyear")
//     }
//     else{
//         console.log(input_year+" not a leap year")
//     }
// }
// leapyear()

// function area_triangle(a,b,c)
// {
//     var s=(a+b+c)/2
//     return s
// }    
//     function Area(a,b,c){
//       var s=  area_triangle(a,b,c)
//       var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));      

//         return area
//     }
// var a=Area(5,5,5)
// console.log(a)

// function marks(m1,m2,m3){
//     var t_marks=m1+m2+m3
//     return t_marks
// }
// function average(m1,m2,m3){
//     var avg=marks(m1,m2,m3)
//     var a=(m1+m2+m3)/3
//     return a
// }
// function percentage(t_marks){
//     var percent=(t_marks*100)/300
//     return percent
// }

// function Main(m1,m2,m3){
//    var m=marks(m1,m2,m3)
//    var avg=average(m1,m2,m3)
//    var percent=percentage(m)
//    console.log(m,avg,percent)
// }
// var result=Main(75,75,70)



// function meter(km){
//     return km*1000
// }
// function feet(km){
//     return km*3280.84
// }
// function inches(km){
//     return km*39370.1
// }
// function centimeter(km){
//     return km*100000
// }

// var km=+prompt("enter distance between 2 cities")
// var m=meter(km)
// var f=feet(km)
// var i=inches(km)
// var c=centimeter(km)

// console.log(m,f,i,c)

// function overtime(hour_worked){
//     regularpay=40*8
//     overtime_pay=0

//     if(hour_worked>40){
//         var overtime=hour_worked-40
//         overtime_pay=overtime*12.10

//     }
//     var pay=overtime_pay+regularpay
//     console.log(pay)
// }
// overtime(45)

// function cashier(amount){
//     var hundred=Math.floor(amount/100)
//     var fiftees=Math.floor((amount%100)/50)
//     var tens=Math.floor(((amount%100)%50)/10)

//     console.log("Number of 100 notes: " + hundred);
//   console.log("Number of 50 notes: " + fiftees);
//   console.log("Number of 10 notes: " + tens);
  
// }
// cashier(580)