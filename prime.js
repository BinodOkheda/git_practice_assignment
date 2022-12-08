// write a program to check the given number is prime or not.....

num=11;
count=0;
for(i=0;i<=num;i++){
  if(num%i==0){
    count++
  }
}
if(count==2){
  console.log("Not a prime number")
}
else{
  console.log("A prime number")
}
