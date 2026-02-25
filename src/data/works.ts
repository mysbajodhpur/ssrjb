
export interface WorkItem {
    id: number;
    title: string;
    description?: string;
    location?: string;
    icon?: string;
}

export const completedWorks: WorkItem[] = [
    {
        id: 1,
        title: "पडियाल सदीदादी मंदिर निर्माण",
        description: "हाल, स्नानघर व शौचालय निर्माण कार्य।",
        location: "पडियाल",
        icon: "temple_hindu"
    },
    {
        id: 2,
        title: "सती दादी मंदिर व्यवस्था",
        description: "40–50 लोगों की रहने-खाने-रसोई की संपूर्ण व्यवस्था उपलब्ध।",
        icon: "home_work"
    },
    {
        id: 3,
        title: "पडियाल - भूमि संरक्षण",
        description: "सामूहिक सहयोग से जमीन लेकर बाउंड्री निर्माण कार्य।",
        location: "पडियाल",
        icon: "landslide"
    },
    {
        id: 4,
        title: "जल एवं पर्यावरण सेवा",
        description: "टांका निर्माण एवं सघन वृक्षारोपण अभियान।",
        icon: "water_drop"
    },
    {
        id: 5,
        title: "पवित्र परिसर सुरक्षा एवं सेवा",
        description: "पुजारी/महाराज नियुक्ति एवं संपूर्ण CCTV सुरक्षा व्यवस्था।",
        icon: "security"
    },
    {
        id: 6,
        title: "वार्षिक मेला आयोजन",
        description: "बिश्नोई समाज एवं परिवारजनों के दर्शन हेतु प्रतिवर्ष भव्य मेले का आयोजन।",
        icon: "event"
    },
    {
        id: 7,
        title: "इतिहास एवं वंशावली संकलन",
        description: "रणधीर जी बाबल एवं बाबल इतिहास का साहित्यकारों के सहयोग से संकलन।",
        icon: "menu_book"
    },
    {
        id: 8,
        title: "फिटकासनी मंदिर निर्माण",
        description: "फिटकासनी में सदीदादी व सती-दादा मंदिर का निर्माण।",
        location: "फिटकासनी",
        icon: "foundation"
    },
    {
        id: 9,
        title: "जागरण एवं जांभाणी कथा",
        description: "फिटकासनी सती-दादी एवं सती-दादा मंदिर हेतु आध्यात्मिक आयोजनों का संचालन।",
        location: "फिटकासनी",
        icon: "auto_stories"
    }
];

export const upcomingProjects: WorkItem[] = [
    {
        id: 1,
        title: "“रणधीर जी बाबल” लाइब्रेरी निर्माण",
        description: "बच्चों के उज्जवल भविष्य के लिए फिटकासनी गांव में आधुनिक लाइब्रेरी। हाल खाली कराने के प्रयास जारी हैं।",
        location: "फिटकासनी",
        icon: "library_books"
    },
    {
        id: 2,
        title: "रणधीर जी पार्क एवं प्याऊ",
        description: "पर्यावरण संरक्षण हेतु पार्क का विकास एवं राहगीरों के लिए प्याऊ निर्माण।",
        icon: "park"
    },
    {
        id: 3,
        title: "ऐतिहासिक पुस्तक प्रकाशन",
        description: "रणधीर जी बाबल व बाबल इतिहास पर विस्तृत पुस्तक का प्रकाशन।",
        icon: "import_contacts"
    },
    {
        id: 4,
        title: "रणधीर जी की छतरी निर्माण",
        description: "मुकाम मंदिर पर भव्य छतरी का निर्माण - सामूहिक एकता एवं प्रयास की आवश्यकता।",
        location: "मुकाम",
        icon: "architecture"
    },
    {
        id: 5,
        title: "रणधीर जी बाबल व खंगार बा पुरस्कार",
        description: "समाज के प्रति उत्कृष्ट सेवा हेतु पुरस्कारों का शुभारंभ।",
        icon: "military_tech"
    },
    {
        id: 6,
        title: "खेजड़ली मंदिर पुनः निर्माण एवं जीर्णोद्धार",
        description: "शहीदों की पावन स्मृति में खेजड़ली मंदिर का भव्य पुनः निर्माण एवं परिसर का नवीनीकरण।",
        location: "खेजड़ली",
        icon: "castle"
    }
];
