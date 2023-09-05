// UserList.js

const users = [
    {"id":1,"first_name":"Enoch","last_name":"John","username":"ejohn0","age":24,"salary":"Rp5.500.000"},
    {"id":2,"first_name":"Rosina","last_name":"de Chastelain","username":"rdechastelain1","age":29,"salary":"Rp4.500.000"},
    {"id":3,"first_name":"Matty","last_name":"Adamkiewicz","username":"madamkiewicz2","age":24,"salary":"Rp5.500.000"},
    {"id":4,"first_name":"Klemens","last_name":"Phayre","username":"kphayre3","age":27,"salary":"Rp6.500.000"},
    {"id":5,"first_name":"Frederica","last_name":"Canton","username":"fcanton4","age":29,"salary":"Rp7.500.000"},
    {"id":6,"first_name":"Orland","last_name":"Ondricek","username":"oondricek5","age":23,"salary":"Rp5.500.000"},
    {"id":7,"first_name":"Cherida","last_name":"Barlow","username":"cbarlow6","age":20,"salary":"Rp4.500.000"},
    {"id":8,"first_name":"Vinita","last_name":"Furst","username":"vfurst7","age":22,"salary":"Rp4.500.000"},
    {"id":9,"first_name":"Carlyle","last_name":"Blacklidge","username":"cblacklidge8","age":28,"salary":"Rp7.500.000"},
    {"id":10,"first_name":"Audi","last_name":"Boddis","username":"aboddis9","age":20,"salary":"Rp7.500.000"},
    {"id":11,"first_name":"Marshall","last_name":"Shawe","username":"mshawea","age":23,"salary":"Rp5.500.000"},
    {"id":12,"first_name":"Breanne","last_name":"Keilloh","username":"bkeillohb","age":27,"salary":"Rp6.500.000"},
    {"id":13,"first_name":"Skell","last_name":"Kreber","username":"skreberc","age":27,"salary":"Rp6.500.000"},
    {"id":14,"first_name":"Keriann","last_name":"Spataro","username":"kspatarod","age":30,"salary":"Rp7.500.000"},
    {"id":15,"first_name":"Joseito","last_name":"Dinneges","username":"jdinnegese","age":21,"salary":"Rp4.500.000"},
    {"id":16,"first_name":"Sofie","last_name":"Brimner","username":"sbrimnerf","age":29,"salary":"Rp7.500.000"},
    {"id":17,"first_name":"Isidora","last_name":"Camilleri","username":"icamillerig","age":26,"salary":"Rp7.500.000"},
    {"id":18,"first_name":"Victoria","last_name":"Davidofski","username":"vdavidofskih","age":28,"salary":"Rp6.500.000"},
    {"id":19,"first_name":"Shina","last_name":"Smallpeace","username":"ssmallpeacei","age":24,"salary":"Rp5.500.000"},
    {"id":20,"first_name":"Margi","last_name":"Rean","username":"mreanj","age":25,"salary":"Rp5.500.000"},
    {"id":21,"first_name":"Gillan","last_name":"Hasnney","username":"ghasnneyk","age":23,"salary":"Rp5.500.000"},
    {"id":22,"first_name":"Kipp","last_name":"Mettetal","username":"kmettetall","age":24,"salary":"Rp5.500.000"},
    {"id":23,"first_name":"Emili","last_name":"Warrack","username":"ewarrackm","age":30,"salary":"Rp7.500.000"},
    {"id":24,"first_name":"Jonis","last_name":"Scandroot","username":"jscandrootn","age":28,"salary":"Rp6.500.000"},
    {"id":25,"first_name":"Vyky","last_name":"Goodchild","username":"vgoodchildo","age":24,"salary":"Rp5.500.000"},
    {"id":26,"first_name":"Sheffie","last_name":"Nowick","username":"snowickp","age":30,"salary":"Rp7.500.000"},
    {"id":27,"first_name":"Ariella","last_name":"Donizeau","username":"adonizeauq","age":28,"salary":"Rp6.500.000"},
    {"id":28,"first_name":"Lexy","last_name":"Jirasek","username":"ljirasekr","age":29,"salary":"Rp7.500.000"},
    {"id":29,"first_name":"Arney","last_name":"Axford","username":"aaxfords","age":24,"salary":"Rp7.500.000"},
    {"id":30,"first_name":"Gwenneth","last_name":"Mistry","username":"gmistryt","age":23,"salary":"Rp5.500.000"},
    {"id":31,"first_name":"Gabriell","last_name":"Campkin","username":"gcampkinu","age":28,"salary":"Rp6.500.000"},
    {"id":32,"first_name":"Matti","last_name":"Heinert","username":"mheinertv","age":26,"salary":"Rp6.500.000"},
    {"id":33,"first_name":"Phyllis","last_name":"Tuck","username":"ptuckw","age":27,"salary":"Rp6.500.000"},
    {"id":34,"first_name":"Korella","last_name":"Giacoppoli","username":"kgiacoppolix","age":22,"salary":"Rp4.500.000"},
    {"id":35,"first_name":"Jocelin","last_name":"Bohlens","username":"jbohlensy","age":22,"salary":"Rp4.500.000"},
    {"id":36,"first_name":"Ursulina","last_name":"Tuison","username":"utuisonz","age":21,"salary":"Rp4.500.000"},
    {"id":37,"first_name":"Rayna","last_name":"Farebrother","username":"rfarebrother10","age":29,"salary":"Rp7.500.000"},
    {"id":38,"first_name":"Thedrick","last_name":"Matyasik","username":"tmatyasik11","age":20,"salary":"Rp4.500.000"},
    {"id":39,"first_name":"Wendall","last_name":"Gagen","username":"wgagen12","age":28,"salary":"Rp6.500.000"},
    {"id":40,"first_name":"Garrot","last_name":"Braga","username":"gbraga13","age":27,"salary":"Rp6.500.000"},
    {"id":41,"first_name":"Madella","last_name":"Birkwood","username":"mbirkwood14","age":30,"salary":"Rp7.500.000"},
    {"id":42,"first_name":"Brittan","last_name":"MacGinney","username":"bmacginney15","age":25,"salary":"Rp5.500.000"},
    {"id":43,"first_name":"Peria","last_name":"John","username":"pjohn16","age":21,"salary":"Rp4.500.000"},
    {"id":44,"first_name":"Ugo","last_name":"Curme","username":"ucurme17","age":28,"salary":"Rp7.500.000"},
    {"id":45,"first_name":"Armstrong","last_name":"Marron","username":"amarron18","age":29,"salary":"Rp7.500.000"},
    {"id":46,"first_name":"Krispin","last_name":"Dammarell","username":"kdammarell19","age":20,"salary":"Rp4.500.000"},
    {"id":47,"first_name":"Townie","last_name":"Bouette","username":"tbouette1a","age":22,"salary":"Rp4.500.000"},
    {"id":48,"first_name":"Forster","last_name":"Dunkinson","username":"fdunkinson1b","age":20,"salary":"Rp4.500.000"},
    {"id":49,"first_name":"Koralle","last_name":"Hammerich","username":"khammerich1c","age":21,"salary":"Rp4.500.000"},
    {"id":50,"first_name":"Sydelle","last_name":"Itzchaki","username":"sitzchaki1d","age":23,"salary":"Rp5.500.000"},
    {"id":51,"first_name":"Lovell","last_name":"Checchetelli","username":"lchecchetelli1e","age":25,"salary":"Rp5.500.000"},
    {"id":52,"first_name":"Maggee","last_name":"Weedall","username":"mweedall1f","age":28,"salary":"Rp6.500.000"},
    {"id":53,"first_name":"Kimball","last_name":"Nan Carrow","username":"knancarrow1g","age":26,"salary":"Rp6.500.000"},
    {"id":54,"first_name":"Marie-ann","last_name":"Finnan","username":"mfinnan1h","age":21,"salary":"Rp4.500.000"},
    {"id":55,"first_name":"Dario","last_name":"Cruces","username":"dcruces1i","age":30,"salary":"Rp7.500.000"},
    {"id":56,"first_name":"Rivi","last_name":"Klamp","username":"rklamp1j","age":30,"salary":"Rp7.500.000"},
    {"id":57,"first_name":"Quinton","last_name":"Luebbert","username":"qluebbert1k","age":27,"salary":"Rp6.500.000"},
    {"id":58,"first_name":"Ransom","last_name":"Sherratt","username":"rsherratt1l","age":27,"salary":"Rp6.500.000"},
    {"id":59,"first_name":"Alard","last_name":"Pengilly","username":"apengilly1m","age":21,"salary":"Rp4.500.000"},
    {"id":60,"first_name":"Germain","last_name":"Iverson","username":"giverson1n","age":28,"salary":"Rp6.500.000"},
    {"id":61,"first_name":"Ruthe","last_name":"Vassman","username":"rvassman1o","age":27,"salary":"Rp6.500.000"},
    {"id":62,"first_name":"Avie","last_name":"Fransson","username":"afransson1p","age":29,"salary":"Rp7.500.000"},
    {"id":63,"first_name":"Theresita","last_name":"Chidler","username":"tchidler1q","age":27,"salary":"Rp6.500.000"},
    {"id":64,"first_name":"Kincaid","last_name":"Ruseworth","username":"kruseworth1r","age":29,"salary":"Rp7.500.000"},
    {"id":65,"first_name":"Gerianna","last_name":"Costerd","username":"gcosterd1s","age":28,"salary":"Rp6.500.000"},
    {"id":66,"first_name":"Malissa","last_name":"Pemberton","username":"mpemberton1t","age":29,"salary":"Rp7.500.000"},
    {"id":67,"first_name":"Greggory","last_name":"Sudy","username":"gsudy1u","age":27,"salary":"Rp6.500.000"},
    {"id":68,"first_name":"Hastings","last_name":"Duthie","username":"hduthie1v","age":20,"salary":"Rp4.500.000"},
    {"id":69,"first_name":"Brinna","last_name":"De Matteis","username":"bdematteis1w","age":23,"salary":"Rp5.500.000"},
    {"id":70,"first_name":"Trina","last_name":"Brockelsby","username":"tbrockelsby1x","age":22,"salary":"Rp4.500.000"},
    {"id":71,"first_name":"Perice","last_name":"Gundrey","username":"pgundrey1y","age":24,"salary":"Rp5.500.000"},
    {"id":72,"first_name":"Kirsteni","last_name":"Sawood","username":"ksawood1z","age":21,"salary":"Rp4.500.000"},
    {"id":73,"first_name":"Devin","last_name":"Keemar","username":"dkeemar20","age":26,"salary":"Rp6.500.000"},
    {"id":74,"first_name":"Rossy","last_name":"Domoni","username":"rdomoni21","age":25,"salary":"Rp5.500.000"},
    {"id":75,"first_name":"Waylan","last_name":"Uttley","username":"wuttley22","age":28,"salary":"Rp6.500.000"},
    {"id":76,"first_name":"Templeton","last_name":"Mossop","username":"tmossop23","age":24,"salary":"Rp5.500.000"},
    {"id":77,"first_name":"Sabina","last_name":"Darlow","username":"sdarlow24","age":29,"salary":"Rp7.500.000"},
    {"id":78,"first_name":"Josy","last_name":"Slides","username":"jslides25","age":21,"salary":"Rp4.500.000"},
    {"id":79,"first_name":"Lorrayne","last_name":"Theodore","username":"ltheodore26","age":21,"salary":"Rp4.500.000"},
    {"id":80,"first_name":"Mycah","last_name":"Jovey","username":"mjovey27","age":30,"salary":"Rp7.500.000"},
    {"id":81,"first_name":"Johann","last_name":"Cargen","username":"jcargen28","age":20,"salary":"Rp4.500.000"},
    {"id":82,"first_name":"Eldridge","last_name":"Thurley","username":"ethurley29","age":26,"salary":"Rp6.500.000"},
    {"id":83,"first_name":"Abramo","last_name":"Randle","username":"arandle2a","age":23,"salary":"Rp5.500.000"},
    {"id":84,"first_name":"Federico","last_name":"Redsall","username":"fredsall2b","age":27,"salary":"Rp6.500.000"},
    {"id":85,"first_name":"Gearard","last_name":"Swapp","username":"gswapp2c","age":26,"salary":"Rp6.500.000"},
    {"id":86,"first_name":"Lola","last_name":"Sharphouse","username":"lsharphouse2d","age":24,"salary":"Rp5.500.000"},
    {"id":87,"first_name":"Haskel","last_name":"Gonthier","username":"hgonthier2e","age":24,"salary":"Rp5.500.000"},
    {"id":88,"first_name":"Marshall","last_name":"Eefting","username":"meefting2f","age":28,"salary":"Rp6.500.000"},
    {"id":89,"first_name":"Jorge","last_name":"Savary","username":"jsavary2g","age":27,"salary":"Rp6.500.000"},
    {"id":90,"first_name":"Lombard","last_name":"Barns","username":"lbarns2h","age":29,"salary":"Rp7.500.000"},
    {"id":91,"first_name":"Leeanne","last_name":"Shires","username":"lshires2i","age":29,"salary":"Rp7.500.000"},
    {"id":92,"first_name":"Carrie","last_name":"Dabels","username":"cdabels2j","age":28,"salary":"Rp6.500.000"},
    {"id":93,"first_name":"Bonny","last_name":"Postgate","username":"bpostgate2k","age":20,"salary":"Rp4.500.000"},
    {"id":94,"first_name":"Isak","last_name":"Spykins","username":"ispykins2l","age":26,"salary":"Rp6.500.000"},
    {"id":95,"first_name":"Morten","last_name":"Christofe","username":"mchristofe2m","age":29,"salary":"Rp7.500.000"},
    {"id":96,"first_name":"Valentin","last_name":"Daveren","username":"vdaveren2n","age":22,"salary":"Rp4.500.000"},
    {"id":97,"first_name":"Vania","last_name":"Golt","username":"vgolt2o","age":29,"salary":"Rp7.500.000"},
    {"id":98,"first_name":"Gisele","last_name":"Bolles","username":"gbolles2p","age":26,"salary":"Rp6.500.000"},
    {"id":99,"first_name":"Gregor","last_name":"Deniscke","username":"gdeniscke2q","age":20,"salary":"Rp4.500.000"},
    {"id":100,"first_name":"Berton","last_name":"Jessen","username":"bjessen2r","age":27,"salary":"Rp6.500.000"}
];

export default users;