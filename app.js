
const http = require('http');
const url = require('url');
const { parse } = require('querystring');
let body;

http.createServer((request, response) => {
    console.log('server work');
    
        // POST
        body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            console.log(body);
            let params = parse(body);
            console.log(params);
            console.log(params.hi);
            response.end(body);
            console.log(body);






            const { request } = require('http');
            const mysql = require('mysql');
            
            const connection = mysql.createConnection({
                host:'localhost',
                user:'root',
                database:'tea',
                password:'root',
            });
            
            connection.connect(function(err){
              if(err){console.log(err);} else{
                console.log('.....connection on))');
              }
             });
            
             
            
             let query = `INSERT INTO bascet(name) VALUES('${body}')`;
            
             connection.query(query,(err, result) =>{
                  console.log(err);
                  
                  console.log(result);
            
             });
            
             connection.end(function(err){
              if(err){console.log(err);} else{
                console.log('.....connection of))');
              }
             });




        });
    }

).listen(3000);


