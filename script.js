'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// // Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



const displaymovements=function(mov)
{
  mov.forEach(function(mov,i)
  {
    const type= mov >0 ? 'deposit':'withdrawal';
    const html=`<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1}${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
  
  containerMovements.insertAdjacentHTML('afterbegin',html);
  });


};





const calcbalance=function(calc){
  calc.balance=calc.movements.reduce((acc,current)=>acc+current);

  labelBalance.textContent=`${calc.balance}€`

}




 const calcdisplaysummary=function(acc)
 {
   //for input income
   const income=acc.movements
   .filter(mov=>mov>0)
   .reduce((acc,current)=>acc+current,0);
    labelSumIn.textContent=`${income}€`
  //for out income  
    const out=acc.movements
    .filter(mov=>mov<0)
    .reduce((acc,current)=>acc+current,0);
     labelSumOut.textContent=`${out}€`

    // for interest summary//     
    const interest=acc.movements
    .filter(mov=>mov>0)
    .map((deposit)=>deposit*acc.interestRate/100)
    .filter(int=>int >=1)
    .reduce((acc,int)=>acc+int,0);
     labelSumInterest.textContent=`${interest}€`
 

 }




 const Createusername=function(accs)
 {
   accs.forEach(function(acc)
   {
     acc.username=acc.owner.toLowerCase()
     .split(' ')
     .map(name=>name[0])
     .join('');
    
   })
 }
 Createusername(accounts);
 
let currentaccount;
btnLogin.addEventListener('click',function(e)
{
  e.preventDefault();
   currentaccount=accounts.find(acc=>acc.username===inputLoginUsername.value);
  if(currentaccount?.pin===Number(inputLoginPin.value))
  {
    labelWelcome.textContent=`Welcome back,${currentaccount.owner.split(' ')[0]}`

    containerApp.style.opacity=1;

    UpdateUI(currentaccount);
  }
})

 const UpdateUI=function()
 {
  displaymovements(account1.movements);
  calcbalance(account1);
  calcdisplaysummary(account1);
 
 
 }

 btnTransfer.addEventListener('click',function(e)
 {
   e.preventDefault();
   const amount=Number(inputTransferAmount.value);
   const recieveracc=accounts.find(acc=>acc.username===inputTransferTo.value);
   //console.log(recieveracc);
   inputTransferTo.value=inputTransferAmount.value= '';
   if(amount>0 && recieveracc && currentaccount.balance>=amount &&recieveracc?.username!==currentaccount.username){
     console.log(currentaccount);
     currentaccount.movements.push(-amount);
      recieveracc.movements.push(amount); 

      UpdateUI(currentaccount);

   }
   console.log(currentaccount);
 })
 
btnLoan.addEventListener('click',function(e)
{
e.preventDefault();
const amount=Number(inputLoanAmount.value);

if(amount>0&&currentaccount.movements.some(acc=> acc >=amount))
{
  currentaccount.movements.push(amount);
  inputLoanAmount.value='';
  UpdateUI(currentaccount);
}

})
btnClose.addEventListener('click',function(e)
{
  e.preventDefault();
  const closeacc=accounts.find(acc=>acc.username===inputCloseUsername.value);
  if(closeacc?.pin===Number(inputClosePin.value))
  {
    inputClosePin.value=inputCloseUsername.value='';
    // console.log(closeacc);
    labelWelcome.textContent=`Your Account is closed,${currentaccount.owner.split(' ')[0]}`

    containerApp.style.opacity=0;
    accounts.splice(0,1);
    UpdateUI(currentaccount);
  }

})









// const arr=[2,3,34,56,57,82,91];
// console.log(Math.sqrt(25));


// const randomno=(min,max)=>Math.trunc(Math.random()*(min,max)+1);
//  console.log(randomno(10,30));


// console.log(Math.round('23.1'));
// console.log(Math.ceil('23.1'));
// console.log(Math.trunc(23.7));
// console.log(Math.floor(23.7));

// console.log(+(2.2).toFixed(5));

// const nov=new Date(2045,10,12,15,45,23);
// console.log(nov.getMonth());
// console.log(nov.getDate());

// console.log(nov.getHours());
// console.log(nov.getMinutes());


// const k=setTimeout(() => {
//   console.log('Himanshu is gud boy');
// }, 3000);

// clearTimeout(k);
// const arr=['Himanshu','Bharat','Sakshi','Rajat'];
// let i=0;
// const l=setInterval(() => {
//   if(arr[i]!==''){
//   console.log(arr[i]);
//   i=i+1;
// }
// }, 3000);
