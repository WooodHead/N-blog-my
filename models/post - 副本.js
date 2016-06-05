
var mongodb=require('./db');

function Post(name, title, post, tags){
  this.name=name;
  this.title=title;
  this.post=post;
  this.tags=tags;
}


Post.getInPage=function(name,callback){
  mongodb.open(function(err,db){
    if(err){
        return callback(err);
    }
    
    db.collection('posts',function(err,collection){
      if(err){
        mongodb.close();
        return callback(err);
      }
      
      var query={};
      
      if(name){
        query.name=name;
      }
      
      collection.count(query,function(err,total){
        if(err){
          mongodb.close();
          return callback(err);
        }
        collection.find(query).toArray(function(err,docs){
          mongodb.close();
          if(err){
            callback(err);
          }
          
          docs.forEach(function(doc){
            if(doc.post){
              
            }
            if(!doc.tags){
              doc.tags=[];
            }
            
            if(!doc.comments){
              doc.comments=[];
            }
            if(!doc.py){
              doc.py=0;
            }
          });
          callback(null,docs,total);
          
        });
       
        
      });
        
    });
    
    
  });
  
};


module.exports=Post;