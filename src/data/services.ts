
export const servicesData = [
    {
        id: "vidya",
        slug: "education",
        icon: "school",
        title: "विद्या (शिक्षा एवं विकास)",
        tagline: "सशक्त मन, उज्ज्वल भविष्य",
        heroImage: "/images/gallery-img-13.jpeg",
        description: "संविधान के उद्देश्य (7, 9, 10) के अनुरूप, हमारा लक्ष्य बालक-बालिकाओं और महिलाओं के लिए शिक्षा का प्रसार करना, तथा विद्यालय, महाविद्यालय और छात्रावासों का संचालन करना है।",
        stats: [
            { value: "5000+", label: "छात्र लाभान्वित" },
            { value: "12", label: "शिक्षण संस्थान" },
            { value: "100%", label: "साक्षरता लक्ष्य" },
            { value: "850+", label: "छात्रावास सुविधा" }
        ],
        features: [
            {
                title: "छात्रवृत्ति एवं शिक्षण संस्थान",
                description: "विद्यालय और महाविद्यालयों का संचालन एवं गरीब छात्रों के लिए छात्रवृत्ति की व्यवस्था (उद्देश्य 9)।",
                image: "/images/gallery-img-18.jpeg",
                icon: "school",
                linkText: "आवेदन करें",
                linkHref: "/contact"
            },
            {
                title: "छात्रावास एवं वाचनालय",
                description: "छात्र-छात्राओं के लिए छात्रावास (Hostels) और वाचनालय (Libraries) का संचालन (उद्देश्य 10)।",
                image: "/images/gallery-img-02.jpeg",
                icon: "apartment",
                linkText: "सहयोग करें",
                linkHref: "/contact"
            },
            {
                title: "महिला एवं प्रौढ़ शिक्षा",
                description: "बालिकाओं और महिलाओं के शिक्षा एवं विकास संबंधी विशेष कार्य (उद्देश्य 7)।",
                image: "/images/gallery-img-03.jpeg",
                icon: "menu_book",
                linkText: "और जानें",
                linkHref: "/contact"
            }
        ],
        testimonial: {
            quote: "संस्थान की छात्रवृत्ति ने मुझे अपनी इंजीनियरिंग पूरी करने में मदद की। आज मुझे अपने परिवार का सहारा बनने पर गर्व है।",
            author: "विक्रम बिश्नोई",
            role: "पूर्व छात्र",
            image: "/images/gallery-img-04.jpeg"
        }
    },
    {
        id: "nirogi-kaya",
        slug: "health",
        icon: "medical_services",
        title: "निरोगी काया (स्वास्थ्य एवं चिकित्सा)",
        tagline: "पहला सुख निरोगी काया",
        heroImage: "/images/gallery-img-14.jpeg",
        description: "उद्देश्य (8, 11) के तहत, हम गरीब और पिछड़े वर्गों के उत्थान के लिए चिकित्सा सुविधाएं, स्वास्थ्य शिविर और खेती के विकास से संबंधित कार्य प्रदान करते हैं।",
        stats: [
            { value: "100+", label: "चिकित्सा शिविर" },
            { value: "50k+", label: "रोगी उपचारित" },
            { value: "24/7", label: "एम्बुलेंस सेवा" },
            { value: "शून्य", label: "लागत (जरूरतमंदों के लिए)" }
        ],
        features: [
            {
                title: "निःशुल्क चिकित्सा शिविर",
                description: "गरीब एवं पिछड़े लोगों के स्वास्थय लाभ हेतु नियमित चिकित्सा शिविरों का आयोजन (उद्देश्य 11)।",
                image: "/images/gallery-img-19.jpeg",
                icon: "medical_services",
                linkText: "स्वयंसेवक बनें",
                linkHref: "/contact"
            },
            {
                title: "आयुर्वेद एवं खेती विकास",
                description: "स्वास्थ्य के साथ-साथ खेती के आधुनिक तरीकों और औषधीय पौधों के विकास पर कार्य (उद्देश्य 11)।",
                image: "/images/gallery-img-05.jpeg",
                icon: "spa",
                linkText: "विवरण देखें",
                linkHref: "/contact"
            },
            {
                title: "सामाजिक उत्थान",
                description: "आर्थिक और सामाजिक रूप से पिछड़े लोगों को स्वास्थ्य और चिकित्सा सहायता (उद्देश्य 8)।",
                image: "/images/gallery-img-06.jpeg",
                icon: "diversity_1",
                linkText: "दान करें",
                linkHref: "/contact"
            }
        ],
        testimonial: {
            quote: "मेरी माँ को उनके शिविर के माध्यम से मुफ्त मोतियाबिंद की सर्जरी मिली। यह हमारे परिवार के लिए एक आशीर्वाद था।",
            author: "सुनीता देवी",
            role: "लाभार्थी",
            image: "/images/gallery-img-07.jpeg"
        }
    },
    {
        id: "paryavaran",
        slug: "environment",
        icon: "forest",
        title: "पर्यावरण (पारिस्थितिक संरक्षण)",
        tagline: "प्रकृति के रक्षक",
        heroImage: "/images/gallery-img-15.jpeg",
        description: "उद्देश्य (5) के अनुपालन में, हम पर्यावरण और पारिस्थितिक संरक्षण (Ecological Conservation) के लिए प्रतिबद्ध हैं। हम 'सिर साटे रूँख रहे' की परंपरा को जीवित रखते हैं।",
        stats: [
            { value: "1L+", label: "खेजड़ी वृक्षारोपण" },
            { value: "500+", label: "काला हिरण बचाव" },
            { value: "50+", label: "अमृत सरोवर" },
            { value: "100%", label: "पारिस्थितिक संतुलन" }
        ],
        features: [
            {
                title: "पारिस्थितिक संरक्षण",
                description: "पर्यावरण संतुलन बनाए रखने के लिए व्यापक वृक्षारोपण और पारिस्थितिक संरक्षण कार्य (उद्देश्य 5)।",
                image: "/images/gallery-img-20.jpeg",
                icon: "forest",
                linkText: "अभियान से जुड़ें",
                linkHref: "/contact"
            },
            {
                title: "वन्यजीव रक्षण",
                description: "हिरणों और अन्य वन्यजीवों की सुरक्षा और चिकित्सा। यह जीव दया के प्रति हमारी प्रतिबद्धता है।",
                image: "/images/gallery-img-08.jpeg",
                icon: "pets",
                linkText: "सूचना दें",
                linkHref: "/contact"
            },
            {
                title: "जल संरक्षण",
                description: "पारिस्थितिक तन्त्र को सुदृढ़ करने के लिए जल स्रोतों का संरक्षण और विकास।",
                image: "/images/gallery-img-02.jpeg",
                icon: "water_drop",
                linkText: "सहयोग करें",
                linkHref: "/contact"
            }
        ],
        testimonial: {
            quote: "घायल हिरणों को बचाने के लिए उनका समर्पण प्रेरणादायक है। वे हर जानवर की अपने बच्चे की तरह देखभाल करते हैं।",
            author: "रामरख बिश्नोई",
            role: "पर्यावरणविद्",
            image: "/images/gallery-img-09.jpeg"
        }
    },
    {
        id: "sanskar",
        slug: "sanskar",
        icon: "self_improvement",
        title: "संस्कार एवं संस्कृति",
        tagline: "विचारधारा और विरासत",
        heroImage: "/images/gallery-img-16.jpeg",
        description: "उद्देश्य (1, 2, 3, 4, 6) के तहत, हम श्री जम्भेश्वर भगवान और संत रणधीर जी की विचारधारा का प्रचार, मेलों का आयोजन और वंशावली संरक्षण करते हैं।",
        stats: [
            { value: "वार्षिक", label: "मेला आयोजन" },
            { value: "100%", label: "वंशावली संरक्षण" },
            { value: "साप्ताहिक", label: "सत्संग" },
            { value: "नशामुक्ति", label: "अभियान" }
        ],
        features: [
            {
                title: "विचारधारा प्रचार एवं साहित्य",
                description: "श्री जम्भेश्वर भगवान और संत रणधीर जी की शिक्षाओं का प्रचार और बिश्नोई पंथ के साहित्य का विकास (उद्देश्य 1, 2, 12)।",
                image: "/images/gallery-img-10.jpeg",
                icon: "auto_stories",
                linkText: "साहित्य पढ़ें",
                linkHref: "/contact"
            },
            {
                title: "मेला एवं वंशावली",
                description: "श्री रणधीर जी के नाम से मेले का आयोजन (उद्देश्य 3) और बाबल गौत्र की वंशावली का संग्रहण/प्रकाशन (उद्देश्य 4)।",
                image: "/images/gallery-img-11.jpeg",
                icon: "festival",
                linkText: "शामिल हों",
                linkHref: "/contact"
            },
            {
                title: "कुरीति उन्मूलन",
                description: "समाज में व्याप्त कुरीतियों और नशाखोरी का उन्मूलन कर एक आदर्श समाज का निर्माण (उद्देश्य 6)।",
                image: "/images/gallery-img-21.jpeg",
                icon: "block",
                linkText: "समर्थन करें",
                linkHref: "/contact"
            }
        ],
        testimonial: {
            quote: "नशामुक्ति शिविर ने मुझे दूसरा जीवन दिया। अब मैं एक स्वस्थ और सम्मानजनक जीवन जी रहा हूं।",
            author: "सुरेंद्र कुमार",
            role: "लाभार्थी",
            image: "/images/gallery-img-12.jpeg"
        }
    },
    {
        id: "other",
        slug: "other",
        icon: "volunteer_activism",
        title: "अन्य जनहित कार्य",
        tagline: "नर सेवा नारायण सेवा",
        heroImage: "/images/gallery-img-17.jpeg",
        description: "उद्देश्य (13) के अंतर्गत, हम गौ सेवा, पक्षी सेवा और प्याऊ जैसी अन्य जनहितकारी गतिविधियों के माध्यम से सर्वकल्याण के लिए समर्पित हैं।",
        stats: [
            { value: "दैनिक", label: "गौ सेवा" },
            { value: "50+", label: "पक्षी घर" },
            { value: "24/7", label: "जल सेवा" },
            { value: "सभी का", label: "स्वागत" }
        ],
        features: [
            {
                title: "गौ सेवा",
                description: "गौशालाओं का समर्थन करना और आवारा और घायल मवेशियों को चारा और देखभाल प्रदान करना।",
                image: "/images/gallery-img-13.jpeg",
                icon: "grass",
                linkText: "चारा दान करें",
                linkHref: "/contact"
            },
            {
                title: "पक्षी सेवा",
                description: "भीषण गर्मियों के दौरान पक्षियों के लिए चुग्गा घर (चोगवान) और पानी के बर्तन स्थापित करना।",
                image: "/images/gallery-img-02.jpeg",
                icon: "flutter_dash",
                linkText: "सहयोग करें",
                linkHref: "/contact"
            },
            {
                title: "प्याऊ (जल सेवा)",
                description: "सार्वजनिक स्थानों पर पैदल यात्रियों और राहगीरों के लिए मुफ्त ठंडे पानी के प्याऊ की व्यवस्था करना।",
                image: "/images/gallery-img-05.jpeg",
                icon: "water_drop",
                linkText: "स्वयंसेवक बनें",
                linkHref: "/contact"
            }
        ],
        testimonial: {
            quote: "दयालुता का कोई भी कार्य, चाहे वह कितना भी छोटा क्यों न हो, कभी व्यर्थ नहीं जाता। जानवरों के प्रति उनकी दैनिक सेवा हम सभी के लिए एक सबक है।",
            author: "स्थानीय निवासी",
            role: "पर्यवेक्षक",
            image: "/images/gallery-img-08.jpeg"
        }
    }
];
