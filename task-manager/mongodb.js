


const mongodb=require('mongodb');
const MongodbClient=mongodb.MongoClient;
const ObjectId=mongodb.ObjectID;

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

// const id=new ObjectId();
// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.id.length);
// console.log(id.toHexString().length)
 MongodbClient.connect(connectionURL,{useUnifiedTopology:true},{useNewUrlParser:true},(error,client)=>
{
    if(error)
    {
        return console.log('Unable to connect to database!');

    }
    const db=client.db(databaseName);

    // db.collection('users').findOne({_id:new ObjectId("5fed7c71793fb716f87d6fee")},(error,user)=>
    // {
    //  if(error)
    //  {
    //      console.log('Not able to fetch ');
    //  }
    //  console.log(user);
    // })

   //use find method in mongodb
   
//    db.collection('users').find({age: 23}).toArray((error,users)=>
//    {
//        console.log(users);
//    })
//    db.collection('users').find({age: 23}).count((error,users)=>
//    {
//        console.log(users);
//    })

    // db.collection('task').findOne({_id:new ObjectId("5fed75361d3e63094402d575")},(error,user)=>
    // {
    //   console.log(user)
    // })
    // db.collection('task').find({completed:false}).toArray((error,task)=>
    // {
    //   console.log(task);
    // })
// USE UPDATEONE
    // db.collection('users').updateOne({_id:new ObjectId("5fed74206781d60568d8a3f3")},{
    //     $set :
    //     {
    //         name:'Rakesh',
    //         age:34
    //     }
    // }).then((result)=>
    // {
    //      console.log(result);
    // }).catch((error)=>
    // {
    //     console.log(error);
    // })

//USE UPDATEMANY

//  db.collection('task').updateMany({completed:false},{
//      $set:
//      {
//          completed:true
//      }
//  }).then((result)=>
//  {
//    console.log(result);
//  }).catch((error)=>
//  {
//   console.log(error);
//  })

//USE DELETEONE

 db.collection('task').deleteOne({description:'Handsome man'})
 .then((result)=>
 {
    console.log(result)
 }).catch((error)=>
 {
     console.log(error)
 })



//     db.collection('users').insertOne(
//         {
//             _id: id, 
//             name:'Viraj',
//             age:22
//         },(error,result)=>
//         {
//             if(error)
//             {
//                 return console.log('Unable to insert user.')
//             }
//             console.log(result.ops);
//         }
//    )


   //using Insertmany function()

//    db.collection('users').insertMany([
//        {
//            
//            name:'Viraj',
//            age:23
//        },
//        {
//            name:'Bharat',
//            age:23
//        }
//    ],(error,result)=>
//    {
//       if(error)
//       {
//           console.log('Unable to insert document');
//       }

//        console.log(result.ops);
//    })
//       db.collection('task').insertMany([{
//          description:'Handsome man',
//          completed:true
//       },
//       {
//           description:'Beautiful girl',
//           completed:false
//       }
//     ],(error,result)=>{
//           if(error)
//           {
//               console.log('unable to insert document');
//           }  
// console.log(result.ops);

//     })
})
