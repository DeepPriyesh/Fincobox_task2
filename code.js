// Problem Statement : Design a model where we have a dummy database of size 100 and a producer function which produces at a very high rate 
//and a consumer which consumes the requests according to the vacancy in the dummy database.


// Queue implementation,since no built-in queue in javascript
class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0];
    }
   
  }
  
  
  
  let q = new Queue(); // Queue made where producer can push and consumer can consume from
  let blocked = 0; // a blocked variable to handle concurrency while producing 
  let db = new Array(100).fill(0); // dummy database with size 100
  

//Producer function to produce i.e push requests into the queue
  function producer(x)
  {
    //a blocked variable to handle concurrent requests, it becomes 0 as soon as there is any request
    //so no new requests can be made when one request is in process
      if(blocked==0) 
      {
        blocked = 1;
         q.enqueue(x);
       blocked = 0;
     }
  }



  // The consumer function keeps an eye on the dummy database "db" and as soon as a vacant position is found,
  // it retrives the data from the queue and puts in the database.
  function consumer ()
  {
        while(1)
      {
          for(let i=0;i<100;i++)//iterating the dummy database to check for vacant postitions
          {
              if(db[i]==0)
              {
                 const temp = q.front();
                 q.dequeue();
                console.log(temp);
                 db[i]=temp; // filling the vacant position in the database
              }
          }
      }
      
  }
  

  
  //A function to make the random places of database as 0 or vacant, after every 1 second.
  // so that consumer may find the vacant places and consume from the queue.  
  function variable_database()
  {
       
     setInterval(myTimer, 1000);
     function myTimer() {
     const variable_number =Math.floor(Math.random() * 100) + 1;
     db[variable_number]=0;
     }
      
  }
  

  for(let i=0;i<10000;i++)
  {
      producer(i);
  }
  consumer();
  variable_database();
  
  