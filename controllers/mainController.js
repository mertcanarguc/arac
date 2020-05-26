const async = require("async")
const base64 = require('base-64');
const Iyzipay = require('iyzipay');
const moment = require("moment")

exports.anasayfa = async(req,res,next)=>{
	res.render("front/index",{
		user:req.user
	})
}

exports.tasit = async(req,res,next)=>{
	res.render("front/araba")
}

exports.contact = async(req,res,next)=>{
	res.render("front/iletisim")
}

exports.about = async(req,res,next)=>{
	res.send("Hakkımızda")
}

exports.sss = async(req,res,next)=>{
	res.send("Sık Sorulan Sorular")
}

exports.favoriler = async(req,res,next)=>{
	res.send("Favoriler")
}


var iyzipay = new Iyzipay({
    apiKey: "uVaIoSpzwf9yksCxDXEhE2jrLBKFOB7z",
    secretKey: "hjOvgU0b4lKHhvfyNZVyGjw6KlgkXSrj",
    uri: 'https://api.iyzipay.com'
});

exports.satisyap = async(req,res,next)=>{
        let fiyat = await req.body.fiyat
        console.log(fiyat)
        var request = {
                locale: Iyzipay.LOCALE.TR,
                conversationId: '123456789',
                price: 0.10,
                paidPrice: 0.10,
                currency: Iyzipay.CURRENCY.TRY,
                basketId: 'B67832',
                paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
                callbackUrl: 'https://ilanediyor.com/onay',
                enabledInstallments: [2, 3, 6, 9],
                buyer: {
                    id: "deneme",
                    name: "deneme",
                    surname: "deneme",
                    gsmNumber: "05553332211",
                    email: "deneme@gmail.com",
                    identityNumber: "11221122112",
                    lastLoginDate: '2015-10-05 12:43:35',
                    registrationDate: '2013-04-21 15:12:09',
                    registrationAddress: "asdasdasdasdadas",
                    ip: '85.34.78.112',
                    city: "deneme",
                    country: 'Turkey',
                    zipCode: '34732'
                },
                shippingAddress: {
                    contactName: "deneme",
                    city: "deneme",
                    country: 'Turkey',
                    address: "deneme",
                    zipCode: '34742'
                },
                billingAddress: {
                    contactName: "deneme",
                    city: "deneme",
                    country: 'Turkey',
                    address: "asdasdasdasd",
                    zipCode: '34742'
                },
                basketItems: [
                    {
                        id: "deneme",
                        name: "deneme",
                        category1: "deneme",
                        category2: "deneme",
                        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                        price: 0.10
                    }
                ]

        };

        iyzipay.checkoutFormInitialize.create(request, function (err, result) {
            console.log(err, result);
            res.send(result.checkoutFormContent + '<html><head> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script></head><body> <h3 class="text-center">Ödeme Ekranı</h3> <div class="col-md-3"></div> <div class="col-md-6" id="iyzipay-checkout-form" class="popup"></div></body></html>');
        });
    }


exports.onay = async(req,res,next)=>{
        var iyzipay = new Iyzipay({
            apiKey: "uVaIoSpzwf9yksCxDXEhE2jrLBKFOB7z",
            secretKey: "hjOvgU0b4lKHhvfyNZVyGjw6KlgkXSrj",
            uri: 'https://api.iyzipay.com'
        });

        const token = req.body.token

        iyzipay.checkoutForm.retrieve({
            conversationId: '123456789',
            locale: Iyzipay.LOCALE.TR,
            token:token,
        }, function (err, result) {
            res.redirect("/")
        });
    }