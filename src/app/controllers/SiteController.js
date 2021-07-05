
class SiteController{

    index(req,res){//[GET] /news
            res.render('home');
    }
    //[GET] /search)
    search(req,res){
            res.render("search");
    }
}
module.exports =new SiteController;// tao ra 1 doi tuong export ra ngoai
