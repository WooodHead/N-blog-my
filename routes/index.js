var express = require('express');
var router = express.Router();
var Post = require('../models/post');

var monk = require('monk');
var db = monk('127.0.0.1:27017/myBlog');

/* GET home page. */
router.get('/', function (req, res, next) {

	var collection = db.get('posts');
	collection.find({}, {}, function (err, posts) {
		if (err) {
			console.log(err);
			return res.redirect('/500');
		}
    
	res.render('index',{
	title:'Node Blog',
	posts:posts
	});

		//res.json(posts);
	});
/*
	
	Post.getInPage(null,function(err,posts,total){
	if(err){
	console.log(err);
	return res.redirect('/500');
	}

	res.render('index',{
	title:'Node Blog',
	posts:posts
	});

	});
	 
	//  res.render('index', { title: 'Express' ,posts: testPosts});
	//res.render('index', { title: 'Express' });
*/
});

router.get('/signin',function(req,res){
  
  res.render('signin',
  {
    title:"Node Blog"    
  });
  
});

module.exports = router;