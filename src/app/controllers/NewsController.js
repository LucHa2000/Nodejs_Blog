
class NewsController{

    index(req,res){//[GET] /news
            res.render('news');
    }
    //[GET] /news/:slug (bien dong ngau nhien)
    show(req,res){
            res.send("new detail")
    }
}
module.exports =new NewsController;// tao ra 1 doi tuong export ra ngoai
