const packageData = [
  {
    title: 'Kashmir Winter Escape',
    country: 'India',
    state: 'Jammu & Kashmir',
    price: 24999,
    rating: 4.9,
    durationDays: 6,
    travelType: 'Family',
    destinationType: 'Snow',
    activities: ['Sightseeing', 'Photography'],
    features: ['Hotel Included', 'Meals Included', 'Airport Transfer'],
    tags: ['Snow', 'Houseboat', 'Sightseeing'],
    image: './assets/files/l1.jpg',
    location: 'Srinagar, Kashmir',
    description: 'A serene Himalayan getaway with alpine views, shikara rides and curated heritage stays.'
  },
  {
    title: 'Bali Island Retreat',
    country: 'Indonesia',
    state: 'Bali',
    price: 42999,
    rating: 4.8,
    durationDays: 7,
    travelType: 'Couple',
    destinationType: 'Beaches',
    activities: ['Water Sports', 'Sightseeing'],
    features: ['Hotel Included', 'Flights Included'],
    tags: ['Beach', 'Spa', 'Couples'],
    image: './assets/files/l4.jpg',
    location: 'Bali, Indonesia',
    description: 'Sandy beaches, wellness experiences and sunset dinners across one of the world’s most scenic islands.'
  },
  {
    title: 'Dubai Skyline Break',
    country: 'United Arab Emirates',
    state: 'Dubai',
    price: 57999,
    rating: 5.0,
    durationDays: 5,
    travelType: 'Luxury',
    destinationType: 'Cities',
    activities: ['Sightseeing', 'Photography'],
    features: ['Hotel Included', 'Flights Included', 'Airport Transfer'],
    tags: ['Luxury', 'City', 'Desert'],
    image: './assets/files/l5.jpg',
    location: 'Dubai, UAE',
    description: 'High-rise glamour, desert safari experiences and luxury hospitality in the heart of Dubai.'
  },
  {
    title: 'Paris Romance Tour',
    country: 'France',
    state: 'Île-de-France',
    price: 62999,
    rating: 4.9,
    durationDays: 6,
    travelType: 'Couple',
    destinationType: 'Cities',
    activities: ['Sightseeing', 'Photography'],
    features: ['Hotel Included', 'Meals Included'],
    tags: ['Culture', 'Museums', 'Food'],
    image: './assets/files/l3.jpg',
    location: 'Paris, France',
    description: 'Experience iconic landmarks, elegant cafés and immersive cultural discovery in the City of Light.'
  },
  {
    title: 'Istanbul Discovery',
    country: 'Turkey',
    state: 'Istanbul',
    price: 38999,
    rating: 4.7,
    durationDays: 5,
    travelType: 'Cultural',
    destinationType: 'Historical',
    activities: ['Sightseeing', 'Photography'],
    features: ['Hotel Included', 'Guide Included'],
    tags: ['History', 'Bazaar', 'Food'],
    image: './assets/files/l2.jpg',
    location: 'Istanbul, Turkey',
    description: 'Traverse two continents with heritage sites, panoramic views and unforgettable culinary moments.'
  },
  {
    title: 'Maldives Calm Escape',
    country: 'Maldives',
    state: 'North Malé Atoll',
    price: 74999,
    rating: 5.0,
    durationDays: 6,
    travelType: 'Honeymoon',
    destinationType: 'Islands',
    activities: ['Scuba Diving', 'Water Sports'],
    features: ['Hotel Included', 'Flights Included', 'Meals Included', 'Airport Transfer'],
    tags: ['Overwater', 'Snorkeling', 'Resort'],
    image: './assets/files/pac1.jpg',
    location: 'Malé, Maldives',
    description: 'Crystal waters, private villas and unmatched ocean relaxation for a picture-perfect retreat.'
  },
  {
    title: 'Goa Beach Weekend',
    country: 'India',
    state: 'Goa',
    price: 18000,
    rating: 4.4,
    durationDays: 3,
    travelType: 'Adventure',
    destinationType: 'Beaches',
    activities: ['Water Sports', 'Sightseeing'],
    features: ['Hotel Included', 'Meals Included'],
    tags: ['Beach', 'Weekend', 'Friends'],
    image: './assets/files/l4.jpg',
    location: 'Goa, India',
    description: 'Sun-kissed beaches, lively nightlife and relaxed coastal experiences made for short escapes.'
  },
  {
    title: 'Rajasthan Heritage Trail',
    country: 'India',
    state: 'Rajasthan',
    price: 32000,
    rating: 4.6,
    durationDays: 8,
    travelType: 'Family',
    destinationType: 'Historical',
    activities: ['Sightseeing', 'Photography'],
    features: ['Hotel Included', 'Guide Included', 'Travel Insurance'],
    tags: ['Heritage', 'Palaces', 'Culture'],
    image: './assets/files/l3.jpg',
    location: 'Jaipur, Rajasthan',
    description: 'Explore desert forts, royal palaces and vibrant local culture through a heritage-rich itinerary.'
  },
  {
    title: 'Swiss Alpine Escape',
    country: 'Switzerland',
    state: 'Valais',
    price: 68000,
    rating: 4.8,
    durationDays: 10,
    travelType: 'Adventure',
    destinationType: 'Mountains',
    activities: ['Hiking', 'Skiing', 'Photography'],
    features: ['Hotel Included', 'Flights Included', 'Travel Insurance'],
    tags: ['Mountain', 'Snow', 'Adventure'],
    image: './assets/files/l1.jpg',
    location: 'Valais, Switzerland',
    description: 'Glacier views, winter sports and scenic mountain routes designed for adventure-loving travelers.'
  }
];

const countryCodes = [
  'AD','AE','AF','AG','AI','AL','AM','AO','AQ','AR','AS','AT','AU','AW','AX','AZ','BA','BB','BD','BE','BF','BG','BH','BI','BJ','BL','BM','BN','BO','BQ','BR','BS','BT','BV','BW','BY','BZ','CA','CC','CD','CF','CG','CH','CI','CK','CL','CM','CN','CO','CR','CU','CV','CW','CX','CY','CZ','DE','DJ','DK','DM','DO','DZ','EC','EE','EG','EH','ER','ES','ET','FI','FJ','FK','FM','FO','FR','GA','GB','GD','GE','GF','GG','GH','GI','GL','GM','GN','GP','GQ','GR','GS','GT','GU','GW','GY','HK','HM','HN','HR','HT','HU','ID','IE','IL','IM','IN','IO','IQ','IR','IS','IT','JE','JM','JO','JP','KE','KG','KH','KI','KM','KN','KP','KR','KW','KY','KZ','LA','LB','LC','LI','LK','LR','LS','LT','LU','LV','LY','MA','MC','MD','ME','MF','MG','MH','MK','ML','MM','MN','MO','MP','MQ','MR','MS','MT','MU','MV','MW','MX','MY','MZ','NA','NC','NE','NF','NG','NI','NL','NO','NP','NR','NU','NZ','OM','PA','PE','PF','PG','PH','PK','PL','PM','PN','PR','PS','PT','PW','PY','QA','RE','RO','RS','RU','RW','SA','SB','SC','SD','SE','SG','SH','SI','SJ','SK','SL','SM','SN','SO','SR','SS','ST','SV','SX','SY','SZ','TC','TD','TF','TG','TH','TJ','TK','TL','TM','TN','TO','TR','TT','TV','TW','TZ','UA','UG','UM','US','UY','UZ','VA','VC','VE','VG','VI','VN','VU','WF','WS','YE','YT','ZA','ZM','ZW'
];

const countryNames = new Intl.DisplayNames(['en'], { type: 'region' });
const COUNTRY_OPTIONS = ['All Countries', ...countryCodes.map((code) => countryNames.of(code)).filter(Boolean)];

const STATE_BY_COUNTRY = {
  'Afghanistan': ['All Provinces', 'Kabul', 'Herat', 'Kandahar', 'Balkh', 'Nangarhar', 'Kunduz', 'Bamyan', 'Badakhshan'],
  'Albania': ['All Regions', 'Tirana', 'Durrës', 'Vlorë', 'Shkodër', 'Elbasan', 'Fier', 'Korçë', 'Berat'],
  'Algeria': ['All Provinces', 'Algiers', 'Oran', 'Constantine', 'Blida', 'Annaba', 'Tlemcen', 'Béjaïa', 'Sétif'],
  'Andorra': ['All Parishes', 'Canillo', 'Encamp', 'Ordino', 'La Massana', 'Andorra la Vella', 'Sant Julià de Lòria', 'Escaldes-Engordany'],
  'Angola': ['All Provinces', 'Luanda', 'Benguela', 'Huíla', 'Huambo', 'Cabinda', 'Malanje', 'Namibe', 'Bié'],
  'Antigua and Barbuda': ['All Parishes', 'Saint John', 'Saint Mary', 'Saint Paul', 'Saint Peter', 'Saint Philip', 'Saint George', 'Barbuda', 'Redonda'],
  'Argentina': ['All Provinces', 'Buenos Aires', 'Córdoba', 'Santa Fe', 'Mendoza', 'Salta', 'Tucumán', 'Misiones', 'Neuquén'],
  'Armenia': ['All Regions', 'Yerevan', 'Shirak', 'Lori', 'Tavush', 'Kotayk', 'Gegharkunik', 'Ararat', 'Syunik'],
  'Australia': ['All States', 'New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia', 'Tasmania', 'Northern Territory', 'Australian Capital Territory'],
  'Austria': ['All States', 'Vienna', 'Lower Austria', 'Upper Austria', 'Styria', 'Tyrol', 'Carinthia', 'Salzburg', 'Vorarlberg'],
  'Azerbaijan': ['All Regions', 'Baku', 'Ganja', 'Sumqayit', 'Lankaran', 'Nakhchivan', 'Shaki', 'Quba', 'Mingachevir'],
  'Bahamas': ['All Islands', 'New Providence', 'Grand Bahama', 'Abaco', 'Eleuthera', 'Exuma', 'Andros', 'Bimini', 'Cat Island'],
  'Bahrain': ['All Governorates', 'Capital', 'Muharraq', 'Northern', 'Southern'],
  'Bangladesh': ['All Divisions', 'Dhaka', 'Chattogram', 'Rajshahi', 'Khulna', 'Barishal', 'Sylhet', 'Rangpur', 'Mymensingh'],
  'Barbados': ['All Parishes', 'Saint Michael', 'Christ Church', 'Saint George', 'Saint Philip', 'Saint James', 'Saint Andrew', 'Saint Peter', 'Saint Lucy'],
  'Belarus': ['All Regions', 'Minsk', 'Brest', 'Gomel', 'Grodno', 'Mogilev', 'Vitebsk', 'Minsk Region'],
  'Belgium': ['All Provinces', 'Antwerp', 'East Flanders', 'West Flanders', 'Flemish Brabant', 'Limburg', 'Hainaut', 'Liège', 'Namur'],
  'Belize': ['All Districts', 'Belize', 'Cayo', 'Corozal', 'Orange Walk', 'Stann Creek', 'Toledo'],
  'Benin': ['All Departments', 'Atlantique', 'Littoral', 'Ouémé', 'Borgou', 'Zou', 'Mono', 'Atacora', 'Donga'],
  'Bhutan': ['All Districts', 'Thimphu', 'Paro', 'Punakha', 'Chukha', 'Wangdue Phodrang', 'Bumthang', 'Trongsa', 'Samtse'],
  'Bolivia': ['All Departments', 'La Paz', 'Santa Cruz', 'Cochabamba', 'Potosí', 'Oruro', 'Chuquisaca', 'Tarija', 'Beni'],
  'Bosnia and Herzegovina': ['All Regions', 'Sarajevo', 'Tuzla', 'Zenica-Doboj', 'Herzegovina-Neretva', 'Central Bosnia', 'Una-Sana', 'Posavina', 'Republika Srpska'],
  'Botswana': ['All Districts', 'Central', 'Gaborone', 'Kweneng', 'North-East', 'North-West', 'Southern', 'South-East', 'Kgatleng'],
  'Brazil': ['All States', 'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia', 'Paraná', 'Rio Grande do Sul', 'Pernambuco', 'Ceará'],
  'Brunei': ['All Districts', 'Brunei-Muara', 'Belait', 'Tutong', 'Temburong'],
  'Bulgaria': ['All Regions', 'Sofia', 'Plovdiv', 'Varna', 'Burgas', 'Ruse', 'Stara Zagora', 'Pleven', 'Blagoevgrad'],
  'Burkina Faso': ['All Regions', 'Centre', 'Hauts-Bassins', 'Cascades', 'Centre-Est', 'Centre-Nord', 'Centre-Ouest', 'Sahel', 'Boucle du Mouhoun'],
  'Burundi': ['All Provinces', 'Bujumbura', 'Gitega', 'Ngozi', 'Muyinga', 'Kirundo', 'Kayanza', 'Bubanza', 'Makamba'],
  'Cambodia': ['All Provinces', 'Phnom Penh', 'Siem Reap', 'Battambang', 'Kampot', 'Kandal', 'Preah Sihanouk', 'Kampong Cham', 'Pursat'],
  'Cameroon': ['All Regions', 'Centre', 'Littoral', 'West', 'South-West', 'North-West', 'North', 'Far North', 'East'],
  'Canada': ['All Provinces', 'Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba', 'Saskatchewan', 'Nova Scotia', 'New Brunswick'],
  'Cape Verde': ['All Municipalities', 'Santiago', 'São Vicente', 'Sal', 'Boa Vista', 'Fogo', 'Santo Antão', 'São Nicolau', 'Maio'],
  'Central African Republic': ['All Prefectures', 'Bangui', 'Ombella-M’Poko', 'Lobaye', 'Ouham', 'Ouham-Pendé', 'Nana-Mambéré', 'Haute-Kotto', 'Vakaga'],
  'Chad': ['All Regions', 'N’Djamena', 'Chari-Baguirmi', 'Kanem', 'Lac', 'Logone Oriental', 'Mayo-Kebbi Est', 'Ouaddaï', 'Wadi Fira'],
  'Chile': ['All Regions', 'Santiago Metropolitan', 'Valparaíso', 'Biobío', 'Maule', 'O’Higgins', 'Araucanía', 'Los Lagos', 'Antofagasta'],
  'China': ['All Provinces', 'Beijing', 'Shanghai', 'Guangdong', 'Zhejiang', 'Jiangsu', 'Sichuan', 'Hubei', 'Fujian'],
  'Colombia': ['All Departments', 'Bogotá', 'Antioquia', 'Cundinamarca', 'Valle del Cauca', 'Atlántico', 'Bolívar', 'Santander', 'Magdalena'],
  'Comoros': ['All Islands', 'Grande Comore', 'Anjouan', 'Mohéli'],
  'Costa Rica': ['All Provinces', 'San José', 'Alajuela', 'Cartago', 'Heredia', 'Guanacaste', 'Puntarenas', 'Limón'],
  'Croatia': ['All Counties', 'Zagreb', 'Split-Dalmatia', 'Istria', 'Primorje-Gorski Kotar', 'Dubrovnik-Neretva', 'Zadar', 'Osijek-Baranja', 'Šibenik-Knin'],
  'Cuba': ['All Provinces', 'Havana', 'Santiago de Cuba', 'Holguín', 'Villa Clara', 'Camagüey', 'Matanzas', 'Cienfuegos', 'Pinar del Río'],
  'Cyprus': ['All Districts', 'Nicosia', 'Limassol', 'Larnaca', 'Paphos', 'Famagusta', 'Kyrenia'],
  'Czechia': ['All Regions', 'Prague', 'Central Bohemian', 'South Bohemian', 'Plzeň', 'Karlovy Vary', 'Ústí nad Labem', 'Liberec', 'South Moravian'],
  'Denmark': ['All Regions', 'Capital Region', 'Central Denmark', 'North Denmark', 'Zealand', 'Southern Denmark'],
  'Djibouti': ['All Regions', 'Djibouti', 'Ali Sabieh', 'Dikhil', 'Tadjourah', 'Obock', 'Arta'],
  'Dominica': ['All Parishes', 'Saint George', 'Saint Andrew', 'Saint David', 'Saint John', 'Saint Joseph', 'Saint Luke', 'Saint Mark', 'Saint Patrick'],
  'Dominican Republic': ['All Provinces', 'Santo Domingo', 'Santiago', 'Puerto Plata', 'La Altagracia', 'La Romana', 'San Cristóbal', 'Duarte', 'La Vega'],
  'Ecuador': ['All Provinces', 'Pichincha', 'Guayas', 'Azuay', 'Manabí', 'El Oro', 'Tungurahua', 'Loja', 'Imbabura'],
  'Egypt': ['All Governorates', 'Cairo', 'Alexandria', 'Giza', 'Luxor', 'Aswan', 'Red Sea', 'South Sinai', 'Port Said'],
  'El Salvador': ['All Departments', 'San Salvador', 'La Libertad', 'Santa Ana', 'San Miguel', 'Sonsonate', 'Usulután', 'La Paz', 'Cuscatlán'],
  'Equatorial Guinea': ['All Provinces', 'Bioko Norte', 'Bioko Sur', 'Litoral', 'Centro Sur', 'Kié-Ntem', 'Wele-Nzas', 'Annobón'],
  'Eritrea': ['All Regions', 'Central', 'Anseba', 'Southern', 'Northern Red Sea', 'Southern Red Sea', 'Gash-Barka'],
  'Estonia': ['All Counties', 'Harju', 'Tartu', 'Ida-Viru', 'Pärnu', 'Lääne-Viru', 'Viljandi', 'Võru', 'Saare'],
  'Eswatini': ['All Regions', 'Hhohho', 'Manzini', 'Lubombo', 'Shiselweni'],
  'Ethiopia': ['All Regions', 'Addis Ababa', 'Oromia', 'Amhara', 'Tigray', 'Somali', 'SNNPR', 'Afar', 'Benishangul-Gumuz'],
  'Fiji': ['All Divisions', 'Central', 'Eastern', 'Northern', 'Western'],
  'Finland': ['All Regions', 'Uusimaa', 'Southwest Finland', 'Pirkanmaa', 'North Ostrobothnia', 'Lapland', 'Northern Savonia', 'Central Finland', 'Päijät-Häme'],
  'France': ['All Regions', 'Île-de-France', 'Auvergne-Rhône-Alpes', 'Provence-Alpes-Côte d’Azur', 'Occitanie', 'Nouvelle-Aquitaine', 'Hauts-de-France', 'Grand Est', 'Brittany'],
  'Gabon': ['All Provinces', 'Estuaire', 'Haut-Ogooué', 'Moyen-Ogooué', 'Ngounié', 'Nyanga', 'Ogooué-Ivindo', 'Ogooué-Lolo', 'Ogooué-Maritime'],
  'Gambia': ['All Divisions', 'Banjul', 'Kanifing', 'Central River', 'Lower River', 'North Bank', 'Upper River', 'West Coast'],
  'Georgia': ['All Regions', 'Tbilisi', 'Adjara', 'Abkhazia', 'Guria', 'Imereti', 'Kakheti', 'Kvemo Kartli', 'Samegrelo-Zemo Svaneti'],
  'Germany': ['All States', 'Bavaria', 'Berlin', 'Brandenburg', 'Hesse', 'Saxony', 'Hamburg', 'North Rhine-Westphalia', 'Baden-Württemberg'],
  'Ghana': ['All Regions', 'Greater Accra', 'Ashanti', 'Central', 'Eastern', 'Northern', 'Western', 'Volta', 'Bono'],
  'Greece': ['All Regions', 'Attica', 'Central Macedonia', 'Crete', 'Thessaly', 'Western Greece', 'Eastern Macedonia and Thrace', 'Peloponnese', 'Epirus'],
  'Grenada': ['All Parishes', 'Saint George', 'Saint Andrew', 'Saint David', 'Saint John', 'Saint Mark', 'Saint Patrick', 'Carriacou', 'Petite Martinique'],
  'Guatemala': ['All Departments', 'Guatemala', 'Alta Verapaz', 'Baja Verapaz', 'Chimaltenango', 'Escuintla', 'Huehuetenango', 'Izabal', 'Petén'],
  'Guinea': ['All Regions', 'Conakry', 'Kindia', 'Labé', 'Mamou', 'Nzérékoré', 'Boké', 'Faranah', 'Kankan'],
  'Guinea-Bissau': ['All Regions', 'Bafatá', 'Biombo', 'Bolama', 'Cacheu', 'Gabú', 'Oio', 'Quinara', 'Tombali'],
  'Guyana': ['All Regions', 'Barima-Waini', 'Cuyuni-Mazaruni', 'Demerara-Mahaica', 'East Berbice-Corentyne', 'Essequibo Islands-West Demerara', 'Mahaica-Berbice', 'Pomeroon-Supenaam', 'Potaro-Siparuni'],
  'Haiti': ['All Departments', 'Artibonite', 'Centre', 'Grand’Anse', 'Nippes', 'Nord', 'Nord-Est', 'Nord-Ouest', 'Ouest'],
  'Honduras': ['All Departments', 'Francisco Morazán', 'Cortés', 'Atlántida', 'Colón', 'Copán', 'Comayagua', 'Olancho', 'Yoro'],
  'Hungary': ['All Counties', 'Budapest', 'Pest', 'Bács-Kiskun', 'Baranya', 'Békés', 'Borsod-Abaúj-Zemplén', 'Csongrád-Csanád', 'Fejér'],
  'Iceland': ['All Regions', 'Capital Region', 'Southern Peninsula', 'West', 'Westfjords', 'Northwest', 'Northeast', 'East', 'South'],
  'India': ['All States', 'Maharashtra', 'Gujarat', 'Rajasthan', 'Karnataka', 'Tamil Nadu', 'Kerala', 'West Bengal', 'Uttar Pradesh', 'Goa', 'Jammu & Kashmir'],
  'Indonesia': ['All Provinces', 'Jakarta', 'Bali', 'West Java', 'East Java', 'Central Java', 'North Sumatra', 'South Sulawesi', 'West Sumatra'],
  'Iran': ['All Provinces', 'Tehran', 'Isfahan', 'Fars', 'Khuzestan', 'East Azerbaijan', 'Razavi Khorasan', 'Mazandaran', 'Gilan'],
  'Iraq': ['All Governorates', 'Baghdad', 'Basra', 'Erbil', 'Nineveh', 'Anbar', 'Najaf', 'Karbala', 'Sulaymaniyah'],
  'Ireland': ['All Counties', 'Dublin', 'Cork', 'Galway', 'Limerick', 'Waterford', 'Donegal', 'Kerry', 'Mayo'],
  'Israel': ['All Districts', 'Jerusalem', 'Tel Aviv', 'Haifa', 'Central', 'Northern', 'Southern'],
  'Italy': ['All Regions', 'Lazio', 'Lombardy', 'Campania', 'Sicily', 'Veneto', 'Emilia-Romagna', 'Tuscany', 'Piedmont'],
  'Ivory Coast': ['All Regions', 'Abidjan', 'Yamoussoukro', 'Bas-Sassandra', 'Comoé', 'Denguélé', 'Gôh-Djiboua', 'Sassandra-Marahoué', 'Savanes'],
  'Jamaica': ['All Parishes', 'Kingston', 'Saint Andrew', 'Saint Catherine', 'Clarendon', 'Manchester', 'Saint James', 'Saint Ann', 'Westmoreland'],
  'Japan': ['All Prefectures', 'Tokyo', 'Osaka', 'Kyoto', 'Hokkaido', 'Aichi', 'Fukuoka', 'Hiroshima', 'Okinawa'],
  'Jordan': ['All Governorates', 'Amman', 'Irbid', 'Zarqa', 'Aqaba', 'Balqa', 'Madaba', 'Karak', 'Mafraq'],
  'Kazakhstan': ['All Regions', 'Almaty', 'Astana', 'Shymkent', 'Karaganda', 'Turkistan', 'Almaty Region', 'Aktobe', 'East Kazakhstan'],
  'Kenya': ['All Counties', 'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Kiambu', 'Kakamega', 'Machakos', 'Uasin Gishu'],
  'Kuwait': ['All Governorates', 'Capital', 'Hawalli', 'Farwaniya', 'Mubarak Al-Kabeer', 'Ahmadi', 'Jahra'],
  'Kyrgyzstan': ['All Regions', 'Bishkek', 'Osh', 'Chuy', 'Issyk-Kul', 'Jalal-Abad', 'Naryn', 'Talas', 'Batken'],
  'Laos': ['All Provinces', 'Vientiane', 'Luang Prabang', 'Savannakhet', 'Champasak', 'Khammouane', 'Oudomxay', 'Xieng Khouang', 'Luang Namtha'],
  'Latvia': ['All Regions', 'Riga', 'Daugavpils', 'Liepāja', 'Jelgava', 'Jūrmala', 'Ventspils', 'Rēzekne', 'Valmiera'],
  'Lebanon': ['All Governorates', 'Beirut', 'Mount Lebanon', 'North Lebanon', 'South Lebanon', 'Nabatieh', 'Beqaa', 'Baalbek-Hermel', 'Akkar'],
  'Lesotho': ['All Districts', 'Maseru', 'Berea', 'Butha-Buthe', 'Leribe', 'Mafeteng', 'Mohale’s Hoek', 'Mokhotlong', 'Qacha’s Nek'],
  'Liberia': ['All Counties', 'Montserrado', 'Nimba', 'Bong', 'Lofa', 'Grand Bassa', 'Grand Cape Mount', 'Grand Gedeh', 'Maryland'],
  'Libya': ['All Districts', 'Tripoli', 'Benghazi', 'Misrata', 'Sabha', 'Derna', 'Zawiya', 'Sirte', 'Kufra'],
  'Liechtenstein': ['All Municipalities', 'Vaduz', 'Schaan', 'Balzers', 'Triesen', 'Eschen', 'Mauren', 'Triesenberg'],
  'Lithuania': ['All Counties', 'Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys', 'Alytus', 'Marijampolė', 'Tauragė'],
  'Luxembourg': ['All Districts', 'Luxembourg', 'Diekirch', 'Grevenmacher', 'Capellen', 'Esch-sur-Alzette', 'Mersch', 'Redange'],
  'Madagascar': ['All Regions', 'Antananarivo', 'Toamasina', 'Antsiranana', 'Mahajanga', 'Fianarantsoa', 'Toliara', 'Analamanga', 'Boeny'],
  'Malawi': ['All Regions', 'Central', 'Northern', 'Southern'],
  'Malaysia': ['All States', 'Selangor', 'Johor', 'Sabah', 'Sarawak', 'Penang', 'Perak', 'Kedah', 'Pahang'],
  'Maldives': ['All Atolls', 'Malé', 'Addu City', 'Haa Alif', 'Haa Dhaalu', 'Shaviyani', 'Noonu', 'Raa', 'Baa'],
  'Mali': ['All Regions', 'Bamako', 'Gao', 'Kayes', 'Kidal', 'Koulikoro', 'Mopti', 'Ségou', 'Sikasso'],
  'Malta': ['All Regions', 'Northern', 'Central', 'Southern Harbour', 'Northern Harbour', 'South Eastern', 'Gozo'],
  'Mauritania': ['All Regions', 'Nouakchott', 'Adrar', 'Assaba', 'Brakna', 'Dakhlet Nouadhibou', 'Gorgol', 'Guidimaka', 'Hodh Ech Chargui'],
  'Mauritius': ['All Districts', 'Port Louis', 'Plaines Wilhems', 'Black River', 'Flacq', 'Grand Port', 'Moka', 'Pamplemousses', 'Rivière du Rempart'],
  'Mexico': ['All States', 'Mexico City', 'Jalisco', 'Nuevo León', 'Puebla', 'Veracruz', 'Yucatán', 'Oaxaca', 'Quintana Roo'],
  'Micronesia': ['All States', 'Chuuk', 'Kosrae', 'Pohnpei', 'Yap'],
  'Moldova': ['All Districts', 'Chișinău', 'Bălți', 'Cahul', 'Orhei', 'Soroca', 'Ungheni', 'Hîncești', 'Gagauzia'],
  'Monaco': ['All Municipalities', 'Monaco-Ville', 'Monte Carlo', 'La Condamine'],
  'Mongolia': ['All Provinces', 'Ulaanbaatar', 'Arkhangai', 'Bayankhongor', 'Darkhan-Uul', 'Dornod', 'Khentii', 'Khovd', 'Ömnögovi'],
  'Montenegro': ['All Municipalities', 'Podgorica', 'Budva', 'Kotor', 'Bar', 'Herceg Novi', 'Nikšić', 'Cetinje', 'Ulcinj'],
  'Morocco': ['All Regions', 'Casablanca-Settat', 'Rabat-Salé-Kénitra', 'Marrakech-Safi', 'Fès-Meknès', 'Tangier-Tetouan-Al Hoceima', 'Souss-Massa', 'Oriental', 'Drâa-Tafilalet'],
  'Mozambique': ['All Provinces', 'Maputo', 'Gaza', 'Inhambane', 'Sofala', 'Manica', 'Tete', 'Zambézia', 'Nampula'],
  'Myanmar': ['All States', 'Yangon', 'Mandalay', 'Shan', 'Kachin', 'Kayin', 'Mon', 'Rakhine', 'Chin'],
  'Namibia': ['All Regions', 'Khomas', 'Erongo', 'Oshana', 'Oshikoto', 'Otjozondjupa', 'Hardap', 'Karas', 'Kavango East'],
  'Nepal': ['All Provinces', 'Bagmati', 'Gandaki', 'Karnali', 'Lumbini', 'Madhesh', 'Koshi', 'Sudurpashchim'],
  'Netherlands': ['All Provinces', 'North Holland', 'South Holland', 'Utrecht', 'North Brabant', 'Gelderland', 'Limburg', 'Overijssel', 'Groningen'],
  'New Zealand': ['All Regions', 'Auckland', 'Canterbury', 'Wellington', 'Waikato', 'Otago', 'Bay of Plenty', 'Hawke’s Bay', 'Northland'],
  'Nicaragua': ['All Departments', 'Managua', 'León', 'Granada', 'Masaya', 'Matagalpa', 'Chinandega', 'Estelí', 'Jinotega'],
  'Niger': ['All Regions', 'Niamey', 'Agadez', 'Diffa', 'Dosso', 'Maradi', 'Tahoua', 'Tillabéri', 'Zinder'],
  'Nigeria': ['All States', 'Lagos', 'Kano', 'Abuja', 'Rivers', 'Kaduna', 'Oyo', 'Delta', 'Enugu'],
  'North Korea': ['All Provinces', 'Pyongyang', 'Hamgyong', 'Pyongan', 'Hwanghae', 'Kangwon', 'Chagang', 'Ryanggang'],
  'North Macedonia': ['All Regions', 'Skopje', 'Pelagonia', 'Vardar', 'Eastern', 'Northeastern', 'Polog', 'Southeastern', 'Southwestern'],
  'Norway': ['All Counties', 'Oslo', 'Vestland', 'Rogaland', 'Trøndelag', 'Innlandet', 'Nordland', 'Troms', 'Finnmark'],
  'Oman': ['All Governorates', 'Muscat', 'Dhofar', 'Al Batinah North', 'Al Batinah South', 'Ad Dakhiliyah', 'Ash Sharqiyah North', 'Ash Sharqiyah South', 'Al Wusta'],
  'Pakistan': ['All Provinces', 'Punjab', 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan', 'Islamabad Capital Territory', 'Azad Kashmir', 'Gilgit-Baltistan'],
  'Palau': ['All States', 'Babeldaob', 'Koror', 'Peleliu', 'Angaur', 'Kayangel', 'Ngaraard', 'Ngarchelong', 'Ngardmau'],
  'Panama': ['All Provinces', 'Panama', 'Panamá Oeste', 'Colón', 'Chiriquí', 'Bocas del Toro', 'Coclé', 'Herrera', 'Los Santos'],
  'Papua New Guinea': ['All Regions', 'Central', 'Eastern Highlands', 'Enga', 'East New Britain', 'Madang', 'Morobe', 'New Ireland', 'Western Highlands'],
  'Paraguay': ['All Departments', 'Central', 'Alto Paraná', 'Itapúa', 'Caaguazú', 'Amambay', 'Canindeyú', 'Cordillera', 'Guairá'],
  'Peru': ['All Departments', 'Lima', 'Cusco', 'Arequipa', 'La Libertad', 'Piura', 'Loreto', 'Ancash', 'Junín'],
  'Philippines': ['All Regions', 'Metro Manila', 'Cebu', 'Davao', 'Central Luzon', 'Ilocos', 'Bicol', 'Western Visayas', 'Northern Mindanao'],
  'Poland': ['All Voivodeships', 'Masovian', 'Lesser Poland', 'Lower Silesian', 'Greater Poland', 'Pomeranian', 'Silesian', 'Łódź', 'West Pomeranian'],
  'Portugal': ['All Districts', 'Lisbon', 'Porto', 'Braga', 'Faro', 'Aveiro', 'Coimbra', 'Setúbal', 'Leiria'],
  'Qatar': ['All Municipalities', 'Doha', 'Al Rayyan', 'Al Wakrah', 'Al Khor', 'Al Shamal', 'Umm Salal', 'Al Daayen', 'Madinat ash Shamal'],
  'Republic of the Congo': ['All Departments', 'Brazzaville', 'Pointe-Noire', 'Pool', 'Bouenza', 'Cuvette', 'Cuvette-Ouest', 'Niari', 'Sangha'],
  'Romania': ['All Counties', 'Bucharest', 'Cluj', 'Timiș', 'Iași', 'Constanța', 'Brașov', 'Prahova', 'Dolj'],
  'Russia': ['All Regions', 'Moscow', 'Saint Petersburg', 'Moscow Oblast', 'Krasnodar Krai', 'Tatarstan', 'Sverdlovsk Oblast', 'Rostov Oblast', 'Novosibirsk Oblast'],
  'Rwanda': ['All Provinces', 'Kigali', 'Eastern', 'Northern', 'Southern', 'Western'],
  'Saudi Arabia': ['All Provinces', 'Riyadh', 'Makkah', 'Madinah', 'Eastern Province', 'Asir', 'Tabuk', 'Jazan', 'Hail'],
  'Senegal': ['All Regions', 'Dakar', 'Thiès', 'Diourbel', 'Saint-Louis', 'Kaolack', 'Ziguinchor', 'Tambacounda', 'Kolda'],
  'Serbia': ['All Districts', 'Belgrade', 'Vojvodina', 'Šumadija', 'Mačva', 'Zlatibor', 'Nišava', 'Raška', 'South Banat'],
  'Seychelles': ['All Islands', 'Mahé', 'Praslin', 'La Digue', 'Inner Islands'],
  'Sierra Leone': ['All Districts', 'Western Area', 'Eastern', 'Northern', 'North Western', 'Southern'],
  'Singapore': ['All Districts', 'Central Region', 'East Region', 'North Region', 'North-East Region', 'West Region'],
  'Slovakia': ['All Regions', 'Bratislava', 'Košice', 'Prešov', 'Žilina', 'Nitra', 'Banská Bystrica', 'Trnava', 'Trenčín'],
  'Slovenia': ['All Regions', 'Central Slovenia', 'Drava', 'Savinja', 'Coastal-Karst', 'Southeast Slovenia', 'Mura', 'Upper Carniola', 'Gorizia'],
  'Solomon Islands': ['All Provinces', 'Central', 'Choiseul', 'Guadalcanal', 'Isabel', 'Makira-Ulawa', 'Malaita', 'Rennell-Bellona', 'Temotu'],
  'Somalia': ['All Regions', 'Banaadir', 'Hargeisa', 'Awdal', 'Bari', 'Bay', 'Gedo', 'Lower Juba', 'Lower Shabelle'],
  'South Africa': ['All Provinces', 'Gauteng', 'Western Cape', 'KwaZulu-Natal', 'Eastern Cape', 'Free State', 'Limpopo', 'Mpumalanga', 'North West'],
  'South Korea': ['All Provinces', 'Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Gyeonggi', 'Jeju'],
  'South Sudan': ['All States', 'Central Equatoria', 'Eastern Equatoria', 'Western Equatoria', 'Jonglei', 'Lakes', 'Northern Bahr el Ghazal', 'Unity', 'Upper Nile'],
  'Spain': ['All Regions', 'Madrid', 'Catalonia', 'Andalusia', 'Valencia', 'Galicia', 'Basque Country', 'Canary Islands', 'Balearic Islands'],
  'Sri Lanka': ['All Provinces', 'Western', 'Central', 'Southern', 'Northern', 'Eastern', 'North Western', 'North Central', 'Uva'],
  'Sudan': ['All States', 'Khartoum', 'Gezira', 'Red Sea', 'North Kordofan', 'South Darfur', 'North Darfur', 'River Nile', 'White Nile'],
  'Suriname': ['All Districts', 'Paramaribo', 'Brokopondo', 'Commewijne', 'Coronie', 'Marowijne', 'Nickerie', 'Para', 'Saramacca'],
  'Sweden': ['All Counties', 'Stockholm', 'Västra Götaland', 'Skåne', 'Uppsala', 'Östergötland', 'Jönköping', 'Halland', 'Dalarna'],
  'Switzerland': ['All Cantons', 'Zürich', 'Bern', 'Geneva', 'Vaud', 'Ticino', 'Basel-Stadt', 'Lucerne', 'Valais'],
  'Syria': ['All Governorates', 'Damascus', 'Aleppo', 'Homs', 'Latakia', 'Hama', 'Tartus', 'Idlib', 'Raqqa'],
  'Taiwan': ['All Regions', 'Taipei', 'New Taipei', 'Taoyuan', 'Taichung', 'Tainan', 'Kaohsiung', 'Hsinchu', 'Keelung'],
  'Tajikistan': ['All Regions', 'Dushanbe', 'Sughd', 'Khatlon', 'Gorno-Badakhshan', 'Districts of Republican Subordination'],
  'Tanzania': ['All Regions', 'Dar es Salaam', 'Arusha', 'Dodoma', 'Mwanza', 'Zanzibar North', 'Zanzibar South', 'Mbeya', 'Kilimanjaro'],
  'Thailand': ['All Provinces', 'Bangkok', 'Chiang Mai', 'Phuket', 'Chon Buri', 'Khon Kaen', 'Chiang Rai', 'Surat Thani', 'Nakhon Ratchasima'],
  'Timor-Leste': ['All Municipalities', 'Dili', 'Baucau', 'Ermera', 'Liquiçá', 'Manatuto', 'Bobonaro', 'Covalima', 'Lautém'],
  'Togo': ['All Regions', 'Maritime', 'Plateaux', 'Centrale', 'Kara', 'Savanes'],
  'Tonga': ['All Divisions', 'Tongatapu', 'Vavaʻu', 'Haʻapai', 'ʻEua', 'Niuas'],
  'Trinidad and Tobago': ['All Regions', 'Port of Spain', 'San Fernando', 'Arima', 'Chaguanas', 'Point Fortin', 'Diego Martin', 'Tunapuna-Piarco', 'Siparia'],
  'Tunisia': ['All Governorates', 'Tunis', 'Sfax', 'Sousse', 'Ariana', 'Nabeul', 'Bizerte', 'Gabès', 'Kairouan'],
  'Turkey': ['All Regions', 'Istanbul', 'Ankara', 'İzmir', 'Antalya', 'Bursa', 'Adana', 'Konya', 'Gaziantep'],
  'Tuvalu': ['All Islands', 'Funafuti', 'Nanumea', 'Nanumaga', 'Niutao', 'Nui', 'Vaitupu', 'Nukufetau', 'Niulakita'],
  'Uganda': ['All Regions', 'Central', 'Eastern', 'Northern', 'Western'],
  'Ukraine': ['All Regions', 'Kyiv', 'Lviv', 'Odesa', 'Kharkiv', 'Dnipropetrovsk', 'Donetsk', 'Poltava', 'Vinnytsia'],
  'United Arab Emirates': ['All Emirates', 'Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Umm Al Quwain', 'Fujairah', 'Ras Al Khaimah'],
  'United Kingdom': ['All Regions', 'England', 'Scotland', 'Wales', 'Northern Ireland'],
  'United States': ['All States', 'California', 'Texas', 'New York', 'Florida', 'Washington', 'Illinois', 'Pennsylvania', 'Arizona'],
  'USA': ['All States', 'California', 'Texas', 'New York', 'Florida', 'Washington', 'Illinois', 'Pennsylvania', 'Arizona'],
  'Uruguay': ['All Departments', 'Montevideo', 'Canelones', 'Maldonado', 'Salto', 'Paysandú', 'Colonia', 'Rivera', 'Rocha'],
  'Uzbekistan': ['All Regions', 'Tashkent', 'Samarkand', 'Bukhara', 'Fergana', 'Andijan', 'Namangan', 'Khorezm', 'Kashkadarya'],
  'Vanuatu': ['All Provinces', 'Malampa', 'Penama', 'Sanma', 'Shefa', 'Tafea', 'Torba'],
  'Venezuela': ['All States', 'Caracas', 'Zulia', 'Miranda', 'Carabobo', 'Aragua', 'Bolívar', 'Anzoátegui', 'Lara'],
  'Vietnam': ['All Provinces', 'Hanoi', 'Ho Chi Minh City', 'Da Nang', 'Hai Phong', 'Quang Ninh', 'Thanh Hoa', 'Khanh Hoa', 'Dong Nai'],
  'Yemen': ['All Governorates', 'Sana’a', 'Aden', 'Taiz', 'Hodeidah', 'Hadramaut', 'Ibb', 'Marib', 'Saada'],
  'Zambia': ['All Provinces', 'Lusaka', 'Copperbelt', 'Central', 'Eastern', 'Southern', 'Western', 'Northern', 'Luapula'],
  'Zimbabwe': ['All Provinces', 'Harare', 'Bulawayo', 'Manicaland', 'Mashonaland East', 'Mashonaland West', 'Matabeleland North', 'Matabeleland South', 'Midlands']
};

function normalizeCountryName(countryName) {
  return (countryName || '').trim();
}

function getStatesForCountry(countryName) {
  const normalized = normalizeCountryName(countryName);
  if (!normalized) {
    return ['All States'];
  }

  const directMatch = STATE_BY_COUNTRY[normalized] || STATE_BY_COUNTRY[normalized.replace('United States', 'USA')];
  if (directMatch) {
    return directMatch;
  }

  const statesFromData = [...new Set(packageData
    .filter((item) => item.country === normalized)
    .map((item) => item.state))];

  return ['All States', ...statesFromData];
}

const budgetRanges = {
  All: { min: 0, max: Infinity },
  'under-10000': { min: 0, max: 9999 },
  '10000-25000': { min: 10000, max: 25000 },
  '25000-50000': { min: 25000, max: 50000 },
  '50000-100000': { min: 50000, max: 100000 },
  '100000-plus': { min: 100000, max: Infinity }
};

const durationRanges = {
  All: () => true,
  '1-3': (days) => days >= 1 && days <= 3,
  '4-7': (days) => days >= 4 && days <= 7,
  '8-14': (days) => days >= 8 && days <= 14,
  '15-30': (days) => days >= 15 && days <= 30,
  '30-plus': (days) => days > 30
};

const ratingThresholds = { All: 0, '4.5': 4.5, '4.0': 4.0, '3.5': 3.5 };

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);

const stateFilter = document.getElementById('state-filter');
const countryFilter = document.getElementById('country-filter');
const budgetFilter = document.getElementById('budget-filter');
const durationFilter = document.getElementById('duration-filter');
const travelTypeFilter = document.getElementById('travel-type-filter');
const destinationTypeFilter = document.getElementById('destination-type-filter');
const ratingFilter = document.getElementById('rating-filter');
const activityFilter = document.getElementById('activities-filter');
const featuresFilter = document.getElementById('features-filter');
const sortFilter = document.getElementById('sort-filter');
const searchInput = document.getElementById('package-search');
const packageGrid = document.getElementById('package-grid');
const mobileFilterToggle = document.getElementById('mobile-filter-toggle');
const filterPanel = document.getElementById('filter-panel');

function populateCountries() {
  if (!countryFilter) return;

  const options = COUNTRY_OPTIONS.map((country) => `<option value="${country}">${country}</option>`).join('');
  countryFilter.innerHTML = options;
}

function updateStateOptions(selectedCountry) {
  if (!stateFilter) return;

  const states = getStatesForCountry(selectedCountry);
  stateFilter.innerHTML = states.map((state) => `<option value="${state}">${state}</option>`).join('');

  if (selectedCountry === 'All Countries') {
    stateFilter.value = 'All States';
  } else {
    stateFilter.value = states[0] || 'All States';
  }
}

function getActiveFilters() {
  return {
    country: countryFilter ? countryFilter.value : 'All Countries',
    state: stateFilter ? stateFilter.value : 'All States',
    budget: budgetFilter ? budgetFilter.value : 'All',
    duration: durationFilter ? durationFilter.value : 'All',
    travelType: travelTypeFilter ? travelTypeFilter.value : 'All',
    destinationType: destinationTypeFilter ? destinationTypeFilter.value : 'All',
    rating: ratingFilter ? ratingFilter.value : 'All',
    activity: activityFilter ? activityFilter.value : 'All',
    feature: featuresFilter ? featuresFilter.value : 'All',
    sort: sortFilter ? sortFilter.value : 'recommended',
    search: searchInput ? searchInput.value.trim().toLowerCase() : ''
  };
}

function matchesBudget(price, budgetKey) {
  const range = budgetRanges[budgetKey] || budgetRanges.All;
  return price >= range.min && price <= range.max;
}

function matchesDuration(days, durationKey) {
  const matcher = durationRanges[durationKey] || durationRanges.All;
  return matcher(days);
}

function renderPackages() {
  if (!packageGrid) return;

  const filters = getActiveFilters();
  let items = [...packageData];

  items = items.filter((item) => {
    const matchesCountry = filters.country === 'All Countries' || item.country === filters.country;
    const budgetMatches = matchesBudget(item.price, filters.budget);
    const durationMatches = matchesDuration(item.durationDays, filters.duration);
    const matchesTravelType = filters.travelType === 'All' || item.travelType === filters.travelType;
    const matchesDestination = filters.destinationType === 'All' || item.destinationType === filters.destinationType;
    const matchesRating = item.rating >= Number(ratingThresholds[filters.rating] || 0);
    const matchesActivity = filters.activity === 'All' || item.activities.includes(filters.activity);
    const matchesFeature = filters.feature === 'All' || item.features.includes(filters.feature);
    const matchesSearch = !filters.search || `${item.title} ${item.location} ${item.tags.join(' ')}`.toLowerCase().includes(filters.search);

    const stateMatch = filters.state.startsWith('All ') || item.state === filters.state;

    return matchesCountry && stateMatch && budgetMatches && durationMatches && matchesTravelType && matchesDestination && matchesRating && matchesActivity && matchesFeature && matchesSearch;
  });

  if (filters.sort === 'price-asc') {
    items.sort((a, b) => a.price - b.price);
  } else if (filters.sort === 'price-desc') {
    items.sort((a, b) => b.price - a.price);
  } else if (filters.sort === 'rating-desc') {
    items.sort((a, b) => b.rating - a.rating);
  } else if (filters.sort === 'duration-asc') {
    items.sort((a, b) => a.durationDays - b.durationDays);
  } else if (filters.sort === 'duration-desc') {
    items.sort((a, b) => b.durationDays - a.durationDays);
  } else if (filters.sort === 'newest') {
    items.sort((a, b) => b.durationDays - a.durationDays);
  }

  packageGrid.innerHTML = items.map((item) => `
    <article class="package-card">
      <div class="package-image">
        <img src="${item.image}" alt="${item.title}" />
        <span class="package-badge">${item.destinationType}</span>
      </div>
      <div class="package-content">
        <div class="package-meta">
          <div>
            <h3>${item.title}</h3>
            <p>${item.location}</p>
          </div>
          <span class="package-price">${formatCurrency(item.price)}</span>
        </div>
        <div class="package-rating">★★★★★ ${item.rating}</div>
        <div class="package-list">
          ${item.tags.map((tag) => `<span class="package-tag">${tag}</span>`).join('')}
        </div>
        <p>${item.description}</p>
        <div class="package-meta" style="padding-top: 16px; border-top: 1px solid rgba(15,23,42,0.08); margin-top: 12px;">
          <span>${item.durationDays} days</span>
          <a href="contact.html" class="btn btn-primary">Ask about this trip</a>
        </div>
      </div>
    </article>
  `).join('');

  if (!items.length) {
    packageGrid.innerHTML = `
      <div class="package-card" style="grid-column: 1 / -1; padding: 30px; text-align: center;">
        <h3>No packages match your filters.</h3>
        <p>Try another country, state, budget, or travel type.</p>
      </div>
    `;
  }
}

function bindFilterEvents() {
  if (countryFilter) {
    countryFilter.addEventListener('change', (event) => {
      const selectedCountry = event.target.value;
      if (selectedCountry === 'All Countries') {
        stateFilter.innerHTML = '<option value="All States">All States</option>';
        stateFilter.value = 'All States';
      } else {
        updateStateOptions(selectedCountry);
      }
      renderPackages();
    });
  }

  [stateFilter, budgetFilter, durationFilter, travelTypeFilter, destinationTypeFilter, ratingFilter, activityFilter, featuresFilter, sortFilter, searchInput].forEach((element) => {
    if (!element) return;
    element.addEventListener('input', renderPackages);
    element.addEventListener('change', renderPackages);
  });

  if (mobileFilterToggle && filterPanel) {
    mobileFilterToggle.addEventListener('click', () => {
      const isOpen = filterPanel.classList.toggle('open');
      mobileFilterToggle.setAttribute('aria-expanded', String(isOpen));
      mobileFilterToggle.textContent = isOpen ? 'Hide filters' : 'Filters';
    });
  }
}

function init() {
  populateCountries();
  if (countryFilter) {
    countryFilter.value = 'India';
  }
  updateStateOptions('India');
  bindFilterEvents();
  renderPackages();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
