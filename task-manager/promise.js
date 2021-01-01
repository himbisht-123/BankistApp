const promisetoworl=new Promise((resolve,reject)=>
{
   setTimeout(() => {
    resolve([2,3,4])
       reject('things went wrong');
       
   }, 3000);
})

promisetoworl.then((result)=>
{
 console.log('success!!',result);
}).catch((error)=>
{
 console.log('error!',error);
})
