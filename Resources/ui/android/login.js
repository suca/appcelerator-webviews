function Login() {

	var self = Ti.UI.createWindow({
		backgroundColor : '#000000',
		orientationModes:[Ti.UI.PORTRAIT]
	});
	
	
	
	self.addEventListener("open", function() {
		if (Ti.Platform.osname === "android") {
			if (!self.activity) {
				Ti.API.error("Can't access action bar on a lightweight window.");
			} else {
				actionBar = self.activity.actionBar;
				actionBar.hide();
			}
		}
	});


	var anchoPantalla = Ti.Platform.displayCaps.platformWidth;
	var altoPantalla = Ti.Platform.displayCaps.platformHeight;
	Ti.API.info('anchoPantalla ' + anchoPantalla + ' altoPantalla' + altoPantalla);
	

	var loginView = Ti.UI.createView({
		backgroundImage : '/images/android/login.png',
		top : 20,
		backgroundColor:'#91BBF0',
		//width : 320,
		//height : 548
		//width : anchoPantalla,
		//height : altoPantalla
		width : '100%',
		height : '100%'
	});
	self.add(loginView);

	var anchoPantalla = Ti.Platform.displayCaps.platformWidth;
	var anchoImagen = (anchoPantalla - 260) / 2;
	

	var viewBackgroundLogin = Ti.UI.createView({
		backgroundColor : '#454c4e',
		borderRadius : 5,
		borderWidth : 1,
		borderColor : '#454c4e',
		opacity : 0.7,
		right : 15,
		left : 15,
		//height : 166,
		height : 181,
		top : 240
	});

	self.add(viewBackgroundLogin);
	
	var usernameInput = Ti.UI.createTextField({
		height : Ti.App.iotAdmin.platformManager.getDimension('usernameInputHeight'),
		right : 26,
		left : 26,
		top : 251,
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius : 3,
		borderWidth : 1,
		hintText : "Correo Electrónico",
		backgroundColor : "#FFFFFF",
		color : '#000000',
		keyboardType : Titanium.UI.KEYBOARD_EMAIL,
	});
	self.add(usernameInput);

	usernameInput.addEventListener('focus', function(e) {
		usernameInput.keyboardType = Ti.UI.KEYBOARD_EMAIL;
	});
	usernameInput.addEventListener('return', function(e) {
		passwordInput.focus();
	});

	var passwordInput = Ti.UI.createTextField({
		height : Ti.App.iotAdmin.platformManager.getDimension('passwordInput_textField_height'),
		right : 26,
		left : 26,
		top : 301,
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius : 3,
		borderWidth : 1,
		hintText : 'Contraseña',
		backgroundColor : "#FFFFFF",
		color : '#000000',
		paddingLeft : 10,
		passwordMask : true,
		keyboardType : Titanium.UI.KEYBOARD_EMAIL,
	});

	self.add(passwordInput);

	var appLoginActivity = Titanium.UI.createActivityIndicator({
		top: 353,
		height:42,
		width: 42,
		right :35
	});

	var bntLogin = Ti.UI.createButton({
		color : '#FFFFFF',
		title : 'Entrar',
		height : Ti.App.iotAdmin.platformManager.getDimension('bntLogin_button_height'),
		left : 26,
		right : 26,
		top : 353,
		//backgroundImage : '/images/iphone/boton_entrar.png',
		backgroundImage : '/images/iphone/boton_verde@2x.png',
		//activity : appLoginActivity
	});
	self.add(bntLogin);	
	//bntLogin.add(appLoginActivity);
	self.add(appLoginActivity); //appLoginActivity.show();

	bntLogin.addEventListener('click', function(e) {

		if (usernameInput.value === "") {
			Ti.UI.createAlertDialog({
				title : 'Aplicación Móvil - IoT',
				message : 'Para ingresar a la aplicación móvil  debe ingresar su correo electrónico.',
				buttonNames : ["OK"]
			}).show();

		} else if (isEmailValid(usernameInput.value) === false) {
			Ti.UI.createAlertDialog({
				title : 'Aplicación Móvil - IoT',
				message : 'Por favor ingrese un correo válido.\n Ejemplo: \nusuario-correo@rgmail.com',
				buttonNames : ["OK"]
			}).show();
		} else if (passwordInput.value === "") {
			Ti.UI.createAlertDialog({
				title : 'Aplicación Móvil - IoT',
				message : 'Para ingresar  a la aplicación móvil debe ingresar su contraseña.',
				buttonNames : ["OK"]
			}).show();

		} else {
			appLoginActivity.show();
		}
		
		//window = require('/ui/android/home');
		//new window().open();

	});
	//alert(Ti.App.ritaQuirogaAdmin.platformManager.getDimension('values_dpi_device'));
	var recuperarContrasena = Ti.UI.createButton({
		top : 393,
		left : 26,
		height : Ti.App.iotAdmin.platformManager.getDimension('recuperarContrasena_button_height'),
		//color : '#fff954',
		color : '#ffffff',
		backgroundColor : 'transparent',
		font : {
			fontSize : 13
		},
		textAlign : Titanium.UI.TEXT_ALIGNMENT_LEFT,
		title : 'Recuperar Contraseña'
	});
	self.add(recuperarContrasena);

	recuperarContrasena.addEventListener('click', function(e) {
		
	});

	var signUpBt = Ti.UI.createButton({
		height : Ti.App.iotAdmin.platformManager.getDimension('signUpBt_button_height'),
		top : 393,
		right : 26,
		textAlign : Titanium.UI.TEXT_ALIGNMENT_RIGHT,
		color : '#ffffff',
		backgroundColor : 'transparent',
		font : {
			fontSize : 13
		},
		title : "Regístrarse"
	});
	self.add(signUpBt);

	signUpBt.addEventListener('click', function(e) {
		
	});

	var viewBackgroundFacebook = Ti.UI.createView({
		backgroundColor : '#454c4e',
		borderRadius : 5,
		borderWidth : 1,
		borderColor : '#454c4e',
		opacity : 0.7,
		right : 15,
		left : 15,
		height : 67,
		//bottom : 14
		bottom : 9
	});

	self.add(viewBackgroundFacebook);
	
	var loginViewBackground = Ti.UI.createButton({
		//bottom : 50,
		bottom : 20,
		height : Ti.App.iotAdmin.platformManager.getDimension('loginViewBackground_button_height'),
		//width : 270,
		right : 26,
		left : 26,
		title : '      Conectarse con Facebook',
		font : {
			fontSize : 16,
			textAlign : Titanium.UI.TEXT_ALIGNMENT_RIGHT,
		},
		//zIndex: 250,
		backgroundImage : '/images/iphone/boton_conectarse_facebook.png',

	});

	self.add(loginViewBackground);
		
	var activityIndicator = Ti.UI.createActivityIndicator({
		bottom: 18,
		right : 20,
 		height:'50dp',
  		width:'50dp',

	});
	
	self.add(activityIndicator); //activityIndicator.show();

	
	var fb = require('facebook');
	fb.appid = "273418969506494";
	fb.permissions = ['email,user_relationships,read_friendlists'];

	self.add(fb.createLoginButton({
		bottom : 25,
		/*height : 44,
		right : 26,*/
		height : 44,
		right : 26,
		left : 26,
		opacity:0,
		style : fb.BUTTON_STYLE_WIDE,
		//backgroundColor : '#FF6105',
		backgroundImage : '/images/iphone/boton_conectarse_facebook@2x.png',
		borderRadius : 5

	}));
	//self.add(loginViewBackground);
	
	
	fb.addEventListener('login', function(e) {
		activityIndicator.show();
		if (e.success) {

			params = {
				access_token : fb.accessToken
			};
			fb.requestWithGraphPath('/me', params, 'GET', function(e) {
				var result = JSON.parse(e.result);
				Ti.API.info("Result is : " + e.result);
				Ti.API.info("Id is : " + result.id);
				Ti.API.info("Username is : " + result.username);
				Ti.API.info("Full Name is : " + result.name);
				Ti.API.info("First name is : " + result.first_name);
				Ti.API.info("Last name is : " + result.last_name);
				Ti.API.info("Gender : " + result.gender);
				Ti.API.info("Email : " + result.email);

				Titanium.App.fbFirstName = result.first_name;
				Titanium.App.fbLastName = result.last_name;
				Titanium.App.fbMiddleName = result.middle_name;
				Titanium.App.fbEmail = result.email;

				Titanium.App.gender = result.gender;
				Titanium.App.status = result.relationship_status;
				Titanium.App.friends = result.friends;

				
				//sendInformationFacebookToAPI();

			});
			
			
			//add for apd
			
			Titanium.App.Properties.setBool("loginWithFacebook", true);
			
			//window = require('/ui/android/home');
			//new window().open();
			activityIndicator.hide();
		}else{
			activityIndicator.hide();
		}

		//NotificationsAndroid();
		//window = require('/ui/android/home');
		//self.close();
		//new window().open();

	});
	fb.addEventListener('logout', function(e) {
		//-alert('Logged out');
	});

	function isEmailValid(email) {
		//RFC822 validation
		var re = /(?:(?:\r\n)?[ \t])*(?:(?:(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[\t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*|(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)*\<(?:(?:\r\n)?[ \t])*(?:@(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[\t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*(?:,@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*)*:(?:(?:\r\n)?[ \t])*)?(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*\>(?:(?:\r\n)?[ \t])*)|(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)*:(?:(?:\r\n)?[ \t])*(?:(?:(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*|(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)*\<(?:(?:\r\n)?[ \t])*(?:@(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*(?:,@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*)*:(?:(?:\r\n)?[ \t])*)?(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*\>(?:(?:\r\n)?[ \t])*)(?:,\s*(?:(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*|(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)*\<(?:(?:\r\n)?[ \t])*(?:@(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*(?:,@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*)*:(?:(?:\r\n)?[ \t])*)?(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*\>(?:(?:\r\n)?[ \t])*))*)?;\s*)/;
		return re.test(email);
	}
	

	return self;
}

module.exports = Login;
