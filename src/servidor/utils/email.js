var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var info = require('../.data.json');
var sg=info.SENDGRID_API_KEY;

exports.sendEmail=function(req,res){
        var emailTo = '';
        var emailFrom = '';
        var subject='';
        var ruta='';
        var body = '';
        switch (req.body.type) {
        case 'alta':
            emailTo = req.body.inputEmail;
            emailFrom = "alejandrogarsanz@gmail.com";
            subject = 'Tu Alta en ServiOntiTec';
            ruta = "<a href='http://"+"/ServiOntiTec/#/user/activar/" + arrArgument['token'] + "'>aqu&iacute;</a>";
            body = 'Gracias por unirte a nuestra aplicaci&oacute;n+ Para finalizar el registro, pulsa ' + ruta;
            break;
    
        case 'modificacion':
            emailTo = req.body.inputEmail;
            emailFrom = "alejandrogarsanz@gmail.com";
            subject = 'Tu Nuevo Password en ServiOntiTec';
            ruta = "<a href='http://"+"/ServiOntiTec/#/user/cambiarpass/" + arrArgument['token'] + "'>aqu&iacute;</a>";
            body = 'Para recordar tu password pulsa ' + ruta;
            break;
        case 'contact':
            emailTo = req.body.inputEmail;
            emailFrom = "alejandrogarsanz@gmail.com";
            subject = 'Tu Petici&oacute;n a ServiOntiTec ha sido enviada';
            ruta = '<a href="'+ req.body.location +'"'+'>aqu&iacute;</a>';
            body = req.body.inputMessage+'Para visitar nuestra web, pulsa ' + ruta;
            break;
        }
        
          var template =
            '<html>' +
            '<head>' +
            '<meta charset="utf-8" />' +
            '<style>' +
            '* { margin: 0; padding: 0;text-align: center;}'+
            'body { margin: 0 auto; width: 600px; height: 300px;}'+
            'header { padding: 20px; background-color: blue; color: white; padding-left: 20px; font-size: 25px;}'+
            'section { padding-top: 50px; padding-left: 50px; margin-top: 3px; margin-bottom: 3px; height: 100px; background-color: ghostwhite;}'+
            'footer { padding: 5px; padding-left: 20px; background-color: blue; color: white;}'+
            '</style>' +
            '</head>'+
            '<body>'+
            '<header> <p>'+subject+'</p> </header>'+
            '<section>'+ body +'</section>'+
            '<footer> <p> Enviado por ServiOntiTec</p></footer>'+
            '</body>'+
            '</html>';
        
          var email = {
            from: emailFrom,
            to: emailTo,
            subject: subject,
            text: req.body.inputMessage,
            html: template
          };
          //Input APIKEY Sendgrid
          var options = {
            auth: {
              api_key: sg
            }
          };
          var mailer = nodemailer.createTransport(sgTransport(options));
          mailer.sendMail(email, function(error, info) {
            if (error) {
              res.status('401').json({
                err: info
              });
            } else {
              res.status('200').json({
                success: true
              });
            }
          });
    }



