//posts DB - find All
db.posts.find();

//insert New
post = {
        title: "NEW",
        body: "Crud...",
        date: "2016-01-12T14:56:00.000Z",
        options: {isDraft: true, version: 1},
        tags: ["mongo", "video", "youtube", "lecture"]
} 
db.posts.insert(post);

//insert script
var blogjson =
[
  {
    "_id": 1,
    "title": "MongoDB start",
    "body": "MongoDB start body...",
    "date": "2015-02-16T14:56:00.000Z",
    "options": {
      "isDraft": false,
      "author": "Alex"
    },
    "tags": [
      "mongo",
      "donate"
    ]
  },
  {
    "_id": 2,
    "title": "First lection",
    "body": "In which you will learn what MongoDB. What is its basis the advantages and disadvantages to a relational database. What is JSON format and how MongoDB stores data ...",
    "date": "2016-06-29T23:31:00.000Z",
    "tags": [
      "mongo",
      "video",
      "youtube",
      "lecture"
    ],
    "options": {
      "isDraft": false,
      "author": "someone"
    },
    "comments": [
      {
        "name": "Anonymous",
        "comment": "wow great news",
        "date": "2016-02-01T23:08:00.000Z"
      },
      {
        "name": "Alex",
        "comment": "Thanks",
        "date": "2016-02-01T24:08:00.000Z"
      },
      {
        "name": "Anon",
        "comment": "+1",
        "date": "2016-02-01T25:08:00.000Z"
      }
    ]
  },
  {
    "_id": 3,
    "title": "Article 3",
    "body": "Some Body 3",
    "date": "2016-05-04T22:50:00.000Z",
    "options": {
      "isDraft": false,
      "version": 10
    },
    "tags": [
      "dart",
      "game"
    ]
  },
  {
    "_id": 4,
    "title": "Article 4",
    "body": "Body 4",
    "date": "2016-04-30T19:43:00.000Z",
    "options": {
      "isDraft": false,
      "version": 6
    },
    "tags": [
      "dart",
      "JavaScript",
      "frontend"
    ]
  },
  {
    "_id": 5,
    "title": "Creating custom plug-ins",
    "body": "Plug in Django CMS is a part of the content, which can be used repeatedly, and just added to the page ...",
    "date": "2014-04-20T19:37:00.000Z",
    "options": {
      "isDraft": false,
      "version": 16
    },
    "tags": [
      "Django",
      "CMS",
      "Plugins"
    ]
  },
  {
    "_id": 6,
    "title": "Creating custom plug-ins",
    "body": "This section assumes that you are already familiar with a guide to Django, and it will be shown how to integrate the voting program of leadership in django CMS ...",
    "date": "2014-04-12T15:46:00.000Z",
    "options": {
      "isDraft": false,
      "author": "Someone"
    },
    "tags": [
      "Django",
      "CMS",
      "Plugins"
    ]
  },
  {
    "_id": 7,
    "title": "Create your own elements",
    "body": "Create your own HTML elements using",
    "date": "2014-03-29T18:11:00.000Z",
    "options": {
      "isDraft": false,
      "version": 1
    },
    "tags": [
      "dart",
      "Polymer",
      "Plugins",
      "HTML",
      "frontend"
    ]
  },
  {
    "_id": 8,
    "title": "Example animation famo.us js",
    "body": "In the last article examined the basics of creating surfaces, event handling and animation in famo.us....",
    "date": "2014-07-18T14:01:00.000Z",
    "options": {
      "isDraft": false,
      "version": 1.4
    },
    "tags": [
      "famo.us",
      "JS",
      "JavaScript",
      "animation",
      "frontend"
    ]
  },
  {
    "_id": 9,
    "title": "Getting to know famo.us",
    "body": "It's time to write an article about an interesting framework, which allows you to create interactive web applications",
    "date": "2014-05-04T22:32:00.000Z",
    "options": {
      "isDraft": false,
      "version": 4
    },
    "tags": [
      "famo.us",
      "JS",
      "JavaScript",
      "intro",
      "frontend"
    ]
  },
  {
    "_id": 10,
    "title": "Use IndexedDB",
    "body": "Browsers provide several ways to save your application user data on the client side ...",
    "date": "2014-02-25T23:08:00.000Z",
    "tags": [
      "dart",
      "IndexedDB",
      "databases",
      "frontend"
    ],
    "options": {
      "isDraft": false,
      "version": 5
    },
    "comments": [
      {
        "name": "alex",
        "comment": "Yo",
        "date": "2014-02-26T23:08:00.000Z"
      }
    ]
  },
  {
    "_id": 11,
    "title": "Subj 11",
    "body": "AAABBBYYYY",
    "date": "2014-02-16T01:15:00.000Z",
    "options": {
      "isDraft": false,
      "version": 8
    },
    "tags": [
      "science",
      "youtube",
      "fun"
    ]
  }
]

//mongoimport -dtest -cposts --jsonArray < blogjson
  
 for(var i=0; i<blogjson.length; i++) {
	db.posts.insert( blogjson[i]);
 }   
 
 //Find elements
    
 db.posts.find({_id: 5})
 
 db.posts.findOne({_id: 5})
 
 //only title
 db.posts.findOne({_id: 1}, {title: true, _id:false})
 
  //> < >=
 db.posts.find({_id: {$gt: 5}});
 
 db.posts.find({_id: {$gte: 5}});
  
 db.posts.find({_id: {$gte: 5, $lte: 6}});
 
  //wit regex   
 db.posts.find({title:{$regex: /mongo/i}}, {title:true});
 //or and
 db.posts.find({$or: [{title: {$regex: /mongo/i}},
                      {title: {$regex: /webgl/i}}
                      ,
                      {_id: 11}
                     ]}, {title:true});
                     
 //synonym to and                   
 db.posts.find({title: {$regex: /webgl/i}, _id: {$gt : 3}});
 
 //have comment
 db.posts.find({comments: {$exists:true}});
 
 //type 1-int
 db.posts.find({options: {$type:1}});
 
 db.posts.find({options: {$type:3}});
 
 //with inner array
 db.posts.find({tags:"game"}, {tags: true});
 
 db.posts.find({tags: {$in: ["mongo", "JavaScript"]}});
 
  db.posts.find({tags: {$all: ["dart", "webGL"]}}, {tags:true});
  
 //object field 
 db.posts.find({"options.author": "Alex"}, {options:true}); 
 
 //count of documents
 db.posts.count({});
 
 db.posts.count({_id: {$gte: 3}});
 
 //cursors
 var cursor = db.posts.find();
 while(cursor.hasNext()){ 
     printjson( cursor.next());
 }    
 
 
  //cursors - sort, skip , limit
 var cursor = db.posts.find().sort({_id: -1}).limit(3);
 while(cursor.hasNext()){ 
     printjson( cursor.next());
 }
 
 //updating docs
 db.posts.findOne({_id: 1});
 db.posts.updateOne({_id: 1}, {$set: {counter: 8}});
 db.posts.updateOne({_id: 1}, {$inc: {counter: 10}});
 
 //delete field
 db.posts.updateOne({_id: 1}, {$unset: {counter: true}});
  
 //set to Array
 db.posts.update({_id: 1}, {$set: {array: [1,2,3,4]}});
  
 //set one elem of arr by indx
 db.posts.update({_id: 1}, {$set: {"array.1": 5}});
  
 //Export and dump commands
 mongoexport --db test --collection posts --jsonArray  --out D:\_JampRepo\jampmongo\posts_jsonarray.json
 
 //Dump
 mongodump --db test --collection posts --out D:\_JampRepo\jamp-mon\posts_dump