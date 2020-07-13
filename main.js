const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ];
  function f(n){
    let a=1;
    let b=1;  
    let i=3;
    let kq;
    while (i<n){
        kq=b;
        b=b+a;
        a=kq;
        i++;
    }
    return b;
  }
const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  const a1=inventors.filter(s=>s[0]==="A");
  const b1=inventors.filter(s=>s.includes("n"));
  const c1=inventors.filter(s=>{
    for (let i=0;i<s.length;i++){
      if (s[i]===s[i+1]){
        return s;
      }
    }
  });
  const d1=numbers.filter(a=>a%2==1)
  const e1=numbers.filter(a=>a<100&&a>9)
  const f1=numbers.filter(a=>{
    for (let i=2;i<a-1;i++){
      if (a%i===0){ return "" }
    }
    return a;
  })
  console.log(a1);
  console.log(b1);
  console.log(c1);
  console.log(d1);
  console.log(e1);
  console.log(f1);
  const a2=inventors.map(s=>s.slice(0,s.indexOf(" ")));
  const b2=inventors.map(s=>s.length);
  const c2= inventors.map(s=>s.toUpperCase());
  const d2= inventors.map(s=>{ 
    let s2="";
    s=" "+s;
    for (let i=0;i<s.length;i++){
      if (s[i]===" "){s2=s2+s[i+1]+"."}
    }
    return s2;});
const e2= numbers.map(a=>a*100);
console.log(a2);
console.log(b2);
console.log(c2);
console.log(d2);
console.log(e2);
const a3=inventors.sort();
console.log(a3);
const b3=inventors.sort((a,b)=> b.charCodeAt(0)-a.charCodeAt(0));
console.log(b3);
const c3=inventors.sort((a,b)=>a.length-b.length);
console.log(c3);
const d3=inventors.sort((a,b)=> b.length-a.length);
console.log(d3);
const a4=numbers.reduce((a,b)=>a+b);
console.log(a4);
const b4=numbers.reduce((a,b)=>{
    if (a%2==0&&b%2==0){return a+b;}
    else if (a%2==0){return a;}
    else if (b%2==0){return b;}
    else return 0;
});
console.log(b4);
console.log(inventors);
let  c4=inventors.reduce((a,b) =>{ 
 //  let c=a.split(" ");
   let d=b.split(" ");
  
   return a+" "+d[0];
}
);
let s=c4.split(" ");
s[1]=s[0];
s.shift();
let s2=s.join(" ");
console.log(s2);
const a5=inventors.some(s=>s.includes("y"));
console.log(a5);
const b5=inventors.every(s=>s.includes("n"));
console.log(b5);
const c5=inventors.every(s=>{
    let s2=s.split(" ");
    if(s2.length>4){ return true;}
    return false;
})
console.log(c5);
const a6=inventors.find(s=>{
    s2=s.split(" ");
    if (s2.length>2){return s2;}
    });
console.log(a6);
const b6=inventors.filter(s=>{
    s2=s.split(" ");
    if (s2.length<=2){return s2;}
})
console.log(b6);
const c6=numbers.find(s=> s%7===0);
console.log(c6);
const d6=numbers.find(s=>s%7!==0);
console.log(d6);
console.log(f(6));