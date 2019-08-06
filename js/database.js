// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAIR0EIstYBjdDFRZCmjsIlHnKeakHO1Ec",
  authDomain: "world-dishes.firebaseapp.com",
  databaseURL: "https://world-dishes.firebaseio.com",
  projectId: "world-dishes",
  storageBucket: "",
  messagingSenderId: "1003000753087",
  appId: "1:1003000753087:web:2108f0c607f63387"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database_ref = firebase.database().ref("/countries/");

// courtesy myhungrytum.wordpress.com
var dishes = [
  {
    code: "AF",
    country: "Afghanistan",
    name: "Kabuli Pulao",
    image:
      "https://i2.wp.com/files.hungryforever.com/wp-content/uploads/2018/01/18142051/afgahani-biryani.jpeg?resize=1000%2C605&ssl=1"
  },
  {
    code: "AL",
    country: "Albania",
    name: "Tavë kosi",
    image:
      "https://food-images.files.bbci.co.uk/food/recipes/albanian_baked_lamb_with_92485_16x9.jpg"
  },
  {
    code: "DZ",
    country: "Algeria",
    name: "Couscous",
    image:
      "https://i1.wp.com/www.halalhomecooking.com/wp-content/uploads/2016/03/algerian-couscous-with-lamb-vegetables.jpg?fit=735%2C490"
  },
  {
    code: "",
    country: "Andorra",
    name: "Escudella",
    image: "https://myhungrytum.files.wordpress.com/2010/01/img_5142.jpg"
  },
  {
    code: "AO",
    country: "Angola",
    name: "Muamba de Galinha",
    image: "https://i.pinimg.com/originals/4f/6f/08/4f6f08a4656ca011fad34b81b7694d3f.jpg"
  },
  {
    code: "AG",
    country: "Antigua and Barbuda",
    name: "Fungee and Pepperpot",
    image:
      "https://myhungrytum.files.wordpress.com/2010/01/img_5180.jpg?w=600&h=400"
  },
  {
    code: "AR",
    country: "Argentina",
    name: "Milanesa",
    image:
      "https://myhungrytum.files.wordpress.com/2010/01/img_5199.jpg?w=600&h=900"
  },
  {
    code: "AM",
    country: "Armenia",
    name: "Harissa and Lavash",
    image:
      "https://myhungrytum.files.wordpress.com/2010/01/img_5208.jpg?w=600&h=900"
  },
  {
    code: "AW",
    country: "Aruba",
    name: "Keshi Yena",
    image:
      "http://www.123countries.com/wp-content/uploads/2015/10/National-Dish-Keshi-Yena-Image.jpg"
  },
  {
    code: "AU",
    country: "Australia",
    name: "Meat Pie",
    image:
      "https://aussietaste.com.au/wp-content/uploads/2013/11/Aussie-Meat-Pie-and-Sauce.jpg"
  },
  {
    code: "AT",
    country: "Austria",
    name: "Wiener Schnitzel",
    image:
      "http://cookingtheglobe.com/wp-content/uploads/2016/01/veal-schnitzel-wiener-7.jpg"
  },
  {
    code: "AZ",
    country: "Azerbaijan",
    name: "Plov",
    image:
      "https://natashaskitchen.com/wp-content/uploads/2016/09/Beef-Plov-5-600x900.jpg"
  },
  {
    code: "BS",
    country: "Bahamas",
    name: "Crack Conch with Peas and Rice",
    image:
      "https://caribbean1st.com/wp-content/uploads/2018/11/bahamas-dish2.jpg"
  },
  {
    code: "BH",
    country: "Bahrain",
    name: "Chicken Machboos",
    image:
      "https://www.daringgourmet.com/wp-content/uploads/2013/03/Machboos-3-sm.jpg"
  },
  {
    code: "BD",
    country: "Bangladesh",
    name: "Fish and Rice",
    image:
      "https://i.pinimg.com/736x/d1/7a/6c/d17a6c746c165bfff71a1c17839102e3--bangladeshi-food-bengali-food.jpg"
  },
  {
    code: "BB",
    country: "Barbados",
    name: "Cou Cou and Flying Fish",
    image: "https://miro.medium.com/max/1400/1*tzI_LgZg-Tl-6rIxT2a6qg.jpeg"
  },
  {
    code: "BY",
    country: "Belarus",
    name: "Latke",
    image:
      "https://www.visit-belarus.com/wp-content/uploads/2017/10/draniki-2.jpg"
  },
  {
    code: "BE",
    country: "Belgium",
    name: "Moules-frites",
    image:
      "https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/800x1200/classic-moules-frites-mussels-and-fries_56681.jpg"
  },
  {
    code: "BZ",
    country: "Belize",
    name: "Rice and Beans",
    image:
      "https://www.belizehub.com/wp-content/uploads/2017/02/Belize-Rice-and-Beans.jpg"
  },
  {
    code: "BJ",
    country: "Benin",
    name: "Kuli Kuli",
    image:
      "https://globaltake.com/wp-content/uploads/2018/07/kuli-kuli-recipe.jpg"
  },
  {
    code: "BM",
    country: "Bermuda",
    name: "Fish Chowder",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/00/Bermuda_Fish_Chowder_%283825239570%29.jpg"
  },
  {
    code: "BT",
    country: "Bhutan",
    name: "Ema Datshi",
    image:
      "https://blog.arousingappetites.com/wp-content/uploads/2018/01/IMG_4817.jpg"
  },
  {
    code: "BO",
    country: "Bolivia",
    name: "Picante de Pollo",
    image:
      "https://blog.ingredientmatcher.com/wp-content/uploads/2014/08/Bolivia.jpg"
  },
  {
    code: "BA",
    country: "Bosnia and Herzegovina",
    name: "Ćevapi",
    image: "https://www.croatiaweek.com/wp-content/uploads/2017/08/Cevapi1.jpg"
  },
  {
    code: "BW",
    country: "Botswana",
    name: "Seswaa",
    image:
      "https://media.gadventures.com/media-server/cache/a9/26/a92695ce5157d0e8d13e7a9a041a20fe.jpg"
  },
  {
    code: "BR",
    country: "Brazil",
    name: "Feijoada",
    image:
      "https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/My-Brazilian-Feijoada-_EXPS_THD17_205084_B08_15_6b.jpg"
  },
  {
    code: "BN",
    country: "Brunai",
    name: "Ambuyat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Ambuyat_in_Bandar_Seri_Begawan_Brunei.jpg"
  },
  {
    code: "BG",
    country: "Bulgaria",
    name: "Potato Pie",
    image:
      "https://previews.123rf.com/images/diyanadimitrova/diyanadimitrova1511/diyanadimitrova151101336/47888990-potato-pie-with-vegetables-and-cheese-bulgarian-national-dish.jpg"
  },
  {
    code: "BF",
    country: "Burkina Faso",
    name: "Riz Gras",
    image: "https://myhungrytum.files.wordpress.com/2010/02/img_5713.jpg"
  },
  {
    code: "BI",
    country: "Burundi",
    name: "Mealie-Meal Pap",
    image:
      "https://myhungrytum.files.wordpress.com/2010/03/img_5732.jpg?w=600&h=900"
  },
  {
    code: "KH",
    country: "Cambodia",
    name: "Amok Trey",
    image:
      "https://blog.ingredientmatcher.com/wp-content/uploads/2015/11/Cambodia-Fish-amok.jpg"
  },
  {
    code: "CM",
    country: "Cameroon",
    name: "Ndolé",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Ndol%C3%A9_camerounais.JPG/1200px-Ndol%C3%A9_camerounais.JPG"
  },
  {
    code: "CA",
    country: "Canada",
    name: "Poutine",
    image:
      "https://www.seasonsandsuppers.ca/wp-content/uploads/2014/01/new-poutine-1-500x500.jpg"
  },
  {
    code: "CV",
    country: "Cape Verde",
    name: "Cachupa",
    image:
      "https://cdn.face2faceafrica.com/www/wp-content/uploads/2018/05/Cachupa.jpg"
  },
  {
    code: "CF",
    country: "Central African Republic",
    name: "Ndolé",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Ndol%C3%A9_camerounais.JPG/1280px-Ndol%C3%A9_camerounais.JPG"
  },
  {
    code: "TD",
    country: "Chad",
    name: "Peanut and Squash Stew",
    image:
      "https://images.food52.com/yVQOGS33uFJK6g9uJDNLjU6AMxs=/1200x1200/c5186e1a-7c1a-4a8a-af2b-0b964c89d578--228.JPG"
  },
  {
    code: "CL",
    country: "Chile",
    name: "Pastel de Choclo",
    image:
      "https://www.goya.com/media/4466/pastel-de-choclo-chilean-corn-and-meat-pie.jpg?quality=80"
  },
  {
    code: "CN",
    country: "China",
    name: "Peking Duck",
    image:
      "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/img_7356-peking-duck.jpg?itok=xTQOyhKC&mtime=1549161527"
  },
  {
    code: "CO",
    country: "Colombia",
    name: "Bandeja Paisa",
    image:
      "https://www.mycolombianrecipes.com/wp-content/uploads/2009/08/Bandeja-Paisa.jpg"
  },
  {
    code: "KM",
    country: "Comoros",
    name: "Langouste a la Vanille",
    image:
      "https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2Fea66177f-5b7d-4379-ac1d-e60c68be06c7.2Ejpeg/748x372/quality/80/crop-from/center/langouste-au-beurre-vanille.jpeg"
  },
  {
    code: "CG",
    country: "Congo",
    name: "Poulet a la Moambe",
    image:
      "https://i1.wp.com/nationalfoods.org/wp-content/uploads/2017/07/National-Dish-of-Democratic-Republic-of-Congo-Poulet-a-la-Moambe.jpg?fit=1140%2C500&ssl=1"
  },
  {
    code: "CR",
    country: "Costa Rica",
    name: "Gallo Pinto",
    image:
      "https://images-gmi-pmc.edge-generalmills.com/847e5d12-7eef-4745-9dd8-150660ee52ce.jpg"
  },
  {
    code: "HR",
    country: "Croatia",
    name: "Istrian Yoda",
    image:
      "https://i0.wp.com/nationalfoods.org/wp-content/uploads/2018/11/Croatia-Istrian-Yota.jpg?resize=1140%2C500&ssl=1"
  },
  {
    code: "CU",
    country: "Cuba",
    name: "Ropa Vieja",
    image:
      "https://www.daringgourmet.com/wp-content/uploads/2016/06/Ropa-Vieja-11-edited.jpg"
  },
  {
    code: "CY",
    country: "Cyprus",
    name: "Souvla",
    image: "http://myhungrytum.files.wordpress.com/2010/04/img_6049.jpg"
  },
  {
    code: "CZ",
    country: "Czech Republic",
    name: "Vepřo knedlo zelo",
    image:
      "https://blog.ingredientmatcher.com/wp-content/uploads/2015/09/Czech-republic-VeproKnedloZelo-1024x767.jpg"
  },
  {
    code: "CD",
    country: "Democratic Republic of the Congo",
    name: "Moambe Chicken",
    image: "https://www.marga.org/food/int/congo/mwambe.jpg"
  },
  {
    code: "DK",
    country: "Denmark",
    name: "Frikadeller",
    image:
      "https://www.simplyrecipes.com/wp-content/uploads/2007/02/danish-pork-burgers-horiz-a-1600.jpg"
  },
  {
    code: "DJ",
    country: "Djibuti",
    name: "Skoudehkaris",
    image:
      "https://i1.wp.com/nationalfoods.org/wp-content/uploads/2017/06/National-Dish-of-Djibouti-Skoudehkaris.jpg?fit=1140%2C500&ssl=1"
  },
  {
    code: "DM",
    country: "Dominica",
    name: "Callaloo",
    image: "http://www.news.dm/wp-content/uploads/2013/08/Boiled3.jpg"
  },
  {
    code: "DO",
    country: "Dominican Republic",
    name: "La Bandera",
    image:
      "https://www.whats4eats.com/files/poultry-la-bandera-flickr-jmtlphotography-Jose-Torres-16704720835-4x3.jpg"
  },
  {
    code: "TL",
    country: "East Timor",
    name: "Batar Da'an",
    image:
      "https://www.196flavors.com/wp-content/uploads/2014/05/batar-daan-2.jpg"
  },
  {
    code: "EC",
    country: "Ecuador",
    name: "Ceviche",
    image:
      "https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/EcuadorCasaGangotenaCevichePhotobyAllYouNeedIsEcuador-500x461.png"
  },
  {
    code: "EG",
    country: "Egypt",
    name: "Kushari",
    image:
      "http://foodtasia.com/wp-content/uploads/2018/06/kushary-6-683x1024.jpg"
  },
  {
    code: "SV",
    country: "El Salvador",
    name: "Puposa",
    image:
      "https://i1.wp.com/nationalfoods.org/wp-content/uploads/2017/06/National-Dish-of-El-Salvador-%E2%80%93-Pupusa.jpg?resize=1140%2C500&ssl=1"
  },
  {
    code: "GQ",
    country: "Equatorial Guinea",
    name: "Succotash",
    image:
      "https://img1.southernliving.timeinc.net/sites/default/files/styles/medium_2x/public/image/2018/07/main/2575501_south_5489.jpg?itok=Nut0klrp"
  },
  {
    code: "ER",
    country: "Eritrea",
    name: "Injera",
    image:
      "https://www.196flavors.com/wp-content/uploads/2013/12/zigni-and-injera.jpg"
  },
  {
    code: "EE",
    country: "Estonia",
    name: "Verivorst",
    image:
      "https://www.meatsandsausages.com/public/images/sausage-recipes/verivorst-blood-sausage.jpg"
  },
  {
    code: "ET",
    country: "Ethiopia",
    name: "Doro Wot",
    image:
      "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2015/6/5/0/CCATHSP1_ethiopian-injera-bread-with-doro-wat_s4x3.jpg.rend.hgtvcom.616.462.suffix/1433564349717.jpeg"
  },
  {
    code: "FJ",
    country: "Fiji",
    name: "Kokoda (Fijian Ceviche)",
    image:
      "http://www.thisislandlife.com/wp-content/uploads/2015/01/MichaelaSkovranova_FIJI_likuluku_This_Island_life_0710_wm.jpg"
  },
  {
    code: "FI",
    country: "Finland",
    name: "Karelian Pasties",
    image:
      "https://blog.ingredientmatcher.com/wp-content/uploads/2015/12/Finland-Karelian-pasties.jpg"
  },
  {
    code: "FR",
    country: "France",
    name: "Crêpe",
    image:
      "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/07/12142533/80_crepes_wide.jpg"
  },
  {
    code: "GA",
    country: "Gabon",
    name: "Poisson Salé",
    image:
      "https://blog.arousingappetites.com/wp-content/uploads/2016/05/Gabon-Salted-Cod-Stew-ft-image-final.jpeg"
  },
  {
    code: "GM",
    country: "Gambia",
    name: "Benachin",
    image:
      "https://i0.wp.com/nationalfoods.org/wp-content/uploads/2017/07/National-Dish-of-Gambia-Benachin.jpg?fit=1140%2C500&ssl=1"
  },
  {
    code: "GE",
    country: "Georgia",
    name: "Khachapuri",
    image:
      "https://3ner1e34iilsjdn1qohanunu-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/adjaruli_7.jpg"
  },
  {
    code: "DE",
    country: "Germany",
    name: "Sauerbraten",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/8/13/1/FNM100109TakeItFromHere003_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371591332138.jpeg"
  },
  {
    code: "GH",
    country: "Ghana",
    name: "Fufu",
    image:
      "https://i.pinimg.com/originals/10/40/a0/1040a088e64f05ff850ac2fa0dae61e2.jpg"
  },
  {
    code: "GI",
    country: "Gibraltar",
    name: "Rosto",
    image:
      "http://www.veggiegib.com/wp-content/uploads/2016/11/rosto-seitan-768x768.jpg"
  },
  {
    code: "GR",
    country: "Greece",
    name: "Moussaka",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/9/1/BT0906H_moussaka_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371597393695.jpeg"
  },
  {
    code: "GL",
    country: "Greenland",
    name: "Suaasat (Seal soup)",
    image:
      "https://2kalaallitnunaatigo.files.wordpress.com/2015/07/dscn1386.jpg"
  },
  {
    code: "GD",
    country: "Grenada",
    name: "Oildown",
    image: "https://live.staticflickr.com/4040/4339485172_9d3480f1d0_b.jpg"
  },
  {
    code: "GT",
    country: "Guatemala",
    name: "Pepian",
    image: "https://foodologie.files.wordpress.com/2011/09/pepian2.jpg"
  },
  {
    code: "GN",
    country: "Guinea",
    name: "Hot Chicken Paella",
    image:
      "https://riverbankandbadger.files.wordpress.com/2012/08/eq-guinea.jpg"
  },
  {
    code: "GW",
    country: "Guinea-Bissau",
    name: "Jollof Rice",
    image:
      "https://i.pinimg.com/originals/85/84/1f/85841f70480411b53540aa229920f518.jpg"
  },
  {
    code: "GY",
    country: "Guyana",
    name: "Pepperpot",
    image:
      "http://caribbeanpot.com/wp-content/uploads/2014/12/guyanese-pepperpot-1.jpg"
  },
  {
    code: "HT",
    country: "Haiti",
    name: "Fried Pork with Rice and Beans",
    image:
      "https://goodmorninggloucester.files.wordpress.com/2011/02/dsc02881_thumb.jpg?w=644&h=472"
  },
  {
    code: "HN",
    country: "Honduras",
    name: "Plato Tipico de Honduras",
    image:
      "https://sites.google.com/site/comidastipicasdehondurasst/_/rsrc/1457806864334/3-platos-tipicos-de-honduras/carne%20asada2.jpg"
  },
  {
    code: "HK",
    country: "Hong Kong",
    name: "Dim Sums",
    image: "https://s3.scoopwhoop.com/anj/masthead/777505556.jpg"
  },
  {
    code: "UH",
    country: "Hungary",
    name: "Goulash",
    image:
      "https://hips.hearstapps.com/del.h-cdn.co/assets/17/37/1600x2399/gallery-1505333414-goulash-delish.jpg?resize=480:*"
  },
  {
    code: "IS",
    country: "Iceland",
    name: "Hákarl",
    image:
      "https://4.bp.blogspot.com/-sDcXM6B4_HM/WCn0QX-5W4I/AAAAAAAArAA/zTymNj5IFgQalmfm_3kVx6_vkwunhmpRwCLcB/s1600/DSC_0113.aabb.text%2B%2528724%2Bx%2B461%2529.jpg"
  },
  {
    code: "IN",
    country: "India",
    name: "Biryani",
    image:
      "https://www.thedeliciouscrescent.com/wp-content/uploads/2016/06/Easy-Hyderabadi-Chicken-Biryani-4.jpg"
  },
  {
    code: "ID",
    country: "Indonesia",
    name: "Nasi Goreng",
    image:
      "https://www.recipetineats.com/wp-content/uploads/2016/03/Nasi-Goreng_1-1.jpg"
  },
  {
    code: "IR",
    country: "Iran",
    name: "Chelo Kebab",
    image:
      "https://www.allfoodsrecipes.com/wp-content/uploads/2017/11/Chicken-Chelo-Kebab100.jpg"
  },
  {
    code: "IQ",
    country: "Iraq",
    name: "Quzi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Iraqi_Qoozi_.jpg"
  },
  {
    code: "IE",
    country: "Ireland",
    name: "Irish Stew",
    image:
      "https://www.simplyrecipes.com/wp-content/uploads/2015/03/irish-beef-stew-horiz-a2-1800.jpg"
  },
  {
    code: "IL",
    country: "Israel",
    name: "Falafel",
    image:
      "https://www.recipetineats.com/wp-content/uploads/2018/09/Falafel_4.jpg"
  },
  {
    code: "IT",
    country: "Italy",
    name: "Lasagna",
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-4-e1503516670834.jpg"
  },
  {
    code: "CI",
    country: "Ivory Coast",
    name: "Aloco",
    image:
      "https://img-global.cpcdn.com/001_recipes/5836455423770624/1200x630cq70/photo.jpg"
  },
  {
    code: "JM",
    country: "Jamaica",
    name: "Ackee and Saltfish",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0f/00/45/d5/jamaica-s-national-dish.jpg"
  },
  {
    code: "JP",
    country: "Japan",
    name: "Sushi",
    image:
      "https://peasandcrayons.com/wp-content/uploads/2012/10/homemade-sushi-tutorial-recipe-peas-and-crayons-1250.jpg"
  },
  {
    code: "JO",
    country: "Jordan",
    name: "Mansaf",
    image:
      "https://www.burmaspice.com/wp-content/uploads/2018/09/Burma-Spice-Middle-Eastern-Levant-Jordanian-Recipe-Mansaf-web-res.jpg"
  },
  {
    code: "KZ",
    country: "Kazakhstan",
    name: "Beshbarmak",
    image:
      "https://i1.wp.com/foodperestroika.com/wp-content/uploads/2015/11/Beshbarmak4-small.jpg"
  },
  {
    code: "KE",
    country: "Kenya",
    name: "Ugali",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg"
  },
  {
    code: "KI",
    country: "Kiribati",
    name: "Te bua toro ni baukin",
    image:
      "https://www.196flavors.com/wp-content/uploads/2012/12/Te-Bua-Toro-ni-Baukin-FP.jpg"
  },
  {
    code: "XK",
    country: "Kosovo",
    name: "Flija",
    image:
      "https://steemitimages.com/DQmTRoMd7XLG57nhBzSThpDVovjTbH7uV4zSWazmUeMAP9R/Flija.png"
  },
  {
    code: "KW",
    country: "Kuwait",
    name: "Machboos",
    image:
      "http://cultureatz.com/wp-content/uploads/2014/08/Bahraini-Chicken-Machboos.jpg"
  },
  {
    code: "KG",
    country: "Kyrgyzstan",
    name: "Besh Barmak",
    image:
      "https://blog.ingredientmatcher.com/wp-content/uploads/2015/08/Kyrgyzstan-Besh-Barmak.jpg"
  },
  {
    code: "LA",
    country: "Laos",
    name: "Larb",
    image:
      "https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Chicken_Larb_jpg-LEDE.jpg?itok=fKiXzjvP"
  },
  {
    code: "LV",
    country: "Latvia",
    name: "Grey Peas, Bacon, and Onion",
    image:
      "http://www.vegweb.com/sites/default/files/styles/recipe_large/public/recipe/images/Photo_by_keda_142.jpg?itok=XYc7pxOU"
  },
  {
    code: "LB",
    country: "Lebanon",
    name: "Kibbeh",
    image:
      "https://www.thespruceeats.com/thmb/iG-yv4J-8E-xITbpomaojJSWxmY=/4288x2848/filters:fill(auto,1)/easy-beginner-kibbeh-recipe-2355367-Hero-5b7b259ec9e77c00505a8eaa.jpg"
  },
  {
    code: "LS",
    country: "Lesotho",
    name: "Papa",
    image:
      "http://4.bp.blogspot.com/-0HWk-p2KXAY/TdKMDtsEqZI/AAAAAAAAAII/iZwdfaSi3T0/s1600/004.JPG"
  },
  {
    code: "LR",
    country: "Liberia",
    name: "Palm Butter",
    image: "https://libspot.com/wp-content/uploads/2015/03/palm_butter2-1.png"
  },
  {
    code: "LY",
    country: "Libya",
    name: "Cuscus Bil-Bosla",
    image:
      "http://3.bp.blogspot.com/-3E4LZGIEGlY/TsiK57jqGGI/AAAAAAAAATI/3BzPz-rDWoI/s1600/IMG_0446.JPG"
  },
  {
    code: "CH",
    country: "Liechtenstein",
    name: "Käsknöpfle",
    image:
      "https://i0.wp.com/ashleyparamore.com/wp-content/uploads/2019/04/IMG_7903.jpg?fit=750%2C500&ssl=1"
  },
  {
    code: "LT",
    country: "Lithuania",
    name: "Cepelinai",
    image: "http://vilnews.com/wp-content/uploads/2011/01/cepelinai.jpg"
  },
  {
    code: "LU",
    country: "Luxembourg",
    name: "Judd mat Gaardebounen",
    image:
      "https://www.epicurus.com/food/recipes/wp-content/uploads/2018/12/JUDD-MAT-GAARDEBOUNEN.jpg"
  },
  {
    code: "MO",
    country: "Macau",
    name: "Minchi",
    image:
      "https://cdn1.i-scmp.com/sites/default/files/styles/1200x800/public/2016/12/15/p1060286_re.jpg?itok=mztbegcM"
  },
  {
    code: "MK",
    country: "Macedonia",
    name: "Stuffed Cabbage",
    image: "https://i.ytimg.com/vi/_WmGb2vKRdg/maxresdefault.jpg"
  },
  {
    code: "MG",
    country: "Madagascar",
    name: "Romazava",
    image:
      "https://www.internationalcuisine.com/wp-content/uploads/2016/07/Malagasy-national-dish-600x899.jpg"
  },
  {
    code: "MW",
    country: "Malawi",
    name: "Nsima",
    image: "https://nutritionisms.files.wordpress.com/2012/01/picture-231.jpg"
  },
  {
    code: "MY",
    country: "Malaysia",
    name: "Nasi Lemak",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Nasi_Lemak%2C_Mamak%2C_Sydney.jpg"
  },
  {
    code: "MV",
    country: "Maldives",
    name: "Mas huni",
    image:
      "https://www.themaldivesexpert.com/wp-content/uploads/2018/04/Mas-Huni-1024x576.jpg"
  },
  {
    code: "ML",
    country: "Mali",
    name: "Couscous de Timbuktu",
    image:
      "https://qph.fs.quoracdn.net/main-qimg-d4cf2552c12b645e116ed70686ac6eb5.webp"
  },
  {
    code: "MT",
    country: "Malta",
    name: "Stuffat tal-Fenek",
    image:
      "https://blog.ingredientmatcher.com/wp-content/uploads/2015/03/Malta-stuffat-tal-fenek.jpg"
  },
  {
    code: "MH",
    country: "Marshall Islands",
    name: "Macadamia Nut Pie",
    image:
      "https://www.crazyforcrust.com/wp-content/uploads/2012/11/Macadamia-Nut-Pie-4-words-500x455.png"
  },
  {
    code: "MR",
    country: "Mauritania",
    name: "Thieboudienne",
    image:
      "https://i.pinimg.com/originals/27/fb/3b/27fb3b866c38d55714812cc4684d51b6.jpg"
  },
  {
    code: "MU",
    country: "Mauritius",
    name: "Dholl Puri",
    image:
      "https://www.internationalcuisine.com/wp-content/uploads/2016/10/Mauritus-dholl-puri_-684x1024.jpg"
  },
  {
    code: "MX",
    country: "Mexico",
    name: "Tacos",
    image:
      "https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9108-1.jpg"
  },
  {
    code: "FM",
    country: "Micronesia",
    name: "Chicken Kelaguen",
    image:
      "https://www.196flavors.com/wp-content/uploads/2013/10/MICRONESIE-KELAGUEN.jpg"
  },

  {
    code: "MD",
    country: "Moldova",
    name: "Mămăligă",
    image: "https://i.ytimg.com/vi/UUxN8FduKcQ/maxresdefault.jpg"
  },

  {
    code: "MC",
    country: "Monaco",
    name: "Barbagiuan",
    image:
      "https://i.pinimg.com/originals/94/82/b7/9482b7f23818fd343d790655ec148337.jpg"
  },
  {
    code: "MN",
    country: "Mongolia",
    name: "Buuz",
    image:
      "https://blog.ingredientmatcher.com/wp-content/uploads/2014/07/Mongolia-Buuz.jpg"
  },
  {
    code: "ME",
    country: "Montenegro",
    name: "Ispod Saca",
    image:
      "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/09/19312342960_19ffb00eea_k.jpg"
  },
  {
    code: "MS",
    country: "Montserrat",
    name: "Goat Water",
    image:
      "https://i.pinimg.com/originals/97/18/4d/97184d93a3a06191f8419248da3c70d8.jpg"
  },
  {
    code: "MA",
    country: "Morocco",
    name: "Tagine",
    image:
      "https://i0.wp.com/www.landsandflavors.com/wp-content/uploads/2016/04/vegetable-tagine-5.jpg?resize=800%2C1200"
  },
  {
    code: "MZ",
    country: "Mozambique",
    name: "Galinha Asada",
    image:
      "https://www.tripsavvy.com/thmb/yJGrM3pRUE_QsK9VVNxBGYnBoFI=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-667747889-5970b797c41244001108e59f.jpg"
  },
  {
    code: "MM",
    country: "Myanmar",
    name: "Lahpet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Laphet_thoke.JPG/1280px-Laphet_thoke.JPG"
  },
  {
    code: "NA",
    country: "Namibia",
    name: "Potjiekos",
    image:
      "http://www.haveanotherbite.com/wp-content/uploads/2015/03/Cooking-Potjie-kos.jpg"
  },
  {
    code: "NR",
    country: "Nauru",
    name: "Coconut Fish",
    image:
      "https://www.internationalcuisine.com/wp-content/uploads/2017/06/Nauru-coconut-crusted-fish-684x1024.jpg"
  },
  {
    code: "NP",
    country: "Nepal",
    name: "Dal Bhaath",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Assamese_thali.JPG"
  },
  {
    code: "NL",
    country: "Netherlands",
    name: "Stamppot",
    image:
      "https://i0.wp.com/nationalfoods.org/wp-content/uploads/2018/12/National-Dish-of-Netherlands-Stamppot.jpg?resize=1140%2C500&ssl=1"
  },
  {
    code: "NZ",
    country: "New Zealand",
    name: "Pavlova",
    image:
      "https://www.irishtimes.com/polopoly_fs/1.3134412.1498494389!/image/image.jpg_gen/derivatives/landscape_620/image.jpg"
  },
  {
    code: "NI",
    country: "Nicaragua",
    name: "Gallo Pinto",
    image:
      "https://www.internationalcuisine.com/wp-content/uploads/2017/08/Nicaraguan-gallo-pinto-684x1024.jpg"
  },
  {
    code: "NE",
    country: "Niger",
    name: "Jollof Rice",
    image: "https://allnigerianfoods.com/wp-content/uploads/jollof-rice.jpg"
  },
  {
    code: "NG",
    country: "Nigeria",
    name: "Jollof Rice",
    image: "https://allnigerianfoods.com/wp-content/uploads/jollof-rice.jpg"
  },
  {
    code: "KP",
    country: "North Korea",
    name: "Kimchi",
    image:
      "https://www.platingsandpairings.com/wp-content/uploads/2014/12/Kimchi-5.jpg"
  },
  {
    code: "NO",
    country: "Norway",
    name: "Farikal",
    image:
      "https://i2.wp.com/nationalfoods.org/wp-content/uploads/2018/12/National-Dish-of-Norway-Farikal.jpg?fit=1140%2C500&ssl=1"
  },
  {
    code: "OM",
    country: "Oman",
    name: "Kabsa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Machboos.JPG/1280px-Machboos.JPG"
  },
  {
    code: "PK",
    country: "Pakistan",
    name: "Nihari",
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/shaheen_ali/Nihari_Khaas.jpg"
  },
  {
    code: "PW",
    country: "Palau",
    name: "Grilled Snapper",
    image:
      "https://www.internationalcuisine.com/wp-content/uploads/2018/07/Grilled-snapper-Palau-Style-1_preview.jpeg"
  },
  {
    code: "PS",
    country: "Palestine",
    name: "Musakhan",
    image:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i3WwB9SQIga0/v2/1000x-1.jpg"
  },
  {
    code: "PA",
    country: "Panama",
    name: "Sancocho",
    image:
      "https://www.196flavors.com/wp-content/uploads/2018/10/sancocho-3.jpg"
  },
  {
    code: "PG",
    country: "Papua New Guinea",
    name: "Mumu",
    image:
      "https://www.internationalcuisine.com/wp-content/uploads/2018/08/mumu-680x1020.jpg"
  },
  {
    code: "PY",
    country: "Paraguay",
    name: "Chipa guazú",
    image:
      "https://www.196flavors.com/wp-content/uploads/2018/05/chipa-guazu-1.jpg"
  },
  {
    code: "PE",
    country: "Peru",
    name: "Ceviche",
    image:
      "https://www.mylatinatable.com/wp-content/uploads/2017/05/Shrimp-Ceviche-Mexican-Style-Ceviche-Recipe-1.jpg"
  },
  {
    code: "PH",
    country: "Philippines",
    name: "Chicken Adobo",
    image: "http://images.media-allrecipes.com/userphotos/960x960/5147351.jpg"
  },
  {
    code: "PL",
    country: "Poland",
    name: "Bigos",
    image: "https://paleoleap.com/pictures/bigos.jpg"
  },
  {
    code: "PT",
    country: "Portugal",
    name: "Bacalhau",
    image:
      "https://www.teleculinaria.pt/wp-content/uploads/2017/11/rapidinha-de-bacalhau-e1515414696768.jpg"
  },
  {
    code: "PR",
    country: "Puerto Rico",
    name: "Arroz con Pollo",
    image:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2018/04/puertoricanchicken.jpg"
  },
  {
    code: "QA",
    country: "Qatar",
    name: "Machboos",
    image:
      "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/11/shutterstock_166363784.jpg"
  },
  {
    code: "RO",
    country: "Romania",
    name: "Sarmale",
    image:
      "https://blog.ingredientmatcher.com/wp-content/uploads/2015/11/Romania-Sarmale.jpg"
  },
  {
    code: "RU",
    country: "Russia",
    name: "Pelmeni",
    image:
      "https://blog.arousingappetites.com/wp-content/uploads/2018/06/IMG_0679.jpg"
  },
  {
    code: "RW",
    country: "Rwanda",
    name: "Agatogo",
    image:
      "http://globaltableadventure.com/wp-content/uploads/2012/11/rwanda.food_.recipe.img_2893.jpg"
  },
  {
    code: "KN",
    country: "Saint Kitts and Nevis",
    name: "Stewed saltfish",
    image:
      "https://blog.ingredientmatcher.com/wp-content/uploads/2015/09/Saint-kitts-and-nevis-1.jpg"
  },
  {
    code: "LC",
    country: "Saint Lucia",
    name: "Green Fig & Saltfish",
    image:
      "https://i1.wp.com/thecaribbeancurrent.com/wp-content/uploads/2013/02/St.-Lucia-National-Dish.jpg?ssl=1"
  },
  {
    code: "VC",
    country: "Saint Vincent and the Grenadines",
    name: "Roasted Breadfruit & Fried Jackfish",
    image:
      "https://www.xtremefoodies.com/food-images/11457/Flow-Wine-Bar-and-Kitchen/Coconut-Curry-Chicken"
  },
  {
    code: "WS",
    country: "Samoa",
    name: "Palusami",
    image: "https://images.media-allrecipes.com/userphotos/560x315/2607423.jpg"
  },
  {
    code: "SM",
    country: "San Marino",
    name: "Pasta and Chickpeas",
    image:
      "https://smittenkitchendotcom.files.wordpress.com/2017/10/quick-pasta-e-ceci-pasta-with-chickpeas.jpg?w=1200"
  },
  {
    code: "ST",
    country: "Sao Tome and Principe",
    name: "Chicken with Coffee Sauce",
    image:
      "https://afrotourism.com/wp-content/uploads/2015/10/Sao-Tome-Chicken-in-coffee-2.jpg"
  },
  {
    code: "SA",
    country: "Saudi Arabia",
    name: "Kabsa",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Kabsa.jpg"
  },
  {
    code: "SN",
    country: "Senegal",
    name: "Thieboudienne",
    image:
      "https://www.196flavors.com/wp-content/uploads/2016/02/Thieboudienne-2-FP1.jpg"
  },
  {
    code: "RS",
    country: "Serbia",
    name: "Sarma",
    image:
      "https://www.serbiaincoming.com/wp-content/uploads/2013/01/Sarma-in-plate.jpg"
  },
  {
    code: "SC",
    country: "Seychelles",
    name: "Coconut Curry",
    image:
      "https://www.findingtheuniverse.com/wp-content/uploads/2017/05/Traditional-Seychelles-Food_by_Laurence-Norah-21-1000x667.jpg"
  },
  {
    code: "SL",
    country: "Sierra Leone",
    name: "Groundnut",
    image: "http://glencairn.weebly.com/uploads/8/4/5/0/8450603/241317_orig.jpg"
  },
  {
    code: "SG",
    country: "Singapore",
    name: "Hainanese Chicken Rice",
    image:
      "https://steamykitchen.com/wp-content/uploads/2009/08/hainanese-chicken-lg-691.jpg"
  },
  {
    code: "SK",
    country: "Slovakia",
    name: "Bryndzové halušky",
    image:
      "https://i0.wp.com/www.almostbananas.net/wp-content/uploads/2017/02/halusky-2-of-4.jpg?resize=640%2C427"
  },
  {
    code: "SI",
    country: "Slovenia",
    name: "Veal and dumplings",
    image:
      "https://cdn.hometogo.net/assets/wl-blog/2e010f43a3ddcbfd648e4ac3298ccc7f_3963290911_dd91f2c24d_o-650x432.jpg"
  },
  {
    code: "SB",
    country: "Solomon Islands",
    name: "Poi",
    image:
      "https://i0.wp.com/nationalfoods.org/wp-content/uploads/2018/02/National-Dish-of-Solomon-Islands-Poi.jpg?fit=1140%2C500&ssl=1"
  },
  {
    code: "SO",
    country: "Somalia",
    name: "Injera",
    image:
      "http://www.123countries.com/wp-content/uploads/2015/12/Injera-National-Dish-Of-Somalia.jpg"
  },  
  {
    code: "ZA",
    country: "South Africa",
    name: "Bobotie",
    image:
      "https://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--315527_11.jpg"
  },
  {
    code: "KR",
    country: "South Korea",
    name: "Bibimbap",
    image:
      "https://i.pinimg.com/originals/e4/36/56/e4365682f847efe418c11db6a2c13804.jpg"
  },
  {
    code: "SS",
    country: "South Sudan",
    name: "Shaiyah",
    image:
      "https://i0.wp.com/tasteofsouthsudan.com/wp-content/uploads/2017/02/Roasted-lamb-Shaiya.jpg?resize=720%2C540&ssl=1"
  },
  {
    code: "ES",
    country: "Spain",
    name: "Paella",
    image:
      "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_900x675/public/1551740522/0867_180612_DuPree_MyRecipe_Traditional%20Spanish%20Paella_6996%20copy.jpg?itok=sHKREFL0"
  },
  {
    code: "LK",
    country: "Sri Lanka",
    name: "Rice and Curry",
    image:
      "https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg?crop=1.00xw:0.750xh;0,0.159xh&resize=1200:*"
  },
  {
    code: "SD",
    country: "Sudan",
    name: "Ful Medames",
    image:
      "http://www.123countries.com/wp-content/uploads/2015/12/Ful-Medames-National-Dish-Of-Sundan.jpg"
  },
  {
    code: "SR",
    country: "Suriname",
    name: "Chicken and Root Casserole",
    image:
      "https://blog.arousingappetites.com/wp-content/uploads/2017/02/Suriname-Pom-26.jpg"
  },
  {
    code: "SZ",
    country: "Swaziland",
    name: "Karoo Roast Ostrich",
    image:
      "https://i2.wp.com/nationalfoods.org/wp-content/uploads/2018/02/National-Dish-of-Swaziland-Karoo-Roast-Ostrich-Steak-National-Dish-of-Swaziland-Swaziland-National-Dish-Swaziland-National-Dish-recipe-what-is-the-National-Dish-of-Swaziland.jpg?fit=1140%2C500&ssl=1"
  },
  {
    code: "SE",
    country: "Sweden",
    name: "Swedish Meatballs",
    image:
      "https://www.simplyrecipes.com/wp-content/uploads/2014/12/swedish-meatballs-horiz-a-1800.jpg"
  },
  {
    code: "CH",
    country: "Switzerland",
    name: "Rösti",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Roesti.jpg"
  },
  {
    code: "SY",
    country: "Syria",
    name: "Kibbeh",
    image:
      "https://www.myjewishlearning.com/wp-content/uploads/2005/02/kubbeh.jpg"
  },
  {
    code: "TW",
    country: "Taiwan",
    name: "Beef Noodle Soup",
    image:
      "https://thewoksoflife.com/wp-content/uploads/2018/03/taiwanese-beef-noodle-soup-instant-pot-9.jpg"
  },
  {
    code: "TJ",
    country: "Tajikistan",
    name: "Qurutob",
    image:
      "https://i0.wp.com/foodperestroika.com/wp-content/uploads/2013/10/Qurutob10-featured.jpg?fit=1500%2C1064&ssl=1"
  },
  {
    code: "TZ",
    country: "Tanzania",
    name: "Ugali",
    image:
      "http://www.123countries.com/wp-content/uploads/2015/12/Ugali-National-Dish-Photo.jpg"
  },
  {
    code: "TH",
    country: "Thailand",
    name: "Pad Thai",
    image:
      "https://www.feastingathome.com/wp-content/uploads/2016/04/easy-authentic-pad-thai-recipe-100.jpg"
  },
  {
    code: "TG",
    country: "Togo",
    name: "Grilled Chicken",
    image:
      "http://globaltableadventure.com/wp-content/uploads/2013/06/togo.food_.recipe.img_9978.jpg"
  },
  {
    code: "TO",
    country: "Tonga",
    name: "Lu Sipi",
    image:
      "https://i.pinimg.com/originals/af/d3/a2/afd3a29865a7d57fba232a22cda1d495.jpg"
  },
  {
    code: "TT",
    country: "Trinidad and Tobago",
    name: "Pelau",
    image: "http://www.guardian.co.tt/image-3.1436830.c3c7e32b7e?size=512"
  },
  {
    code: "TN",
    country: "Tunisia",
    name: "Couscous",
    image:
      "http://foodnessgracious.com/wp-content/uploads/2013/07/couscous-023.jpg"
  },
  {
    code: "TR",
    country: "Turkey",
    name: "Döner Kebab",
    image:
      "https://cdn.vox-cdn.com/thumbor/5bPMTbIfpBouShZkzktKJqmElbc=/0x0:593x591/1200x800/filters:focal(264x330:358x424)/cdn.vox-cdn.com/uploads/chorus_image/image/63779795/gdk_uk.0.png"
  },
  {
    code: "TM",
    country: "Turkmenistan",
    name: "Ichlekli",
    image:
      "https://blog.ingredientmatcher.com/wp-content/uploads/2015/10/Turkmenistan-Ichlekli.jpg"
  },
  {
    code: "TV",
    country: "Tuvalu",
    name: "Coconut Curry",
    image:
      "https://www.notesfromamessykitchen.com/wp-content/uploads/2017/08/IMG_20170814_195601-1024x768.jpg"
  },
  {
    code: "UG",
    country: "Uganda",
    name: "Matoke",
    image: "https://www.africa.com/wp-content/uploads/2018/11/MATOKE.jpg"
  },
  {
    code: "UA",
    country: "Ukraine",
    name: "Borscht",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/Borscht_served.jpg"
  },
  {
    code: "AE",
    country: "United Arab Emirates",
    name: "Shawarma",
    image:
      "https://www.acedarspoon.com/wp-content/uploads/2019/06/Beef-Shawarma-Image-8-768x1024.jpg"
  },
  {
    code: "GB",
    country: "United Kingdom",
    name: "Fish & Chips",
    image:
      "https://previews.123rf.com/images/denismart/denismart1811/denismart181100073/111462473-traditional-british-fish-and-chips-with-tartar-sauce-on-chopping-board-and-green-peas-on-white-stone.jpg"
  },
  {
    code: "US",
    country: "United States",
    name: "Hamburger",
    image:
      "https://makeyourmeals.com/wp-content/uploads/2019/03/air-fryer-burger.jpg"
  },
  {
    code: "VI",
    country: "United States Virgin Islands",
    name: "Saveur",
    image:
      "https://www.saveur.com/sites/saveur.com/files/pot-fish-fungi_2000x1500_amanda_arnold_0.jpg"
  },
  {
    code: "UY",
    country: "Urguay",
    name: "Chivito Sandwich",
    image:
      "https://www.thespruceeats.com/thmb/-Wj27avXAjaJZu9FJ_uy1Zu_Ml4=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chivito_al_pan_uruguayo-589305e15f9b5874ee7b9292.jpg"
  },
  {
    code: "UZ",
    country: "Uzbekistan",
    name: "Plov",
    image:
      "https://i.guim.co.uk/img/media/3126b4ace7203b7797887809eb9b04b7f3d9c103/0_20_640_384/master/640.jpg?width=700&quality=85&auto=format&fit=max&s=745a11891b18e86b8720b093ebf6bdcb"
  },
  {
    code: "VU",
    country: "Vanuatu",
    name: "Lap Lap",
    image:
      "https://i2.wp.com/nationalfoods.org/wp-content/uploads/2018/03/National-Dish-of-Vanuatu-Lap-Lap.jpg?fit=1140%2C500&ssl=1"
  },
  {
    code: "VA",
    country: "Vatican City",
    name: "Various",
    image:
      "http://3.bp.blogspot.com/-A8oS94m9Wbc/T6mSCtR5r3I/AAAAAAAAFx8/jlgNOOT5d_A/s1600/Vatican+city+058.JPG"
  },
  {
    code: "VE",
    country: "Venezuela",
    name: "Pabellón criollo",
    image:
      "https://c8.alamy.com/comp/PGC6CX/homemade-venezuelan-food-traditional-venezuelan-dish-pabellon-criollo-white-rice-black-beansfried-plantains-and-shredded-beef-PGC6CX.jpg"
  },
  {
    code: "VN",
    country: "Vietnam",
    name: "Pho",
    image:
      "https://www.fodmapeveryday.com/wp-content/uploads/2017/06/Pho-closeup-copy-855x570.jpg"
  },
  {
    code: "YE",
    country: "Yemen",
    name: "Saltah",
    image:
      "https://i.pinimg.com/originals/de/9a/7c/de9a7ca12f2ebbbf8fc982f98d273793.png"
  },
  {
    code: "ZM",
    country: "Zambia",
    name: "Ifisashi",
    image:
      "https://www.196flavors.com/wp-content/uploads/2014/02/ZAMBI-IFISASHI-NSHIMA-3_sm.jpg"
  },
  {
    code: "ZW",
    country: "Zimbabwe",
    name: "Dovi",
    image:
      "https://blog.arousingappetites.com/wp-content/uploads/2015/05/Zimbabwe-Dovi-ft-image-w-graphic.jpg"
  },
  {
    code: "TF",
    country: "French Southern Territories",
    name: "Blue mussels",
    image: "https://blog.tepapa.govt.nz/wp-content/uploads/2016/01/12-Mussels-3-ways-768x634.jpg"
  },
  {
    code: "FK",
    country: "Falkland Islands",
    name: "Fried Fish",
    image: "http://www.best-country.org//img/article/715/3715/3453thai_orig.jpg"
  },
  {
    code: "NC",
    country: "New Caledonia",
    name: "Isle of Pines",
    image: "https://media2.trover.com/T/55f543727eb4f40eab010277/fixedw_large_4x.jpg"
  },
  {
    code: "EH",
    country: "Western Sahara",
    name: "Couscous",
    image: "https://bigbellyburst.files.wordpress.com/2011/04/img_3276.jpg"
  }
];


function getNationalDish(code) {
  var dish = undefined;
  for (index in dishes) {
    dish = dishes[index];
    if (dish.code.toLowerCase() === code.toLowerCase()) {
      return dish;
    } 
  }  
}
