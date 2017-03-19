var express = require('express');
var router = express.Router();

productList = [
    {
      name: 'someProduct',
      imgLink: 'http://celebmafia.com/wp-content/uploads/2015/11/barbara-palvin-img-models-digitals-2015_2.jpg',
      description: 'I like this shit'
    },
    {
        name: 'someProduct2',
        imgLink: 'http://celebmafia.com/wp-content/uploads/2015/11/barbara-palvin-img-models-digitals-2015_2.jpg',
        description: 'I like this shit2'
    },
    {
        name: 'someProduct3',
        imgLink: 'http://celebmafia.com/wp-content/uploads/2015/11/barbara-palvin-img-models-digitals-2015_2.jpg',
        description: 'I like this shit3'
    }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index', productsList: productList });
});

module.exports = router;
