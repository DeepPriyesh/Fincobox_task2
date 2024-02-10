Problem Statement : 

Design a model where we have a dummy database of size 100 and a producer function which produces at a very high rate and a consumer function which consumes the incoming  requests 
According to the availability of the database.

Approach :

We can have a Queue in which the producer function can push the requests as they come 
And the consumer function can consume from.
The consumer function also needs to keep an eye on the vacant positions in the database so 
as soon as there is any vacancy in the database, it may consume from the Queue and put in the database.
The no. of producer requests can be large so to handle concurrent requests we may have a 
technique to block the producer function while a request process is going on and only when one request is finished queueing in the queue, another request can be processed.
