var express = require('express');
var router = express.Router();
var Post = require('../models/post');

var monk = require('monk');
var db = monk('127.0.0.1:27017/myBlog');


var testPosts = [{
		name : 'name1',
		time : new Date(),
		title : 'title1',
		post : 'conten1',
		tags : ['tag1', 'tag2'],
		reprint_info : {},
		comments : [],
		pv : 0
	}, {
		name : 'name2',
		time : new Date(),
		title : 'title2',
		post : 'conten2',
		tags : ['tag1', 'tag2'],
		reprint_info : {},
		comments : [],
		pv : 0
	}
];


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

module.exports = router;