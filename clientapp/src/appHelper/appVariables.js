export const App_Server_Url = "http://localhost:4000";
export const App_Server_URL_GraphQL = "http://localhost:4000/graphql";
export const App_Server_Url_UploadFiles = "http://localhost:4000/upload";
export const Google_Map_Api = "https://maps.googleapis.com/maps/api/js";
export const Google_Map_Api_Key = "AIzaSyDbc2s6Jplos-l5jRw0gTrgoIXiIEbRZ2k";

export const Public_App_NavList = [
  {
    id: 1342146478,
    nav: "home",
    path: "/",
  },
  { id: 2344146478, nav: "companies", path: "/" },
  { id: 6544146478, nav: "about", path: "/" },
  { id: 7744146478, nav: "review", path: "/" },
  { id: 1144146478, nav: "contact", path: "/" },
];

export const Admin_App_NavList = [
  {
    id: 1342146478,
    nav: "home",
    path: "/admin",
  },
  {
    id: 2344146478,
    nav: "companies",
    navList: [
      { id: 1144146478, nav: "companies", path: "/admin" },
      {
        id: 8744146478,
        nav: "manage companies",
        path: "/admin/mngcompanies",
      },
    ],
  },
  { id: 4044146478, nav: "about", path: "/admin" },
  { id: 2544146478, nav: "review", path: "/admin" },
  { id: 2144146478, nav: "contact", path: "/admin" },
];

export const App_Actions_IDS = {
  Edit: 7244446400,
  Delete: 8324222478,
  Add: 4324212478,
};

export const initialAppState = {
  clientInfo: {
    strLanguage: "eng", // arb,
    strDir: "ltr", //rtl
  },
  systemInfo: {
    companies: [],
  },
};

export const Country_Phone_Code = {
  AF: {
    code: "+93",
    label: "Afghanistan (+93)",
    flag: "https://flagpedia.net/data/flags/h80/af.webp",
  },
  AL: {
    code: "+355",
    label: "Albania (+355)",
    flag: "https://flagpedia.net/data/flags/h80/al.webp",
  },
  DZ: {
    code: "+213",
    label: "Algeria (+213)",
    flag: "https://flagpedia.net/data/flags/h80/dz.webp",
  },
  AS: {
    code: "+1684",
    label: "American Samoa (+1684)",
    flag: "https://flagpedia.net/data/flags/h80/as.webp",
  },
  AD: {
    code: "+376",
    label: "Andorra (+376)",
    flag: "https://flagpedia.net/data/flags/h80/ad.webp",
  },
  AO: {
    code: "+244",
    label: "Angola (+244)",
    flag: "https://flagpedia.net/data/flags/h80/ao.webp",
  },
  AI: {
    code: "+1264",
    label: "Anguilla (+1264)",
    flag: "https://flagpedia.net/data/flags/h80/ai.webp",
  },
  AQ: {
    code: "+672",
    label: "Antartica (+672)",
    flag: "https://flagpedia.net/data/flags/h80/aq.webp",
  },
  AG: {
    code: "+1268",
    label: "Antigua & Barbuda (+1268)",
    flag: "https://flagpedia.net/data/flags/h80/ag.webp",
  },
  AR: {
    code: "+54",
    label: "Argentina (+54)",
    flag: "https://flagpedia.net/data/flags/h80/ar.webp",
  },
  AM: {
    code: "+374",
    label: "Armenia (+374)",
    flag: "https://flagpedia.net/data/flags/h80/am.webp",
  },
  AW: {
    code: "+297",
    label: "Aruba (+297)",
    flag: "https://flagpedia.net/data/flags/h80/aw.webp",
  },
  AU: {
    code: "+61",
    label: "Australia (+61)",
    flag: "https://flagpedia.net/data/flags/h80/au.webp",
  },
  AT: {
    code: "+43",
    label: "Austria (+43)",
    flag: "https://flagpedia.net/data/flags/h80/at.webp",
  },
  AZ: {
    code: "+994",
    label: "Azerbaijan (+994)",
    flag: "https://flagpedia.net/data/flags/h80/az.webp",
  },
  BS: {
    code: "+1242",
    label: "Bahamas (+1242)",
    flag: "https://flagpedia.net/data/flags/h80/bs.webp",
  },
  BH: {
    code: "+973",
    label: "Bahrain (+973)",
    flag: "https://flagpedia.net/data/flags/h80/bh.webp",
  },
  BD: {
    code: "+880",
    label: "Bangladesh (+880)",
    flag: "https://flagpedia.net/data/flags/h80/bd.webp",
  },
  BB: {
    code: "+1246",
    label: "Barbados (+1246)",
    flag: "https://flagpedia.net/data/flags/h80/bb.webp",
  },
  BY: {
    code: "+375",
    label: "Belarus (+375)",
    flag: "https://flagpedia.net/data/flags/h80/by.webp",
  },
  BE: {
    code: "+32",
    label: "Belgium (+32)",
    flag: "https://flagpedia.net/data/flags/h80/be.webp",
  },
  BZ: {
    code: "+501",
    label: "Belize (+501)",
    flag: "https://flagpedia.net/data/flags/h80/bz.webp",
  },
  BJ: {
    code: "+229",
    label: "Benin (+229)",
    flag: "https://flagpedia.net/data/flags/h80/bj.webp",
  },
  BM: {
    code: "+1441",
    label: "Bermuda (+1441)",
    flag: "https://flagpedia.net/data/flags/h80/bm.webp",
  },
  BT: {
    code: "+975",
    label: "Bhutan (+975)",
    flag: "https://flagpedia.net/data/flags/h80/bt.webp",
  },
  BO: {
    code: "+591",
    label: "Bolivia (+591)",
    flag: "https://flagpedia.net/data/flags/h80/bo.webp",
  },
  BA: {
    code: "+387",
    label: "Bosnia & Herzegovina (+387)",
    flag: "https://flagpedia.net/data/flags/h80/ba.webp",
  },
  BW: {
    code: "+267",
    label: "Botswana (+267)",
    flag: "https://flagpedia.net/data/flags/h80/bw.webp",
  },
  BR: {
    code: "+55",
    label: "Brazil (+55)",
    flag: "https://flagpedia.net/data/flags/h80/br.webp",
  },
  IO: {
    code: "+246",
    label: "British India Ocean Terrirory (+246)",
    flag: "https://flagpedia.net/data/flags/h80/io.webp",
  },
  VG: {
    code: "+1284",
    label: "British Virgin Islands (+1284)",
    flag: "https://flagpedia.net/data/flags/h80/vg.webp",
  },
  BN: {
    code: "+673",
    label: "Brunei (+673)",
    flag: "https://flagpedia.net/data/flags/h80/bn.webp",
  },
  BG: {
    code: "+359",
    label: "Bulgaria (+359)",
    flag: "https://flagpedia.net/data/flags/h80/bg.webp",
  },
  BF: {
    code: "+226",
    label: "Burkina Faso (+226)",
    flag: "https://flagpedia.net/data/flags/h80/bf.webp",
  },
  BI: {
    code: "+257",
    label: "Burundi (+257)",
    flag: "https://flagpedia.net/data/flags/h80/bi.webp",
  },
  KH: {
    code: "+855",
    label: "Cambodia (+855)",
    flag: "https://flagpedia.net/data/flags/h80/kh.webp",
  },
  CM: {
    code: "+237",
    label: "Cameroon (+237)",
    flag: "https://flagpedia.net/data/flags/h80/cm.webp",
  },
  CA: {
    code: "+1",
    label: "Canada (+1)",
    flag: "https://flagpedia.net/data/flags/h80/ca.webp",
  },
  CV: {
    code: "+238",
    label: "Cape Verde Islands (+238)",
    flag: "https://flagpedia.net/data/flags/h80/cv.webp",
  },
  KY: {
    code: "+1345",
    label: "Cayman Islands (+1345)",
    flag: "https://flagpedia.net/data/flags/h80/ky.webp",
  },
  CF: {
    code: "+236",
    label: "Central African Republic (+236)",
    flag: "https://flagpedia.net/data/flags/h80/cf.webp",
  },
  TD: {
    code: "+235",
    label: "Chad (+235)",
    flag: "https://flagpedia.net/data/flags/h80/td.webp",
  },
  CL: {
    code: "+56",
    label: "Chile (+56)",
    flag: "https://flagpedia.net/data/flags/h80/cl.webp",
  },
  CN: {
    code: "+86",
    label: "China (+86)",
    flag: "https://flagpedia.net/data/flags/h80/cn.webp",
  },
  CX: {
    code: "+61",
    label: "Christmas Island (+61)",
    flag: "https://flagpedia.net/data/flags/h80/cx.webp",
  },
  CC: {
    code: "+61",
    label: "Cocos Islands (+61)",
    flag: "https://flagpedia.net/data/flags/h80/cc.webp",
  },
  CO: {
    code: "+57",
    label: "Colombia (+57)",
    flag: "https://flagpedia.net/data/flags/h80/co.webp",
  },
  KM: {
    code: "+269",
    label: "Comoros (+269)",
    flag: "https://flagpedia.net/data/flags/h80/km.webp",
  },
  CK: {
    code: "+682",
    label: "Cook Islands (+682)",
    flag: "https://flagpedia.net/data/flags/h80/ck.webp",
  },
  CR: {
    code: "+506",
    label: "Costa Rica (+506)",
    flag: "https://flagpedia.net/data/flags/h80/cr.webp",
  },
  HR: {
    code: "+385",
    label: "Croatia (+385)",
    flag: "https://flagpedia.net/data/flags/h80/hr.webp",
  },
  CU: {
    code: "+53",
    label: "Cuba (+53)",
    flag: "https://flagpedia.net/data/flags/h80/cu.webp",
  },
  CW: {
    code: "+599",
    label: "Curacao (+599)",
    flag: "https://flagpedia.net/data/flags/h80/cw.webp",
  },
  CY: {
    code: "+90",
    label: "Cyprus (+90)",
    flag: "https://flagpedia.net/data/flags/h80/cy.webp",
  },
  CZ: {
    code: "+420",
    label: "Czech Republic (+420)",
    flag: "https://flagpedia.net/data/flags/h80/cz.webp",
  },
  CD: {
    code: "+243",
    label: "Democratic Republic of Congo (+243)",
    flag: "https://flagpedia.net/data/flags/h80/cd.webp",
  },
  DK: {
    code: "+45",
    label: "Denmark (+45)",
    flag: "https://flagpedia.net/data/flags/h80/dk.webp",
  },
  DJ: {
    code: "+253",
    label: "Djibouti (+253)",
    flag: "https://flagpedia.net/data/flags/h80/dj.webp",
  },
  DM: {
    code: "+1809",
    label: "Dominica (+1809)",
    flag: "https://flagpedia.net/data/flags/h80/dm.webp",
  },
  DO: {
    code: "+1809",
    label: "Dominican Republic (+1809)",
    flag: "https://flagpedia.net/data/flags/h80/do.webp",
  },
  TL: {
    code: "+670",
    label: "East Timor (+670)",
    flag: "https://flagpedia.net/data/flags/h80/tl.webp",
  },
  EC: {
    code: "+593",
    label: "Ecuador (+593)",
    flag: "https://flagpedia.net/data/flags/h80/ec.webp",
  },
  EG: {
    code: "+20",
    label: "Egypt (+20)",
    flag: "https://flagpedia.net/data/flags/h80/eg.webp",
  },
  SV: {
    code: "+503",
    label: "El Salvador (+503)",
    flag: "https://flagpedia.net/data/flags/h80/sv.webp",
  },
  GQ: {
    code: "+240",
    label: "Equatorial Guinea (+240)",
    flag: "https://flagpedia.net/data/flags/h80/gq.webp",
  },
  ER: {
    code: "+291",
    label: "Eritrea (+291)",
    flag: "https://flagpedia.net/data/flags/h80/er.webp",
  },
  EE: {
    code: "+372",
    label: "Estonia (+372)",
    flag: "https://flagpedia.net/data/flags/h80/ee.webp",
  },
  ET: {
    code: "+251",
    label: "Ethiopia (+251)",
    flag: "https://flagpedia.net/data/flags/h80/et.webp",
  },
  FK: {
    code: "+500",
    label: "Falkland Islands (+500)",
    flag: "https://flagpedia.net/data/flags/h80/fk.webp",
  },
  FO: {
    code: "+298",
    label: "Faroe Islands (+298)",
    flag: "https://flagpedia.net/data/flags/h80/fo.webp",
  },
  FJ: {
    code: "+679",
    label: "Fiji (+679)",
    flag: "https://flagpedia.net/data/flags/h80/fj.webp",
  },
  FI: {
    code: "+358",
    label: "Finland (+358)",
    flag: "https://flagpedia.net/data/flags/h80/fi.webp",
  },
  FR: {
    code: "+33",
    label: "France (+33)",
    flag: "https://flagpedia.net/data/flags/h80/fr.webp",
  },
  GF: {
    code: "+594",
    label: "French Guiana (+594)",
    flag: "https://flagpedia.net/data/flags/h80/gf.webp",
  },
  PF: {
    code: "+689",
    label: "French Polynesia (+689)",
    flag: "https://flagpedia.net/data/flags/h80/pf.webp",
  },
  GA: {
    code: "+241",
    label: "Gabon (+241)",
    flag: "https://flagpedia.net/data/flags/h80/ga.webp",
  },
  GM: {
    code: "+220",
    label: "Gambia (+220)",
    flag: "https://flagpedia.net/data/flags/h80/gm.webp",
  },
  GE: {
    code: "+7880",
    label: "Georgia (+7880)",
    flag: "https://flagpedia.net/data/flags/h80/ge.webp",
  },
  DE: {
    code: "+49",
    label: "Germany (+49)",
    flag: "https://flagpedia.net/data/flags/h80/de.webp",
  },
  GH: {
    code: "+233",
    label: "Ghana (+233)",
    flag: "https://flagpedia.net/data/flags/h80/gh.webp",
  },
  GI: {
    code: "+350",
    label: "Gibraltar (+350)",
    flag: "https://flagpedia.net/data/flags/h80/gi.webp",
  },
  GR: {
    code: "+30",
    label: "Greece (+30)",
    flag: "https://flagpedia.net/data/flags/h80/gr.webp",
  },
  GL: {
    code: "+299",
    label: "Greenland (+299)",
    flag: "https://flagpedia.net/data/flags/h80/gl.webp",
  },
  GD: {
    code: "+1473",
    label: "Greenland (+1473)",
    flag: "https://flagpedia.net/data/flags/h80/gd.webp",
  },
  GP: {
    code: "+590",
    label: "Guadeloupe (+590)",
    flag: "https://flagpedia.net/data/flags/h80/gp.webp",
  },
  GU: {
    code: "+671",
    label: "Guam (+671)",
    flag: "https://flagpedia.net/data/flags/h80/gu.webp",
  },
  GT: {
    code: "+502",
    label: "Guatemala (+502)",
    flag: "https://flagpedia.net/data/flags/h80/gt.webp",
  },
  GG: {
    code: "+44",
    label: "Guernsey (+44)",
    flag: "https://flagpedia.net/data/flags/h80/gg.webp",
  },
  GN: {
    code: "+224",
    label: "Guinea (+224)",
    flag: "https://flagpedia.net/data/flags/h80/gn.webp",
  },
  GW: {
    code: "+245",
    label: "Guinea-Bissau (+245)",
    flag: "https://flagpedia.net/data/flags/h80/gw.webp",
  },
  GY: {
    code: "+592",
    label: "Guyana (+592)",
    flag: "https://flagpedia.net/data/flags/h80/gy.webp",
  },
  HT: {
    code: "+509",
    label: "Haiti (+509)",
    flag: "https://flagpedia.net/data/flags/h80/ht.webp",
  },
  HN: {
    code: "+504",
    label: "Honduras (+504)",
    flag: "https://flagpedia.net/data/flags/h80/hn.webp",
  },
  HK: {
    code: "+852",
    label: "Hong Kong (+852)",
    flag: "https://flagpedia.net/data/flags/h80/hk.webp",
  },
  HU: {
    code: "+36",
    label: "Hungary (+36)",
    flag: "https://flagpedia.net/data/flags/h80/hu.webp",
  },
  IS: {
    code: "+354",
    label: "Iceland (+354)",
    flag: "https://flagpedia.net/data/flags/h80/is.webp",
  },
  IN: {
    code: "+91",
    label: "India (+91)",
    flag: "https://flagpedia.net/data/flags/h80/in.webp",
  },
  ID: {
    code: "+62",
    label: "Indonesia (+62)",
    flag: "https://flagpedia.net/data/flags/h80/id.webp",
  },
  IR: {
    code: "+98",
    label: "Iran (+98)",
    flag: "https://flagpedia.net/data/flags/h80/ir.webp",
  },
  IQ: {
    code: "+964",
    label: "Iraq (+964)",
    flag: "https://flagpedia.net/data/flags/h80/iq.webp",
  },
  IE: {
    code: "+353",
    label: "Ireland (+353)",
    flag: "https://flagpedia.net/data/flags/h80/ie.webp",
  },
  IM: {
    code: "+44",
    label: "Isle of Man (+44)",
    flag: "https://flagpedia.net/data/flags/h80/im.webp",
  },
  IT: {
    code: "+39",
    label: "Italy (+39)",
    flag: "https://flagpedia.net/data/flags/h80/it.webp",
  },
  CI: {
    code: "+225",
    label: "Ivory Coast (+225)",
    flag: "https://flagpedia.net/data/flags/h80/ci.webp",
  },
  JM: {
    code: "+1876",
    label: "Jamaica (+1876)",
    flag: "https://flagpedia.net/data/flags/h80/jm.webp",
  },
  JP: {
    code: "+81",
    label: "Japan (+81)",
    flag: "https://flagpedia.net/data/flags/h80/jp.webp",
  },
  JE: {
    code: "+44",
    label: "Jersey (+44)",
    flag: "https://flagpedia.net/data/flags/h80/je.webp",
  },
  JO: {
    code: "+962",
    label: "Jordan (+962)",
    flag: "https://flagpedia.net/data/flags/h80/jo.webp",
  },
  KZ: {
    code: "+7",
    label: "Kazakhstan (+7)",
    flag: "https://flagpedia.net/data/flags/h80/kz.webp",
  },
  KE: {
    code: "+254",
    label: "Kenya (+254)",
    flag: "https://flagpedia.net/data/flags/h80/ke.webp",
  },
  KI: {
    code: "+686",
    label: "Kiribati (+686)",
    flag: "https://flagpedia.net/data/flags/h80/ki.webp",
  },
  XK: {
    code: "+383",
    label: "Kosovo (+383)",
    flag: "https://flagpedia.net/data/flags/h80/xk.webp",
  },
  KW: {
    code: "+965",
    label: "Kuwait (+965)",
    flag: "https://flagpedia.net/data/flags/h80/kw.webp",
  },
  KG: {
    code: "+996",
    label: "Kyrgyzstan (+996)",
    flag: "https://flagpedia.net/data/flags/h80/kg.webp",
  },
  LA: {
    code: "+856",
    label: "Laos (+856)",
    flag: "https://flagpedia.net/data/flags/h80/la.webp",
  },
  LV: {
    code: "+371",
    label: "Latvia (+371)",
    flag: "https://flagpedia.net/data/flags/h80/lv.webp",
  },
  LB: {
    code: "+961",
    label: "Lebanon (+961)",
    flag: "https://flagpedia.net/data/flags/h80/lb.webp",
  },
  LS: {
    code: "+266",
    label: "Lesotho (+266)",
    flag: "https://flagpedia.net/data/flags/h80/ls.webp",
  },
  LR: {
    code: "+231",
    label: "Liberia (+231)",
    flag: "https://flagpedia.net/data/flags/h80/lr.webp",
  },
  LY: {
    code: "+218",
    label: "Libya (+218)",
    flag: "https://flagpedia.net/data/flags/h80/ly.webp",
  },
  LI: {
    code: "+417",
    label: "Liechtenstein (+417)",
    flag: "https://flagpedia.net/data/flags/h80/li.webp",
  },
  LT: {
    code: "+370",
    label: "Lithuania (+370)",
    flag: "https://flagpedia.net/data/flags/h80/lt.webp",
  },
  LU: {
    code: "+352",
    label: "Luxembourg (+352)",
    flag: "https://flagpedia.net/data/flags/h80/lu.webp",
  },
  MO: {
    code: "+853",
    label: "Macao (+853)",
    flag: "https://flagpedia.net/data/flags/h80/mo.webp",
  },
  MK: {
    code: "+389",
    label: "Macedonia (+389)",
    flag: "https://flagpedia.net/data/flags/h80/mk.webp",
  },
  MG: {
    code: "+261",
    label: "Madagascar (+261)",
    flag: "https://flagpedia.net/data/flags/h80/mg.webp",
  },
  MW: {
    code: "+265",
    label: "Malawi (+265)",
    flag: "https://flagpedia.net/data/flags/h80/mw.webp",
  },
  MY: {
    code: "+60",
    label: "Malaysia (+60)",
    flag: "https://flagpedia.net/data/flags/h80/my.webp",
  },
  MV: {
    code: "+960",
    label: "Maldives (+960)",
    flag: "https://flagpedia.net/data/flags/h80/mv.webp",
  },
  ML: {
    code: "+223",
    label: "Mali (+223)",
    flag: "https://flagpedia.net/data/flags/h80/ml.webp",
  },
  MT: {
    code: "+356",
    label: "Malta (+356)",
    flag: "https://flagpedia.net/data/flags/h80/mt.webp",
  },
  MH: {
    code: "+692",
    label: "Marshall Islands (+692)",
    flag: "https://flagpedia.net/data/flags/h80/mh.webp",
  },
  MQ: {
    code: "+596",
    label: "Martinique (+596)",
    flag: "https://flagpedia.net/data/flags/h80/mq.webp",
  },
  MR: {
    code: "+222",
    label: "Mauritania (+222)",
    flag: "https://flagpedia.net/data/flags/h80/mr.webp",
  },
  YT: {
    code: "+269",
    label: "Mayotte (+269)",
    flag: "https://flagpedia.net/data/flags/h80/yt.webp",
  },
  MX: {
    code: "+52",
    label: "Mexico (+52)",
    flag: "https://flagpedia.net/data/flags/h80/mx.webp",
  },
  FM: {
    code: "+691",
    label: "Micronesia (+691)",
    flag: "https://flagpedia.net/data/flags/h80/fm.webp",
  },
  MD: {
    code: "+373",
    label: "Moldova (+373)",
    flag: "https://flagpedia.net/data/flags/h80/md.webp",
  },
  MC: {
    code: "+377",
    label: "Monaco (+377)",
    flag: "https://flagpedia.net/data/flags/h80/mc.webp",
  },
  MN: {
    code: "+976",
    label: "Mongolia (+976)",
    flag: "https://flagpedia.net/data/flags/h80/mn.webp",
  },
  ME: {
    code: "+382",
    label: "Montengro (+382)",
    flag: "https://flagpedia.net/data/flags/h80/me.webp",
  },
  MS: {
    code: "+1664",
    label: "Montserrat (+1664)",
    flag: "https://flagpedia.net/data/flags/h80/ms.webp",
  },
  MA: {
    code: "+212",
    label: "Morocco (+212)",
    flag: "https://flagpedia.net/data/flags/h80/ma.webp",
  },
  MZ: {
    code: "+258",
    label: "Mozambique (+258)",
    flag: "https://flagpedia.net/data/flags/h80/mz.webp",
  },
  MM: {
    code: "+95",
    label: "Myanmar (+95)",
    flag: "https://flagpedia.net/data/flags/h80/mm.webp",
  },
  NA: {
    code: "+264",
    label: "Namibia (+264)",
    flag: "https://flagpedia.net/data/flags/h80/na.webp",
  },
  NR: {
    code: "+674",
    label: "Nauru (+674)",
    flag: "https://flagpedia.net/data/flags/h80/nr.webp",
  },
  NP: {
    code: "+977",
    label: "Nepal (+977)",
    flag: "https://flagpedia.net/data/flags/h80/np.webp",
  },
  NL: {
    code: "+31",
    label: "Netherlands (+31)",
    flag: "https://flagpedia.net/data/flags/h80/nl.webp",
  },
  AN: {
    code: "+599",
    label: "Netherlands Antilles (+599)",
    flag: "https://flagpedia.net/data/flags/h80/an.webp",
  },
  NC: {
    code: "+687",
    label: "New Caledonia (+687)",
    flag: "https://flagpedia.net/data/flags/h80/nc.webp",
  },
  NZ: {
    code: "+64",
    label: "New Zealand (+64)",
    flag: "https://flagpedia.net/data/flags/h80/nz.webp",
  },
  NI: {
    code: "+505",
    label: "Nicaragua (+505)",
    flag: "https://flagpedia.net/data/flags/h80/ni.webp",
  },
  NE: {
    code: "+227",
    label: "Niger (+227)",
    flag: "https://flagpedia.net/data/flags/h80/ne.webp",
  },
  NG: {
    code: "+234",
    label: "Nigeria (+234)",
    flag: "https://flagpedia.net/data/flags/h80/ng.webp",
  },
  NU: {
    code: "+683",
    label: "Niue (+683)",
    flag: "https://flagpedia.net/data/flags/h80/nu.webp",
  },
  KP: {
    code: "+850",
    label: "North Korea (+850)",
    flag: "https://flagpedia.net/data/flags/h80/kp.webp",
  },
  NF: {
    code: "+672",
    label: "Norfolk Islands (+672)",
    flag: "https://flagpedia.net/data/flags/h80/nf.webp",
  },
  MP: {
    code: "+670",
    label: "Northern Marianas (+670)",
    flag: "https://flagpedia.net/data/flags/h80/mp.webp",
  },
  NO: {
    code: "+47",
    label: "Norway (+47)",
    flag: "https://flagpedia.net/data/flags/h80/no.webp",
  },
  OM: {
    code: "+968",
    label: "Oman (+968)",
    flag: "https://flagpedia.net/data/flags/h80/om.webp",
  },
  PK: {
    code: "+92",
    label: "Pakistan (+92)",
    flag: "https://flagpedia.net/data/flags/h80/pk.webp",
  },
  PW: {
    code: "+680",
    label: "Palau (+680)",
    flag: "https://flagpedia.net/data/flags/h80/pw.webp",
  },
  PS: {
    code: "+970",
    label: "Palestine (+970)",
    flag: "https://flagpedia.net/data/flags/h80/ps.webp",
  },
  IL: {
    code: "+972",
    label: "Palestine (+972)",
    flag: "https://flagpedia.net/data/flags/h80/ps.webp",
  },
  PA: {
    code: "+507",
    label: "Panama (+507)",
    flag: "https://flagpedia.net/data/flags/h80/pa.webp",
  },
  PG: {
    code: "+675",
    label: "Papua New Guinea (+675)",
    flag: "https://flagpedia.net/data/flags/h80/pg.webp",
  },
  PY: {
    code: "+595",
    label: "Paraguay (+595)",
    flag: "https://flagpedia.net/data/flags/h80/py.webp",
  },
  PE: {
    code: "+51",
    label: "Peru (+51)",
    flag: "https://flagpedia.net/data/flags/h80/pe.webp",
  },
  PH: {
    code: "+63",
    label: "Philippines (+63)",
    flag: "https://flagpedia.net/data/flags/h80/ph.webp",
  },
  PN: {
    code: "+64",
    label: "Pitcairn (+64)",
    flag: "https://flagpedia.net/data/flags/h80/pn.webp",
  },
  PL: {
    code: "+48",
    label: "Poland (+48)",
    flag: "https://flagpedia.net/data/flags/h80/pl.webp",
  },
  PT: {
    code: "+351",
    label: "Portugal (+351)",
    flag: "https://flagpedia.net/data/flags/h80/pt.webp",
  },
  PR: {
    code: "+1787",
    label: "Puerto Rico (+1787)",
    flag: "https://flagpedia.net/data/flags/h80/pr.webp",
  },
  QA: {
    code: "+974",
    label: "Qatar (+974)",
    flag: "https://flagpedia.net/data/flags/h80/qa.webp",
  },
  CG: {
    code: "+242",
    label: "Republic of the Congo (+242)",
    flag: "https://flagpedia.net/data/flags/h80/cg.webp",
  },
  RE: {
    code: "+262",
    label: "Reunion (+262)",
    flag: "https://flagpedia.net/data/flags/h80/re.webp",
  },
  RO: {
    code: "+40",
    label: "Romania (+40)",
    flag: "https://flagpedia.net/data/flags/h80/ro.webp",
  },
  RU: {
    code: "+7",
    label: "Russia (+7)",
    flag: "https://flagpedia.net/data/flags/h80/ru.webp",
  },
  RW: {
    code: "+250",
    label: "Rwanda (+250)",
    flag: "https://flagpedia.net/data/flags/h80/rw.webp",
  },
  BL: {
    code: "+590",
    label: "Saint Barthelemy (+590)",
    flag: "https://flagpedia.net/data/flags/h80/bl.webp",
  },
  SH: {
    code: "+290",
    label: "Saint Helena (+290)",
    flag: "https://flagpedia.net/data/flags/h80/sh.webp",
  },
  KN: {
    code: "+1869",
    label: "Saint Kitts & Nevis (+1869)",
    flag: "https://flagpedia.net/data/flags/h80/kn.webp",
  },
  SC: {
    code: "+1758",
    label: "Saint Lucia (+1758)",
    flag: "https://flagpedia.net/data/flags/h80/sc.webp",
  },
  SR: {
    code: "+597",
    label: "Suriname (+597)",
    flag: "https://flagpedia.net/data/flags/h80/sr.webp",
  },
  MF: {
    code: "+590",
    label: "Saint Martin (+590)",
    flag: "https://flagpedia.net/data/flags/h80/mf.webp",
  },
  PM: {
    code: "+508",
    label: "Saint Pierre and Miquelon (+508)",
    flag: "https://flagpedia.net/data/flags/h80/pm.webp",
  },
  VC: {
    code: "+1784",
    label: "Saint Vincent and the Grenadines (+1784)",
    flag: "https://flagpedia.net/data/flags/h80/vc.webp",
  },
  WS: {
    code: "+685",
    label: "Samoa (+685)",
    flag: "https://flagpedia.net/data/flags/h80/ws.webp",
  },
  SM: {
    code: "+378",
    label: "San Marino (+378)",
    flag: "https://flagpedia.net/data/flags/h80/sm.webp",
  },
  ST: {
    code: "+239",
    label: "Sao Tome & Principe (+239)",
    flag: "https://flagpedia.net/data/flags/h80/st.webp",
  },
  SA: {
    code: "+966",
    label: "Saudi Arabia (+966)",
    flag: "https://flagpedia.net/data/flags/h80/sa.webp",
  },
  SN: {
    code: "+221",
    label: "Senegal (+221)",
    flag: "https://flagpedia.net/data/flags/h80/sn.webp",
  },
  RS: {
    code: "+381",
    label: "Serbia (+381)",
    flag: "https://flagpedia.net/data/flags/h80/rs.webp",
  },
  SC: {
    code: "+248",
    label: "Seychelles (+248)",
    flag: "https://flagpedia.net/data/flags/h80/sc.webp",
  },
  SL: {
    code: "+232",
    label: "Sierra Leone (+232)",
    flag: "https://flagpedia.net/data/flags/h80/sl.webp",
  },
  SG: {
    code: "+65",
    label: "Singapore (+65)",
    flag: "https://flagpedia.net/data/flags/h80/sg.webp",
  },
  SX: {
    code: "+1721",
    label: "Sint Marten (+1721)",
    flag: "https://flagpedia.net/data/flags/h80/sx.webp",
  },
  SK: {
    code: "+421",
    label: "Slovakia (+421)",
    flag: "https://flagpedia.net/data/flags/h80/sk.webp",
  },
  SI: {
    code: "+386",
    label: "Slovenia (+386)",
    flag: "https://flagpedia.net/data/flags/h80/si.webp",
  },
  SB: {
    code: "+677",
    label: "Solomon Islands (+677)",
    flag: "https://flagpedia.net/data/flags/h80/sb.webp",
  },
  SO: {
    code: "+252",
    label: "Somalia (+252)",
    flag: "https://flagpedia.net/data/flags/h80/so.webp",
  },
  ZA: {
    code: "+27",
    label: "South Africa (+27)",
    flag: "https://flagpedia.net/data/flags/h80/za.webp",
  },
  KR: {
    code: "+82",
    label: "South Korea (+82)",
    flag: "https://flagpedia.net/data/flags/h80/kr.webp",
  },
  SS: {
    code: "+211",
    label: "South Sudan (+211)",
    flag: "https://flagpedia.net/data/flags/h80/ss.webp",
  },
  ES: {
    code: "+34",
    label: "Spain (+34)",
    flag: "https://flagpedia.net/data/flags/h80/es.webp",
  },
  LK: {
    code: "+94",
    label: "Sri Lanka (+94)",
    flag: "https://flagpedia.net/data/flags/h80/lk.webp",
  },
  SD: {
    code: "+249",
    label: "Sudan (+249)",
    flag: "https://flagpedia.net/data/flags/h80/sd.webp",
  },
  SJ: {
    code: "+47",
    label: "Svalbard & Jan Mayen (+47)",
    flag: "https://flagpedia.net/data/flags/h80/sj.webp",
  },
  SZ: {
    code: "+268",
    label: "Swaziland (+268)",
    flag: "https://flagpedia.net/data/flags/h80/sz.webp",
  },
  SE: {
    code: "+46",
    label: "Sweden (+46)",
    flag: "https://flagpedia.net/data/flags/h80/se.webp",
  },
  CH: {
    code: "+41",
    label: "Switzerland (+41)",
    flag: "https://flagpedia.net/data/flags/h80/ch.webp",
  },
  SY: {
    code: "+963",
    label: "Syria (+963)",
    flag: "https://flagpedia.net/data/flags/h80/sy.webp",
  },
  TW: {
    code: "+886",
    label: "Taiwan (+886)",
    flag: "https://flagpedia.net/data/flags/h80/tw.webp",
  },
  TJ: {
    code: "+992",
    label: "Tajikistan (+992)",
    flag: "https://flagpedia.net/data/flags/h80/tj.webp",
  },
  TZ: {
    code: "+255",
    label: "Tanzania (+255)",
    flag: "https://flagpedia.net/data/flags/h80/tz.webp",
  },
  TH: {
    code: "+66",
    label: "Thailand (+66)",
    flag: "https://flagpedia.net/data/flags/h80/th.webp",
  },
  TG: {
    code: "+228",
    label: "Togo (+228)",
    flag: "https://flagpedia.net/data/flags/h80/tg.webp",
  },
  TO: {
    code: "+676",
    label: "Tonga (+676)",
    flag: "https://flagpedia.net/data/flags/h80/to.webp",
  },
  TT: {
    code: "+1868",
    label: "Trinidad & Tobago (+1868)",
    flag: "https://flagpedia.net/data/flags/h80/tt.webp",
  },
  TN: {
    code: "+216",
    label: "Tunisia (+216)",
    flag: "https://flagpedia.net/data/flags/h80/tn.webp",
  },
  TR: {
    code: "+90",
    label: "Turkey (+90)",
    flag: "https://flagpedia.net/data/flags/h80/tr.webp",
  },
  TM: {
    code: "+993",
    label: "Turkmenistan (+993)",
    flag: "https://flagpedia.net/data/flags/h80/tm.webp",
  },
  TC: {
    code: "+1649",
    label: "Turks & Caicos Islands (+1649)",
    flag: "https://flagpedia.net/data/flags/h80/tc.webp",
  },
  TV: {
    code: "+688",
    label: "Tuvalu (+688)",
    flag: "https://flagpedia.net/data/flags/h80/tv.webp",
  },
  UG: {
    code: "+256",
    label: "Uganda (+256)",
    flag: "https://flagpedia.net/data/flags/h80/ug.webp",
  },
  UA: {
    code: "+380",
    label: "Ukraine (+380)",
    flag: "https://flagpedia.net/data/flags/h80/ua.webp",
  },
  AE: {
    code: "+971",
    label: "United Arab Emirates (+971)",
    flag: "https://flagpedia.net/data/flags/h80/ae.webp",
  },
  GB: {
    code: "+44",
    label: "United Kingdom (+44)",
    flag: "https://flagpedia.net/data/flags/h80/gb.webp",
  },
  US: {
    code: "+1",
    label: "United States (+1)",
    flag: "https://flagpedia.net/data/flags/h80/us.webp",
  },
  UY: {
    code: "+598",
    label: "Uruguay (+598)",
    flag: "https://flagpedia.net/data/flags/h80/uy.webp",
  },
  UZ: {
    code: "+998",
    label: "Uzbekistan (+998)",
    flag: "https://flagpedia.net/data/flags/h80/uz.webp",
  },
  VU: {
    code: "+678",
    label: "Vanuatu (+678)",
    flag: "https://flagpedia.net/data/flags/h80/vu.webp",
  },
  VA: {
    code: "+379",
    label: "Vatican (+379)",
    flag: "https://flagpedia.net/data/flags/h80/va.webp",
  },
  VE: {
    code: "+58",
    label: "Venezuela (+58)",
    flag: "https://flagpedia.net/data/flags/h80/ve.webp",
  },
  VN: {
    code: "+84",
    label: "Vietnam (+84)",
    flag: "https://flagpedia.net/data/flags/h80/vn.webp",
  },
  WF: {
    code: "+681",
    label: "Wallis & Futuna (+681)",
    flag: "https://flagpedia.net/data/flags/h80/wf.webp",
  },
  YE: {
    code: "+969",
    label: "Yemen (+969)",
    flag: "https://flagpedia.net/data/flags/h80/ye.webp",
  },
  ZM: {
    code: "+260",
    label: "Zambia (+260)",
    flag: "https://flagpedia.net/data/flags/h80/zm.webp",
  },
  ZW: {
    code: "+263",
    label: "Zimbabwe (+263)",
    flag: "https://flagpedia.net/data/flags/h80/zw.webp",
  },
};
