/* =========================================================
   HOTEL DATA
   Shared dataset used by the hotel listing cards (hotel.html),
   the state search (hotel.js), and the details/booking page
   (hotel-details.html). Each hotel has a `state` field used to
   match against the location search dropdown.

   `agentName` / `agentPhone` identify the booking agent Travel
   Ease connects the guest with for that listing — payment for
   the stay is arranged directly between the guest and this
   agent, not through Travel Ease. Numbers below are placeholder
   demo data (format: WhatsApp-ready digits, no "+" or spaces) —
   swap in each hotel's real agent contact before going live.

   IMAGES: the first 24 entries use this project's own local
   /images/ files (they're also hardcoded into the browse cards
   in hotel.html, so keep those two in sync if you change them).
   Every entry after that is hotlinked to a real photograph from
   Lorem Picsum (picsum.photos), each hotel assigned a different
   numeric photo ID (0-419) so no two listings share an image.
   Picsum's photos are real photographs by real photographers
   (originally sourced via Unsplash) but are NOT pictures of
   hotels specifically — general real-world photography standing
   in as unique placeholder imagery, since sourcing 420 verified,
   individually-licensed real HOTEL photos isn't practical for a
   demo dataset. Swap in each property's real photo before going
   live — and note that because these are hotlinks, they require
   an internet connection and could break if Picsum ever changes
   its ID scheme; download and self-host before going to
   production instead of relying on the hotlink long-term.
   ========================================================= */

const HOTELS = {
    "regal-airport-hotel": {
        name: "Regal Airport Hotel",
        image: "/images/lux1.jpg",
        state: "Lagos",
        score: "8.5",
        reviews: "11,660",
        stars: 5,
        address: "No.9 Cheong Tat Rd, Chek Lap Kok | 24.16KM from city center",
        pricePerNight: 145500,
        description: "A landmark airport hotel with sweeping runway views, set minutes from the terminal for effortless late arrivals and early departures.",
        amenities: ["Free Wi-Fi", "Outdoor Pool", "Airport Shuttle", "Fitness Center", "Fine Dining Restaurant"],
        agentName: "Regal Airport Hotel Booking Agent",
        agentPhone: "2348010000001"
    },

    "crowne-plaza-shanghai": {
        name: "Crowne Plaza SHANGHAI NANJING ROAD by IHG",
        image: "/images/ux2.jpg",
        state: "FCT — Abuja",
        score: "9.3",
        reviews: "11,758",
        stars: 5,
        address: "No. 719 Nanjing East Road, North Gate, No. 700 Jiujiang Road, South Gate | 0.54KM from city center",
        pricePerNight: 145500,
        description: "Steps from Nanjing Road's shopping and lights, this IHG flagship pairs polished service with easy access to the Bund.",
        amenities: ["Free Wi-Fi", "Spa & Wellness Center", "Business Center", "Room Service", "Concierge Service"],
        agentName: "Crowne Plaza SHANGHAI NANJING ROAD by IHG Booking Agent",
        agentPhone: "2348010000002"
    },

    "twin-towers-hotel": {
        name: "Twin Towers Hotel",
        image: "/images/ux3.jpg",
        state: "Rivers",
        score: "8.5",
        reviews: "5,002",
        stars: 5,
        address: "88 Rama VI Rd, Khwaeng Rong Muang, Khet | 2.01KM from city center",
        pricePerNight: 45000,
        description: "A resort-style stay built around a striking outdoor pool, just a short ride from the city's rail links.",
        amenities: ["Free Wi-Fi", "Outdoor Pool", "Fitness Center", "Room Service", "Valet Parking"],
        agentName: "Twin Towers Hotel Booking Agent",
        agentPhone: "2348010000003"
    },

    "asia-international-hotel": {
        name: "Asia International Hotel",
        image: "/images/ux4.jpg",
        state: "Kano",
        score: "9.2",
        reviews: "2,791",
        stars: 5,
        address: "No. 326-1 Huanshi East Road | 4.59KM from city center",
        pricePerNight: 109500,
        description: "Floor-to-ceiling skyline views and a calm, business-ready atmosphere make this a favorite for city stopovers.",
        amenities: ["Free Wi-Fi", "Business Center", "Fine Dining Restaurant", "Room Service", "Concierge Service"],
        agentName: "Asia International Hotel Booking Agent",
        agentPhone: "2348010000004"
    },

    "lagos-marina-grand-hotel": {
        name: "Lagos Marina Grand Hotel",
        image: "/images/ux5.jpg",
        state: "Lagos",
        score: "9.0",
        reviews: "6,240",
        stars: 5,
        address: "1 Marina Road, Lagos Island | 1.2KM from city center",
        pricePerNight: 180000,
        description: "Overlooking the Marina waterfront, this Lagos Island address puts the city's business district right outside your door.",
        amenities: ["Free Wi-Fi", "Outdoor Pool", "Spa & Wellness Center", "Airport Shuttle", "Fitness Center"],
        agentName: "Lagos Marina Grand Hotel Booking Agent",
        agentPhone: "2348010000005"
    },

    "eko-atlantic-bay-resort": {
        name: "Eko Atlantic Bay Resort",
        image: "/images/ux6.jpg",
        state: "Lagos",
        score: "9.4",
        reviews: "4,180",
        stars: 5,
        address: "Eko Atlantic City, Victoria Island | 3.4KM from city center",
        pricePerNight: 225000,
        description: "A beachfront escape on the new Eko Atlantic shoreline, built for long weekends and waterfront dining.",
        amenities: ["Free Wi-Fi", "Private Beach Access", "Outdoor Pool", "Spa & Wellness Center", "Fine Dining Restaurant"],
        agentName: "Eko Atlantic Bay Resort Booking Agent",
        agentPhone: "2348010000006"
    },

    "burj-al-nile-hotel": {
        name: "Burj Al Nile Hotel",
        image: "/images/ux7.jpg",
        state: "Delta",
        score: "9.1",
        reviews: "7,320",
        stars: 5,
        address: "Corniche Avenue, Abu Dhabi | 2.8KM from city center",
        pricePerNight: 315000,
        description: "A statement tower on the Corniche, pairing five-star service with sweeping waterfront views.",
        amenities: ["Free Wi-Fi", "Outdoor Pool", "Spa & Wellness Center", "Valet Parking", "Concierge Service"],
        agentName: "Burj Al Nile Hotel Booking Agent",
        agentPhone: "2348010000007"
    },

    "the-continental-grand": {
        name: "The Continental Grand",
        image: "/images/ux8.jpg",
        state: "Kaduna",
        score: "8.9",
        reviews: "9,015",
        stars: 5,
        address: "45 Park Lane, London | 0.9KM from city center",
        pricePerNight: 390000,
        description: "A grand European address on Park Lane, walking distance from the city's best shopping and theatre.",
        amenities: ["Free Wi-Fi", "Fine Dining Restaurant", "Room Service", "Business Center", "Concierge Service"],
        agentName: "The Continental Grand Booking Agent",
        agentPhone: "2348010000008"
    },

    "gostops-amritsar": {
        name: "Gostops Amritsar, Golden Temple",
        image: "/images/bud1.jpg",
        state: "Oyo",
        score: "8.7",
        reviews: "110",
        stars: 3,
        address: "44 kishangarh colony b/s Gurdwara baba deep singh ji Chattiwind, gate | 2.32KM from city center",
        pricePerNight: 4500,
        description: "A colorful backpacker favorite a short walk from the Golden Temple, built around a lively shared courtyard.",
        amenities: ["Free Wi-Fi", "Shared Kitchen", "Common Lounge", "Luggage Storage", "24-Hour Front Desk"],
        agentName: "Gostops Amritsar, Golden Temple Booking Agent",
        agentPhone: "2348010000009"
    },

    "the-hosteller-amritsar": {
        name: "The Hosteller Amritsar, Near Golden Temple",
        image: "/images/bud2.jpg",
        state: "Oyo",
        score: "8.8",
        reviews: "43",
        stars: 3,
        address: "City Centre, 91 - 92, Ram Talai Rd, near Guru Nanak Bhawan, Phoola Singh Burj | 1.56KM from city center",
        pricePerNight: 4500,
        description: "Simple, clean rooms in the heart of the old city, minutes on foot from the Golden Temple complex.",
        amenities: ["Free Wi-Fi", "Shared Kitchen", "Laundry Service", "24-Hour Front Desk", "Air Conditioning"],
        agentName: "The Hosteller Amritsar, Near Golden Temple Booking Agent",
        agentPhone: "2348010000010"
    },

    "hostel-66-chongqing": {
        name: "66 Hostel (Jiefangbei Area/Hong Ya Dong)",
        image: "/images/bud3.jpg",
        state: "Enugu",
        score: "9.6",
        reviews: "93",
        stars: 2,
        address: "Room 16, 30th Floor, Xin Chongqing Apartment, No. 18 Minzu Road | 2.94KM from city center",
        pricePerNight: 4500,
        description: "A sky-high budget stay above Jiefangbei, with Hong Ya Dong's stacked lights just across the river.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Luggage Storage", "Common Lounge", "24-Hour Front Desk"],
        agentName: "66 Hostel (Jiefangbei Area/Hong Ya Dong) Booking Agent",
        agentPhone: "2348010000011"
    },

    "mint-hostel": {
        name: "Mint Hostel",
        image: "/images/bud4.jpg",
        state: "Kano",
        score: "7.2",
        reviews: "376",
        stars: 3,
        address: "316/1 Prachathipatai Rd, Ban Phan Thom | 4.54KM from city center",
        pricePerNight: 4500,
        description: "A no-frills, well-kept hostel near the old town canals, popular with travelers passing through on a budget.",
        amenities: ["Free Wi-Fi", "Shared Kitchen", "Bicycle Rental", "Laundry Service", "24-Hour Front Desk"],
        agentName: "Mint Hostel Booking Agent",
        agentPhone: "2348010000012"
    },

    "sunrise-backpackers-lodge": {
        name: "Sunrise Backpackers Lodge",
        image: "/images/bud5.jpg",
        state: "Lagos",
        score: "8.4",
        reviews: "214",
        stars: 2,
        address: "12 Ikeja Close, Lagos | 3.1KM from city center",
        pricePerNight: 7500,
        description: "A relaxed lodge in Ikeja with easy airport access, geared toward travelers who'd rather spend on experiences than rooms.",
        amenities: ["Free Wi-Fi", "Common Lounge", "Luggage Storage", "Air Conditioning", "24-Hour Front Desk"],
        agentName: "Sunrise Backpackers Lodge Booking Agent",
        agentPhone: "2348010000013"
    },

    "green-leaf-guest-rooms": {
        name: "Green Leaf Guest Rooms",
        image: "/images/bud6.jpg",
        state: "FCT — Abuja",
        score: "8.1",
        reviews: "98",
        stars: 2,
        address: "Plot 7, Wuse Zone 2, Abuja | 1.8KM from city center",
        pricePerNight: 9000,
        description: "Quiet guest rooms in Abuja's Wuse district, a practical base for short business or family visits.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Laundry Service", "24-Hour Front Desk", "Luggage Storage"],
        agentName: "Green Leaf Guest Rooms Booking Agent",
        agentPhone: "2348010000014"
    },

    "nomads-rest-hostel": {
        name: "Nomad's Rest Hostel",
        image: "/images/bud7.jpg",
        state: "Enugu",
        score: "8.9",
        reviews: "502",
        stars: 3,
        address: "22 Rue de la Paix, Marrakech | 0.9KM from city center",
        pricePerNight: 6000,
        description: "Tucked near the medina, this hostel mixes traditional courtyard charm with a genuinely social atmosphere.",
        amenities: ["Free Wi-Fi", "Shared Kitchen", "Common Lounge", "Bicycle Rental", "24-Hour Front Desk"],
        agentName: "Nomad's Rest Hostel Booking Agent",
        agentPhone: "2348010000015"
    },

    "harbor-view-inn": {
        name: "Harbor View Inn",
        image: "/images/bud8.jpg",
        state: "Rivers",
        score: "7.9",
        reviews: "167",
        stars: 2,
        address: "8 Quayside Rd, Mombasa | 2.5KM from city center",
        pricePerNight: 7500,
        description: "Simple rooms overlooking Mombasa's harbor, a short stroll from the old town's waterfront market.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Luggage Storage", "24-Hour Front Desk", "Laundry Service"],
        agentName: "Harbor View Inn Booking Agent",
        agentPhone: "2348010000016"
    },

    "dayin-youth-hostel": {
        name: "Dayin International Youth Hostel (East Nanjing Road & The Bund)",
        image: "/images/trend1.png",
        state: "Delta",
        score: "9.5",
        reviews: "8,466",
        stars: 3,
        address: "No. 98 Liuhe Road | 0.68KM from city center",
        pricePerNight: 19500,
        description: "A beautifully restored heritage building steps from the Bund, blending old Shanghai character with modern comfort.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Rooftop Terrace", "Bar", "Daily Housekeeping"],
        agentName: "Dayin International Youth Hostel (East Nanjing Road & The Bund) Booking Agent",
        agentPhone: "2348010000017"
    },

    "poshpacker-chengdu": {
        name: "POSHPACKER Chengdu Flipflop Hostel",
        image: "/images/trend2.jpg",
        state: "Kaduna",
        score: "9.2",
        reviews: "3,533",
        stars: 2,
        address: "3rd Floor, No. 98 Dongsheng Street | 1.4KM from city center",
        pricePerNight: 10500,
        description: "A design-forward hostel in central Chengdu, known for its rooftop hangout and laid-back social scene.",
        amenities: ["Free Wi-Fi", "Rooftop Terrace", "Bar", "Air Conditioning", "Non-smoking Rooms"],
        agentName: "POSHPACKER Chengdu Flipflop Hostel Booking Agent",
        agentPhone: "2348010000018"
    },

    "monday-capsule-bangkok": {
        name: "Monday Capsule Hostel and Thai Traditional Bath Bangkok",
        image: "/images/trnd3.jpg",
        state: "Ogun",
        score: "8.6",
        reviews: "781",
        stars: 3,
        address: "28/8 Rong Mai Alley The Green Complex Building (2nd Floor) | 4.89KM from city center",
        pricePerNight: 4500,
        description: "Sleek capsule pods paired with an on-site traditional Thai bath house, a genuinely different way to rest up.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Daily Housekeeping", "Non-smoking Rooms", "Family Rooms"],
        agentName: "Monday Capsule Hostel and Thai Traditional Bath Bangkok Booking Agent",
        agentPhone: "2348010000019"
    },

    "the-twizt-hostel": {
        name: "The Twizt - Lifestyle Hostel & Hotel",
        image: "/images/trnd4.jpg",
        state: "FCT — Abuja",
        score: "9.3",
        reviews: "369",
        stars: 3,
        address: "16th Ave St | 0.41KM from city center",
        pricePerNight: 12000,
        description: "A boutique lifestyle hostel with hotel-grade comfort, built around communal spaces and local art.",
        amenities: ["Free Wi-Fi", "Bar", "Rooftop Terrace", "Air Conditioning", "Daily Housekeeping"],
        agentName: "The Twizt - Lifestyle Hostel & Hotel Booking Agent",
        agentPhone: "2348010000020"
    },

    "riverside-boutique-guesthouse": {
        name: "Riverside Boutique Guesthouse",
        image: "/images/trnd5.jpg",
        state: "Cross River",
        score: "9.0",
        reviews: "1,204",
        stars: 3,
        address: "14 River Rd, Calabar | 1.1KM from city center",
        pricePerNight: 27000,
        description: "A calm riverside guesthouse in Calabar, a short drive from the city's museums and waterfront promenade.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Daily Housekeeping", "Family Rooms", "Airport Transfer (fee)"],
        agentName: "Riverside Boutique Guesthouse Booking Agent",
        agentPhone: "2348010000021"
    },

    "studio-88-guest-house": {
        name: "Studio 88 Guest House",
        image: "/images/trnd6.jpg",
        state: "Ogun",
        score: "8.7",
        reviews: "674",
        stars: 3,
        address: "88 Craft Lane, Cape Town | 2.0KM from city center",
        pricePerNight: 33000,
        description: "Bright, studio-style rooms in a Cape Town creative quarter, close to galleries, cafes, and the waterfront.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Non-smoking Rooms", "Daily Housekeeping", "Family Rooms"],
        agentName: "Studio 88 Guest House Booking Agent",
        agentPhone: "2348010000022"
    },

    "casa-bella-guest-rooms": {
        name: "Casa Bella Guest Rooms",
        image: "/images/trnd7.jpg",
        state: "Cross River",
        score: "9.1",
        reviews: "2,310",
        stars: 3,
        address: "Via Roma 21, Florence | 0.6KM from city center",
        pricePerNight: 40500,
         description: "Elegant, family-run guest rooms on a quiet Florence street, minutes on foot from the Duomo.",
        amenities: ["Free Wi-Fi", "Daily Housekeeping", "Non-smoking Rooms", "Family Rooms", "Airport Transfer (fee)"],
        agentName: "Casa Bella Guest Rooms Booking Agent",
        agentPhone: "2348010000023"
    },

    "the-palm-courtyard": {
        name: "The Palm Courtyard",
        image: "/images/trnd8.jpg",
        state: "Akwa Ibom",
        score: "8.8",
        reviews: "940",
        stars: 2,
        address: "Palm Grove Ave, Zanzibar | 1.7KM from city center",
        pricePerNight: 22500,
        description: "A shaded palm courtyard sets the tone at this relaxed Zanzibar guesthouse, close to the old stone town.",
        amenities: ["Free Wi-Fi", "Rooftop Terrace", "Air Conditioning", "Airport Transfer (fee)", "Bar"],
        agentName: "The Palm Courtyard Booking Agent",
        agentPhone: "2348010000024"
    },

    "umuahia-grand-grand-hotel": {
        name: "Umuahia Grand Grand Hotel",
        image: "https://picsum.photos/id/0/800/600",
        state: "Abia",
        score: "8.1",
        reviews: "308",
        stars: 3,
        address: "48 Market Road, Umuahia | 4.53KM from city center",
        pricePerNight: 19500,
        description: "A comfortable, well-kept mid-range hotel in Umuahia, popular with business and family travelers alike.",
        amenities: ["Family Rooms", "Air Conditioning", "24-Hour Front Desk", "Daily Housekeeping", "Free Wi-Fi"],
        agentName: "Umuahia Grand Grand Hotel Booking Agent",
        agentPhone: "2348010000051"
    },

    "aba-emerald-inn": {
        name: "Aba Emerald Inn",
        image: "https://picsum.photos/id/1/800/600",
        state: "Abia",
        score: "7.5",
        reviews: "26",
        stars: 2,
        address: "13 Commercial Avenue, Aba | 4.36KM from city center",
        pricePerNight: 10500,
        description: "A simple, budget-friendly stay in Aba, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Air Conditioning", "Luggage Storage", "Generator Backup", "24-Hour Front Desk"],
        agentName: "Aba Emerald Inn Booking Agent",
        agentPhone: "2348010000052"
    },

    "ohafia-grand-lodge": {
        name: "Ohafia Grand Lodge",
        image: "https://picsum.photos/id/2/800/600",
        state: "Abia",
        score: "9.0",
        reviews: "996",
        stars: 4,
        address: "10 Hospital Road, Ohafia | 6.24KM from city center",
        pricePerNight: 45000,
        description: "A polished hotel in Ohafia with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Fitness Center", "Free Wi-Fi", "Concierge Service", "Room Service", "Airport Transfer (fee)"],
        agentName: "Ohafia Grand Lodge Booking Agent",
        agentPhone: "2348010000053"
    },

    "umuahia-elite-palace-hotel": {
        name: "Umuahia Elite Palace Hotel",
        image: "https://picsum.photos/id/3/800/600",
        state: "Abia",
        score: "7.3",
        reviews: "31",
        stars: 2,
        address: "30 Stadium Road, Umuahia | 1.16KM from city center",
        pricePerNight: 12000,
        description: "A simple, budget-friendly stay in Umuahia, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Free Wi-Fi", "Generator Backup", "24-Hour Front Desk", "Laundry Service"],
        agentName: "Umuahia Elite Palace Hotel Booking Agent",
        agentPhone: "2348010000054"
    },

    "aba-rosewood-suites": {
        name: "Aba Rosewood Suites",
        image: "https://picsum.photos/id/4/800/600",
        state: "Abia",
        score: "7.8",
        reviews: "313",
        stars: 3,
        address: "6 Station Road, Aba | 1.82KM from city center",
        pricePerNight: 24500,
        description: "A comfortable, well-kept mid-range hotel in Aba, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Outdoor Pool", "Room Service", "Daily Housekeeping", "Non-smoking Rooms"],
        agentName: "Aba Rosewood Suites Booking Agent",
        agentPhone: "2348010000055"
    },

    "ohafia-elite-inn": {
        name: "Ohafia Elite Inn",
        image: "https://picsum.photos/id/5/800/600",
        state: "Abia",
        score: "7.7",
        reviews: "38",
        stars: 2,
        address: "41 Airport Road, Ohafia | 3.66KM from city center",
        pricePerNight: 11000,
        description: "A simple, budget-friendly stay in Ohafia, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Air Conditioning", "Shared Kitchen", "Laundry Service", "24-Hour Front Desk"],
        agentName: "Ohafia Elite Inn Booking Agent",
        agentPhone: "2348010000056"
    },

    "umuahia-summit-grand-hotel": {
        name: "Umuahia Summit Grand Hotel",
        image: "https://picsum.photos/id/6/800/600",
        state: "Abia",
        score: "9.2",
        reviews: "2,228",
        stars: 5,
        address: "15 Station Road, Umuahia | 0.6KM from city center",
        pricePerNight: 77500,
        description: "A standout, full-service hotel in Umuahia, offering five-star comfort and attentive concierge service.",
        amenities: ["Fitness Center", "Valet Parking", "Spa & Wellness Center", "Free Wi-Fi", "Outdoor Pool"],
        agentName: "Umuahia Summit Grand Hotel Booking Agent",
        agentPhone: "2348010000057"
    },

    "aba-pearl-grand-hotel": {
        name: "Aba Pearl Grand Hotel",
        image: "https://picsum.photos/id/7/800/600",
        state: "Abia",
        score: "8.7",
        reviews: "1,322",
        stars: 4,
        address: "57 Independence Way, Aba | 3.2KM from city center",
        pricePerNight: 49000,
        description: "A polished hotel in Aba with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Fine Dining Restaurant", "Outdoor Pool", "Concierge Service", "Airport Transfer (fee)", "Business Center"],
        agentName: "Aba Pearl Grand Hotel Booking Agent",
        agentPhone: "2348010000058"
    },

    "ohafia-horizon-palace-hotel": {
        name: "Ohafia Horizon Palace Hotel",
        image: "https://picsum.photos/id/8/800/600",
        state: "Abia",
        score: "8.2",
        reviews: "304",
        stars: 3,
        address: "33 GRA, Ohafia | 0.95KM from city center",
        pricePerNight: 19500,
        description: "A comfortable, well-kept mid-range hotel in Ohafia, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Non-smoking Rooms", "Bar", "Outdoor Pool"],
        agentName: "Ohafia Horizon Palace Hotel Booking Agent",
        agentPhone: "2348010000059"
    },

    "umuahia-horizon-palace-hotel": {
        name: "Umuahia Horizon Palace Hotel",
        image: "https://picsum.photos/id/9/800/600",
        state: "Abia",
        score: "7.9",
        reviews: "470",
        stars: 3,
        address: "34 Government House Road, Umuahia | 6.32KM from city center",
        pricePerNight: 30500,
        description: "A comfortable, well-kept mid-range hotel in Umuahia, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Bar", "24-Hour Front Desk", "Room Service"],
        agentName: "Umuahia Horizon Palace Hotel Booking Agent",
        agentPhone: "2348010000060"
    },

    "aba-prestige-suites": {
        name: "Aba Prestige Suites",
        image: "https://picsum.photos/id/10/800/600",
        state: "Abia",
        score: "8.1",
        reviews: "241",
        stars: 3,
        address: "1 Commercial Avenue, Aba | 5.74KM from city center",
        pricePerNight: 30000,
        description: "A comfortable, well-kept mid-range hotel in Aba, popular with business and family travelers alike.",
        amenities: ["24-Hour Front Desk", "Room Service", "Family Rooms", "Free Wi-Fi", "Non-smoking Rooms"],
        agentName: "Aba Prestige Suites Booking Agent",
        agentPhone: "2348010000061"
    },

    "ohafia-bellavista-palace-hotel": {
        name: "Ohafia Bellavista Palace Hotel",
        image: "https://picsum.photos/id/11/800/600",
        state: "Abia",
        score: "8.6",
        reviews: "1,065",
        stars: 4,
        address: "11 Stadium Road, Ohafia | 6.22KM from city center",
        pricePerNight: 61000,
        description: "A polished hotel in Ohafia with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Free Wi-Fi", "Fine Dining Restaurant", "Business Center", "Room Service", "Airport Transfer (fee)"],
        agentName: "Ohafia Bellavista Palace Hotel Booking Agent",
        agentPhone: "2348010000062"
    },

    "yola-elite-guest-house": {
        name: "Yola Elite Guest House",
        image: "https://picsum.photos/id/12/800/600",
        state: "Adamawa",
        score: "7.2",
        reviews: "81",
        stars: 2,
        address: "37 Market Road, Yola | 0.92KM from city center",
        pricePerNight: 13000,
        description: "A simple, budget-friendly stay in Yola, geared toward travelers who need a practical, affordable base.",
        amenities: ["Shared Kitchen", "Common Lounge", "Free Wi-Fi", "Generator Backup", "Air Conditioning"],
        agentName: "Yola Elite Guest House Booking Agent",
        agentPhone: "2348010000063"
    },

    "mubi-regal-apartments": {
        name: "Mubi Regal Apartments",
        image: "https://picsum.photos/id/13/800/600",
        state: "Adamawa",
        score: "7.2",
        reviews: "155",
        stars: 2,
        address: "39 New Layout, Mubi | 6.28KM from city center",
        pricePerNight: 13000,
        description: "A simple, budget-friendly stay in Mubi, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Laundry Service", "24-Hour Front Desk", "Shared Kitchen", "Common Lounge"],
        agentName: "Mubi Regal Apartments Booking Agent",
        agentPhone: "2348010000064"
    },

    "numan-bellavista-villa-hotel": {
        name: "Numan Bellavista Villa Hotel",
        image: "https://picsum.photos/id/14/800/600",
        state: "Adamawa",
        score: "7.9",
        reviews: "310",
        stars: 3,
        address: "22 Ring Road, Numan | 3.99KM from city center",
        pricePerNight: 17000,
        description: "A comfortable, well-kept mid-range hotel in Numan, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Family Rooms", "Free Wi-Fi", "Outdoor Pool", "Bar"],
        agentName: "Numan Bellavista Villa Hotel Booking Agent",
        agentPhone: "2348010000065"
    },

    "yola-harmony-hotel": {
        name: "Yola Harmony Hotel",
        image: "https://picsum.photos/id/15/800/600",
        state: "Adamawa",
        score: "7.9",
        reviews: "38",
        stars: 2,
        address: "16 Government House Road, Yola | 4.48KM from city center",
        pricePerNight: 10000,
        description: "A simple, budget-friendly stay in Yola, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Generator Backup", "Air Conditioning", "Common Lounge", "Shared Kitchen"],
        agentName: "Yola Harmony Hotel Booking Agent",
        agentPhone: "2348010000066"
    },

    "mubi-regal-hostel": {
        name: "Mubi Regal Hostel",
        image: "https://picsum.photos/id/16/800/600",
        state: "Adamawa",
        score: "7.2",
        reviews: "44",
        stars: 2,
        address: "28 Old Market Road, Mubi | 2.98KM from city center",
        pricePerNight: 11500,
        description: "A simple, budget-friendly stay in Mubi, geared toward travelers who need a practical, affordable base.",
        amenities: ["Shared Kitchen", "Common Lounge", "Laundry Service", "Free Wi-Fi", "Generator Backup"],
        agentName: "Mubi Regal Hostel Booking Agent",
        agentPhone: "2348010000067"
    },

    "numan-cedar-resort": {
        name: "Numan Cedar Resort",
        image: "https://picsum.photos/id/17/800/600",
        state: "Adamawa",
        score: "7.8",
        reviews: "47",
        stars: 2,
        address: "13 Hospital Road, Numan | 3.67KM from city center",
        pricePerNight: 8000,
        description: "A simple, budget-friendly stay in Numan, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Luggage Storage", "Air Conditioning", "Shared Kitchen", "Common Lounge"],
        agentName: "Numan Cedar Resort Booking Agent",
        agentPhone: "2348010000068"
    },

    "yola-whitestone-suites": {
        name: "Yola Whitestone Suites",
        image: "https://picsum.photos/id/18/800/600",
        state: "Adamawa",
        score: "7.4",
        reviews: "160",
        stars: 2,
        address: "4 Independence Way, Yola | 6.5KM from city center",
        pricePerNight: 7000,
        description: "A simple, budget-friendly stay in Yola, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Shared Kitchen", "Air Conditioning", "Laundry Service", "Luggage Storage"],
        agentName: "Yola Whitestone Suites Booking Agent",
        agentPhone: "2348010000069"
    },

    "mubi-emerald-hostel": {
        name: "Mubi Emerald Hostel",
        image: "https://picsum.photos/id/19/800/600",
        state: "Adamawa",
        score: "8.7",
        reviews: "248",
        stars: 3,
        address: "1 New Layout, Mubi | 2.02KM from city center",
        pricePerNight: 27500,
        description: "A comfortable, well-kept mid-range hotel in Mubi, popular with business and family travelers alike.",
        amenities: ["Non-smoking Rooms", "24-Hour Front Desk", "Daily Housekeeping", "Bar", "Family Rooms"],
        agentName: "Mubi Emerald Hostel Booking Agent",
        agentPhone: "2348010000070"
    },

    "numan-regal-lodge": {
        name: "Numan Regal Lodge",
        image: "https://picsum.photos/id/20/800/600",
        state: "Adamawa",
        score: "8.0",
        reviews: "302",
        stars: 3,
        address: "38 Commercial Avenue, Numan | 3.71KM from city center",
        pricePerNight: 17000,
        description: "A comfortable, well-kept mid-range hotel in Numan, popular with business and family travelers alike.",
        amenities: ["Bar", "Free Wi-Fi", "Non-smoking Rooms", "24-Hour Front Desk", "Daily Housekeeping"],
        agentName: "Numan Regal Lodge Booking Agent",
        agentPhone: "2348010000071"
    },

    "yola-riverside-apartments": {
        name: "Yola Riverside Apartments",
        image: "https://picsum.photos/id/21/800/600",
        state: "Adamawa",
        score: "8.0",
        reviews: "600",
        stars: 3,
        address: "55 Airport Road, Yola | 0.82KM from city center",
        pricePerNight: 17500,
        description: "A comfortable, well-kept mid-range hotel in Yola, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Daily Housekeeping", "Non-smoking Rooms", "Free Wi-Fi", "24-Hour Front Desk"],
        agentName: "Yola Riverside Apartments Booking Agent",
        agentPhone: "2348010000072"
    },

    "mubi-oasis-hotel": {
        name: "Mubi Oasis Hotel",
        image: "https://picsum.photos/id/22/800/600",
        state: "Adamawa",
        score: "7.6",
        reviews: "127",
        stars: 2,
        address: "38 Cathedral Road, Mubi | 3.59KM from city center",
        pricePerNight: 11500,
        description: "A simple, budget-friendly stay in Mubi, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Air Conditioning", "Laundry Service", "24-Hour Front Desk", "Common Lounge"],
        agentName: "Mubi Oasis Hotel Booking Agent",
        agentPhone: "2348010000073"
    },

    "numan-sunset-retreat": {
        name: "Numan Sunset Retreat",
        image: "https://picsum.photos/id/23/800/600",
        state: "Adamawa",
        score: "7.6",
        reviews: "137",
        stars: 2,
        address: "60 Waterside Road, Numan | 6.11KM from city center",
        pricePerNight: 8500,
        description: "A simple, budget-friendly stay in Numan, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Luggage Storage", "Generator Backup", "Laundry Service", "Shared Kitchen"],
        agentName: "Numan Sunset Retreat Booking Agent",
        agentPhone: "2348010000074"
    },

    "uyo-emerald-apartments": {
        name: "Uyo Emerald Apartments",
        image: "https://picsum.photos/id/24/800/600",
        state: "Akwa Ibom",
        score: "7.3",
        reviews: "109",
        stars: 2,
        address: "5 Hospital Road, Uyo | 2.65KM from city center",
        pricePerNight: 13000,
        description: "A simple, budget-friendly stay in Uyo, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Luggage Storage", "Generator Backup", "Shared Kitchen", "Free Wi-Fi"],
        agentName: "Uyo Emerald Apartments Booking Agent",
        agentPhone: "2348010000075"
    },

    "eket-diamond-guest-house": {
        name: "Eket Diamond Guest House",
        image: "https://picsum.photos/id/25/800/600",
        state: "Akwa Ibom",
        score: "8.7",
        reviews: "186",
        stars: 3,
        address: "17 Market Road, Eket | 5.83KM from city center",
        pricePerNight: 19500,
        description: "A comfortable, well-kept mid-range hotel in Eket, popular with business and family travelers alike.",
        amenities: ["Family Rooms", "Room Service", "Non-smoking Rooms", "Outdoor Pool", "24-Hour Front Desk"],
        agentName: "Eket Diamond Guest House Booking Agent",
        agentPhone: "2348010000076"
    },

    "ikot-ekpene-prestige-inn": {
        name: "Ikot Ekpene Prestige Inn",
        image: "https://picsum.photos/id/26/800/600",
        state: "Akwa Ibom",
        score: "7.7",
        reviews: "87",
        stars: 2,
        address: "32 Government House Road, Ikot Ekpene | 5.92KM from city center",
        pricePerNight: 10000,
        description: "A simple, budget-friendly stay in Ikot Ekpene, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Shared Kitchen", "Laundry Service", "Luggage Storage", "24-Hour Front Desk"],
        agentName: "Ikot Ekpene Prestige Inn Booking Agent",
        agentPhone: "2348010000077"
    },

    "uyo-prestige-lodge": {
        name: "Uyo Prestige Lodge",
        image: "https://picsum.photos/id/27/800/600",
        state: "Akwa Ibom",
        score: "7.6",
        reviews: "87",
        stars: 2,
        address: "48 GRA, Uyo | 3.77KM from city center",
        pricePerNight: 7500,
        description: "A simple, budget-friendly stay in Uyo, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Generator Backup", "Free Wi-Fi", "Laundry Service", "Shared Kitchen"],
        agentName: "Uyo Prestige Lodge Booking Agent",
        agentPhone: "2348010000078"
    },

    "eket-rosewood-lodge": {
        name: "Eket Rosewood Lodge",
        image: "https://picsum.photos/id/28/800/600",
        state: "Akwa Ibom",
        score: "8.8",
        reviews: "1,056",
        stars: 4,
        address: "36 Airport Road, Eket | 3.02KM from city center",
        pricePerNight: 55000,
        description: "A polished hotel in Eket with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Free Wi-Fi", "Business Center", "Concierge Service", "Airport Transfer (fee)", "Fitness Center"],
        agentName: "Eket Rosewood Lodge Booking Agent",
        agentPhone: "2348010000079"
    },

    "ikot-ekpene-silver-retreat": {
        name: "Ikot Ekpene Silver Retreat",
        image: "https://picsum.photos/id/29/800/600",
        state: "Akwa Ibom",
        score: "7.1",
        reviews: "163",
        stars: 2,
        address: "56 New Layout, Ikot Ekpene | 6.34KM from city center",
        pricePerNight: 13000,
        description: "A simple, budget-friendly stay in Ikot Ekpene, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Air Conditioning", "Common Lounge", "Laundry Service", "Luggage Storage"],
        agentName: "Ikot Ekpene Silver Retreat Booking Agent",
        agentPhone: "2348010000080"
    },

    "uyo-cedar-resort": {
        name: "Uyo Cedar Resort",
        image: "https://picsum.photos/id/30/800/600",
        state: "Akwa Ibom",
        score: "7.8",
        reviews: "125",
        stars: 2,
        address: "43 Station Road, Uyo | 4.88KM from city center",
        pricePerNight: 12500,
        description: "A simple, budget-friendly stay in Uyo, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "24-Hour Front Desk", "Air Conditioning", "Free Wi-Fi", "Shared Kitchen"],
        agentName: "Uyo Cedar Resort Booking Agent",
        agentPhone: "2348010000081"
    },

    "eket-riverside-villa-hotel": {
        name: "Eket Riverside Villa Hotel",
        image: "https://picsum.photos/id/31/800/600",
        state: "Akwa Ibom",
        score: "8.6",
        reviews: "1,242",
        stars: 4,
        address: "20 Station Road, Eket | 5.25KM from city center",
        pricePerNight: 47500,
        description: "A polished hotel in Eket with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Room Service", "Outdoor Pool", "Free Wi-Fi", "Concierge Service", "Airport Transfer (fee)"],
        agentName: "Eket Riverside Villa Hotel Booking Agent",
        agentPhone: "2348010000082"
    },

    "ikot-ekpene-riverside-suites": {
        name: "Ikot Ekpene Riverside Suites",
        image: "https://picsum.photos/id/32/800/600",
        state: "Akwa Ibom",
        score: "8.0",
        reviews: "91",
        stars: 2,
        address: "42 Stadium Road, Ikot Ekpene | 2.84KM from city center",
        pricePerNight: 9000,
        description: "A simple, budget-friendly stay in Ikot Ekpene, geared toward travelers who need a practical, affordable base.",
        amenities: ["Laundry Service", "Free Wi-Fi", "Common Lounge", "24-Hour Front Desk", "Air Conditioning"],
        agentName: "Ikot Ekpene Riverside Suites Booking Agent",
        agentPhone: "2348010000083"
    },

    "uyo-comfort-hotel": {
        name: "Uyo Comfort Hotel",
        image: "https://picsum.photos/id/33/800/600",
        state: "Akwa Ibom",
        score: "7.9",
        reviews: "524",
        stars: 3,
        address: "47 Waterside Road, Uyo | 2.31KM from city center",
        pricePerNight: 26500,
        description: "A comfortable, well-kept mid-range hotel in Uyo, popular with business and family travelers alike.",
        amenities: ["Family Rooms", "Air Conditioning", "Daily Housekeeping", "24-Hour Front Desk", "Non-smoking Rooms"],
        agentName: "Uyo Comfort Hotel Booking Agent",
        agentPhone: "2348010000084"
    },

    "eket-rosewood-hostel": {
        name: "Eket Rosewood Hostel",
        image: "https://picsum.photos/id/34/800/600",
        state: "Akwa Ibom",
        score: "7.0",
        reviews: "157",
        stars: 2,
        address: "47 Commercial Avenue, Eket | 4.9KM from city center",
        pricePerNight: 11500,
        description: "A simple, budget-friendly stay in Eket, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "24-Hour Front Desk", "Shared Kitchen", "Free Wi-Fi", "Common Lounge"],
        agentName: "Eket Rosewood Hostel Booking Agent",
        agentPhone: "2348010000085"
    },

    "awka-vista-suites": {
        name: "Awka Vista Suites",
        image: "https://picsum.photos/id/35/800/600",
        state: "Anambra",
        score: "8.5",
        reviews: "387",
        stars: 3,
        address: "20 Independence Way, Awka | 2.89KM from city center",
        pricePerNight: 31500,
        description: "A comfortable, well-kept mid-range hotel in Awka, popular with business and family travelers alike.",
        amenities: ["Outdoor Pool", "24-Hour Front Desk", "Non-smoking Rooms", "Air Conditioning", "Bar"],
        agentName: "Awka Vista Suites Booking Agent",
        agentPhone: "2348010000086"
    },

    "onitsha-garden-retreat": {
        name: "Onitsha Garden Retreat",
        image: "https://picsum.photos/id/36/800/600",
        state: "Anambra",
        score: "8.5",
        reviews: "258",
        stars: 3,
        address: "20 New Layout, Onitsha | 3.74KM from city center",
        pricePerNight: 33500,
        description: "A comfortable, well-kept mid-range hotel in Onitsha, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "24-Hour Front Desk", "Room Service", "Air Conditioning", "Daily Housekeeping"],
        agentName: "Onitsha Garden Retreat Booking Agent",
        agentPhone: "2348010000087"
    },

    "nnewi-oasis-retreat": {
        name: "Nnewi Oasis Retreat",
        image: "https://picsum.photos/id/37/800/600",
        state: "Anambra",
        score: "8.1",
        reviews: "532",
        stars: 3,
        address: "44 Hospital Road, Nnewi | 3.52KM from city center",
        pricePerNight: 29500,
        description: "A comfortable, well-kept mid-range hotel in Nnewi, popular with business and family travelers alike.",
        amenities: ["Room Service", "Air Conditioning", "Family Rooms", "24-Hour Front Desk", "Bar"],
        agentName: "Nnewi Oasis Retreat Booking Agent",
        agentPhone: "2348010000088"
    },

    "awka-lakeview-inn": {
        name: "Awka Lakeview Inn",
        image: "https://picsum.photos/id/38/800/600",
        state: "Anambra",
        score: "7.7",
        reviews: "77",
        stars: 2,
        address: "13 Airport Road, Awka | 0.55KM from city center",
        pricePerNight: 12500,
        description: "A simple, budget-friendly stay in Awka, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Shared Kitchen", "Generator Backup", "Free Wi-Fi", "Common Lounge"],
        agentName: "Awka Lakeview Inn Booking Agent",
        agentPhone: "2348010000089"
    },

    "onitsha-summit-palace-hotel": {
        name: "Onitsha Summit Palace Hotel",
        image: "https://picsum.photos/id/39/800/600",
        state: "Anambra",
        score: "8.0",
        reviews: "473",
        stars: 3,
        address: "26 Hospital Road, Onitsha | 1.3KM from city center",
        pricePerNight: 31000,
        description: "A comfortable, well-kept mid-range hotel in Onitsha, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Outdoor Pool", "Daily Housekeeping", "Non-smoking Rooms"],
        agentName: "Onitsha Summit Palace Hotel Booking Agent",
        agentPhone: "2348010000090"
    },

    "nnewi-rosewood-apartments": {
        name: "Nnewi Rosewood Apartments",
        image: "https://picsum.photos/id/40/800/600",
        state: "Anambra",
        score: "7.5",
        reviews: "162",
        stars: 2,
        address: "59 Station Road, Nnewi | 1.14KM from city center",
        pricePerNight: 8000,
        description: "A simple, budget-friendly stay in Nnewi, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Common Lounge", "Luggage Storage", "Generator Backup", "Shared Kitchen"],
        agentName: "Nnewi Rosewood Apartments Booking Agent",
        agentPhone: "2348010000091"
    },

    "awka-harmony-villa-hotel": {
        name: "Awka Harmony Villa Hotel",
        image: "https://picsum.photos/id/41/800/600",
        state: "Anambra",
        score: "9.3",
        reviews: "2,967",
        stars: 5,
        address: "54 Stadium Road, Awka | 3.12KM from city center",
        pricePerNight: 126000,
        description: "A standout, full-service hotel in Awka, offering five-star comfort and attentive concierge service.",
        amenities: ["Spa & Wellness Center", "Private Beach Access", "Fine Dining Restaurant", "Business Center", "Outdoor Pool"],
        agentName: "Awka Harmony Villa Hotel Booking Agent",
        agentPhone: "2348010000092"
    },

    "onitsha-comfort-apartments": {
        name: "Onitsha Comfort Apartments",
        image: "https://picsum.photos/id/42/800/600",
        state: "Anambra",
        score: "8.8",
        reviews: "789",
        stars: 4,
        address: "29 Market Road, Onitsha | 4.75KM from city center",
        pricePerNight: 45000,
        description: "A polished hotel in Onitsha with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Room Service", "Business Center", "Concierge Service", "Fitness Center", "Free Wi-Fi"],
        agentName: "Onitsha Comfort Apartments Booking Agent",
        agentPhone: "2348010000093"
    },

    "nnewi-silver-hostel": {
        name: "Nnewi Silver Hostel",
        image: "https://picsum.photos/id/43/800/600",
        state: "Anambra",
        score: "7.7",
        reviews: "74",
        stars: 2,
        address: "27 New Layout, Nnewi | 2.42KM from city center",
        pricePerNight: 6500,
        description: "A simple, budget-friendly stay in Nnewi, geared toward travelers who need a practical, affordable base.",
        amenities: ["Shared Kitchen", "Luggage Storage", "Free Wi-Fi", "Air Conditioning", "Common Lounge"],
        agentName: "Nnewi Silver Hostel Booking Agent",
        agentPhone: "2348010000094"
    },

    "awka-skyline-palace-hotel": {
        name: "Awka Skyline Palace Hotel",
        image: "https://picsum.photos/id/44/800/600",
        state: "Anambra",
        score: "7.9",
        reviews: "25",
        stars: 2,
        address: "57 Waterside Road, Awka | 3.91KM from city center",
        pricePerNight: 13000,
        description: "A simple, budget-friendly stay in Awka, geared toward travelers who need a practical, affordable base.",
        amenities: ["Shared Kitchen", "Free Wi-Fi", "24-Hour Front Desk", "Laundry Service", "Luggage Storage"],
        agentName: "Awka Skyline Palace Hotel Booking Agent",
        agentPhone: "2348010000095"
    },

    "onitsha-lakeview-hostel": {
        name: "Onitsha Lakeview Hostel",
        image: "https://picsum.photos/id/45/800/600",
        state: "Anambra",
        score: "8.8",
        reviews: "1,418",
        stars: 4,
        address: "39 Hospital Road, Onitsha | 3.38KM from city center",
        pricePerNight: 62000,
        description: "A polished hotel in Onitsha with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Fine Dining Restaurant", "Room Service", "Concierge Service", "Free Wi-Fi", "Fitness Center"],
        agentName: "Onitsha Lakeview Hostel Booking Agent",
        agentPhone: "2348010000096"
    },

    "nnewi-vista-hostel": {
        name: "Nnewi Vista Hostel",
        image: "https://picsum.photos/id/46/800/600",
        state: "Anambra",
        score: "7.7",
        reviews: "139",
        stars: 2,
        address: "9 Cathedral Road, Nnewi | 3.66KM from city center",
        pricePerNight: 13500,
        description: "A simple, budget-friendly stay in Nnewi, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Generator Backup", "Shared Kitchen", "Free Wi-Fi", "Laundry Service"],
        agentName: "Nnewi Vista Hostel Booking Agent",
        agentPhone: "2348010000097"
    },

    "bauchi-sunset-villa-hotel": {
        name: "Bauchi Sunset Villa Hotel",
        image: "https://picsum.photos/id/47/800/600",
        state: "Bauchi",
        score: "8.0",
        reviews: "346",
        stars: 3,
        address: "21 Hospital Road, Bauchi | 3.17KM from city center",
        pricePerNight: 27500,
        description: "A comfortable, well-kept mid-range hotel in Bauchi, popular with business and family travelers alike.",
        amenities: ["Bar", "Outdoor Pool", "Room Service", "Daily Housekeeping", "Non-smoking Rooms"],
        agentName: "Bauchi Sunset Villa Hotel Booking Agent",
        agentPhone: "2348010000098"
    },

    "azare-regal-hotel": {
        name: "Azare Regal Hotel",
        image: "https://picsum.photos/id/48/800/600",
        state: "Bauchi",
        score: "9.0",
        reviews: "406",
        stars: 4,
        address: "23 Hospital Road, Azare | 4.37KM from city center",
        pricePerNight: 67000,
        description: "A polished hotel in Azare with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Free Wi-Fi", "Concierge Service", "Airport Transfer (fee)", "Outdoor Pool", "Fine Dining Restaurant"],
        agentName: "Azare Regal Hotel Booking Agent",
        agentPhone: "2348010000099"
    },

    "misau-oasis-lodge": {
        name: "Misau Oasis Lodge",
        image: "https://picsum.photos/id/49/800/600",
        state: "Bauchi",
        score: "8.6",
        reviews: "1,269",
        stars: 4,
        address: "8 Cathedral Road, Misau | 6.18KM from city center",
        pricePerNight: 58000,
        description: "A polished hotel in Misau with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Airport Transfer (fee)", "Fitness Center", "Business Center", "Concierge Service", "Outdoor Pool"],
        agentName: "Misau Oasis Lodge Booking Agent",
        agentPhone: "2348010000100"
    },

    "bauchi-cedar-grand-hotel": {
        name: "Bauchi Cedar Grand Hotel",
        image: "https://picsum.photos/id/50/800/600",
        state: "Bauchi",
        score: "7.9",
        reviews: "247",
        stars: 3,
        address: "7 Cathedral Road, Bauchi | 0.56KM from city center",
        pricePerNight: 25000,
        description: "A comfortable, well-kept mid-range hotel in Bauchi, popular with business and family travelers alike.",
        amenities: ["24-Hour Front Desk", "Outdoor Pool", "Daily Housekeeping", "Bar", "Air Conditioning"],
        agentName: "Bauchi Cedar Grand Hotel Booking Agent",
        agentPhone: "2348010000101"
    },

    "azare-rosewood-retreat": {
        name: "Azare Rosewood Retreat",
        image: "https://picsum.photos/id/51/800/600",
        state: "Bauchi",
        score: "7.2",
        reviews: "97",
        stars: 2,
        address: "44 Cathedral Road, Azare | 5.31KM from city center",
        pricePerNight: 13000,
        description: "A simple, budget-friendly stay in Azare, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "24-Hour Front Desk", "Generator Backup", "Luggage Storage", "Common Lounge"],
        agentName: "Azare Rosewood Retreat Booking Agent",
        agentPhone: "2348010000102"
    },

    "misau-summit-resort": {
        name: "Misau Summit Resort",
        image: "https://picsum.photos/id/52/800/600",
        state: "Bauchi",
        score: "7.0",
        reviews: "127",
        stars: 2,
        address: "32 Market Road, Misau | 3.04KM from city center",
        pricePerNight: 12500,
        description: "A simple, budget-friendly stay in Misau, geared toward travelers who need a practical, affordable base.",
        amenities: ["Laundry Service", "Shared Kitchen", "Luggage Storage", "Air Conditioning", "Common Lounge"],
        agentName: "Misau Summit Resort Booking Agent",
        agentPhone: "2348010000103"
    },

    "bauchi-bellavista-retreat": {
        name: "Bauchi Bellavista Retreat",
        image: "https://picsum.photos/id/53/800/600",
        state: "Bauchi",
        score: "7.3",
        reviews: "157",
        stars: 2,
        address: "31 GRA, Bauchi | 3.06KM from city center",
        pricePerNight: 12500,
        description: "A simple, budget-friendly stay in Bauchi, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "24-Hour Front Desk", "Air Conditioning", "Free Wi-Fi", "Common Lounge"],
        agentName: "Bauchi Bellavista Retreat Booking Agent",
        agentPhone: "2348010000104"
    },

    "azare-silver-villa-hotel": {
        name: "Azare Silver Villa Hotel",
        image: "https://picsum.photos/id/54/800/600",
        state: "Bauchi",
        score: "8.9",
        reviews: "1,076",
        stars: 4,
        address: "2 GRA, Azare | 5.59KM from city center",
        pricePerNight: 47000,
        description: "A polished hotel in Azare with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Business Center", "Room Service", "Outdoor Pool", "Airport Transfer (fee)", "Fine Dining Restaurant"],
        agentName: "Azare Silver Villa Hotel Booking Agent",
        agentPhone: "2348010000105"
    },

    "misau-harmony-palace-hotel": {
        name: "Misau Harmony Palace Hotel",
        image: "https://picsum.photos/id/55/800/600",
        state: "Bauchi",
        score: "7.7",
        reviews: "90",
        stars: 2,
        address: "1 Stadium Road, Misau | 6.18KM from city center",
        pricePerNight: 10500,
        description: "A simple, budget-friendly stay in Misau, geared toward travelers who need a practical, affordable base.",
        amenities: ["Air Conditioning", "Shared Kitchen", "Laundry Service", "Luggage Storage", "Generator Backup"],
        agentName: "Misau Harmony Palace Hotel Booking Agent",
        agentPhone: "2348010000106"
    },

    "bauchi-silver-grand-hotel": {
        name: "Bauchi Silver Grand Hotel",
        image: "https://picsum.photos/id/56/800/600",
        state: "Bauchi",
        score: "8.3",
        reviews: "582",
        stars: 3,
        address: "51 Ring Road, Bauchi | 0.97KM from city center",
        pricePerNight: 29500,
        description: "A comfortable, well-kept mid-range hotel in Bauchi, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Outdoor Pool", "Bar", "Air Conditioning", "Room Service"],
        agentName: "Bauchi Silver Grand Hotel Booking Agent",
        agentPhone: "2348010000107"
    },

    "azare-elite-villa-hotel": {
        name: "Azare Elite Villa Hotel",
        image: "https://picsum.photos/id/57/800/600",
        state: "Bauchi",
        score: "8.4",
        reviews: "432",
        stars: 3,
        address: "48 Stadium Road, Azare | 2.42KM from city center",
        pricePerNight: 29000,
        description: "A comfortable, well-kept mid-range hotel in Azare, popular with business and family travelers alike.",
        amenities: ["Non-smoking Rooms", "24-Hour Front Desk", "Room Service", "Outdoor Pool", "Air Conditioning"],
        agentName: "Azare Elite Villa Hotel Booking Agent",
        agentPhone: "2348010000108"
    },

    "misau-emerald-resort": {
        name: "Misau Emerald Resort",
        image: "https://picsum.photos/id/58/800/600",
        state: "Bauchi",
        score: "7.1",
        reviews: "157",
        stars: 2,
        address: "49 Commercial Avenue, Misau | 1.53KM from city center",
        pricePerNight: 14000,
        description: "A simple, budget-friendly stay in Misau, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Laundry Service", "Shared Kitchen", "24-Hour Front Desk", "Generator Backup"],
        agentName: "Misau Emerald Resort Booking Agent",
        agentPhone: "2348010000109"
    },

    "yenagoa-lakeview-inn": {
        name: "Yenagoa Lakeview Inn",
        image: "https://picsum.photos/id/59/800/600",
        state: "Bayelsa",
        score: "9.0",
        reviews: "2,378",
        stars: 5,
        address: "20 Ring Road, Yenagoa | 4.72KM from city center",
        pricePerNight: 93500,
        description: "A standout, full-service hotel in Yenagoa, offering five-star comfort and attentive concierge service.",
        amenities: ["Spa & Wellness Center", "Concierge Service", "Free Wi-Fi", "Valet Parking", "Private Beach Access"],
        agentName: "Yenagoa Lakeview Inn Booking Agent",
        agentPhone: "2348010000110"
    },

    "brass-sunset-retreat": {
        name: "Brass Sunset Retreat",
        image: "https://picsum.photos/id/60/800/600",
        state: "Bayelsa",
        score: "7.9",
        reviews: "145",
        stars: 2,
        address: "56 Ring Road, Brass | 3.9KM from city center",
        pricePerNight: 7000,
        description: "A simple, budget-friendly stay in Brass, geared toward travelers who need a practical, affordable base.",
        amenities: ["Shared Kitchen", "Luggage Storage", "Common Lounge", "24-Hour Front Desk", "Air Conditioning"],
        agentName: "Brass Sunset Retreat Booking Agent",
        agentPhone: "2348010000111"
    },

    "sagbama-comfort-villa-hotel": {
        name: "Sagbama Comfort Villa Hotel",
        image: "https://picsum.photos/id/61/800/600",
        state: "Bayelsa",
        score: "8.9",
        reviews: "1,167",
        stars: 5,
        address: "32 Market Road, Sagbama | 3.92KM from city center",
        pricePerNight: 122500,
        description: "A standout, full-service hotel in Sagbama, offering five-star comfort and attentive concierge service.",
        amenities: ["Free Wi-Fi", "Spa & Wellness Center", "Outdoor Pool", "Concierge Service", "Private Beach Access"],
        agentName: "Sagbama Comfort Villa Hotel Booking Agent",
        agentPhone: "2348010000112"
    },

    "yenagoa-silver-suites": {
        name: "Yenagoa Silver Suites",
        image: "https://picsum.photos/id/62/800/600",
        state: "Bayelsa",
        score: "7.6",
        reviews: "126",
        stars: 2,
        address: "39 Waterside Road, Yenagoa | 4.17KM from city center",
        pricePerNight: 11000,
        description: "A simple, budget-friendly stay in Yenagoa, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Luggage Storage", "Shared Kitchen", "24-Hour Front Desk", "Laundry Service"],
        agentName: "Yenagoa Silver Suites Booking Agent",
        agentPhone: "2348010000113"
    },

    "brass-oasis-hotel": {
        name: "Brass Oasis Hotel",
        image: "https://picsum.photos/id/63/800/600",
        state: "Bayelsa",
        score: "7.6",
        reviews: "45",
        stars: 2,
        address: "49 Hospital Road, Brass | 4.22KM from city center",
        pricePerNight: 14000,
        description: "A simple, budget-friendly stay in Brass, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Laundry Service", "Free Wi-Fi", "Air Conditioning", "Shared Kitchen"],
        agentName: "Brass Oasis Hotel Booking Agent",
        agentPhone: "2348010000114"
    },

    "sagbama-golden-lodge": {
        name: "Sagbama Golden Lodge",
        image: "https://picsum.photos/id/64/800/600",
        state: "Bayelsa",
        score: "7.0",
        reviews: "135",
        stars: 2,
        address: "39 GRA, Sagbama | 2.18KM from city center",
        pricePerNight: 11500,
        description: "A simple, budget-friendly stay in Sagbama, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "24-Hour Front Desk", "Laundry Service", "Common Lounge", "Shared Kitchen"],
        agentName: "Sagbama Golden Lodge Booking Agent",
        agentPhone: "2348010000115"
    },

    "yenagoa-silver-guest-house": {
        name: "Yenagoa Silver Guest House",
        image: "https://picsum.photos/id/65/800/600",
        state: "Bayelsa",
        score: "7.8",
        reviews: "180",
        stars: 2,
        address: "43 Waterside Road, Yenagoa | 6.1KM from city center",
        pricePerNight: 11000,
        description: "A simple, budget-friendly stay in Yenagoa, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Free Wi-Fi", "Generator Backup", "Air Conditioning", "Laundry Service"],
        agentName: "Yenagoa Silver Guest House Booking Agent",
        agentPhone: "2348010000116"
    },

    "brass-lakeview-lodge": {
        name: "Brass Lakeview Lodge",
        image: "https://picsum.photos/id/66/800/600",
        state: "Bayelsa",
        score: "8.5",
        reviews: "639",
        stars: 4,
        address: "20 Cathedral Road, Brass | 4.97KM from city center",
        pricePerNight: 62000,
        description: "A polished hotel in Brass with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Fine Dining Restaurant", "Room Service", "Free Wi-Fi", "Concierge Service", "Business Center"],
        agentName: "Brass Lakeview Lodge Booking Agent",
        agentPhone: "2348010000117"
    },

    "sagbama-comfort-apartments": {
        name: "Sagbama Comfort Apartments",
        image: "https://picsum.photos/id/67/800/600",
        state: "Bayelsa",
        score: "8.3",
        reviews: "528",
        stars: 3,
        address: "39 Ring Road, Sagbama | 5.83KM from city center",
        pricePerNight: 17500,
        description: "A comfortable, well-kept mid-range hotel in Sagbama, popular with business and family travelers alike.",
        amenities: ["Bar", "24-Hour Front Desk", "Free Wi-Fi", "Outdoor Pool", "Air Conditioning"],
        agentName: "Sagbama Comfort Apartments Booking Agent",
        agentPhone: "2348010000118"
    },

    "yenagoa-lakeview-palace-hotel": {
        name: "Yenagoa Lakeview Palace Hotel",
        image: "https://picsum.photos/id/68/800/600",
        state: "Bayelsa",
        score: "9.3",
        reviews: "984",
        stars: 5,
        address: "53 Government House Road, Yenagoa | 3.92KM from city center",
        pricePerNight: 158000,
        description: "A standout, full-service hotel in Yenagoa, offering five-star comfort and attentive concierge service.",
        amenities: ["Spa & Wellness Center", "Private Beach Access", "Concierge Service", "Fitness Center", "Fine Dining Restaurant"],
        agentName: "Yenagoa Lakeview Palace Hotel Booking Agent",
        agentPhone: "2348010000119"
    },

    "brass-crown-palace-hotel": {
        name: "Brass Crown Palace Hotel",
        image: "https://picsum.photos/id/69/800/600",
        state: "Bayelsa",
        score: "8.7",
        reviews: "1,307",
        stars: 4,
        address: "6 GRA, Brass | 2.52KM from city center",
        pricePerNight: 68000,
        description: "A polished hotel in Brass with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Fitness Center", "Business Center", "Airport Transfer (fee)", "Free Wi-Fi", "Outdoor Pool"],
        agentName: "Brass Crown Palace Hotel Booking Agent",
        agentPhone: "2348010000120"
    },

    "sagbama-rosewood-villa-hotel": {
        name: "Sagbama Rosewood Villa Hotel",
        image: "https://picsum.photos/id/70/800/600",
        state: "Bayelsa",
        score: "7.3",
        reviews: "122",
        stars: 2,
        address: "49 Stadium Road, Sagbama | 0.62KM from city center",
        pricePerNight: 12500,
        description: "A simple, budget-friendly stay in Sagbama, geared toward travelers who need a practical, affordable base.",
        amenities: ["Air Conditioning", "24-Hour Front Desk", "Common Lounge", "Laundry Service", "Free Wi-Fi"],
        agentName: "Sagbama Rosewood Villa Hotel Booking Agent",
        agentPhone: "2348010000121"
    },

    "makurdi-garden-apartments": {
        name: "Makurdi Garden Apartments",
        image: "https://picsum.photos/id/71/800/600",
        state: "Benue",
        score: "9.5",
        reviews: "904",
        stars: 5,
        address: "56 Stadium Road, Makurdi | 3.22KM from city center",
        pricePerNight: 156000,
        description: "A standout, full-service hotel in Makurdi, offering five-star comfort and attentive concierge service.",
        amenities: ["Free Wi-Fi", "Fine Dining Restaurant", "Concierge Service", "Spa & Wellness Center", "Valet Parking"],
        agentName: "Makurdi Garden Apartments Booking Agent",
        agentPhone: "2348010000122"
    },

    "gboko-summit-villa-hotel": {
        name: "Gboko Summit Villa Hotel",
        image: "https://picsum.photos/id/72/800/600",
        state: "Benue",
        score: "8.6",
        reviews: "288",
        stars: 3,
        address: "36 Airport Road, Gboko | 6.06KM from city center",
        pricePerNight: 24000,
        description: "A comfortable, well-kept mid-range hotel in Gboko, popular with business and family travelers alike.",
        amenities: ["Non-smoking Rooms", "Family Rooms", "Free Wi-Fi", "Outdoor Pool", "24-Hour Front Desk"],
        agentName: "Gboko Summit Villa Hotel Booking Agent",
        agentPhone: "2348010000123"
    },

    "otukpo-rosewood-lodge": {
        name: "Otukpo Rosewood Lodge",
        image: "https://picsum.photos/id/73/800/600",
        state: "Benue",
        score: "8.1",
        reviews: "94",
        stars: 3,
        address: "27 Market Road, Otukpo | 1.77KM from city center",
        pricePerNight: 33000,
        description: "A comfortable, well-kept mid-range hotel in Otukpo, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Non-smoking Rooms", "Free Wi-Fi", "Bar", "Family Rooms"],
        agentName: "Otukpo Rosewood Lodge Booking Agent",
        agentPhone: "2348010000124"
    },

    "makurdi-rosewood-guest-house": {
        name: "Makurdi Rosewood Guest House",
        image: "https://picsum.photos/id/74/800/600",
        state: "Benue",
        score: "8.3",
        reviews: "359",
        stars: 3,
        address: "54 GRA, Makurdi | 6.38KM from city center",
        pricePerNight: 28500,
        description: "A comfortable, well-kept mid-range hotel in Makurdi, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Non-smoking Rooms", "24-Hour Front Desk", "Air Conditioning", "Family Rooms"],
        agentName: "Makurdi Rosewood Guest House Booking Agent",
        agentPhone: "2348010000125"
    },

    "gboko-oasis-apartments": {
        name: "Gboko Oasis Apartments",
        image: "https://picsum.photos/id/75/800/600",
        state: "Benue",
        score: "7.7",
        reviews: "54",
        stars: 2,
        address: "5 Government House Road, Gboko | 5.11KM from city center",
        pricePerNight: 13000,
        description: "A simple, budget-friendly stay in Gboko, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "24-Hour Front Desk", "Generator Backup", "Shared Kitchen", "Free Wi-Fi"],
        agentName: "Gboko Oasis Apartments Booking Agent",
        agentPhone: "2348010000126"
    },

    "otukpo-heritage-palace-hotel": {
        name: "Otukpo Heritage Palace Hotel",
        image: "https://picsum.photos/id/76/800/600",
        state: "Benue",
        score: "7.6",
        reviews: "145",
        stars: 2,
        address: "10 GRA, Otukpo | 3.69KM from city center",
        pricePerNight: 13000,
        description: "A simple, budget-friendly stay in Otukpo, geared toward travelers who need a practical, affordable base.",
        amenities: ["Laundry Service", "24-Hour Front Desk", "Generator Backup", "Shared Kitchen", "Luggage Storage"],
        agentName: "Otukpo Heritage Palace Hotel Booking Agent",
        agentPhone: "2348010000127"
    },

    "makurdi-prestige-inn": {
        name: "Makurdi Prestige Inn",
        image: "https://picsum.photos/id/77/800/600",
        state: "Benue",
        score: "8.8",
        reviews: "324",
        stars: 3,
        address: "25 Hospital Road, Makurdi | 5.62KM from city center",
        pricePerNight: 33500,
        description: "A comfortable, well-kept mid-range hotel in Makurdi, popular with business and family travelers alike.",
        amenities: ["Outdoor Pool", "Free Wi-Fi", "Room Service", "Bar", "Daily Housekeeping"],
        agentName: "Makurdi Prestige Inn Booking Agent",
        agentPhone: "2348010000128"
    },

    "gboko-meridian-hostel": {
        name: "Gboko Meridian Hostel",
        image: "https://picsum.photos/id/78/800/600",
        state: "Benue",
        score: "8.2",
        reviews: "235",
        stars: 3,
        address: "3 Airport Road, Gboko | 3.46KM from city center",
        pricePerNight: 31000,
        description: "A comfortable, well-kept mid-range hotel in Gboko, popular with business and family travelers alike.",
        amenities: ["Bar", "Air Conditioning", "Outdoor Pool", "Daily Housekeeping", "Free Wi-Fi"],
        agentName: "Gboko Meridian Hostel Booking Agent",
        agentPhone: "2348010000129"
    },

    "otukpo-serene-hotel": {
        name: "Otukpo Serene Hotel",
        image: "https://picsum.photos/id/79/800/600",
        state: "Benue",
        score: "8.5",
        reviews: "499",
        stars: 3,
        address: "5 GRA, Otukpo | 5.17KM from city center",
        pricePerNight: 20000,
        description: "A comfortable, well-kept mid-range hotel in Otukpo, popular with business and family travelers alike.",
        amenities: ["24-Hour Front Desk", "Bar", "Family Rooms", "Non-smoking Rooms", "Daily Housekeeping"],
        agentName: "Otukpo Serene Hotel Booking Agent",
        agentPhone: "2348010000130"
    },

    "makurdi-riverside-resort": {
        name: "Makurdi Riverside Resort",
        image: "https://picsum.photos/id/80/800/600",
        state: "Benue",
        score: "8.7",
        reviews: "626",
        stars: 3,
        address: "21 Independence Way, Makurdi | 4.78KM from city center",
        pricePerNight: 27500,
        description: "A comfortable, well-kept mid-range hotel in Makurdi, popular with business and family travelers alike.",
        amenities: ["Non-smoking Rooms", "Free Wi-Fi", "24-Hour Front Desk", "Family Rooms", "Air Conditioning"],
        agentName: "Makurdi Riverside Resort Booking Agent",
        agentPhone: "2348010000131"
    },

    "gboko-whitestone-guest-house": {
        name: "Gboko Whitestone Guest House",
        image: "https://picsum.photos/id/81/800/600",
        state: "Benue",
        score: "8.8",
        reviews: "172",
        stars: 3,
        address: "7 Waterside Road, Gboko | 4.27KM from city center",
        pricePerNight: 29000,
        description: "A comfortable, well-kept mid-range hotel in Gboko, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Non-smoking Rooms", "Family Rooms", "Bar", "Room Service"],
        agentName: "Gboko Whitestone Guest House Booking Agent",
        agentPhone: "2348010000132"
    },

    "otukpo-royal-resort": {
        name: "Otukpo Royal Resort",
        image: "https://picsum.photos/id/82/800/600",
        state: "Benue",
        score: "9.0",
        reviews: "900",
        stars: 4,
        address: "24 New Layout, Otukpo | 1.29KM from city center",
        pricePerNight: 47500,
        description: "A polished hotel in Otukpo with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Concierge Service", "Fine Dining Restaurant", "Fitness Center", "Outdoor Pool", "Airport Transfer (fee)"],
        agentName: "Otukpo Royal Resort Booking Agent",
        agentPhone: "2348010000133"
    },

    "maiduguri-oasis-hostel": {
        name: "Maiduguri Oasis Hostel",
        image: "https://picsum.photos/id/83/800/600",
        state: "Borno",
        score: "7.6",
        reviews: "81",
        stars: 2,
        address: "59 Cathedral Road, Maiduguri | 1.27KM from city center",
        pricePerNight: 10000,
        description: "A simple, budget-friendly stay in Maiduguri, geared toward travelers who need a practical, affordable base.",
        amenities: ["Shared Kitchen", "Laundry Service", "24-Hour Front Desk", "Luggage Storage", "Common Lounge"],
        agentName: "Maiduguri Oasis Hostel Booking Agent",
        agentPhone: "2348010000134"
    },

    "biu-harmony-villa-hotel": {
        name: "Biu Harmony Villa Hotel",
        image: "https://picsum.photos/id/84/800/600",
        state: "Borno",
        score: "8.7",
        reviews: "639",
        stars: 3,
        address: "5 GRA, Biu | 6.17KM from city center",
        pricePerNight: 20000,
        description: "A comfortable, well-kept mid-range hotel in Biu, popular with business and family travelers alike.",
        amenities: ["24-Hour Front Desk", "Outdoor Pool", "Bar", "Room Service", "Daily Housekeeping"],
        agentName: "Biu Harmony Villa Hotel Booking Agent",
        agentPhone: "2348010000135"
    },

    "bama-emerald-hostel": {
        name: "Bama Emerald Hostel",
        image: "https://picsum.photos/id/85/800/600",
        state: "Borno",
        score: "9.1",
        reviews: "518",
        stars: 4,
        address: "25 Cathedral Road, Bama | 2.59KM from city center",
        pricePerNight: 44000,
        description: "A polished hotel in Bama with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Fine Dining Restaurant", "Fitness Center", "Business Center", "Free Wi-Fi", "Room Service"],
        agentName: "Bama Emerald Hostel Booking Agent",
        agentPhone: "2348010000136"
    },

    "maiduguri-pearl-retreat": {
        name: "Maiduguri Pearl Retreat",
        image: "https://picsum.photos/id/86/800/600",
        state: "Borno",
        score: "7.8",
        reviews: "32",
        stars: 2,
        address: "39 Commercial Avenue, Maiduguri | 3.43KM from city center",
        pricePerNight: 13500,
        description: "A simple, budget-friendly stay in Maiduguri, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Common Lounge", "Air Conditioning", "Shared Kitchen", "24-Hour Front Desk"],
        agentName: "Maiduguri Pearl Retreat Booking Agent",
        agentPhone: "2348010000137"
    },

    "biu-emerald-palace-hotel": {
        name: "Biu Emerald Palace Hotel",
        image: "https://picsum.photos/id/87/800/600",
        state: "Borno",
        score: "7.3",
        reviews: "55",
        stars: 2,
        address: "7 Independence Way, Biu | 4.34KM from city center",
        pricePerNight: 11000,
        description: "A simple, budget-friendly stay in Biu, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Common Lounge", "Luggage Storage", "Free Wi-Fi", "24-Hour Front Desk"],
        agentName: "Biu Emerald Palace Hotel Booking Agent",
        agentPhone: "2348010000138"
    },

    "bama-golden-guest-house": {
        name: "Bama Golden Guest House",
        image: "https://picsum.photos/id/88/800/600",
        state: "Borno",
        score: "8.1",
        reviews: "505",
        stars: 3,
        address: "13 Airport Road, Bama | 5.2KM from city center",
        pricePerNight: 21000,
        description: "A comfortable, well-kept mid-range hotel in Bama, popular with business and family travelers alike.",
        amenities: ["Bar", "24-Hour Front Desk", "Outdoor Pool", "Air Conditioning", "Room Service"],
        agentName: "Bama Golden Guest House Booking Agent",
        agentPhone: "2348010000139"
    },

    "maiduguri-regal-guest-house": {
        name: "Maiduguri Regal Guest House",
        image: "https://picsum.photos/id/89/800/600",
        state: "Borno",
        score: "9.0",
        reviews: "993",
        stars: 4,
        address: "8 GRA, Maiduguri | 6.27KM from city center",
        pricePerNight: 62500,
        description: "A polished hotel in Maiduguri with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Business Center", "Concierge Service", "Outdoor Pool", "Room Service", "Airport Transfer (fee)"],
        agentName: "Maiduguri Regal Guest House Booking Agent",
        agentPhone: "2348010000140"
    },

    "biu-garden-hotel": {
        name: "Biu Garden Hotel",
        image: "https://picsum.photos/id/90/800/600",
        state: "Borno",
        score: "7.3",
        reviews: "51",
        stars: 2,
        address: "24 Independence Way, Biu | 4.97KM from city center",
        pricePerNight: 9500,
        description: "A simple, budget-friendly stay in Biu, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Shared Kitchen", "Luggage Storage", "24-Hour Front Desk", "Free Wi-Fi"],
        agentName: "Biu Garden Hotel Booking Agent",
        agentPhone: "2348010000141"
    },

    "bama-regal-hotel": {
        name: "Bama Regal Hotel",
        image: "https://picsum.photos/id/91/800/600",
        state: "Borno",
        score: "8.4",
        reviews: "654",
        stars: 3,
        address: "59 Cathedral Road, Bama | 1.75KM from city center",
        pricePerNight: 25500,
        description: "A comfortable, well-kept mid-range hotel in Bama, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Non-smoking Rooms", "Bar", "Room Service", "Daily Housekeeping"],
        agentName: "Bama Regal Hotel Booking Agent",
        agentPhone: "2348010000142"
    },

    "maiduguri-royal-hotel": {
        name: "Maiduguri Royal Hotel",
        image: "https://picsum.photos/id/92/800/600",
        state: "Borno",
        score: "7.3",
        reviews: "146",
        stars: 2,
        address: "7 Hospital Road, Maiduguri | 5.81KM from city center",
        pricePerNight: 7000,
        description: "A simple, budget-friendly stay in Maiduguri, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Luggage Storage", "Common Lounge", "Shared Kitchen", "Laundry Service"],
        agentName: "Maiduguri Royal Hotel Booking Agent",
        agentPhone: "2348010000143"
    },

    "biu-cedar-lodge": {
        name: "Biu Cedar Lodge",
        image: "https://picsum.photos/id/93/800/600",
        state: "Borno",
        score: "8.7",
        reviews: "181",
        stars: 3,
        address: "40 New Layout, Biu | 6.13KM from city center",
        pricePerNight: 31000,
        description: "A comfortable, well-kept mid-range hotel in Biu, popular with business and family travelers alike.",
        amenities: ["24-Hour Front Desk", "Free Wi-Fi", "Bar", "Room Service", "Air Conditioning"],
        agentName: "Biu Cedar Lodge Booking Agent",
        agentPhone: "2348010000144"
    },

    "bama-silver-resort": {
        name: "Bama Silver Resort",
        image: "https://picsum.photos/id/94/800/600",
        state: "Borno",
        score: "7.9",
        reviews: "456",
        stars: 3,
        address: "58 Independence Way, Bama | 2.59KM from city center",
        pricePerNight: 33000,
        description: "A comfortable, well-kept mid-range hotel in Bama, popular with business and family travelers alike.",
        amenities: ["Outdoor Pool", "24-Hour Front Desk", "Air Conditioning", "Free Wi-Fi", "Daily Housekeeping"],
        agentName: "Bama Silver Resort Booking Agent",
        agentPhone: "2348010000145"
    },

    "calabar-emerald-retreat": {
        name: "Calabar Emerald Retreat",
        image: "https://picsum.photos/id/95/800/600",
        state: "Cross River",
        score: "7.6",
        reviews: "25",
        stars: 2,
        address: "51 Old Market Road, Calabar | 1.89KM from city center",
        pricePerNight: 6500,
        description: "A simple, budget-friendly stay in Calabar, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Common Lounge", "Generator Backup", "Air Conditioning", "Free Wi-Fi"],
        agentName: "Calabar Emerald Retreat Booking Agent",
        agentPhone: "2348010000146"
    },

    "ikom-diamond-inn": {
        name: "Ikom Diamond Inn",
        image: "https://picsum.photos/id/96/800/600",
        state: "Cross River",
        score: "8.9",
        reviews: "777",
        stars: 4,
        address: "50 Airport Road, Ikom | 5.21KM from city center",
        pricePerNight: 47000,
        description: "A polished hotel in Ikom with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Free Wi-Fi", "Business Center", "Outdoor Pool", "Fitness Center", "Concierge Service"],
        agentName: "Ikom Diamond Inn Booking Agent",
        agentPhone: "2348010000147"
    },

    "ogoja-palm-retreat": {
        name: "Ogoja Palm Retreat",
        image: "https://picsum.photos/id/97/800/600",
        state: "Cross River",
        score: "8.7",
        reviews: "214",
        stars: 3,
        address: "23 Waterside Road, Ogoja | 5.21KM from city center",
        pricePerNight: 15500,
        description: "A comfortable, well-kept mid-range hotel in Ogoja, popular with business and family travelers alike.",
        amenities: ["Bar", "Free Wi-Fi", "Air Conditioning", "Room Service", "Non-smoking Rooms"],
        agentName: "Ogoja Palm Retreat Booking Agent",
        agentPhone: "2348010000148"
    },

    "calabar-horizon-apartments": {
        name: "Calabar Horizon Apartments",
        image: "https://picsum.photos/id/98/800/600",
        state: "Cross River",
        score: "7.1",
        reviews: "36",
        stars: 2,
        address: "29 Waterside Road, Calabar | 2.61KM from city center",
        pricePerNight: 10000,
        description: "A simple, budget-friendly stay in Calabar, geared toward travelers who need a practical, affordable base.",
        amenities: ["Air Conditioning", "Luggage Storage", "Generator Backup", "Shared Kitchen", "Free Wi-Fi"],
        agentName: "Calabar Horizon Apartments Booking Agent",
        agentPhone: "2348010000149"
    },

    "ikom-whitestone-retreat": {
        name: "Ikom Whitestone Retreat",
        image: "https://picsum.photos/id/99/800/600",
        state: "Cross River",
        score: "8.3",
        reviews: "549",
        stars: 3,
        address: "4 GRA, Ikom | 5.57KM from city center",
        pricePerNight: 16000,
        description: "A comfortable, well-kept mid-range hotel in Ikom, popular with business and family travelers alike.",
        amenities: ["Outdoor Pool", "Air Conditioning", "Daily Housekeeping", "Bar", "Family Rooms"],
        agentName: "Ikom Whitestone Retreat Booking Agent",
        agentPhone: "2348010000150"
    },

    "ogoja-golden-resort": {
        name: "Ogoja Golden Resort",
        image: "https://picsum.photos/id/100/800/600",
        state: "Cross River",
        score: "7.6",
        reviews: "36",
        stars: 2,
        address: "18 Cathedral Road, Ogoja | 4.26KM from city center",
        pricePerNight: 7000,
        description: "A simple, budget-friendly stay in Ogoja, geared toward travelers who need a practical, affordable base.",
        amenities: ["Laundry Service", "Luggage Storage", "Generator Backup", "Shared Kitchen", "24-Hour Front Desk"],
        agentName: "Ogoja Golden Resort Booking Agent",
        agentPhone: "2348010000151"
    },

    "calabar-oasis-hostel": {
        name: "Calabar Oasis Hostel",
        image: "https://picsum.photos/id/101/800/600",
        state: "Cross River",
        score: "7.9",
        reviews: "197",
        stars: 3,
        address: "47 Station Road, Calabar | 1.71KM from city center",
        pricePerNight: 33000,
        description: "A comfortable, well-kept mid-range hotel in Calabar, popular with business and family travelers alike.",
        amenities: ["Non-smoking Rooms", "Daily Housekeeping", "Family Rooms", "Room Service", "Outdoor Pool"],
        agentName: "Calabar Oasis Hostel Booking Agent",
        agentPhone: "2348010000152"
    },

    "ikom-cedar-suites": {
        name: "Ikom Cedar Suites",
        image: "https://picsum.photos/id/102/800/600",
        state: "Cross River",
        score: "7.3",
        reviews: "100",
        stars: 2,
        address: "17 Old Market Road, Ikom | 6.22KM from city center",
        pricePerNight: 11500,
        description: "A simple, budget-friendly stay in Ikom, geared toward travelers who need a practical, affordable base.",
        amenities: ["Shared Kitchen", "Free Wi-Fi", "Common Lounge", "Laundry Service", "Generator Backup"],
        agentName: "Ikom Cedar Suites Booking Agent",
        agentPhone: "2348010000153"
    },

    "ogoja-cedar-grand-hotel": {
        name: "Ogoja Cedar Grand Hotel",
        image: "https://picsum.photos/id/103/800/600",
        state: "Cross River",
        score: "8.2",
        reviews: "213",
        stars: 3,
        address: "4 Cathedral Road, Ogoja | 6.24KM from city center",
        pricePerNight: 33000,
        description: "A comfortable, well-kept mid-range hotel in Ogoja, popular with business and family travelers alike.",
        amenities: ["Family Rooms", "Bar", "Non-smoking Rooms", "Free Wi-Fi", "Daily Housekeeping"],
        agentName: "Ogoja Cedar Grand Hotel Booking Agent",
        agentPhone: "2348010000154"
    },

    "calabar-vista-hostel": {
        name: "Calabar Vista Hostel",
        image: "https://picsum.photos/id/104/800/600",
        state: "Cross River",
        score: "7.9",
        reviews: "33",
        stars: 2,
        address: "19 Cathedral Road, Calabar | 2.31KM from city center",
        pricePerNight: 14000,
        description: "A simple, budget-friendly stay in Calabar, geared toward travelers who need a practical, affordable base.",
        amenities: ["Air Conditioning", "Generator Backup", "Common Lounge", "Shared Kitchen", "Laundry Service"],
        agentName: "Calabar Vista Hostel Booking Agent",
        agentPhone: "2348010000155"
    },

    "asaba-silver-suites": {
        name: "Asaba Silver Suites",
        image: "https://picsum.photos/id/105/800/600",
        state: "Delta",
        score: "8.2",
        reviews: "649",
        stars: 3,
        address: "8 Waterside Road, Asaba | 2.1KM from city center",
        pricePerNight: 27000,
        description: "A comfortable, well-kept mid-range hotel in Asaba, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Outdoor Pool", "Non-smoking Rooms", "24-Hour Front Desk", "Bar"],
        agentName: "Asaba Silver Suites Booking Agent",
        agentPhone: "2348010000156"
    },

    "warri-summit-apartments": {
        name: "Warri Summit Apartments",
        image: "https://picsum.photos/id/106/800/600",
        state: "Delta",
        score: "7.8",
        reviews: "353",
        stars: 3,
        address: "12 Government House Road, Warri | 4.69KM from city center",
        pricePerNight: 16000,
        description: "A comfortable, well-kept mid-range hotel in Warri, popular with business and family travelers alike.",
        amenities: ["24-Hour Front Desk", "Bar", "Room Service", "Free Wi-Fi", "Air Conditioning"],
        agentName: "Warri Summit Apartments Booking Agent",
        agentPhone: "2348010000157"
    },

    "sapele-pearl-retreat": {
        name: "Sapele Pearl Retreat",
        image: "https://picsum.photos/id/107/800/600",
        state: "Delta",
        score: "8.7",
        reviews: "590",
        stars: 4,
        address: "41 Ring Road, Sapele | 0.96KM from city center",
        pricePerNight: 60500,
        description: "A polished hotel in Sapele with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Room Service", "Airport Transfer (fee)", "Concierge Service", "Fitness Center", "Business Center"],
        agentName: "Sapele Pearl Retreat Booking Agent",
        agentPhone: "2348010000158"
    },

    "asaba-heritage-grand-hotel": {
        name: "Asaba Heritage Grand Hotel",
        image: "https://picsum.photos/id/108/800/600",
        state: "Delta",
        score: "7.3",
        reviews: "165",
        stars: 2,
        address: "6 Ring Road, Asaba | 1.35KM from city center",
        pricePerNight: 11000,
        description: "A simple, budget-friendly stay in Asaba, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Laundry Service", "Shared Kitchen", "24-Hour Front Desk", "Luggage Storage"],
        agentName: "Asaba Heritage Grand Hotel Booking Agent",
        agentPhone: "2348010000159"
    },

    "warri-regal-palace-hotel": {
        name: "Warri Regal Palace Hotel",
        image: "https://picsum.photos/id/109/800/600",
        state: "Delta",
        score: "8.2",
        reviews: "359",
        stars: 3,
        address: "49 Stadium Road, Warri | 1.09KM from city center",
        pricePerNight: 22000,
        description: "A comfortable, well-kept mid-range hotel in Warri, popular with business and family travelers alike.",
        amenities: ["Outdoor Pool", "Air Conditioning", "Room Service", "Bar", "24-Hour Front Desk"],
        agentName: "Warri Regal Palace Hotel Booking Agent",
        agentPhone: "2348010000160"
    },

    "sapele-vista-guest-house": {
        name: "Sapele Vista Guest House",
        image: "https://picsum.photos/id/110/800/600",
        state: "Delta",
        score: "7.8",
        reviews: "484",
        stars: 3,
        address: "1 Hospital Road, Sapele | 2.24KM from city center",
        pricePerNight: 17000,
        description: "A comfortable, well-kept mid-range hotel in Sapele, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Room Service", "Outdoor Pool", "Non-smoking Rooms", "Bar"],
        agentName: "Sapele Vista Guest House Booking Agent",
        agentPhone: "2348010000161"
    },

    "asaba-grand-villa-hotel": {
        name: "Asaba Grand Villa Hotel",
        image: "https://picsum.photos/id/111/800/600",
        state: "Delta",
        score: "7.7",
        reviews: "64",
        stars: 2,
        address: "25 Stadium Road, Asaba | 4.69KM from city center",
        pricePerNight: 7000,
        description: "A simple, budget-friendly stay in Asaba, geared toward travelers who need a practical, affordable base.",
        amenities: ["Laundry Service", "Free Wi-Fi", "Luggage Storage", "Common Lounge", "Shared Kitchen"],
        agentName: "Asaba Grand Villa Hotel Booking Agent",
        agentPhone: "2348010000162"
    },

    "warri-whitestone-suites": {
        name: "Warri Whitestone Suites",
        image: "https://picsum.photos/id/112/800/600",
        state: "Delta",
        score: "7.9",
        reviews: "167",
        stars: 2,
        address: "37 New Layout, Warri | 4.73KM from city center",
        pricePerNight: 9500,
        description: "A simple, budget-friendly stay in Warri, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "24-Hour Front Desk", "Free Wi-Fi", "Luggage Storage", "Laundry Service"],
        agentName: "Warri Whitestone Suites Booking Agent",
        agentPhone: "2348010000163"
    },

    "sapele-crown-palace-hotel": {
        name: "Sapele Crown Palace Hotel",
        image: "https://picsum.photos/id/113/800/600",
        state: "Delta",
        score: "9.2",
        reviews: "2,382",
        stars: 5,
        address: "28 Station Road, Sapele | 1.05KM from city center",
        pricePerNight: 81500,
        description: "A standout, full-service hotel in Sapele, offering five-star comfort and attentive concierge service.",
        amenities: ["Valet Parking", "Business Center", "Concierge Service", "Free Wi-Fi", "Fine Dining Restaurant"],
        agentName: "Sapele Crown Palace Hotel Booking Agent",
        agentPhone: "2348010000164"
    },

    "asaba-cedar-resort": {
        name: "Asaba Cedar Resort",
        image: "https://picsum.photos/id/114/800/600",
        state: "Delta",
        score: "8.6",
        reviews: "644",
        stars: 4,
        address: "33 Independence Way, Asaba | 1.1KM from city center",
        pricePerNight: 38500,
        description: "A polished hotel in Asaba with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Room Service", "Concierge Service", "Business Center", "Fitness Center", "Outdoor Pool"],
        agentName: "Asaba Cedar Resort Booking Agent",
        agentPhone: "2348010000165"
    },

    "abakaliki-sunset-guest-house": {
        name: "Abakaliki Sunset Guest House",
        image: "https://picsum.photos/id/115/800/600",
        state: "Ebonyi",
        score: "7.2",
        reviews: "174",
        stars: 2,
        address: "49 Waterside Road, Abakaliki | 4.4KM from city center",
        pricePerNight: 7500,
        description: "A simple, budget-friendly stay in Abakaliki, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Common Lounge", "Laundry Service", "Luggage Storage", "Generator Backup"],
        agentName: "Abakaliki Sunset Guest House Booking Agent",
        agentPhone: "2348010000166"
    },

    "afikpo-skyline-palace-hotel": {
        name: "Afikpo Skyline Palace Hotel",
        image: "https://picsum.photos/id/116/800/600",
        state: "Ebonyi",
        score: "8.2",
        reviews: "658",
        stars: 3,
        address: "56 Independence Way, Afikpo | 2.33KM from city center",
        pricePerNight: 25500,
        description: "A comfortable, well-kept mid-range hotel in Afikpo, popular with business and family travelers alike.",
        amenities: ["Non-smoking Rooms", "Air Conditioning", "Daily Housekeeping", "Outdoor Pool", "Room Service"],
        agentName: "Afikpo Skyline Palace Hotel Booking Agent",
        agentPhone: "2348010000167"
    },

    "onueke-pearl-hotel": {
        name: "Onueke Pearl Hotel",
        image: "https://picsum.photos/id/117/800/600",
        state: "Ebonyi",
        score: "8.2",
        reviews: "155",
        stars: 3,
        address: "30 GRA, Onueke | 0.63KM from city center",
        pricePerNight: 25000,
        description: "A comfortable, well-kept mid-range hotel in Onueke, popular with business and family travelers alike.",
        amenities: ["Bar", "24-Hour Front Desk", "Free Wi-Fi", "Family Rooms", "Outdoor Pool"],
        agentName: "Onueke Pearl Hotel Booking Agent",
        agentPhone: "2348010000168"
    },

    "abakaliki-bellavista-hostel": {
        name: "Abakaliki Bellavista Hostel",
        image: "https://picsum.photos/id/118/800/600",
        state: "Ebonyi",
        score: "8.3",
        reviews: "647",
        stars: 3,
        address: "29 Waterside Road, Abakaliki | 3.89KM from city center",
        pricePerNight: 16500,
        description: "A comfortable, well-kept mid-range hotel in Abakaliki, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Bar", "24-Hour Front Desk", "Family Rooms", "Outdoor Pool"],
        agentName: "Abakaliki Bellavista Hostel Booking Agent",
        agentPhone: "2348010000169"
    },

    "afikpo-royal-villa-hotel": {
        name: "Afikpo Royal Villa Hotel",
        image: "https://picsum.photos/id/119/800/600",
        state: "Ebonyi",
        score: "7.1",
        reviews: "107",
        stars: 2,
        address: "6 Stadium Road, Afikpo | 4.34KM from city center",
        pricePerNight: 12000,
        description: "A simple, budget-friendly stay in Afikpo, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Laundry Service", "Luggage Storage", "Generator Backup"],
        agentName: "Afikpo Royal Villa Hotel Booking Agent",
        agentPhone: "2348010000170"
    },

    "onueke-oasis-lodge": {
        name: "Onueke Oasis Lodge",
        image: "https://picsum.photos/id/120/800/600",
        state: "Ebonyi",
        score: "8.2",
        reviews: "369",
        stars: 3,
        address: "27 Waterside Road, Onueke | 2.46KM from city center",
        pricePerNight: 27500,
        description: "A comfortable, well-kept mid-range hotel in Onueke, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "Bar", "Family Rooms", "Room Service", "Outdoor Pool"],
        agentName: "Onueke Oasis Lodge Booking Agent",
        agentPhone: "2348010000171"
    },

    "abakaliki-garden-guest-house": {
        name: "Abakaliki Garden Guest House",
        image: "https://picsum.photos/id/121/800/600",
        state: "Ebonyi",
        score: "8.1",
        reviews: "697",
        stars: 3,
        address: "22 Market Road, Abakaliki | 3.95KM from city center",
        pricePerNight: 20000,
        description: "A comfortable, well-kept mid-range hotel in Abakaliki, popular with business and family travelers alike.",
        amenities: ["Room Service", "Bar", "Family Rooms", "Non-smoking Rooms", "Daily Housekeeping"],
        agentName: "Abakaliki Garden Guest House Booking Agent",
        agentPhone: "2348010000172"
    },

    "afikpo-rosewood-suites": {
        name: "Afikpo Rosewood Suites",
        image: "https://picsum.photos/id/122/800/600",
        state: "Ebonyi",
        score: "7.3",
        reviews: "116",
        stars: 2,
        address: "51 Old Market Road, Afikpo | 5.36KM from city center",
        pricePerNight: 11500,
        description: "A simple, budget-friendly stay in Afikpo, geared toward travelers who need a practical, affordable base.",
        amenities: ["Air Conditioning", "Laundry Service", "Common Lounge", "Luggage Storage", "24-Hour Front Desk"],
        agentName: "Afikpo Rosewood Suites Booking Agent",
        agentPhone: "2348010000173"
    },

    "onueke-heritage-lodge": {
        name: "Onueke Heritage Lodge",
        image: "https://picsum.photos/id/123/800/600",
        state: "Ebonyi",
        score: "8.0",
        reviews: "107",
        stars: 2,
        address: "50 GRA, Onueke | 1.57KM from city center",
        pricePerNight: 14000,
        description: "A simple, budget-friendly stay in Onueke, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Air Conditioning", "Free Wi-Fi", "Shared Kitchen", "Laundry Service"],
        agentName: "Onueke Heritage Lodge Booking Agent",
        agentPhone: "2348010000174"
    },

    "abakaliki-diamond-grand-hotel": {
        name: "Abakaliki Diamond Grand Hotel",
        image: "https://picsum.photos/id/124/800/600",
        state: "Ebonyi",
        score: "8.7",
        reviews: "118",
        stars: 3,
        address: "57 Waterside Road, Abakaliki | 4.17KM from city center",
        pricePerNight: 26000,
        description: "A comfortable, well-kept mid-range hotel in Abakaliki, popular with business and family travelers alike.",
        amenities: ["Outdoor Pool", "Room Service", "Air Conditioning", "Family Rooms", "24-Hour Front Desk"],
        agentName: "Abakaliki Diamond Grand Hotel Booking Agent",
        agentPhone: "2348010000175"
    },

    "afikpo-crown-grand-hotel": {
        name: "Afikpo Crown Grand Hotel",
        image: "https://picsum.photos/id/125/800/600",
        state: "Ebonyi",
        score: "8.8",
        reviews: "1,141",
        stars: 4,
        address: "44 Commercial Avenue, Afikpo | 1.85KM from city center",
        pricePerNight: 48000,
        description: "A polished hotel in Afikpo with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Airport Transfer (fee)", "Fine Dining Restaurant", "Business Center", "Room Service", "Outdoor Pool"],
        agentName: "Afikpo Crown Grand Hotel Booking Agent",
        agentPhone: "2348010000176"
    },

    "onueke-heritage-villa-hotel": {
        name: "Onueke Heritage Villa Hotel",
        image: "https://picsum.photos/id/126/800/600",
        state: "Ebonyi",
        score: "8.7",
        reviews: "278",
        stars: 3,
        address: "44 Cathedral Road, Onueke | 6.41KM from city center",
        pricePerNight: 27000,
        description: "A comfortable, well-kept mid-range hotel in Onueke, popular with business and family travelers alike.",
        amenities: ["Non-smoking Rooms", "24-Hour Front Desk", "Outdoor Pool", "Daily Housekeeping", "Family Rooms"],
        agentName: "Onueke Heritage Villa Hotel Booking Agent",
        agentPhone: "2348010000177"
    },

    "benin-city-crown-inn": {
        name: "Benin City Crown Inn",
        image: "https://picsum.photos/id/127/800/600",
        state: "Edo",
        score: "8.6",
        reviews: "221",
        stars: 3,
        address: "4 Independence Way, Benin City | 3.33KM from city center",
        pricePerNight: 23000,
        description: "A comfortable, well-kept mid-range hotel in Benin City, popular with business and family travelers alike.",
        amenities: ["Bar", "Air Conditioning", "Family Rooms", "24-Hour Front Desk", "Free Wi-Fi"],
        agentName: "Benin City Crown Inn Booking Agent",
        agentPhone: "2348010000178"
    },

    "auchi-skyline-lodge": {
        name: "Auchi Skyline Lodge",
        image: "https://picsum.photos/id/128/800/600",
        state: "Edo",
        score: "7.3",
        reviews: "151",
        stars: 2,
        address: "54 New Layout, Auchi | 0.96KM from city center",
        pricePerNight: 7000,
        description: "A simple, budget-friendly stay in Auchi, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Common Lounge", "Shared Kitchen", "24-Hour Front Desk", "Free Wi-Fi"],
        agentName: "Auchi Skyline Lodge Booking Agent",
        agentPhone: "2348010000179"
    },

    "ekpoma-garden-apartments": {
        name: "Ekpoma Garden Apartments",
        image: "https://picsum.photos/id/129/800/600",
        state: "Edo",
        score: "8.2",
        reviews: "475",
        stars: 3,
        address: "24 Hospital Road, Ekpoma | 0.57KM from city center",
        pricePerNight: 17500,
        description: "A comfortable, well-kept mid-range hotel in Ekpoma, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Bar", "Outdoor Pool", "Family Rooms", "Non-smoking Rooms"],
        agentName: "Ekpoma Garden Apartments Booking Agent",
        agentPhone: "2348010000180"
    },

    "benin-city-whitestone-villa-hotel": {
        name: "Benin City Whitestone Villa Hotel",
        image: "https://picsum.photos/id/130/800/600",
        state: "Edo",
        score: "7.7",
        reviews: "55",
        stars: 2,
        address: "46 GRA, Benin City | 3.14KM from city center",
        pricePerNight: 12000,
        description: "A simple, budget-friendly stay in Benin City, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Shared Kitchen", "Common Lounge", "24-Hour Front Desk", "Air Conditioning"],
        agentName: "Benin City Whitestone Villa Hotel Booking Agent",
        agentPhone: "2348010000181"
    },

    "auchi-diamond-grand-hotel": {
        name: "Auchi Diamond Grand Hotel",
        image: "https://picsum.photos/id/131/800/600",
        state: "Edo",
        score: "8.9",
        reviews: "1,166",
        stars: 4,
        address: "50 Government House Road, Auchi | 1.85KM from city center",
        pricePerNight: 39500,
        description: "A polished hotel in Auchi with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Outdoor Pool", "Free Wi-Fi", "Airport Transfer (fee)", "Room Service", "Fine Dining Restaurant"],
        agentName: "Auchi Diamond Grand Hotel Booking Agent",
        agentPhone: "2348010000182"
    },

    "ekpoma-lakeview-villa-hotel": {
        name: "Ekpoma Lakeview Villa Hotel",
        image: "https://picsum.photos/id/132/800/600",
        state: "Edo",
        score: "7.6",
        reviews: "24",
        stars: 2,
        address: "33 Cathedral Road, Ekpoma | 1.88KM from city center",
        pricePerNight: 11000,
        description: "A simple, budget-friendly stay in Ekpoma, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Shared Kitchen", "Luggage Storage", "Free Wi-Fi", "Common Lounge"],
        agentName: "Ekpoma Lakeview Villa Hotel Booking Agent",
        agentPhone: "2348010000183"
    },

    "benin-city-horizon-lodge": {
        name: "Benin City Horizon Lodge",
        image: "https://picsum.photos/id/133/800/600",
        state: "Edo",
        score: "7.7",
        reviews: "41",
        stars: 2,
        address: "24 Market Road, Benin City | 6.22KM from city center",
        pricePerNight: 10500,
        description: "A simple, budget-friendly stay in Benin City, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Luggage Storage", "Common Lounge", "Shared Kitchen", "Laundry Service"],
        agentName: "Benin City Horizon Lodge Booking Agent",
        agentPhone: "2348010000184"
    },

    "auchi-comfort-grand-hotel": {
        name: "Auchi Comfort Grand Hotel",
        image: "https://picsum.photos/id/134/800/600",
        state: "Edo",
        score: "8.8",
        reviews: "1,176",
        stars: 5,
        address: "16 Commercial Avenue, Auchi | 4.41KM from city center",
        pricePerNight: 115000,
        description: "A standout, full-service hotel in Auchi, offering five-star comfort and attentive concierge service.",
        amenities: ["Outdoor Pool", "Fitness Center", "Business Center", "Free Wi-Fi", "Spa & Wellness Center"],
        agentName: "Auchi Comfort Grand Hotel Booking Agent",
        agentPhone: "2348010000185"
    },

    "ekpoma-lakeview-retreat": {
        name: "Ekpoma Lakeview Retreat",
        image: "https://picsum.photos/id/135/800/600",
        state: "Edo",
        score: "8.0",
        reviews: "555",
        stars: 3,
        address: "41 Airport Road, Ekpoma | 5.35KM from city center",
        pricePerNight: 30500,
        description: "A comfortable, well-kept mid-range hotel in Ekpoma, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Non-smoking Rooms", "Free Wi-Fi", "Room Service", "Family Rooms"],
        agentName: "Ekpoma Lakeview Retreat Booking Agent",
        agentPhone: "2348010000186"
    },

    "benin-city-emerald-hotel": {
        name: "Benin City Emerald Hotel",
        image: "https://picsum.photos/id/136/800/600",
        state: "Edo",
        score: "7.3",
        reviews: "99",
        stars: 2,
        address: "26 Station Road, Benin City | 3.71KM from city center",
        pricePerNight: 10000,
        description: "A simple, budget-friendly stay in Benin City, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Free Wi-Fi", "Laundry Service", "Air Conditioning", "24-Hour Front Desk"],
        agentName: "Benin City Emerald Hotel Booking Agent",
        agentPhone: "2348010000187"
    },

    "auchi-skyline-hotel": {
        name: "Auchi Skyline Hotel",
        image: "https://picsum.photos/id/137/800/600",
        state: "Edo",
        score: "7.9",
        reviews: "104",
        stars: 2,
        address: "8 Waterside Road, Auchi | 2.64KM from city center",
        pricePerNight: 8000,
        description: "A simple, budget-friendly stay in Auchi, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Laundry Service", "Luggage Storage", "Shared Kitchen", "24-Hour Front Desk"],
        agentName: "Auchi Skyline Hotel Booking Agent",
        agentPhone: "2348010000188"
    },

    "ekpoma-regal-grand-hotel": {
        name: "Ekpoma Regal Grand Hotel",
        image: "https://picsum.photos/id/138/800/600",
        state: "Edo",
        score: "9.2",
        reviews: "1,992",
        stars: 5,
        address: "47 New Layout, Ekpoma | 0.88KM from city center",
        pricePerNight: 81000,
        description: "A standout, full-service hotel in Ekpoma, offering five-star comfort and attentive concierge service.",
        amenities: ["Spa & Wellness Center", "Concierge Service", "Business Center", "Free Wi-Fi", "Fitness Center"],
        agentName: "Ekpoma Regal Grand Hotel Booking Agent",
        agentPhone: "2348010000189"
    },

    "ado-ekiti-heritage-guest-house": {
        name: "Ado-Ekiti Heritage Guest House",
        image: "https://picsum.photos/id/139/800/600",
        state: "Ekiti",
        score: "7.4",
        reviews: "129",
        stars: 2,
        address: "45 GRA, Ado-Ekiti | 2.54KM from city center",
        pricePerNight: 7500,
        description: "A simple, budget-friendly stay in Ado-Ekiti, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Laundry Service", "24-Hour Front Desk", "Generator Backup", "Luggage Storage"],
        agentName: "Ado-Ekiti Heritage Guest House Booking Agent",
        agentPhone: "2348010000190"
    },

    "ikere-ekiti-meridian-hotel": {
        name: "Ikere-Ekiti Meridian Hotel",
        image: "https://picsum.photos/id/140/800/600",
        state: "Ekiti",
        score: "7.1",
        reviews: "123",
        stars: 2,
        address: "33 Waterside Road, Ikere-Ekiti | 4.97KM from city center",
        pricePerNight: 9000,
        description: "A simple, budget-friendly stay in Ikere-Ekiti, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Free Wi-Fi", "Air Conditioning", "Generator Backup", "Luggage Storage"],
        agentName: "Ikere-Ekiti Meridian Hotel Booking Agent",
        agentPhone: "2348010000191"
    },

    "ise-ekiti-golden-inn": {
        name: "Ise-Ekiti Golden Inn",
        image: "https://picsum.photos/id/141/800/600",
        state: "Ekiti",
        score: "7.8",
        reviews: "113",
        stars: 2,
        address: "25 Cathedral Road, Ise-Ekiti | 0.6KM from city center",
        pricePerNight: 9000,
        description: "A simple, budget-friendly stay in Ise-Ekiti, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Laundry Service", "Luggage Storage", "Shared Kitchen", "Generator Backup"],
        agentName: "Ise-Ekiti Golden Inn Booking Agent",
        agentPhone: "2348010000192"
    },

    "ado-ekiti-golden-palace-hotel": {
        name: "Ado-Ekiti Golden Palace Hotel",
        image: "https://picsum.photos/id/142/800/600",
        state: "Ekiti",
        score: "7.9",
        reviews: "455",
        stars: 3,
        address: "21 Independence Way, Ado-Ekiti | 2.1KM from city center",
        pricePerNight: 28000,
        description: "A comfortable, well-kept mid-range hotel in Ado-Ekiti, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Free Wi-Fi", "Bar", "Family Rooms", "Daily Housekeeping"],
        agentName: "Ado-Ekiti Golden Palace Hotel Booking Agent",
        agentPhone: "2348010000193"
    },

    "ikere-ekiti-whitestone-apartments": {
        name: "Ikere-Ekiti Whitestone Apartments",
        image: "https://picsum.photos/id/143/800/600",
        state: "Ekiti",
        score: "7.9",
        reviews: "346",
        stars: 3,
        address: "14 Cathedral Road, Ikere-Ekiti | 2.14KM from city center",
        pricePerNight: 29500,
        description: "A comfortable, well-kept mid-range hotel in Ikere-Ekiti, popular with business and family travelers alike.",
        amenities: ["Non-smoking Rooms", "Daily Housekeeping", "Free Wi-Fi", "Air Conditioning", "Outdoor Pool"],
        agentName: "Ikere-Ekiti Whitestone Apartments Booking Agent",
        agentPhone: "2348010000194"
    },

    "ise-ekiti-harmony-grand-hotel": {
        name: "Ise-Ekiti Harmony Grand Hotel",
        image: "https://picsum.photos/id/144/800/600",
        state: "Ekiti",
        score: "8.2",
        reviews: "169",
        stars: 3,
        address: "43 Old Market Road, Ise-Ekiti | 4.73KM from city center",
        pricePerNight: 25500,
        description: "A comfortable, well-kept mid-range hotel in Ise-Ekiti, popular with business and family travelers alike.",
        amenities: ["Family Rooms", "24-Hour Front Desk", "Room Service", "Air Conditioning", "Bar"],
        agentName: "Ise-Ekiti Harmony Grand Hotel Booking Agent",
        agentPhone: "2348010000195"
    },

    "ado-ekiti-bellavista-inn": {
        name: "Ado-Ekiti Bellavista Inn",
        image: "https://picsum.photos/id/145/800/600",
        state: "Ekiti",
        score: "7.9",
        reviews: "285",
        stars: 3,
        address: "16 Waterside Road, Ado-Ekiti | 3.41KM from city center",
        pricePerNight: 19500,
        description: "A comfortable, well-kept mid-range hotel in Ado-Ekiti, popular with business and family travelers alike.",
        amenities: ["Bar", "Family Rooms", "Daily Housekeeping", "24-Hour Front Desk", "Air Conditioning"],
        agentName: "Ado-Ekiti Bellavista Inn Booking Agent",
        agentPhone: "2348010000196"
    },

    "ikere-ekiti-golden-suites": {
        name: "Ikere-Ekiti Golden Suites",
        image: "https://picsum.photos/id/146/800/600",
        state: "Ekiti",
        score: "8.1",
        reviews: "570",
        stars: 3,
        address: "27 Waterside Road, Ikere-Ekiti | 2.9KM from city center",
        pricePerNight: 32000,
        description: "A comfortable, well-kept mid-range hotel in Ikere-Ekiti, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Room Service", "Non-smoking Rooms", "Bar", "Free Wi-Fi"],
        agentName: "Ikere-Ekiti Golden Suites Booking Agent",
        agentPhone: "2348010000197"
    },

    "ise-ekiti-vista-apartments": {
        name: "Ise-Ekiti Vista Apartments",
        image: "https://picsum.photos/id/147/800/600",
        state: "Ekiti",
        score: "8.1",
        reviews: "644",
        stars: 3,
        address: "50 Airport Road, Ise-Ekiti | 3.04KM from city center",
        pricePerNight: 21000,
        description: "A comfortable, well-kept mid-range hotel in Ise-Ekiti, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "24-Hour Front Desk", "Non-smoking Rooms", "Room Service"],
        agentName: "Ise-Ekiti Vista Apartments Booking Agent",
        agentPhone: "2348010000198"
    },

    "ado-ekiti-prestige-grand-hotel": {
        name: "Ado-Ekiti Prestige Grand Hotel",
        image: "https://picsum.photos/id/148/800/600",
        state: "Ekiti",
        score: "7.2",
        reviews: "152",
        stars: 2,
        address: "19 Station Road, Ado-Ekiti | 0.88KM from city center",
        pricePerNight: 13500,
        description: "A simple, budget-friendly stay in Ado-Ekiti, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Laundry Service", "Generator Backup", "24-Hour Front Desk", "Air Conditioning"],
        agentName: "Ado-Ekiti Prestige Grand Hotel Booking Agent",
        agentPhone: "2348010000199"
    },

    "ikere-ekiti-oasis-apartments": {
        name: "Ikere-Ekiti Oasis Apartments",
        image: "https://picsum.photos/id/149/800/600",
        state: "Ekiti",
        score: "7.9",
        reviews: "252",
        stars: 3,
        address: "11 Independence Way, Ikere-Ekiti | 4.21KM from city center",
        pricePerNight: 20000,
        description: "A comfortable, well-kept mid-range hotel in Ikere-Ekiti, popular with business and family travelers alike.",
        amenities: ["Bar", "Free Wi-Fi", "Outdoor Pool", "Non-smoking Rooms", "Family Rooms"],
        agentName: "Ikere-Ekiti Oasis Apartments Booking Agent",
        agentPhone: "2348010000200"
    },

    "ise-ekiti-summit-palace-hotel": {
        name: "Ise-Ekiti Summit Palace Hotel",
        image: "https://picsum.photos/id/150/800/600",
        state: "Ekiti",
        score: "7.3",
        reviews: "73",
        stars: 2,
        address: "37 New Layout, Ise-Ekiti | 4.17KM from city center",
        pricePerNight: 12500,
        description: "A simple, budget-friendly stay in Ise-Ekiti, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Luggage Storage", "Laundry Service", "Generator Backup", "24-Hour Front Desk"],
        agentName: "Ise-Ekiti Summit Palace Hotel Booking Agent",
        agentPhone: "2348010000201"
    },

    "enugu-heritage-villa-hotel": {
        name: "Enugu Heritage Villa Hotel",
        image: "https://picsum.photos/id/151/800/600",
        state: "Enugu",
        score: "8.0",
        reviews: "495",
        stars: 3,
        address: "30 Market Road, Enugu | 4.6KM from city center",
        pricePerNight: 24500,
        description: "A comfortable, well-kept mid-range hotel in Enugu, popular with business and family travelers alike.",
        amenities: ["Room Service", "Non-smoking Rooms", "Daily Housekeeping", "Outdoor Pool", "Bar"],
        agentName: "Enugu Heritage Villa Hotel Booking Agent",
        agentPhone: "2348010000202"
    },

    "nsukka-oasis-lodge": {
        name: "Nsukka Oasis Lodge",
        image: "https://picsum.photos/id/152/800/600",
        state: "Enugu",
        score: "7.3",
        reviews: "101",
        stars: 2,
        address: "56 Old Market Road, Nsukka | 6.35KM from city center",
        pricePerNight: 12000,
        description: "A simple, budget-friendly stay in Nsukka, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Common Lounge", "Shared Kitchen", "Generator Backup", "Free Wi-Fi"],
        agentName: "Nsukka Oasis Lodge Booking Agent",
        agentPhone: "2348010000203"
    },

    "awgu-serene-suites": {
        name: "Awgu Serene Suites",
        image: "https://picsum.photos/id/153/800/600",
        state: "Enugu",
        score: "7.3",
        reviews: "83",
        stars: 2,
        address: "7 Ring Road, Awgu | 2.17KM from city center",
        pricePerNight: 7000,
        description: "A simple, budget-friendly stay in Awgu, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Shared Kitchen", "Generator Backup", "Luggage Storage", "Air Conditioning"],
        agentName: "Awgu Serene Suites Booking Agent",
        agentPhone: "2348010000204"
    },

    "enugu-harmony-lodge": {
        name: "Enugu Harmony Lodge",
        image: "https://picsum.photos/id/154/800/600",
        state: "Enugu",
        score: "9.5",
        reviews: "2,180",
        stars: 5,
        address: "49 Airport Road, Enugu | 3.44KM from city center",
        pricePerNight: 95000,
        description: "A standout, full-service hotel in Enugu, offering five-star comfort and attentive concierge service.",
        amenities: ["Business Center", "Private Beach Access", "Fine Dining Restaurant", "Spa & Wellness Center", "Valet Parking"],
        agentName: "Enugu Harmony Lodge Booking Agent",
        agentPhone: "2348010000205"
    },

    "nsukka-garden-apartments": {
        name: "Nsukka Garden Apartments",
        image: "https://picsum.photos/id/155/800/600",
        state: "Enugu",
        score: "7.5",
        reviews: "81",
        stars: 2,
        address: "38 Old Market Road, Nsukka | 0.7KM from city center",
        pricePerNight: 8000,
        description: "A simple, budget-friendly stay in Nsukka, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Luggage Storage", "Shared Kitchen", "Common Lounge", "24-Hour Front Desk"],
        agentName: "Nsukka Garden Apartments Booking Agent",
        agentPhone: "2348010000206"
    },

    "awgu-riverside-suites": {
        name: "Awgu Riverside Suites",
        image: "https://picsum.photos/id/156/800/600",
        state: "Enugu",
        score: "8.2",
        reviews: "350",
        stars: 3,
        address: "49 New Layout, Awgu | 2.63KM from city center",
        pricePerNight: 27000,
        description: "A comfortable, well-kept mid-range hotel in Awgu, popular with business and family travelers alike.",
        amenities: ["Outdoor Pool", "Free Wi-Fi", "24-Hour Front Desk", "Family Rooms", "Air Conditioning"],
        agentName: "Awgu Riverside Suites Booking Agent",
        agentPhone: "2348010000207"
    },

    "enugu-heritage-suites": {
        name: "Enugu Heritage Suites",
        image: "https://picsum.photos/id/157/800/600",
        state: "Enugu",
        score: "7.4",
        reviews: "135",
        stars: 2,
        address: "36 Government House Road, Enugu | 5.43KM from city center",
        pricePerNight: 12500,
        description: "A simple, budget-friendly stay in Enugu, geared toward travelers who need a practical, affordable base.",
        amenities: ["Air Conditioning", "Shared Kitchen", "Free Wi-Fi", "Luggage Storage", "24-Hour Front Desk"],
        agentName: "Enugu Heritage Suites Booking Agent",
        agentPhone: "2348010000208"
    },

    "nsukka-prestige-apartments": {
        name: "Nsukka Prestige Apartments",
        image: "https://picsum.photos/id/158/800/600",
        state: "Enugu",
        score: "8.7",
        reviews: "227",
        stars: 3,
        address: "39 Stadium Road, Nsukka | 2.85KM from city center",
        pricePerNight: 21500,
        description: "A comfortable, well-kept mid-range hotel in Nsukka, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "Family Rooms", "Non-smoking Rooms", "Air Conditioning", "Room Service"],
        agentName: "Nsukka Prestige Apartments Booking Agent",
        agentPhone: "2348010000209"
    },

    "awgu-bellavista-villa-hotel": {
        name: "Awgu Bellavista Villa Hotel",
        image: "https://picsum.photos/id/159/800/600",
        state: "Enugu",
        score: "8.5",
        reviews: "1,355",
        stars: 4,
        address: "21 Cathedral Road, Awgu | 2.34KM from city center",
        pricePerNight: 40500,
        description: "A polished hotel in Awgu with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Concierge Service", "Fine Dining Restaurant", "Fitness Center", "Business Center", "Airport Transfer (fee)"],
        agentName: "Awgu Bellavista Villa Hotel Booking Agent",
        agentPhone: "2348010000210"
    },

    "enugu-bellavista-apartments": {
        name: "Enugu Bellavista Apartments",
        image: "https://picsum.photos/id/160/800/600",
        state: "Enugu",
        score: "8.3",
        reviews: "656",
        stars: 3,
        address: "31 Station Road, Enugu | 0.5KM from city center",
        pricePerNight: 25000,
        description: "A comfortable, well-kept mid-range hotel in Enugu, popular with business and family travelers alike.",
        amenities: ["Bar", "Air Conditioning", "Daily Housekeeping", "24-Hour Front Desk", "Room Service"],
        agentName: "Enugu Bellavista Apartments Booking Agent",
        agentPhone: "2348010000211"
    },

    "gombe-cedar-grand-hotel": {
        name: "Gombe Cedar Grand Hotel",
        image: "https://picsum.photos/id/161/800/600",
        state: "Gombe",
        score: "8.4",
        reviews: "691",
        stars: 3,
        address: "17 Independence Way, Gombe | 5.18KM from city center",
        pricePerNight: 30500,
        description: "A comfortable, well-kept mid-range hotel in Gombe, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Free Wi-Fi", "24-Hour Front Desk", "Family Rooms", "Air Conditioning"],
        agentName: "Gombe Cedar Grand Hotel Booking Agent",
        agentPhone: "2348010000212"
    },

    "kaltungo-cedar-palace-hotel": {
        name: "Kaltungo Cedar Palace Hotel",
        image: "https://picsum.photos/id/162/800/600",
        state: "Gombe",
        score: "8.6",
        reviews: "469",
        stars: 3,
        address: "53 Independence Way, Kaltungo | 1.88KM from city center",
        pricePerNight: 20000,
        description: "A comfortable, well-kept mid-range hotel in Kaltungo, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Daily Housekeeping", "Free Wi-Fi", "Non-smoking Rooms", "Room Service"],
        agentName: "Kaltungo Cedar Palace Hotel Booking Agent",
        agentPhone: "2348010000213"
    },

    "billiri-horizon-grand-hotel": {
        name: "Billiri Horizon Grand Hotel",
        image: "https://picsum.photos/id/163/800/600",
        state: "Gombe",
        score: "8.0",
        reviews: "593",
        stars: 3,
        address: "56 Station Road, Billiri | 4.89KM from city center",
        pricePerNight: 30500,
        description: "A comfortable, well-kept mid-range hotel in Billiri, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "Room Service", "24-Hour Front Desk", "Air Conditioning", "Outdoor Pool"],
        agentName: "Billiri Horizon Grand Hotel Booking Agent",
        agentPhone: "2348010000214"
    },

    "gombe-vista-villa-hotel": {
        name: "Gombe Vista Villa Hotel",
        image: "https://picsum.photos/id/164/800/600",
        state: "Gombe",
        score: "7.5",
        reviews: "100",
        stars: 2,
        address: "12 GRA, Gombe | 5.96KM from city center",
        pricePerNight: 14000,
        description: "A simple, budget-friendly stay in Gombe, geared toward travelers who need a practical, affordable base.",
        amenities: ["Laundry Service", "Generator Backup", "24-Hour Front Desk", "Shared Kitchen", "Luggage Storage"],
        agentName: "Gombe Vista Villa Hotel Booking Agent",
        agentPhone: "2348010000215"
    },

    "kaltungo-silver-guest-house": {
        name: "Kaltungo Silver Guest House",
        image: "https://picsum.photos/id/165/800/600",
        state: "Gombe",
        score: "7.6",
        reviews: "77",
        stars: 2,
        address: "20 Waterside Road, Kaltungo | 2.16KM from city center",
        pricePerNight: 13500,
        description: "A simple, budget-friendly stay in Kaltungo, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Laundry Service", "Common Lounge", "Shared Kitchen", "24-Hour Front Desk"],
        agentName: "Kaltungo Silver Guest House Booking Agent",
        agentPhone: "2348010000216"
    },

    "billiri-diamond-grand-hotel": {
        name: "Billiri Diamond Grand Hotel",
        image: "https://picsum.photos/id/166/800/600",
        state: "Gombe",
        score: "8.1",
        reviews: "204",
        stars: 3,
        address: "44 Stadium Road, Billiri | 2.72KM from city center",
        pricePerNight: 34000,
        description: "A comfortable, well-kept mid-range hotel in Billiri, popular with business and family travelers alike.",
        amenities: ["Outdoor Pool", "Bar", "Family Rooms", "Air Conditioning", "Room Service"],
        agentName: "Billiri Diamond Grand Hotel Booking Agent",
        agentPhone: "2348010000217"
    },

    "gombe-rosewood-suites": {
        name: "Gombe Rosewood Suites",
        image: "https://picsum.photos/id/167/800/600",
        state: "Gombe",
        score: "7.3",
        reviews: "133",
        stars: 2,
        address: "17 Commercial Avenue, Gombe | 3.32KM from city center",
        pricePerNight: 11500,
        description: "A simple, budget-friendly stay in Gombe, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Common Lounge", "Generator Backup", "24-Hour Front Desk", "Laundry Service"],
        agentName: "Gombe Rosewood Suites Booking Agent",
        agentPhone: "2348010000218"
    },

    "kaltungo-oasis-grand-hotel": {
        name: "Kaltungo Oasis Grand Hotel",
        image: "https://picsum.photos/id/168/800/600",
        state: "Gombe",
        score: "7.6",
        reviews: "82",
        stars: 2,
        address: "43 Stadium Road, Kaltungo | 1.78KM from city center",
        pricePerNight: 6500,
        description: "A simple, budget-friendly stay in Kaltungo, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Free Wi-Fi", "Common Lounge", "Shared Kitchen", "24-Hour Front Desk"],
        agentName: "Kaltungo Oasis Grand Hotel Booking Agent",
        agentPhone: "2348010000219"
    },

    "billiri-palm-retreat": {
        name: "Billiri Palm Retreat",
        image: "https://picsum.photos/id/169/800/600",
        state: "Gombe",
        score: "8.6",
        reviews: "85",
        stars: 3,
        address: "60 Airport Road, Billiri | 2.88KM from city center",
        pricePerNight: 33000,
        description: "A comfortable, well-kept mid-range hotel in Billiri, popular with business and family travelers alike.",
        amenities: ["Non-smoking Rooms", "Family Rooms", "Bar", "Air Conditioning", "Room Service"],
        agentName: "Billiri Palm Retreat Booking Agent",
        agentPhone: "2348010000220"
    },

    "gombe-summit-hotel": {
        name: "Gombe Summit Hotel",
        image: "https://picsum.photos/id/170/800/600",
        state: "Gombe",
        score: "7.9",
        reviews: "42",
        stars: 2,
        address: "37 Hospital Road, Gombe | 3.66KM from city center",
        pricePerNight: 11500,
        description: "A simple, budget-friendly stay in Gombe, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Luggage Storage", "Common Lounge", "Shared Kitchen"],
        agentName: "Gombe Summit Hotel Booking Agent",
        agentPhone: "2348010000221"
    },

    "kaltungo-garden-villa-hotel": {
        name: "Kaltungo Garden Villa Hotel",
        image: "https://picsum.photos/id/171/800/600",
        state: "Gombe",
        score: "8.9",
        reviews: "2,085",
        stars: 5,
        address: "1 Government House Road, Kaltungo | 3.86KM from city center",
        pricePerNight: 75000,
        description: "A standout, full-service hotel in Kaltungo, offering five-star comfort and attentive concierge service.",
        amenities: ["Outdoor Pool", "Fitness Center", "Spa & Wellness Center", "Fine Dining Restaurant", "Concierge Service"],
        agentName: "Kaltungo Garden Villa Hotel Booking Agent",
        agentPhone: "2348010000222"
    },

    "billiri-harmony-lodge": {
        name: "Billiri Harmony Lodge",
        image: "https://picsum.photos/id/172/800/600",
        state: "Gombe",
        score: "8.7",
        reviews: "559",
        stars: 3,
        address: "13 Waterside Road, Billiri | 1.09KM from city center",
        pricePerNight: 24000,
        description: "A comfortable, well-kept mid-range hotel in Billiri, popular with business and family travelers alike.",
        amenities: ["Room Service", "Non-smoking Rooms", "Bar", "Family Rooms", "Air Conditioning"],
        agentName: "Billiri Harmony Lodge Booking Agent",
        agentPhone: "2348010000223"
    },

    "owerri-prestige-guest-house": {
        name: "Owerri Prestige Guest House",
        image: "https://picsum.photos/id/173/800/600",
        state: "Imo",
        score: "7.6",
        reviews: "69",
        stars: 2,
        address: "40 Station Road, Owerri | 4.3KM from city center",
        pricePerNight: 7500,
        description: "A simple, budget-friendly stay in Owerri, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Shared Kitchen", "Luggage Storage", "Generator Backup", "24-Hour Front Desk"],
        agentName: "Owerri Prestige Guest House Booking Agent",
        agentPhone: "2348010000224"
    },

    "orlu-vista-suites": {
        name: "Orlu Vista Suites",
        image: "https://picsum.photos/id/174/800/600",
        state: "Imo",
        score: "7.2",
        reviews: "55",
        stars: 2,
        address: "21 Hospital Road, Orlu | 0.44KM from city center",
        pricePerNight: 10000,
        description: "A simple, budget-friendly stay in Orlu, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Air Conditioning", "Luggage Storage", "24-Hour Front Desk", "Generator Backup"],
        agentName: "Orlu Vista Suites Booking Agent",
        agentPhone: "2348010000225"
    },

    "okigwe-cedar-palace-hotel": {
        name: "Okigwe Cedar Palace Hotel",
        image: "https://picsum.photos/id/175/800/600",
        state: "Imo",
        score: "7.0",
        reviews: "112",
        stars: 2,
        address: "16 Ring Road, Okigwe | 4.47KM from city center",
        pricePerNight: 11500,
        description: "A simple, budget-friendly stay in Okigwe, geared toward travelers who need a practical, affordable base.",
        amenities: ["Shared Kitchen", "24-Hour Front Desk", "Air Conditioning", "Luggage Storage", "Common Lounge"],
        agentName: "Okigwe Cedar Palace Hotel Booking Agent",
        agentPhone: "2348010000226"
    },

    "owerri-summit-guest-house": {
        name: "Owerri Summit Guest House",
        image: "https://picsum.photos/id/176/800/600",
        state: "Imo",
        score: "8.2",
        reviews: "306",
        stars: 3,
        address: "9 GRA, Owerri | 1.33KM from city center",
        pricePerNight: 22000,
        description: "A comfortable, well-kept mid-range hotel in Owerri, popular with business and family travelers alike.",
        amenities: ["Bar", "Outdoor Pool", "Family Rooms", "24-Hour Front Desk", "Daily Housekeeping"],
        agentName: "Owerri Summit Guest House Booking Agent",
        agentPhone: "2348010000227"
    },

    "orlu-meridian-retreat": {
        name: "Orlu Meridian Retreat",
        image: "https://picsum.photos/id/177/800/600",
        state: "Imo",
        score: "8.6",
        reviews: "333",
        stars: 3,
        address: "34 GRA, Orlu | 3.62KM from city center",
        pricePerNight: 17500,
        description: "A comfortable, well-kept mid-range hotel in Orlu, popular with business and family travelers alike.",
        amenities: ["Bar", "Air Conditioning", "24-Hour Front Desk", "Free Wi-Fi", "Family Rooms"],
        agentName: "Orlu Meridian Retreat Booking Agent",
        agentPhone: "2348010000228"
    },

    "okigwe-harmony-apartments": {
        name: "Okigwe Harmony Apartments",
        image: "https://picsum.photos/id/178/800/600",
        state: "Imo",
        score: "8.6",
        reviews: "1,399",
        stars: 4,
        address: "11 Old Market Road, Okigwe | 5.61KM from city center",
        pricePerNight: 41000,
        description: "A polished hotel in Okigwe with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Airport Transfer (fee)", "Free Wi-Fi", "Fitness Center", "Outdoor Pool", "Room Service"],
        agentName: "Okigwe Harmony Apartments Booking Agent",
        agentPhone: "2348010000229"
    },

    "owerri-bellavista-villa-hotel": {
        name: "Owerri Bellavista Villa Hotel",
        image: "https://picsum.photos/id/179/800/600",
        state: "Imo",
        score: "7.8",
        reviews: "136",
        stars: 2,
        address: "33 New Layout, Owerri | 3.19KM from city center",
        pricePerNight: 7000,
        description: "A simple, budget-friendly stay in Owerri, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Generator Backup", "Luggage Storage", "24-Hour Front Desk", "Shared Kitchen"],
        agentName: "Owerri Bellavista Villa Hotel Booking Agent",
        agentPhone: "2348010000230"
    },

    "orlu-lakeview-hotel": {
        name: "Orlu Lakeview Hotel",
        image: "https://picsum.photos/id/180/800/600",
        state: "Imo",
        score: "7.7",
        reviews: "168",
        stars: 2,
        address: "3 New Layout, Orlu | 2.5KM from city center",
        pricePerNight: 6500,
        description: "A simple, budget-friendly stay in Orlu, geared toward travelers who need a practical, affordable base.",
        amenities: ["Air Conditioning", "Generator Backup", "Free Wi-Fi", "Laundry Service", "Luggage Storage"],
        agentName: "Orlu Lakeview Hotel Booking Agent",
        agentPhone: "2348010000231"
    },

    "okigwe-horizon-lodge": {
        name: "Okigwe Horizon Lodge",
        image: "https://picsum.photos/id/181/800/600",
        state: "Imo",
        score: "7.8",
        reviews: "127",
        stars: 2,
        address: "58 New Layout, Okigwe | 3.14KM from city center",
        pricePerNight: 9000,
        description: "A simple, budget-friendly stay in Okigwe, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Luggage Storage", "Free Wi-Fi", "Generator Backup", "Air Conditioning"],
        agentName: "Okigwe Horizon Lodge Booking Agent",
        agentPhone: "2348010000232"
    },

    "owerri-elite-suites": {
        name: "Owerri Elite Suites",
        image: "https://picsum.photos/id/182/800/600",
        state: "Imo",
        score: "8.0",
        reviews: "630",
        stars: 3,
        address: "34 Airport Road, Owerri | 4.84KM from city center",
        pricePerNight: 28000,
        description: "A comfortable, well-kept mid-range hotel in Owerri, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Free Wi-Fi", "Outdoor Pool", "Non-smoking Rooms", "Room Service"],
        agentName: "Owerri Elite Suites Booking Agent",
        agentPhone: "2348010000233"
    },

    "orlu-cedar-apartments": {
        name: "Orlu Cedar Apartments",
        image: "https://picsum.photos/id/183/800/600",
        state: "Imo",
        score: "8.2",
        reviews: "468",
        stars: 3,
        address: "16 GRA, Orlu | 2.51KM from city center",
        pricePerNight: 22500,
        description: "A comfortable, well-kept mid-range hotel in Orlu, popular with business and family travelers alike.",
        amenities: ["24-Hour Front Desk", "Daily Housekeeping", "Bar", "Free Wi-Fi", "Outdoor Pool"],
        agentName: "Orlu Cedar Apartments Booking Agent",
        agentPhone: "2348010000234"
    },

    "okigwe-horizon-palace-hotel": {
        name: "Okigwe Horizon Palace Hotel",
        image: "https://picsum.photos/id/184/800/600",
        state: "Imo",
        score: "9.0",
        reviews: "332",
        stars: 4,
        address: "14 Market Road, Okigwe | 1.02KM from city center",
        pricePerNight: 44000,
        description: "A polished hotel in Okigwe with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Free Wi-Fi", "Room Service", "Fine Dining Restaurant", "Airport Transfer (fee)", "Outdoor Pool"],
        agentName: "Okigwe Horizon Palace Hotel Booking Agent",
        agentPhone: "2348010000235"
    },

    "dutse-garden-villa-hotel": {
        name: "Dutse Garden Villa Hotel",
        image: "https://picsum.photos/id/185/800/600",
        state: "Jigawa",
        score: "8.0",
        reviews: "302",
        stars: 3,
        address: "9 Stadium Road, Dutse | 6.46KM from city center",
        pricePerNight: 17000,
        description: "A comfortable, well-kept mid-range hotel in Dutse, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Bar", "24-Hour Front Desk", "Outdoor Pool", "Room Service"],
        agentName: "Dutse Garden Villa Hotel Booking Agent",
        agentPhone: "2348010000236"
    },

    "hadejia-harmony-lodge": {
        name: "Hadejia Harmony Lodge",
        image: "https://picsum.photos/id/186/800/600",
        state: "Jigawa",
        score: "8.0",
        reviews: "153",
        stars: 2,
        address: "27 Government House Road, Hadejia | 2.08KM from city center",
        pricePerNight: 8000,
        description: "A simple, budget-friendly stay in Hadejia, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Laundry Service", "Common Lounge", "Luggage Storage", "Generator Backup"],
        agentName: "Hadejia Harmony Lodge Booking Agent",
        agentPhone: "2348010000237"
    },

    "gumel-elite-retreat": {
        name: "Gumel Elite Retreat",
        image: "https://picsum.photos/id/187/800/600",
        state: "Jigawa",
        score: "7.7",
        reviews: "154",
        stars: 2,
        address: "45 New Layout, Gumel | 2.89KM from city center",
        pricePerNight: 8500,
        description: "A simple, budget-friendly stay in Gumel, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Luggage Storage", "Air Conditioning", "Shared Kitchen", "Common Lounge"],
        agentName: "Gumel Elite Retreat Booking Agent",
        agentPhone: "2348010000238"
    },

    "dutse-silver-guest-house": {
        name: "Dutse Silver Guest House",
        image: "https://picsum.photos/id/188/800/600",
        state: "Jigawa",
        score: "7.9",
        reviews: "56",
        stars: 2,
        address: "30 Ring Road, Dutse | 3.83KM from city center",
        pricePerNight: 12500,
        description: "A simple, budget-friendly stay in Dutse, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Generator Backup", "Shared Kitchen", "Air Conditioning", "Luggage Storage"],
        agentName: "Dutse Silver Guest House Booking Agent",
        agentPhone: "2348010000239"
    },

    "hadejia-emerald-resort": {
        name: "Hadejia Emerald Resort",
        image: "https://picsum.photos/id/189/800/600",
        state: "Jigawa",
        score: "7.6",
        reviews: "135",
        stars: 2,
        address: "24 Market Road, Hadejia | 3.67KM from city center",
        pricePerNight: 13000,
        description: "A simple, budget-friendly stay in Hadejia, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Free Wi-Fi", "24-Hour Front Desk", "Shared Kitchen", "Common Lounge"],
        agentName: "Hadejia Emerald Resort Booking Agent",
        agentPhone: "2348010000240"
    },

    "gumel-emerald-palace-hotel": {
        name: "Gumel Emerald Palace Hotel",
        image: "https://picsum.photos/id/190/800/600",
        state: "Jigawa",
        score: "9.0",
        reviews: "1,444",
        stars: 4,
        address: "31 Hospital Road, Gumel | 5.7KM from city center",
        pricePerNight: 43000,
        description: "A polished hotel in Gumel with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Fitness Center", "Business Center", "Free Wi-Fi", "Outdoor Pool", "Fine Dining Restaurant"],
        agentName: "Gumel Emerald Palace Hotel Booking Agent",
        agentPhone: "2348010000241"
    },

    "dutse-palm-grand-hotel": {
        name: "Dutse Palm Grand Hotel",
        image: "https://picsum.photos/id/191/800/600",
        state: "Jigawa",
        score: "9.6",
        reviews: "2,861",
        stars: 5,
        address: "45 Cathedral Road, Dutse | 4.69KM from city center",
        pricePerNight: 102000,
        description: "A standout, full-service hotel in Dutse, offering five-star comfort and attentive concierge service.",
        amenities: ["Valet Parking", "Fine Dining Restaurant", "Concierge Service", "Spa & Wellness Center", "Fitness Center"],
        agentName: "Dutse Palm Grand Hotel Booking Agent",
        agentPhone: "2348010000242"
    },

    "hadejia-diamond-retreat": {
        name: "Hadejia Diamond Retreat",
        image: "https://picsum.photos/id/192/800/600",
        state: "Jigawa",
        score: "7.4",
        reviews: "86",
        stars: 2,
        address: "33 GRA, Hadejia | 3.24KM from city center",
        pricePerNight: 9000,
        description: "A simple, budget-friendly stay in Hadejia, geared toward travelers who need a practical, affordable base.",
        amenities: ["Shared Kitchen", "Common Lounge", "24-Hour Front Desk", "Air Conditioning", "Laundry Service"],
        agentName: "Hadejia Diamond Retreat Booking Agent",
        agentPhone: "2348010000243"
    },

    "gumel-royal-palace-hotel": {
        name: "Gumel Royal Palace Hotel",
        image: "https://picsum.photos/id/193/800/600",
        state: "Jigawa",
        score: "7.9",
        reviews: "57",
        stars: 2,
        address: "17 Stadium Road, Gumel | 6.1KM from city center",
        pricePerNight: 6000,
        description: "A simple, budget-friendly stay in Gumel, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "24-Hour Front Desk", "Air Conditioning", "Laundry Service", "Shared Kitchen"],
        agentName: "Gumel Royal Palace Hotel Booking Agent",
        agentPhone: "2348010000244"
    },

    "dutse-pearl-inn": {
        name: "Dutse Pearl Inn",
        image: "https://picsum.photos/id/194/800/600",
        state: "Jigawa",
        score: "7.5",
        reviews: "106",
        stars: 2,
        address: "49 Station Road, Dutse | 3.38KM from city center",
        pricePerNight: 8000,
        description: "A simple, budget-friendly stay in Dutse, geared toward travelers who need a practical, affordable base.",
        amenities: ["Shared Kitchen", "Luggage Storage", "Air Conditioning", "24-Hour Front Desk", "Laundry Service"],
        agentName: "Dutse Pearl Inn Booking Agent",
        agentPhone: "2348010000245"
    },

    "hadejia-diamond-villa-hotel": {
        name: "Hadejia Diamond Villa Hotel",
        image: "https://picsum.photos/id/195/800/600",
        state: "Jigawa",
        score: "7.2",
        reviews: "158",
        stars: 2,
        address: "4 Stadium Road, Hadejia | 0.61KM from city center",
        pricePerNight: 11500,
        description: "A simple, budget-friendly stay in Hadejia, geared toward travelers who need a practical, affordable base.",
        amenities: ["Air Conditioning", "Common Lounge", "Laundry Service", "Free Wi-Fi", "Generator Backup"],
        agentName: "Hadejia Diamond Villa Hotel Booking Agent",
        agentPhone: "2348010000246"
    },

    "gumel-lakeview-retreat": {
        name: "Gumel Lakeview Retreat",
        image: "https://picsum.photos/id/196/800/600",
        state: "Jigawa",
        score: "8.0",
        reviews: "234",
        stars: 3,
        address: "14 Stadium Road, Gumel | 3.18KM from city center",
        pricePerNight: 15500,
        description: "A comfortable, well-kept mid-range hotel in Gumel, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "Non-smoking Rooms", "Bar", "Daily Housekeeping", "Family Rooms"],
        agentName: "Gumel Lakeview Retreat Booking Agent",
        agentPhone: "2348010000247"
    },

    "kaduna-diamond-hostel": {
        name: "Kaduna Diamond Hostel",
        image: "https://picsum.photos/id/197/800/600",
        state: "Kaduna",
        score: "7.0",
        reviews: "155",
        stars: 2,
        address: "18 Stadium Road, Kaduna | 6.36KM from city center",
        pricePerNight: 12000,
        description: "A simple, budget-friendly stay in Kaduna, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Generator Backup", "Laundry Service", "Luggage Storage", "Air Conditioning"],
        agentName: "Kaduna Diamond Hostel Booking Agent",
        agentPhone: "2348010000248"
    },

    "zaria-palm-apartments": {
        name: "Zaria Palm Apartments",
        image: "https://picsum.photos/id/198/800/600",
        state: "Kaduna",
        score: "7.1",
        reviews: "69",
        stars: 2,
        address: "34 Government House Road, Zaria | 5.37KM from city center",
        pricePerNight: 11000,
        description: "A simple, budget-friendly stay in Zaria, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Common Lounge", "Luggage Storage", "Free Wi-Fi", "24-Hour Front Desk"],
        agentName: "Zaria Palm Apartments Booking Agent",
        agentPhone: "2348010000249"
    },

    "kafanchan-serene-palace-hotel": {
        name: "Kafanchan Serene Palace Hotel",
        image: "https://picsum.photos/id/199/800/600",
        state: "Kaduna",
        score: "9.0",
        reviews: "1,825",
        stars: 5,
        address: "44 Station Road, Kafanchan | 5.57KM from city center",
        pricePerNight: 109500,
        description: "A standout, full-service hotel in Kafanchan, offering five-star comfort and attentive concierge service.",
        amenities: ["Free Wi-Fi", "Outdoor Pool", "Fine Dining Restaurant", "Valet Parking", "Fitness Center"],
        agentName: "Kafanchan Serene Palace Hotel Booking Agent",
        agentPhone: "2348010000250"
    },

    "kaduna-royal-retreat": {
        name: "Kaduna Royal Retreat",
        image: "https://picsum.photos/id/200/800/600",
        state: "Kaduna",
        score: "7.8",
        reviews: "255",
        stars: 3,
        address: "32 Station Road, Kaduna | 3.05KM from city center",
        pricePerNight: 17500,
        description: "A comfortable, well-kept mid-range hotel in Kaduna, popular with business and family travelers alike.",
        amenities: ["Bar", "Air Conditioning", "24-Hour Front Desk", "Free Wi-Fi", "Non-smoking Rooms"],
        agentName: "Kaduna Royal Retreat Booking Agent",
        agentPhone: "2348010000251"
    },

    "zaria-riverside-grand-hotel": {
        name: "Zaria Riverside Grand Hotel",
        image: "https://picsum.photos/id/201/800/600",
        state: "Kaduna",
        score: "7.9",
        reviews: "141",
        stars: 2,
        address: "3 Market Road, Zaria | 4.58KM from city center",
        pricePerNight: 8000,
        description: "A simple, budget-friendly stay in Zaria, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Shared Kitchen", "Common Lounge", "Free Wi-Fi", "Air Conditioning"],
        agentName: "Zaria Riverside Grand Hotel Booking Agent",
        agentPhone: "2348010000252"
    },

    "kafanchan-prestige-hotel": {
        name: "Kafanchan Prestige Hotel",
        image: "https://picsum.photos/id/202/800/600",
        state: "Kaduna",
        score: "9.2",
        reviews: "595",
        stars: 4,
        address: "53 Commercial Avenue, Kafanchan | 5.41KM from city center",
        pricePerNight: 60500,
        description: "A polished hotel in Kafanchan with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Outdoor Pool", "Business Center", "Airport Transfer (fee)", "Fine Dining Restaurant", "Fitness Center"],
        agentName: "Kafanchan Prestige Hotel Booking Agent",
        agentPhone: "2348010000253"
    },

    "kaduna-riverside-hostel": {
        name: "Kaduna Riverside Hostel",
        image: "https://picsum.photos/id/203/800/600",
        state: "Kaduna",
        score: "8.5",
        reviews: "633",
        stars: 3,
        address: "25 Waterside Road, Kaduna | 4.91KM from city center",
        pricePerNight: 26000,
        description: "A comfortable, well-kept mid-range hotel in Kaduna, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Bar", "Free Wi-Fi", "Outdoor Pool", "Daily Housekeeping"],
        agentName: "Kaduna Riverside Hostel Booking Agent",
        agentPhone: "2348010000254"
    },

    "zaria-golden-resort": {
        name: "Zaria Golden Resort",
        image: "https://picsum.photos/id/204/800/600",
        state: "Kaduna",
        score: "7.6",
        reviews: "177",
        stars: 2,
        address: "39 New Layout, Zaria | 6.31KM from city center",
        pricePerNight: 14000,
        description: "A simple, budget-friendly stay in Zaria, geared toward travelers who need a practical, affordable base.",
        amenities: ["Laundry Service", "Free Wi-Fi", "Shared Kitchen", "24-Hour Front Desk", "Luggage Storage"],
        agentName: "Zaria Golden Resort Booking Agent",
        agentPhone: "2348010000255"
    },

    "kafanchan-elite-apartments": {
        name: "Kafanchan Elite Apartments",
        image: "https://picsum.photos/id/205/800/600",
        state: "Kaduna",
        score: "8.7",
        reviews: "522",
        stars: 3,
        address: "44 Cathedral Road, Kafanchan | 4.43KM from city center",
        pricePerNight: 21000,
        description: "A comfortable, well-kept mid-range hotel in Kafanchan, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "24-Hour Front Desk", "Outdoor Pool", "Family Rooms", "Free Wi-Fi"],
        agentName: "Kafanchan Elite Apartments Booking Agent",
        agentPhone: "2348010000256"
    },

    "kaduna-sunset-hostel": {
        name: "Kaduna Sunset Hostel",
        image: "https://picsum.photos/id/206/800/600",
        state: "Kaduna",
        score: "7.7",
        reviews: "59",
        stars: 2,
        address: "25 Old Market Road, Kaduna | 2.6KM from city center",
        pricePerNight: 12000,
        description: "A simple, budget-friendly stay in Kaduna, geared toward travelers who need a practical, affordable base.",
        amenities: ["Air Conditioning", "Free Wi-Fi", "24-Hour Front Desk", "Luggage Storage", "Laundry Service"],
        agentName: "Kaduna Sunset Hostel Booking Agent",
        agentPhone: "2348010000257"
    },

    "kano-palm-lodge": {
        name: "Kano Palm Lodge",
        image: "https://picsum.photos/id/207/800/600",
        state: "Kano",
        score: "7.9",
        reviews: "521",
        stars: 3,
        address: "36 Stadium Road, Kano | 3.53KM from city center",
        pricePerNight: 29500,
        description: "A comfortable, well-kept mid-range hotel in Kano, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Free Wi-Fi", "Non-smoking Rooms", "Room Service", "24-Hour Front Desk"],
        agentName: "Kano Palm Lodge Booking Agent",
        agentPhone: "2348010000258"
    },

    "wudil-oasis-resort": {
        name: "Wudil Oasis Resort",
        image: "https://picsum.photos/id/208/800/600",
        state: "Kano",
        score: "7.9",
        reviews: "23",
        stars: 2,
        address: "27 New Layout, Wudil | 5.15KM from city center",
        pricePerNight: 8500,
        description: "A simple, budget-friendly stay in Wudil, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Generator Backup", "Common Lounge", "Air Conditioning", "Shared Kitchen"],
        agentName: "Wudil Oasis Resort Booking Agent",
        agentPhone: "2348010000259"
    },

    "gwarzo-comfort-guest-house": {
        name: "Gwarzo Comfort Guest House",
        image: "https://picsum.photos/id/209/800/600",
        state: "Kano",
        score: "7.3",
        reviews: "57",
        stars: 2,
        address: "11 New Layout, Gwarzo | 2.08KM from city center",
        pricePerNight: 6500,
        description: "A simple, budget-friendly stay in Gwarzo, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Luggage Storage", "Free Wi-Fi", "24-Hour Front Desk", "Shared Kitchen"],
        agentName: "Gwarzo Comfort Guest House Booking Agent",
        agentPhone: "2348010000260"
    },

    "kano-cedar-retreat": {
        name: "Kano Cedar Retreat",
        image: "https://picsum.photos/id/210/800/600",
        state: "Kano",
        score: "8.8",
        reviews: "700",
        stars: 4,
        address: "7 Airport Road, Kano | 2.26KM from city center",
        pricePerNight: 51000,
        description: "A polished hotel in Kano with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Concierge Service", "Business Center", "Fine Dining Restaurant", "Room Service", "Airport Transfer (fee)"],
        agentName: "Kano Cedar Retreat Booking Agent",
        agentPhone: "2348010000261"
    },

    "wudil-horizon-retreat": {
        name: "Wudil Horizon Retreat",
        image: "https://picsum.photos/id/211/800/600",
        state: "Kano",
        score: "8.8",
        reviews: "219",
        stars: 3,
        address: "21 Cathedral Road, Wudil | 6.18KM from city center",
        pricePerNight: 25000,
        description: "A comfortable, well-kept mid-range hotel in Wudil, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Non-smoking Rooms", "Room Service", "Air Conditioning", "Family Rooms"],
        agentName: "Wudil Horizon Retreat Booking Agent",
        agentPhone: "2348010000262"
    },

    "gwarzo-heritage-grand-hotel": {
        name: "Gwarzo Heritage Grand Hotel",
        image: "https://picsum.photos/id/212/800/600",
        state: "Kano",
        score: "9.4",
        reviews: "2,911",
        stars: 5,
        address: "51 Hospital Road, Gwarzo | 2.39KM from city center",
        pricePerNight: 145500,
        description: "A standout, full-service hotel in Gwarzo, offering five-star comfort and attentive concierge service.",
        amenities: ["Concierge Service", "Valet Parking", "Spa & Wellness Center", "Free Wi-Fi", "Business Center"],
        agentName: "Gwarzo Heritage Grand Hotel Booking Agent",
        agentPhone: "2348010000263"
    },

    "kano-diamond-lodge": {
        name: "Kano Diamond Lodge",
        image: "https://picsum.photos/id/213/800/600",
        state: "Kano",
        score: "7.7",
        reviews: "160",
        stars: 2,
        address: "47 GRA, Kano | 6.15KM from city center",
        pricePerNight: 6000,
        description: "A simple, budget-friendly stay in Kano, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Shared Kitchen", "24-Hour Front Desk", "Free Wi-Fi", "Common Lounge"],
        agentName: "Kano Diamond Lodge Booking Agent",
        agentPhone: "2348010000264"
    },

    "wudil-sunset-retreat": {
        name: "Wudil Sunset Retreat",
        image: "https://picsum.photos/id/214/800/600",
        state: "Kano",
        score: "8.1",
        reviews: "338",
        stars: 3,
        address: "46 New Layout, Wudil | 5.21KM from city center",
        pricePerNight: 20000,
        description: "A comfortable, well-kept mid-range hotel in Wudil, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Non-smoking Rooms", "24-Hour Front Desk", "Daily Housekeeping", "Outdoor Pool"],
        agentName: "Wudil Sunset Retreat Booking Agent",
        agentPhone: "2348010000265"
    },

    "gwarzo-bellavista-grand-hotel": {
        name: "Gwarzo Bellavista Grand Hotel",
        image: "https://picsum.photos/id/215/800/600",
        state: "Kano",
        score: "8.2",
        reviews: "117",
        stars: 3,
        address: "45 Waterside Road, Gwarzo | 3.68KM from city center",
        pricePerNight: 27000,
        description: "A comfortable, well-kept mid-range hotel in Gwarzo, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Family Rooms", "Outdoor Pool", "Non-smoking Rooms", "Room Service"],
        agentName: "Gwarzo Bellavista Grand Hotel Booking Agent",
        agentPhone: "2348010000266"
    },

    "kano-oasis-hotel": {
        name: "Kano Oasis Hotel",
        image: "https://picsum.photos/id/216/800/600",
        state: "Kano",
        score: "7.6",
        reviews: "122",
        stars: 2,
        address: "49 Old Market Road, Kano | 6.29KM from city center",
        pricePerNight: 14000,
        description: "A simple, budget-friendly stay in Kano, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Free Wi-Fi", "Shared Kitchen", "Laundry Service", "24-Hour Front Desk"],
        agentName: "Kano Oasis Hotel Booking Agent",
        agentPhone: "2348010000267"
    },

    "katsina-cedar-apartments": {
        name: "Katsina Cedar Apartments",
        image: "https://picsum.photos/id/217/800/600",
        state: "Katsina",
        score: "7.6",
        reviews: "167",
        stars: 2,
        address: "29 Old Market Road, Katsina | 2.79KM from city center",
        pricePerNight: 8000,
        description: "A simple, budget-friendly stay in Katsina, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Shared Kitchen", "Free Wi-Fi", "Luggage Storage", "Laundry Service"],
        agentName: "Katsina Cedar Apartments Booking Agent",
        agentPhone: "2348010000268"
    },

    "funtua-whitestone-suites": {
        name: "Funtua Whitestone Suites",
        image: "https://picsum.photos/id/218/800/600",
        state: "Katsina",
        score: "7.1",
        reviews: "56",
        stars: 2,
        address: "20 Old Market Road, Funtua | 3.18KM from city center",
        pricePerNight: 9000,
        description: "A simple, budget-friendly stay in Funtua, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Generator Backup", "Shared Kitchen", "24-Hour Front Desk", "Laundry Service"],
        agentName: "Funtua Whitestone Suites Booking Agent",
        agentPhone: "2348010000269"
    },

    "daura-cedar-grand-hotel": {
        name: "Daura Cedar Grand Hotel",
        image: "https://picsum.photos/id/219/800/600",
        state: "Katsina",
        score: "7.5",
        reviews: "37",
        stars: 2,
        address: "3 Waterside Road, Daura | 4.74KM from city center",
        pricePerNight: 8500,
        description: "A simple, budget-friendly stay in Daura, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Common Lounge", "24-Hour Front Desk", "Shared Kitchen", "Air Conditioning"],
        agentName: "Daura Cedar Grand Hotel Booking Agent",
        agentPhone: "2348010000270"
    },

    "katsina-cedar-inn": {
        name: "Katsina Cedar Inn",
        image: "https://picsum.photos/id/220/800/600",
        state: "Katsina",
        score: "8.8",
        reviews: "1,430",
        stars: 4,
        address: "22 Stadium Road, Katsina | 3.0KM from city center",
        pricePerNight: 41000,
        description: "A polished hotel in Katsina with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Airport Transfer (fee)", "Outdoor Pool", "Room Service", "Concierge Service", "Fine Dining Restaurant"],
        agentName: "Katsina Cedar Inn Booking Agent",
        agentPhone: "2348010000271"
    },

    "funtua-horizon-hostel": {
        name: "Funtua Horizon Hostel",
        image: "https://picsum.photos/id/221/800/600",
        state: "Katsina",
        score: "7.8",
        reviews: "282",
        stars: 3,
        address: "38 New Layout, Funtua | 2.77KM from city center",
        pricePerNight: 29500,
        description: "A comfortable, well-kept mid-range hotel in Funtua, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Family Rooms", "Room Service", "Bar", "Free Wi-Fi"],
        agentName: "Funtua Horizon Hostel Booking Agent",
        agentPhone: "2348010000272"
    },

    "daura-meridian-apartments": {
        name: "Daura Meridian Apartments",
        image: "https://picsum.photos/id/222/800/600",
        state: "Katsina",
        score: "8.0",
        reviews: "413",
        stars: 3,
        address: "30 Market Road, Daura | 2.0KM from city center",
        pricePerNight: 21500,
        description: "A comfortable, well-kept mid-range hotel in Daura, popular with business and family travelers alike.",
        amenities: ["Non-smoking Rooms", "Bar", "24-Hour Front Desk", "Daily Housekeeping", "Outdoor Pool"],
        agentName: "Daura Meridian Apartments Booking Agent",
        agentPhone: "2348010000273"
    },

    "katsina-palm-resort": {
        name: "Katsina Palm Resort",
        image: "https://picsum.photos/id/223/800/600",
        state: "Katsina",
        score: "7.4",
        reviews: "137",
        stars: 2,
        address: "12 Station Road, Katsina | 4.51KM from city center",
        pricePerNight: 11000,
        description: "A simple, budget-friendly stay in Katsina, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Shared Kitchen", "Common Lounge", "Free Wi-Fi", "Air Conditioning"],
        agentName: "Katsina Palm Resort Booking Agent",
        agentPhone: "2348010000274"
    },

    "funtua-silver-guest-house": {
        name: "Funtua Silver Guest House",
        image: "https://picsum.photos/id/224/800/600",
        state: "Katsina",
        score: "7.1",
        reviews: "115",
        stars: 2,
        address: "10 Stadium Road, Funtua | 2.77KM from city center",
        pricePerNight: 11500,
        description: "A simple, budget-friendly stay in Funtua, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Generator Backup", "Luggage Storage", "Laundry Service", "Air Conditioning"],
        agentName: "Funtua Silver Guest House Booking Agent",
        agentPhone: "2348010000275"
    },

    "daura-diamond-grand-hotel": {
        name: "Daura Diamond Grand Hotel",
        image: "https://picsum.photos/id/225/800/600",
        state: "Katsina",
        score: "8.7",
        reviews: "257",
        stars: 3,
        address: "11 GRA, Daura | 2.16KM from city center",
        pricePerNight: 33000,
        description: "A comfortable, well-kept mid-range hotel in Daura, popular with business and family travelers alike.",
        amenities: ["Room Service", "Bar", "Outdoor Pool", "Daily Housekeeping", "24-Hour Front Desk"],
        agentName: "Daura Diamond Grand Hotel Booking Agent",
        agentPhone: "2348010000276"
    },

    "katsina-elite-hotel": {
        name: "Katsina Elite Hotel",
        image: "https://picsum.photos/id/226/800/600",
        state: "Katsina",
        score: "7.5",
        reviews: "69",
        stars: 2,
        address: "25 Stadium Road, Katsina | 3.48KM from city center",
        pricePerNight: 12500,
        description: "A simple, budget-friendly stay in Katsina, geared toward travelers who need a practical, affordable base.",
        amenities: ["Shared Kitchen", "Luggage Storage", "Laundry Service", "Common Lounge", "Generator Backup"],
        agentName: "Katsina Elite Hotel Booking Agent",
        agentPhone: "2348010000277"
    },

    "funtua-serene-villa-hotel": {
        name: "Funtua Serene Villa Hotel",
        image: "https://picsum.photos/id/227/800/600",
        state: "Katsina",
        score: "8.0",
        reviews: "658",
        stars: 3,
        address: "51 Waterside Road, Funtua | 1.75KM from city center",
        pricePerNight: 16000,
        description: "A comfortable, well-kept mid-range hotel in Funtua, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "24-Hour Front Desk", "Air Conditioning", "Non-smoking Rooms", "Room Service"],
        agentName: "Funtua Serene Villa Hotel Booking Agent",
        agentPhone: "2348010000278"
    },

    "daura-serene-palace-hotel": {
        name: "Daura Serene Palace Hotel",
        image: "https://picsum.photos/id/228/800/600",
        state: "Katsina",
        score: "7.7",
        reviews: "146",
        stars: 2,
        address: "33 Market Road, Daura | 3.89KM from city center",
        pricePerNight: 10500,
        description: "A simple, budget-friendly stay in Daura, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Common Lounge", "Shared Kitchen", "24-Hour Front Desk", "Free Wi-Fi"],
        agentName: "Daura Serene Palace Hotel Booking Agent",
        agentPhone: "2348010000279"
    },

    "birnin-kebbi-serene-apartments": {
        name: "Birnin Kebbi Serene Apartments",
        image: "https://picsum.photos/id/229/800/600",
        state: "Kebbi",
        score: "8.0",
        reviews: "515",
        stars: 3,
        address: "48 Station Road, Birnin Kebbi | 4.39KM from city center",
        pricePerNight: 18500,
        description: "A comfortable, well-kept mid-range hotel in Birnin Kebbi, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "24-Hour Front Desk", "Outdoor Pool", "Free Wi-Fi", "Family Rooms"],
        agentName: "Birnin Kebbi Serene Apartments Booking Agent",
        agentPhone: "2348010000280"
    },

    "argungu-riverside-suites": {
        name: "Argungu Riverside Suites",
        image: "https://picsum.photos/id/230/800/600",
        state: "Kebbi",
        score: "7.4",
        reviews: "50",
        stars: 2,
        address: "52 Hospital Road, Argungu | 1.68KM from city center",
        pricePerNight: 12500,
        description: "A simple, budget-friendly stay in Argungu, geared toward travelers who need a practical, affordable base.",
        amenities: ["Laundry Service", "Common Lounge", "Shared Kitchen", "Generator Backup", "Luggage Storage"],
        agentName: "Argungu Riverside Suites Booking Agent",
        agentPhone: "2348010000281"
    },

    "yauri-sunset-inn": {
        name: "Yauri Sunset Inn",
        image: "https://picsum.photos/id/231/800/600",
        state: "Kebbi",
        score: "7.8",
        reviews: "35",
        stars: 2,
        address: "23 Stadium Road, Yauri | 2.11KM from city center",
        pricePerNight: 10500,
        description: "A simple, budget-friendly stay in Yauri, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Shared Kitchen", "Laundry Service", "Common Lounge", "Generator Backup"],
        agentName: "Yauri Sunset Inn Booking Agent",
        agentPhone: "2348010000282"
    },

    "birnin-kebbi-riverside-apartments": {
        name: "Birnin Kebbi Riverside Apartments",
        image: "https://picsum.photos/id/232/800/600",
        state: "Kebbi",
        score: "8.8",
        reviews: "177",
        stars: 3,
        address: "49 Waterside Road, Birnin Kebbi | 2.91KM from city center",
        pricePerNight: 19500,
        description: "A comfortable, well-kept mid-range hotel in Birnin Kebbi, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "24-Hour Front Desk", "Outdoor Pool", "Bar", "Air Conditioning"],
        agentName: "Birnin Kebbi Riverside Apartments Booking Agent",
        agentPhone: "2348010000283"
    },

    "argungu-sunset-inn": {
        name: "Argungu Sunset Inn",
        image: "https://picsum.photos/id/233/800/600",
        state: "Kebbi",
        score: "7.9",
        reviews: "409",
        stars: 3,
        address: "49 Station Road, Argungu | 4.53KM from city center",
        pricePerNight: 23000,
        description: "A comfortable, well-kept mid-range hotel in Argungu, popular with business and family travelers alike.",
        amenities: ["Non-smoking Rooms", "Room Service", "24-Hour Front Desk", "Bar", "Family Rooms"],
        agentName: "Argungu Sunset Inn Booking Agent",
        agentPhone: "2348010000284"
    },

    "yauri-garden-villa-hotel": {
        name: "Yauri Garden Villa Hotel",
        image: "https://picsum.photos/id/234/800/600",
        state: "Kebbi",
        score: "7.9",
        reviews: "175",
        stars: 3,
        address: "33 Commercial Avenue, Yauri | 2.1KM from city center",
        pricePerNight: 28000,
        description: "A comfortable, well-kept mid-range hotel in Yauri, popular with business and family travelers alike.",
        amenities: ["Bar", "Non-smoking Rooms", "Daily Housekeeping", "Room Service", "24-Hour Front Desk"],
        agentName: "Yauri Garden Villa Hotel Booking Agent",
        agentPhone: "2348010000285"
    },

    "birnin-kebbi-skyline-grand-hotel": {
        name: "Birnin Kebbi Skyline Grand Hotel",
        image: "https://picsum.photos/id/235/800/600",
        state: "Kebbi",
        score: "7.1",
        reviews: "137",
        stars: 2,
        address: "43 Commercial Avenue, Birnin Kebbi | 2.59KM from city center",
        pricePerNight: 11000,
        description: "A simple, budget-friendly stay in Birnin Kebbi, geared toward travelers who need a practical, affordable base.",
        amenities: ["Air Conditioning", "Common Lounge", "Generator Backup", "Luggage Storage", "Shared Kitchen"],
        agentName: "Birnin Kebbi Skyline Grand Hotel Booking Agent",
        agentPhone: "2348010000286"
    },

    "argungu-lakeview-inn": {
        name: "Argungu Lakeview Inn",
        image: "https://picsum.photos/id/236/800/600",
        state: "Kebbi",
        score: "9.2",
        reviews: "2,222",
        stars: 5,
        address: "22 Stadium Road, Argungu | 3.93KM from city center",
        pricePerNight: 107000,
        description: "A standout, full-service hotel in Argungu, offering five-star comfort and attentive concierge service.",
        amenities: ["Private Beach Access", "Fitness Center", "Business Center", "Free Wi-Fi", "Valet Parking"],
        agentName: "Argungu Lakeview Inn Booking Agent",
        agentPhone: "2348010000287"
    },

    "yauri-meridian-villa-hotel": {
        name: "Yauri Meridian Villa Hotel",
        image: "https://picsum.photos/id/237/800/600",
        state: "Kebbi",
        score: "7.0",
        reviews: "60",
        stars: 2,
        address: "30 Ring Road, Yauri | 6.45KM from city center",
        pricePerNight: 9500,
        description: "A simple, budget-friendly stay in Yauri, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Air Conditioning", "Laundry Service", "Shared Kitchen", "24-Hour Front Desk"],
        agentName: "Yauri Meridian Villa Hotel Booking Agent",
        agentPhone: "2348010000288"
    },

    "birnin-kebbi-whitestone-guest-house": {
        name: "Birnin Kebbi Whitestone Guest House",
        image: "https://picsum.photos/id/238/800/600",
        state: "Kebbi",
        score: "7.1",
        reviews: "112",
        stars: 2,
        address: "6 Old Market Road, Birnin Kebbi | 4.45KM from city center",
        pricePerNight: 8000,
        description: "A simple, budget-friendly stay in Birnin Kebbi, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Free Wi-Fi", "Luggage Storage", "Shared Kitchen", "Air Conditioning"],
        agentName: "Birnin Kebbi Whitestone Guest House Booking Agent",
        agentPhone: "2348010000289"
    },

    "argungu-golden-grand-hotel": {
        name: "Argungu Golden Grand Hotel",
        image: "https://picsum.photos/id/239/800/600",
        state: "Kebbi",
        score: "7.9",
        reviews: "298",
        stars: 3,
        address: "5 Airport Road, Argungu | 4.02KM from city center",
        pricePerNight: 30500,
        description: "A comfortable, well-kept mid-range hotel in Argungu, popular with business and family travelers alike.",
        amenities: ["Family Rooms", "Non-smoking Rooms", "Free Wi-Fi", "Outdoor Pool", "Room Service"],
        agentName: "Argungu Golden Grand Hotel Booking Agent",
        agentPhone: "2348010000290"
    },

    "yauri-riverside-hostel": {
        name: "Yauri Riverside Hostel",
        image: "https://picsum.photos/id/240/800/600",
        state: "Kebbi",
        score: "9.0",
        reviews: "1,278",
        stars: 4,
        address: "15 New Layout, Yauri | 0.94KM from city center",
        pricePerNight: 38500,
        description: "A polished hotel in Yauri with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Outdoor Pool", "Free Wi-Fi", "Business Center", "Fitness Center", "Fine Dining Restaurant"],
        agentName: "Yauri Riverside Hostel Booking Agent",
        agentPhone: "2348010000291"
    },

    "lokoja-skyline-lodge": {
        name: "Lokoja Skyline Lodge",
        image: "https://picsum.photos/id/241/800/600",
        state: "Kogi",
        score: "7.6",
        reviews: "56",
        stars: 2,
        address: "34 Cathedral Road, Lokoja | 0.45KM from city center",
        pricePerNight: 6500,
        description: "A simple, budget-friendly stay in Lokoja, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Luggage Storage", "Shared Kitchen", "Air Conditioning", "Generator Backup"],
        agentName: "Lokoja Skyline Lodge Booking Agent",
        agentPhone: "2348010000292"
    },

    "okene-oasis-retreat": {
        name: "Okene Oasis Retreat",
        image: "https://picsum.photos/id/242/800/600",
        state: "Kogi",
        score: "8.8",
        reviews: "744",
        stars: 4,
        address: "58 Market Road, Okene | 1.25KM from city center",
        pricePerNight: 39000,
        description: "A polished hotel in Okene with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Outdoor Pool", "Fine Dining Restaurant", "Fitness Center", "Room Service", "Business Center"],
        agentName: "Okene Oasis Retreat Booking Agent",
        agentPhone: "2348010000293"
    },

    "idah-prestige-lodge": {
        name: "Idah Prestige Lodge",
        image: "https://picsum.photos/id/243/800/600",
        state: "Kogi",
        score: "9.0",
        reviews: "1,245",
        stars: 5,
        address: "36 Cathedral Road, Idah | 4.06KM from city center",
        pricePerNight: 102500,
        description: "A standout, full-service hotel in Idah, offering five-star comfort and attentive concierge service.",
        amenities: ["Concierge Service", "Free Wi-Fi", "Valet Parking", "Fitness Center", "Spa & Wellness Center"],
        agentName: "Idah Prestige Lodge Booking Agent",
        agentPhone: "2348010000294"
    },

    "lokoja-oasis-apartments": {
        name: "Lokoja Oasis Apartments",
        image: "https://picsum.photos/id/244/800/600",
        state: "Kogi",
        score: "7.2",
        reviews: "120",
        stars: 2,
        address: "42 Ring Road, Lokoja | 5.18KM from city center",
        pricePerNight: 8500,
        description: "A simple, budget-friendly stay in Lokoja, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Shared Kitchen", "Common Lounge", "Free Wi-Fi", "Air Conditioning"],
        agentName: "Lokoja Oasis Apartments Booking Agent",
        agentPhone: "2348010000295"
    },

    "okene-oasis-suites": {
        name: "Okene Oasis Suites",
        image: "https://picsum.photos/id/245/800/600",
        state: "Kogi",
        score: "8.3",
        reviews: "92",
        stars: 3,
        address: "60 Old Market Road, Okene | 1.21KM from city center",
        pricePerNight: 27000,
        description: "A comfortable, well-kept mid-range hotel in Okene, popular with business and family travelers alike.",
        amenities: ["Outdoor Pool", "Bar", "24-Hour Front Desk", "Non-smoking Rooms", "Air Conditioning"],
        agentName: "Okene Oasis Suites Booking Agent",
        agentPhone: "2348010000296"
    },

    "idah-skyline-suites": {
        name: "Idah Skyline Suites",
        image: "https://picsum.photos/id/246/800/600",
        state: "Kogi",
        score: "7.8",
        reviews: "149",
        stars: 3,
        address: "17 Hospital Road, Idah | 0.64KM from city center",
        pricePerNight: 15500,
        description: "A comfortable, well-kept mid-range hotel in Idah, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "Outdoor Pool", "24-Hour Front Desk", "Room Service", "Non-smoking Rooms"],
        agentName: "Idah Skyline Suites Booking Agent",
        agentPhone: "2348010000297"
    },

    "lokoja-horizon-grand-hotel": {
        name: "Lokoja Horizon Grand Hotel",
        image: "https://picsum.photos/id/247/800/600",
        state: "Kogi",
        score: "8.2",
        reviews: "629",
        stars: 3,
        address: "40 Airport Road, Lokoja | 2.09KM from city center",
        pricePerNight: 32500,
        description: "A comfortable, well-kept mid-range hotel in Lokoja, popular with business and family travelers alike.",
        amenities: ["24-Hour Front Desk", "Air Conditioning", "Family Rooms", "Non-smoking Rooms", "Bar"],
        agentName: "Lokoja Horizon Grand Hotel Booking Agent",
        agentPhone: "2348010000298"
    },

    "okene-garden-palace-hotel": {
        name: "Okene Garden Palace Hotel",
        image: "https://picsum.photos/id/248/800/600",
        state: "Kogi",
        score: "8.4",
        reviews: "147",
        stars: 3,
        address: "45 New Layout, Okene | 4.85KM from city center",
        pricePerNight: 25000,
        description: "A comfortable, well-kept mid-range hotel in Okene, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Free Wi-Fi", "Air Conditioning", "Non-smoking Rooms", "Family Rooms"],
        agentName: "Okene Garden Palace Hotel Booking Agent",
        agentPhone: "2348010000299"
    },

    "idah-oasis-palace-hotel": {
        name: "Idah Oasis Palace Hotel",
        image: "https://picsum.photos/id/249/800/600",
        state: "Kogi",
        score: "7.1",
        reviews: "64",
        stars: 2,
        address: "1 Commercial Avenue, Idah | 1.24KM from city center",
        pricePerNight: 7000,
        description: "A simple, budget-friendly stay in Idah, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Luggage Storage", "24-Hour Front Desk", "Generator Backup"],
        agentName: "Idah Oasis Palace Hotel Booking Agent",
        agentPhone: "2348010000300"
    },

    "lokoja-sunset-grand-hotel": {
        name: "Lokoja Sunset Grand Hotel",
        image: "https://picsum.photos/id/250/800/600",
        state: "Kogi",
        score: "7.8",
        reviews: "88",
        stars: 2,
        address: "57 Market Road, Lokoja | 5.11KM from city center",
        pricePerNight: 12000,
        description: "A simple, budget-friendly stay in Lokoja, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "24-Hour Front Desk", "Luggage Storage", "Common Lounge", "Shared Kitchen"],
        agentName: "Lokoja Sunset Grand Hotel Booking Agent",
        agentPhone: "2348010000301"
    },

    "okene-pearl-retreat": {
        name: "Okene Pearl Retreat",
        image: "https://picsum.photos/id/251/800/600",
        state: "Kogi",
        score: "7.1",
        reviews: "136",
        stars: 2,
        address: "24 Ring Road, Okene | 3.45KM from city center",
        pricePerNight: 10000,
        description: "A simple, budget-friendly stay in Okene, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Shared Kitchen", "Air Conditioning", "Common Lounge", "Free Wi-Fi"],
        agentName: "Okene Pearl Retreat Booking Agent",
        agentPhone: "2348010000302"
    },

    "idah-vista-grand-hotel": {
        name: "Idah Vista Grand Hotel",
        image: "https://picsum.photos/id/252/800/600",
        state: "Kogi",
        score: "8.5",
        reviews: "1,342",
        stars: 4,
        address: "3 Station Road, Idah | 5.66KM from city center",
        pricePerNight: 36000,
        description: "A polished hotel in Idah with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Room Service", "Free Wi-Fi", "Airport Transfer (fee)", "Business Center", "Fitness Center"],
        agentName: "Idah Vista Grand Hotel Booking Agent",
        agentPhone: "2348010000303"
    },

    "ilorin-crown-hotel": {
        name: "Ilorin Crown Hotel",
        image: "https://picsum.photos/id/253/800/600",
        state: "Kwara",
        score: "8.8",
        reviews: "1,158",
        stars: 4,
        address: "21 Hospital Road, Ilorin | 2.94KM from city center",
        pricePerNight: 43500,
        description: "A polished hotel in Ilorin with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Fitness Center", "Business Center", "Free Wi-Fi", "Fine Dining Restaurant", "Concierge Service"],
        agentName: "Ilorin Crown Hotel Booking Agent",
        agentPhone: "2348010000304"
    },

    "offa-vista-hotel": {
        name: "Offa Vista Hotel",
        image: "https://picsum.photos/id/254/800/600",
        state: "Kwara",
        score: "7.2",
        reviews: "152",
        stars: 2,
        address: "26 Market Road, Offa | 5.75KM from city center",
        pricePerNight: 6500,
        description: "A simple, budget-friendly stay in Offa, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Common Lounge", "24-Hour Front Desk", "Laundry Service", "Free Wi-Fi"],
        agentName: "Offa Vista Hotel Booking Agent",
        agentPhone: "2348010000305"
    },

    "omu-aran-grand-resort": {
        name: "Omu-Aran Grand Resort",
        image: "https://picsum.photos/id/255/800/600",
        state: "Kwara",
        score: "8.0",
        reviews: "657",
        stars: 3,
        address: "48 Cathedral Road, Omu-Aran | 1.88KM from city center",
        pricePerNight: 25000,
        description: "A comfortable, well-kept mid-range hotel in Omu-Aran, popular with business and family travelers alike.",
        amenities: ["Bar", "Non-smoking Rooms", "Outdoor Pool", "Air Conditioning", "24-Hour Front Desk"],
        agentName: "Omu-Aran Grand Resort Booking Agent",
        agentPhone: "2348010000306"
    },

    "ilorin-silver-lodge": {
        name: "Ilorin Silver Lodge",
        image: "https://picsum.photos/id/256/800/600",
        state: "Kwara",
        score: "7.8",
        reviews: "499",
        stars: 3,
        address: "15 Stadium Road, Ilorin | 2.51KM from city center",
        pricePerNight: 16000,
        description: "A comfortable, well-kept mid-range hotel in Ilorin, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "Bar", "Family Rooms", "Non-smoking Rooms", "Daily Housekeeping"],
        agentName: "Ilorin Silver Lodge Booking Agent",
        agentPhone: "2348010000307"
    },

    "offa-cedar-guest-house": {
        name: "Offa Cedar Guest House",
        image: "https://picsum.photos/id/257/800/600",
        state: "Kwara",
        score: "8.5",
        reviews: "1,385",
        stars: 4,
        address: "27 GRA, Offa | 6.26KM from city center",
        pricePerNight: 44000,
        description: "A polished hotel in Offa with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Business Center", "Fitness Center", "Airport Transfer (fee)", "Free Wi-Fi", "Fine Dining Restaurant"],
        agentName: "Offa Cedar Guest House Booking Agent",
        agentPhone: "2348010000308"
    },

    "omu-aran-harmony-apartments": {
        name: "Omu-Aran Harmony Apartments",
        image: "https://picsum.photos/id/258/800/600",
        state: "Kwara",
        score: "8.7",
        reviews: "1,062",
        stars: 4,
        address: "48 Market Road, Omu-Aran | 3.94KM from city center",
        pricePerNight: 51000,
        description: "A polished hotel in Omu-Aran with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Business Center", "Fitness Center", "Room Service", "Free Wi-Fi", "Fine Dining Restaurant"],
        agentName: "Omu-Aran Harmony Apartments Booking Agent",
        agentPhone: "2348010000309"
    },

    "ilorin-sunset-inn": {
        name: "Ilorin Sunset Inn",
        image: "https://picsum.photos/id/259/800/600",
        state: "Kwara",
        score: "8.1",
        reviews: "402",
        stars: 3,
        address: "45 Station Road, Ilorin | 4.89KM from city center",
        pricePerNight: 28000,
        description: "A comfortable, well-kept mid-range hotel in Ilorin, popular with business and family travelers alike.",
        amenities: ["Bar", "Non-smoking Rooms", "Room Service", "Air Conditioning", "Free Wi-Fi"],
        agentName: "Ilorin Sunset Inn Booking Agent",
        agentPhone: "2348010000310"
    },

    "offa-sunset-palace-hotel": {
        name: "Offa Sunset Palace Hotel",
        image: "https://picsum.photos/id/260/800/600",
        state: "Kwara",
        score: "8.5",
        reviews: "516",
        stars: 4,
        address: "29 GRA, Offa | 2.32KM from city center",
        pricePerNight: 41500,
        description: "A polished hotel in Offa with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Outdoor Pool", "Fine Dining Restaurant", "Business Center", "Airport Transfer (fee)", "Room Service"],
        agentName: "Offa Sunset Palace Hotel Booking Agent",
        agentPhone: "2348010000311"
    },

    "omu-aran-comfort-suites": {
        name: "Omu-Aran Comfort Suites",
        image: "https://picsum.photos/id/261/800/600",
        state: "Kwara",
        score: "7.1",
        reviews: "97",
        stars: 2,
        address: "46 Commercial Avenue, Omu-Aran | 4.08KM from city center",
        pricePerNight: 13000,
        description: "A simple, budget-friendly stay in Omu-Aran, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Common Lounge", "24-Hour Front Desk", "Air Conditioning", "Free Wi-Fi"],
        agentName: "Omu-Aran Comfort Suites Booking Agent",
        agentPhone: "2348010000312"
    },

    "ilorin-elite-hostel": {
        name: "Ilorin Elite Hostel",
        image: "https://picsum.photos/id/262/800/600",
        state: "Kwara",
        score: "8.3",
        reviews: "386",
        stars: 3,
        address: "53 Airport Road, Ilorin | 0.59KM from city center",
        pricePerNight: 23500,
        description: "A comfortable, well-kept mid-range hotel in Ilorin, popular with business and family travelers alike.",
        amenities: ["Outdoor Pool", "Non-smoking Rooms", "24-Hour Front Desk", "Bar", "Family Rooms"],
        agentName: "Ilorin Elite Hostel Booking Agent",
        agentPhone: "2348010000313"
    },

    "offa-serene-suites": {
        name: "Offa Serene Suites",
        image: "https://picsum.photos/id/263/800/600",
        state: "Kwara",
        score: "7.8",
        reviews: "55",
        stars: 2,
        address: "1 Ring Road, Offa | 5.47KM from city center",
        pricePerNight: 7000,
        description: "A simple, budget-friendly stay in Offa, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Air Conditioning", "Common Lounge", "Shared Kitchen", "24-Hour Front Desk"],
        agentName: "Offa Serene Suites Booking Agent",
        agentPhone: "2348010000314"
    },

    "omu-aran-summit-suites": {
        name: "Omu-Aran Summit Suites",
        image: "https://picsum.photos/id/264/800/600",
        state: "Kwara",
        score: "8.4",
        reviews: "345",
        stars: 3,
        address: "2 Market Road, Omu-Aran | 1.61KM from city center",
        pricePerNight: 17500,
        description: "A comfortable, well-kept mid-range hotel in Omu-Aran, popular with business and family travelers alike.",
        amenities: ["Non-smoking Rooms", "Room Service", "Free Wi-Fi", "Family Rooms", "Outdoor Pool"],
        agentName: "Omu-Aran Summit Suites Booking Agent",
        agentPhone: "2348010000315"
    },

    "ikeja-serene-hotel": {
        name: "Ikeja Serene Hotel",
        image: "https://picsum.photos/id/265/800/600",
        state: "Lagos",
        score: "7.2",
        reviews: "166",
        stars: 2,
        address: "53 Commercial Avenue, Ikeja | 2.81KM from city center",
        pricePerNight: 9500,
        description: "A simple, budget-friendly stay in Ikeja, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Luggage Storage", "Laundry Service", "Common Lounge", "Air Conditioning"],
        agentName: "Ikeja Serene Hotel Booking Agent",
        agentPhone: "2348010000316"
    },

    "victoria-island-whitestone-lodge": {
        name: "Victoria Island Whitestone Lodge",
        image: "https://picsum.photos/id/266/800/600",
        state: "Lagos",
        score: "7.3",
        reviews: "134",
        stars: 2,
        address: "10 Ring Road, Victoria Island | 4.15KM from city center",
        pricePerNight: 13000,
        description: "A simple, budget-friendly stay in Victoria Island, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Laundry Service", "24-Hour Front Desk", "Shared Kitchen", "Generator Backup"],
        agentName: "Victoria Island Whitestone Lodge Booking Agent",
        agentPhone: "2348010000317"
    },

    "lekki-regal-hotel": {
        name: "Lekki Regal Hotel",
        image: "https://picsum.photos/id/267/800/600",
        state: "Lagos",
        score: "8.5",
        reviews: "1,084",
        stars: 4,
        address: "27 Hospital Road, Lekki | 4.32KM from city center",
        pricePerNight: 40500,
        description: "A polished hotel in Lekki with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Room Service", "Fitness Center", "Fine Dining Restaurant", "Free Wi-Fi", "Airport Transfer (fee)"],
        agentName: "Lekki Regal Hotel Booking Agent",
        agentPhone: "2348010000318"
    },

    "surulere-elite-villa-hotel": {
        name: "Surulere Elite Villa Hotel",
        image: "https://picsum.photos/id/268/800/600",
        state: "Lagos",
        score: "8.3",
        reviews: "576",
        stars: 3,
        address: "59 Cathedral Road, Surulere | 3.46KM from city center",
        pricePerNight: 26500,
        description: "A comfortable, well-kept mid-range hotel in Surulere, popular with business and family travelers alike.",
        amenities: ["Outdoor Pool", "24-Hour Front Desk", "Air Conditioning", "Free Wi-Fi", "Room Service"],
        agentName: "Surulere Elite Villa Hotel Booking Agent",
        agentPhone: "2348010000319"
    },

    "ikeja-grand-guest-house": {
        name: "Ikeja Grand Guest House",
        image: "https://picsum.photos/id/269/800/600",
        state: "Lagos",
        score: "7.9",
        reviews: "563",
        stars: 3,
        address: "23 Waterside Road, Ikeja | 3.96KM from city center",
        pricePerNight: 32500,
        description: "A comfortable, well-kept mid-range hotel in Ikeja, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Room Service", "Free Wi-Fi", "Air Conditioning", "Bar"],
        agentName: "Ikeja Grand Guest House Booking Agent",
        agentPhone: "2348010000320"
    },

    "victoria-island-lakeview-grand-hotel": {
        name: "Victoria Island Lakeview Grand Hotel",
        image: "https://picsum.photos/id/270/800/600",
        state: "Lagos",
        score: "7.1",
        reviews: "76",
        stars: 2,
        address: "55 Waterside Road, Victoria Island | 2.77KM from city center",
        pricePerNight: 10500,
        description: "A simple, budget-friendly stay in Victoria Island, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Air Conditioning", "Common Lounge", "Generator Backup", "Shared Kitchen"],
        agentName: "Victoria Island Lakeview Grand Hotel Booking Agent",
        agentPhone: "2348010000321"
    },

    "lekki-rosewood-resort": {
        name: "Lekki Rosewood Resort",
        image: "https://picsum.photos/id/271/800/600",
        state: "Lagos",
        score: "9.1",
        reviews: "357",
        stars: 4,
        address: "45 Old Market Road, Lekki | 6.18KM from city center",
        pricePerNight: 59000,
        description: "A polished hotel in Lekki with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Business Center", "Fine Dining Restaurant", "Outdoor Pool", "Room Service", "Airport Transfer (fee)"],
        agentName: "Lekki Rosewood Resort Booking Agent",
        agentPhone: "2348010000322"
    },

    "surulere-royal-suites": {
        name: "Surulere Royal Suites",
        image: "https://picsum.photos/id/272/800/600",
        state: "Lagos",
        score: "7.1",
        reviews: "174",
        stars: 2,
        address: "2 Stadium Road, Surulere | 3.32KM from city center",
        pricePerNight: 8000,
        description: "A simple, budget-friendly stay in Surulere, geared toward travelers who need a practical, affordable base.",
        amenities: ["Laundry Service", "Generator Backup", "Air Conditioning", "Shared Kitchen", "24-Hour Front Desk"],
        agentName: "Surulere Royal Suites Booking Agent",
        agentPhone: "2348010000323"
    },

    "lafia-whitestone-resort": {
        name: "Lafia Whitestone Resort",
        image: "https://picsum.photos/id/273/800/600",
        state: "Nasarawa",
        score: "7.9",
        reviews: "231",
        stars: 3,
        address: "50 Market Road, Lafia | 5.56KM from city center",
        pricePerNight: 19500,
        description: "A comfortable, well-kept mid-range hotel in Lafia, popular with business and family travelers alike.",
        amenities: ["Bar", "Air Conditioning", "Room Service", "Family Rooms", "Daily Housekeeping"],
        agentName: "Lafia Whitestone Resort Booking Agent",
        agentPhone: "2348010000324"
    },

    "keffi-prestige-guest-house": {
        name: "Keffi Prestige Guest House",
        image: "https://picsum.photos/id/274/800/600",
        state: "Nasarawa",
        score: "8.1",
        reviews: "241",
        stars: 3,
        address: "51 Independence Way, Keffi | 6.26KM from city center",
        pricePerNight: 29500,
        description: "A comfortable, well-kept mid-range hotel in Keffi, popular with business and family travelers alike.",
        amenities: ["Bar", "Room Service", "Family Rooms", "24-Hour Front Desk", "Outdoor Pool"],
        agentName: "Keffi Prestige Guest House Booking Agent",
        agentPhone: "2348010000325"
    },

    "akwanga-silver-retreat": {
        name: "Akwanga Silver Retreat",
        image: "https://picsum.photos/id/275/800/600",
        state: "Nasarawa",
        score: "8.4",
        reviews: "259",
        stars: 3,
        address: "20 Commercial Avenue, Akwanga | 4.6KM from city center",
        pricePerNight: 27500,
        description: "A comfortable, well-kept mid-range hotel in Akwanga, popular with business and family travelers alike.",
        amenities: ["Room Service", "Family Rooms", "Bar", "Free Wi-Fi", "24-Hour Front Desk"],
        agentName: "Akwanga Silver Retreat Booking Agent",
        agentPhone: "2348010000326"
    },

    "lafia-skyline-palace-hotel": {
        name: "Lafia Skyline Palace Hotel",
        image: "https://picsum.photos/id/276/800/600",
        state: "Nasarawa",
        score: "7.0",
        reviews: "174",
        stars: 2,
        address: "59 Waterside Road, Lafia | 6.3KM from city center",
        pricePerNight: 8500,
        description: "A simple, budget-friendly stay in Lafia, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Laundry Service", "Generator Backup", "Free Wi-Fi", "Shared Kitchen"],
        agentName: "Lafia Skyline Palace Hotel Booking Agent",
        agentPhone: "2348010000327"
    },

    "keffi-cedar-suites": {
        name: "Keffi Cedar Suites",
        image: "https://picsum.photos/id/277/800/600",
        state: "Nasarawa",
        score: "7.2",
        reviews: "101",
        stars: 2,
        address: "41 Market Road, Keffi | 5.41KM from city center",
        pricePerNight: 7500,
        description: "A simple, budget-friendly stay in Keffi, geared toward travelers who need a practical, affordable base.",
        amenities: ["Laundry Service", "Luggage Storage", "Free Wi-Fi", "24-Hour Front Desk", "Air Conditioning"],
        agentName: "Keffi Cedar Suites Booking Agent",
        agentPhone: "2348010000328"
    },

    "akwanga-golden-resort": {
        name: "Akwanga Golden Resort",
        image: "https://picsum.photos/id/278/800/600",
        state: "Nasarawa",
        score: "7.3",
        reviews: "47",
        stars: 2,
        address: "1 Ring Road, Akwanga | 2.75KM from city center",
        pricePerNight: 12000,
        description: "A simple, budget-friendly stay in Akwanga, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Air Conditioning", "Luggage Storage", "Laundry Service", "Generator Backup"],
        agentName: "Akwanga Golden Resort Booking Agent",
        agentPhone: "2348010000329"
    },

    "lafia-garden-suites": {
        name: "Lafia Garden Suites",
        image: "https://picsum.photos/id/279/800/600",
        state: "Nasarawa",
        score: "7.8",
        reviews: "167",
        stars: 2,
        address: "49 Independence Way, Lafia | 1.78KM from city center",
        pricePerNight: 11500,
        description: "A simple, budget-friendly stay in Lafia, geared toward travelers who need a practical, affordable base.",
        amenities: ["Shared Kitchen", "Free Wi-Fi", "Common Lounge", "24-Hour Front Desk", "Laundry Service"],
        agentName: "Lafia Garden Suites Booking Agent",
        agentPhone: "2348010000330"
    },

    "keffi-palm-suites": {
        name: "Keffi Palm Suites",
        image: "https://picsum.photos/id/280/800/600",
        state: "Nasarawa",
        score: "7.3",
        reviews: "116",
        stars: 2,
        address: "47 Market Road, Keffi | 3.74KM from city center",
        pricePerNight: 7500,
        description: "A simple, budget-friendly stay in Keffi, geared toward travelers who need a practical, affordable base.",
        amenities: ["Air Conditioning", "24-Hour Front Desk", "Generator Backup", "Laundry Service", "Luggage Storage"],
        agentName: "Keffi Palm Suites Booking Agent",
        agentPhone: "2348010000331"
    },

    "akwanga-horizon-retreat": {
        name: "Akwanga Horizon Retreat",
        image: "https://picsum.photos/id/281/800/600",
        state: "Nasarawa",
        score: "8.0",
        reviews: "524",
        stars: 3,
        address: "4 Market Road, Akwanga | 2.42KM from city center",
        pricePerNight: 20000,
        description: "A comfortable, well-kept mid-range hotel in Akwanga, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Outdoor Pool", "Bar", "24-Hour Front Desk", "Non-smoking Rooms"],
        agentName: "Akwanga Horizon Retreat Booking Agent",
        agentPhone: "2348010000332"
    },

    "lafia-heritage-guest-house": {
        name: "Lafia Heritage Guest House",
        image: "https://picsum.photos/id/282/800/600",
        state: "Nasarawa",
        score: "7.2",
        reviews: "32",
        stars: 2,
        address: "37 Stadium Road, Lafia | 5.52KM from city center",
        pricePerNight: 9000,
        description: "A simple, budget-friendly stay in Lafia, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Free Wi-Fi", "Shared Kitchen", "Common Lounge", "Luggage Storage"],
        agentName: "Lafia Heritage Guest House Booking Agent",
        agentPhone: "2348010000333"
    },

    "keffi-lakeview-retreat": {
        name: "Keffi Lakeview Retreat",
        image: "https://picsum.photos/id/283/800/600",
        state: "Nasarawa",
        score: "7.6",
        reviews: "142",
        stars: 2,
        address: "7 Ring Road, Keffi | 1.66KM from city center",
        pricePerNight: 7500,
        description: "A simple, budget-friendly stay in Keffi, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Free Wi-Fi", "Luggage Storage", "Common Lounge", "24-Hour Front Desk"],
        agentName: "Keffi Lakeview Retreat Booking Agent",
        agentPhone: "2348010000334"
    },

    "akwanga-regal-villa-hotel": {
        name: "Akwanga Regal Villa Hotel",
        image: "https://picsum.photos/id/284/800/600",
        state: "Nasarawa",
        score: "8.7",
        reviews: "351",
        stars: 3,
        address: "42 Stadium Road, Akwanga | 2.76KM from city center",
        pricePerNight: 18000,
        description: "A comfortable, well-kept mid-range hotel in Akwanga, popular with business and family travelers alike.",
        amenities: ["Bar", "Outdoor Pool", "Room Service", "Air Conditioning", "Daily Housekeeping"],
        agentName: "Akwanga Regal Villa Hotel Booking Agent",
        agentPhone: "2348010000335"
    },

    "minna-serene-villa-hotel": {
        name: "Minna Serene Villa Hotel",
        image: "https://picsum.photos/id/285/800/600",
        state: "Niger",
        score: "7.3",
        reviews: "88",
        stars: 2,
        address: "4 Airport Road, Minna | 4.99KM from city center",
        pricePerNight: 10500,
        description: "A simple, budget-friendly stay in Minna, geared toward travelers who need a practical, affordable base.",
        amenities: ["Air Conditioning", "Free Wi-Fi", "Laundry Service", "24-Hour Front Desk", "Luggage Storage"],
        agentName: "Minna Serene Villa Hotel Booking Agent",
        agentPhone: "2348010000336"
    },

    "bida-pearl-inn": {
        name: "Bida Pearl Inn",
        image: "https://picsum.photos/id/286/800/600",
        state: "Niger",
        score: "9.2",
        reviews: "2,485",
        stars: 5,
        address: "27 Stadium Road, Bida | 4.59KM from city center",
        pricePerNight: 138500,
        description: "A standout, full-service hotel in Bida, offering five-star comfort and attentive concierge service.",
        amenities: ["Private Beach Access", "Fine Dining Restaurant", "Business Center", "Spa & Wellness Center", "Free Wi-Fi"],
        agentName: "Bida Pearl Inn Booking Agent",
        agentPhone: "2348010000337"
    },

    "suleja-riverside-grand-hotel": {
        name: "Suleja Riverside Grand Hotel",
        image: "https://picsum.photos/id/287/800/600",
        state: "Niger",
        score: "7.0",
        reviews: "166",
        stars: 2,
        address: "34 Waterside Road, Suleja | 3.89KM from city center",
        pricePerNight: 13500,
        description: "A simple, budget-friendly stay in Suleja, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Free Wi-Fi", "Luggage Storage", "Air Conditioning", "Generator Backup"],
        agentName: "Suleja Riverside Grand Hotel Booking Agent",
        agentPhone: "2348010000338"
    },

    "minna-meridian-inn": {
        name: "Minna Meridian Inn",
        image: "https://picsum.photos/id/288/800/600",
        state: "Niger",
        score: "8.9",
        reviews: "2,634",
        stars: 5,
        address: "44 New Layout, Minna | 1.63KM from city center",
        pricePerNight: 80500,
        description: "A standout, full-service hotel in Minna, offering five-star comfort and attentive concierge service.",
        amenities: ["Spa & Wellness Center", "Concierge Service", "Business Center", "Fitness Center", "Free Wi-Fi"],
        agentName: "Minna Meridian Inn Booking Agent",
        agentPhone: "2348010000339"
    },

    "bida-diamond-hostel": {
        name: "Bida Diamond Hostel",
        image: "https://picsum.photos/id/289/800/600",
        state: "Niger",
        score: "7.6",
        reviews: "90",
        stars: 2,
        address: "30 Station Road, Bida | 0.48KM from city center",
        pricePerNight: 10500,
        description: "A simple, budget-friendly stay in Bida, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Free Wi-Fi", "Luggage Storage", "Air Conditioning", "Generator Backup"],
        agentName: "Bida Diamond Hostel Booking Agent",
        agentPhone: "2348010000340"
    },

    "suleja-pearl-suites": {
        name: "Suleja Pearl Suites",
        image: "https://picsum.photos/id/290/800/600",
        state: "Niger",
        score: "8.7",
        reviews: "656",
        stars: 3,
        address: "51 Government House Road, Suleja | 5.69KM from city center",
        pricePerNight: 18500,
        description: "A comfortable, well-kept mid-range hotel in Suleja, popular with business and family travelers alike.",
        amenities: ["Bar", "Outdoor Pool", "Room Service", "Daily Housekeeping", "Family Rooms"],
        agentName: "Suleja Pearl Suites Booking Agent",
        agentPhone: "2348010000341"
    },

    "minna-regal-hotel": {
        name: "Minna Regal Hotel",
        image: "https://picsum.photos/id/291/800/600",
        state: "Niger",
        score: "8.0",
        reviews: "492",
        stars: 3,
        address: "40 Cathedral Road, Minna | 4.55KM from city center",
        pricePerNight: 19500,
        description: "A comfortable, well-kept mid-range hotel in Minna, popular with business and family travelers alike.",
        amenities: ["Outdoor Pool", "Free Wi-Fi", "Daily Housekeeping", "Room Service", "Air Conditioning"],
        agentName: "Minna Regal Hotel Booking Agent",
        agentPhone: "2348010000342"
    },

    "bida-regal-guest-house": {
        name: "Bida Regal Guest House",
        image: "https://picsum.photos/id/292/800/600",
        state: "Niger",
        score: "7.9",
        reviews: "25",
        stars: 2,
        address: "53 Waterside Road, Bida | 2.25KM from city center",
        pricePerNight: 9000,
        description: "A simple, budget-friendly stay in Bida, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Common Lounge", "Luggage Storage", "Free Wi-Fi", "Air Conditioning"],
        agentName: "Bida Regal Guest House Booking Agent",
        agentPhone: "2348010000343"
    },

    "suleja-cedar-villa-hotel": {
        name: "Suleja Cedar Villa Hotel",
        image: "https://picsum.photos/id/293/800/600",
        state: "Niger",
        score: "7.8",
        reviews: "102",
        stars: 2,
        address: "47 New Layout, Suleja | 4.09KM from city center",
        pricePerNight: 8000,
        description: "A simple, budget-friendly stay in Suleja, geared toward travelers who need a practical, affordable base.",
        amenities: ["Air Conditioning", "Shared Kitchen", "Luggage Storage", "Common Lounge", "Laundry Service"],
        agentName: "Suleja Cedar Villa Hotel Booking Agent",
        agentPhone: "2348010000344"
    },

    "minna-skyline-apartments": {
        name: "Minna Skyline Apartments",
        image: "https://picsum.photos/id/294/800/600",
        state: "Niger",
        score: "8.7",
        reviews: "137",
        stars: 3,
        address: "51 Airport Road, Minna | 0.8KM from city center",
        pricePerNight: 32000,
        description: "A comfortable, well-kept mid-range hotel in Minna, popular with business and family travelers alike.",
        amenities: ["Family Rooms", "Outdoor Pool", "Air Conditioning", "24-Hour Front Desk", "Bar"],
        agentName: "Minna Skyline Apartments Booking Agent",
        agentPhone: "2348010000345"
    },

    "bida-emerald-inn": {
        name: "Bida Emerald Inn",
        image: "https://picsum.photos/id/295/800/600",
        state: "Niger",
        score: "7.8",
        reviews: "83",
        stars: 2,
        address: "30 Ring Road, Bida | 6.0KM from city center",
        pricePerNight: 6500,
        description: "A simple, budget-friendly stay in Bida, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "24-Hour Front Desk", "Common Lounge", "Shared Kitchen", "Generator Backup"],
        agentName: "Bida Emerald Inn Booking Agent",
        agentPhone: "2348010000346"
    },

    "suleja-palm-retreat": {
        name: "Suleja Palm Retreat",
        image: "https://picsum.photos/id/296/800/600",
        state: "Niger",
        score: "7.8",
        reviews: "461",
        stars: 3,
        address: "39 GRA, Suleja | 1.48KM from city center",
        pricePerNight: 31000,
        description: "A comfortable, well-kept mid-range hotel in Suleja, popular with business and family travelers alike.",
        amenities: ["Non-smoking Rooms", "Bar", "Room Service", "Air Conditioning", "Outdoor Pool"],
        agentName: "Suleja Palm Retreat Booking Agent",
        agentPhone: "2348010000347"
    },

    "abeokuta-rosewood-suites": {
        name: "Abeokuta Rosewood Suites",
        image: "https://picsum.photos/id/297/800/600",
        state: "Ogun",
        score: "8.1",
        reviews: "475",
        stars: 3,
        address: "11 Station Road, Abeokuta | 3.89KM from city center",
        pricePerNight: 16500,
        description: "A comfortable, well-kept mid-range hotel in Abeokuta, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Family Rooms", "Bar", "Air Conditioning", "Outdoor Pool"],
        agentName: "Abeokuta Rosewood Suites Booking Agent",
        agentPhone: "2348010000348"
    },

    "ijebu-ode-horizon-apartments": {
        name: "Ijebu Ode Horizon Apartments",
        image: "https://picsum.photos/id/298/800/600",
        state: "Ogun",
        score: "7.0",
        reviews: "22",
        stars: 2,
        address: "59 Airport Road, Ijebu Ode | 4.35KM from city center",
        pricePerNight: 10000,
        description: "A simple, budget-friendly stay in Ijebu Ode, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "24-Hour Front Desk", "Generator Backup", "Laundry Service"],
        agentName: "Ijebu Ode Horizon Apartments Booking Agent",
        agentPhone: "2348010000349"
    },

    "sagamu-rosewood-retreat": {
        name: "Sagamu Rosewood Retreat",
        image: "https://picsum.photos/id/299/800/600",
        state: "Ogun",
        score: "8.1",
        reviews: "465",
        stars: 3,
        address: "30 Government House Road, Sagamu | 1.73KM from city center",
        pricePerNight: 26500,
        description: "A comfortable, well-kept mid-range hotel in Sagamu, popular with business and family travelers alike.",
        amenities: ["24-Hour Front Desk", "Outdoor Pool", "Family Rooms", "Free Wi-Fi", "Bar"],
        agentName: "Sagamu Rosewood Retreat Booking Agent",
        agentPhone: "2348010000350"
    },

    "abeokuta-vista-resort": {
        name: "Abeokuta Vista Resort",
        image: "https://picsum.photos/id/300/800/600",
        state: "Ogun",
        score: "8.4",
        reviews: "688",
        stars: 3,
        address: "20 Independence Way, Abeokuta | 1.06KM from city center",
        pricePerNight: 24500,
        description: "A comfortable, well-kept mid-range hotel in Abeokuta, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Bar", "Room Service", "Non-smoking Rooms", "Outdoor Pool"],
        agentName: "Abeokuta Vista Resort Booking Agent",
        agentPhone: "2348010000351"
    },

    "ijebu-ode-comfort-retreat": {
        name: "Ijebu Ode Comfort Retreat",
        image: "https://picsum.photos/id/301/800/600",
        state: "Ogun",
        score: "9.0",
        reviews: "911",
        stars: 4,
        address: "10 Stadium Road, Ijebu Ode | 5.07KM from city center",
        pricePerNight: 42000,
        description: "A polished hotel in Ijebu Ode with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Free Wi-Fi", "Concierge Service", "Fine Dining Restaurant", "Room Service", "Business Center"],
        agentName: "Ijebu Ode Comfort Retreat Booking Agent",
        agentPhone: "2348010000352"
    },

    "sagamu-cedar-hotel": {
        name: "Sagamu Cedar Hotel",
        image: "https://picsum.photos/id/302/800/600",
        state: "Ogun",
        score: "8.5",
        reviews: "382",
        stars: 3,
        address: "59 New Layout, Sagamu | 2.87KM from city center",
        pricePerNight: 23500,
        description: "A comfortable, well-kept mid-range hotel in Sagamu, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "Daily Housekeeping", "Room Service", "Bar", "Air Conditioning"],
        agentName: "Sagamu Cedar Hotel Booking Agent",
        agentPhone: "2348010000353"
    },

    "abeokuta-summit-villa-hotel": {
        name: "Abeokuta Summit Villa Hotel",
        image: "https://picsum.photos/id/303/800/600",
        state: "Ogun",
        score: "8.7",
        reviews: "447",
        stars: 3,
        address: "20 Station Road, Abeokuta | 1.44KM from city center",
        pricePerNight: 31500,
        description: "A comfortable, well-kept mid-range hotel in Abeokuta, popular with business and family travelers alike.",
        amenities: ["Family Rooms", "Room Service", "Non-smoking Rooms", "Free Wi-Fi", "Daily Housekeeping"],
        agentName: "Abeokuta Summit Villa Hotel Booking Agent",
        agentPhone: "2348010000354"
    },

    "ijebu-ode-comfort-grand-hotel": {
        name: "Ijebu Ode Comfort Grand Hotel",
        image: "https://picsum.photos/id/304/800/600",
        state: "Ogun",
        score: "7.8",
        reviews: "66",
        stars: 2,
        address: "44 Old Market Road, Ijebu Ode | 4.39KM from city center",
        pricePerNight: 14000,
        description: "A simple, budget-friendly stay in Ijebu Ode, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "24-Hour Front Desk", "Air Conditioning", "Common Lounge", "Shared Kitchen"],
        agentName: "Ijebu Ode Comfort Grand Hotel Booking Agent",
        agentPhone: "2348010000355"
    },

    "sagamu-prestige-resort": {
        name: "Sagamu Prestige Resort",
        image: "https://picsum.photos/id/305/800/600",
        state: "Ogun",
        score: "8.1",
        reviews: "381",
        stars: 3,
        address: "55 Market Road, Sagamu | 3.27KM from city center",
        pricePerNight: 30000,
        description: "A comfortable, well-kept mid-range hotel in Sagamu, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Non-smoking Rooms", "Family Rooms", "24-Hour Front Desk", "Free Wi-Fi"],
        agentName: "Sagamu Prestige Resort Booking Agent",
        agentPhone: "2348010000356"
    },

    "abeokuta-garden-apartments": {
        name: "Abeokuta Garden Apartments",
        image: "https://picsum.photos/id/306/800/600",
        state: "Ogun",
        score: "8.6",
        reviews: "410",
        stars: 4,
        address: "55 Airport Road, Abeokuta | 1.24KM from city center",
        pricePerNight: 64500,
        description: "A polished hotel in Abeokuta with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Room Service", "Business Center", "Airport Transfer (fee)", "Fine Dining Restaurant", "Fitness Center"],
        agentName: "Abeokuta Garden Apartments Booking Agent",
        agentPhone: "2348010000357"
    },

    "akure-riverside-grand-hotel": {
        name: "Akure Riverside Grand Hotel",
        image: "https://picsum.photos/id/307/800/600",
        state: "Ondo",
        score: "7.2",
        reviews: "40",
        stars: 2,
        address: "22 Independence Way, Akure | 6.42KM from city center",
        pricePerNight: 10000,
        description: "A simple, budget-friendly stay in Akure, geared toward travelers who need a practical, affordable base.",
        amenities: ["Laundry Service", "Shared Kitchen", "Free Wi-Fi", "Common Lounge", "Luggage Storage"],
        agentName: "Akure Riverside Grand Hotel Booking Agent",
        agentPhone: "2348010000358"
    },

    "ondo-town-skyline-lodge": {
        name: "Ondo Town Skyline Lodge",
        image: "https://picsum.photos/id/308/800/600",
        state: "Ondo",
        score: "7.6",
        reviews: "60",
        stars: 2,
        address: "51 Waterside Road, Ondo Town | 5.16KM from city center",
        pricePerNight: 10000,
        description: "A simple, budget-friendly stay in Ondo Town, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Generator Backup", "Luggage Storage", "Laundry Service", "Common Lounge"],
        agentName: "Ondo Town Skyline Lodge Booking Agent",
        agentPhone: "2348010000359"
    },

    "owo-regal-hostel": {
        name: "Owo Regal Hostel",
        image: "https://picsum.photos/id/309/800/600",
        state: "Ondo",
        score: "7.8",
        reviews: "626",
        stars: 3,
        address: "47 Old Market Road, Owo | 6.2KM from city center",
        pricePerNight: 21500,
        description: "A comfortable, well-kept mid-range hotel in Owo, popular with business and family travelers alike.",
        amenities: ["Bar", "Daily Housekeeping", "Free Wi-Fi", "Family Rooms", "Outdoor Pool"],
        agentName: "Owo Regal Hostel Booking Agent",
        agentPhone: "2348010000360"
    },

    "akure-silver-inn": {
        name: "Akure Silver Inn",
        image: "https://picsum.photos/id/310/800/600",
        state: "Ondo",
        score: "8.5",
        reviews: "432",
        stars: 3,
        address: "9 Market Road, Akure | 2.74KM from city center",
        pricePerNight: 25000,
        description: "A comfortable, well-kept mid-range hotel in Akure, popular with business and family travelers alike.",
        amenities: ["24-Hour Front Desk", "Room Service", "Free Wi-Fi", "Outdoor Pool", "Non-smoking Rooms"],
        agentName: "Akure Silver Inn Booking Agent",
        agentPhone: "2348010000361"
    },

    "ondo-town-serene-grand-hotel": {
        name: "Ondo Town Serene Grand Hotel",
        image: "https://picsum.photos/id/311/800/600",
        state: "Ondo",
        score: "8.8",
        reviews: "1,373",
        stars: 4,
        address: "28 Independence Way, Ondo Town | 6.47KM from city center",
        pricePerNight: 47000,
        description: "A polished hotel in Ondo Town with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Fitness Center", "Room Service", "Business Center", "Outdoor Pool", "Fine Dining Restaurant"],
        agentName: "Ondo Town Serene Grand Hotel Booking Agent",
        agentPhone: "2348010000362"
    },

    "owo-whitestone-hostel": {
        name: "Owo Whitestone Hostel",
        image: "https://picsum.photos/id/312/800/600",
        state: "Ondo",
        score: "8.4",
        reviews: "759",
        stars: 4,
        address: "9 Hospital Road, Owo | 4.88KM from city center",
        pricePerNight: 60000,
        description: "A polished hotel in Owo with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Business Center", "Free Wi-Fi", "Airport Transfer (fee)", "Concierge Service", "Room Service"],
        agentName: "Owo Whitestone Hostel Booking Agent",
        agentPhone: "2348010000363"
    },

    "akure-comfort-apartments": {
        name: "Akure Comfort Apartments",
        image: "https://picsum.photos/id/313/800/600",
        state: "Ondo",
        score: "8.9",
        reviews: "398",
        stars: 4,
        address: "7 Independence Way, Akure | 5.5KM from city center",
        pricePerNight: 57500,
        description: "A polished hotel in Akure with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Free Wi-Fi", "Fitness Center", "Airport Transfer (fee)", "Room Service", "Fine Dining Restaurant"],
        agentName: "Akure Comfort Apartments Booking Agent",
        agentPhone: "2348010000364"
    },

    "ondo-town-diamond-guest-house": {
        name: "Ondo Town Diamond Guest House",
        image: "https://picsum.photos/id/314/800/600",
        state: "Ondo",
        score: "7.5",
        reviews: "59",
        stars: 2,
        address: "45 Independence Way, Ondo Town | 4.24KM from city center",
        pricePerNight: 7500,
        description: "A simple, budget-friendly stay in Ondo Town, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Luggage Storage", "Laundry Service", "Free Wi-Fi", "24-Hour Front Desk"],
        agentName: "Ondo Town Diamond Guest House Booking Agent",
        agentPhone: "2348010000365"
    },

    "owo-rosewood-lodge": {
        name: "Owo Rosewood Lodge",
        image: "https://picsum.photos/id/315/800/600",
        state: "Ondo",
        score: "8.2",
        reviews: "187",
        stars: 3,
        address: "47 Cathedral Road, Owo | 1.12KM from city center",
        pricePerNight: 32000,
        description: "A comfortable, well-kept mid-range hotel in Owo, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Family Rooms", "Daily Housekeeping", "Non-smoking Rooms", "24-Hour Front Desk"],
        agentName: "Owo Rosewood Lodge Booking Agent",
        agentPhone: "2348010000366"
    },

    "akure-comfort-apartments-2": {
        name: "Akure Comfort Apartments",
        image: "https://picsum.photos/id/316/800/600",
        state: "Ondo",
        score: "8.0",
        reviews: "111",
        stars: 2,
        address: "27 Government House Road, Akure | 1.38KM from city center",
        pricePerNight: 12000,
        description: "A simple, budget-friendly stay in Akure, geared toward travelers who need a practical, affordable base.",
        amenities: ["Shared Kitchen", "Air Conditioning", "Laundry Service", "Luggage Storage", "24-Hour Front Desk"],
        agentName: "Akure Comfort Apartments Booking Agent",
        agentPhone: "2348010000367"
    },

    "ondo-town-grand-retreat": {
        name: "Ondo Town Grand Retreat",
        image: "https://picsum.photos/id/317/800/600",
        state: "Ondo",
        score: "7.1",
        reviews: "48",
        stars: 2,
        address: "37 Independence Way, Ondo Town | 3.41KM from city center",
        pricePerNight: 13000,
        description: "A simple, budget-friendly stay in Ondo Town, geared toward travelers who need a practical, affordable base.",
        amenities: ["Air Conditioning", "Common Lounge", "Generator Backup", "Free Wi-Fi", "Laundry Service"],
        agentName: "Ondo Town Grand Retreat Booking Agent",
        agentPhone: "2348010000368"
    },

    "owo-summit-inn": {
        name: "Owo Summit Inn",
        image: "https://picsum.photos/id/318/800/600",
        state: "Ondo",
        score: "8.8",
        reviews: "906",
        stars: 4,
        address: "30 Ring Road, Owo | 1.01KM from city center",
        pricePerNight: 44500,
        description: "A polished hotel in Owo with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Business Center", "Concierge Service", "Free Wi-Fi", "Airport Transfer (fee)", "Fine Dining Restaurant"],
        agentName: "Owo Summit Inn Booking Agent",
        agentPhone: "2348010000369"
    },

    "osogbo-prestige-hostel": {
        name: "Osogbo Prestige Hostel",
        image: "https://picsum.photos/id/319/800/600",
        state: "Osun",
        score: "9.0",
        reviews: "494",
        stars: 4,
        address: "49 Ring Road, Osogbo | 0.46KM from city center",
        pricePerNight: 64000,
        description: "A polished hotel in Osogbo with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Business Center", "Fitness Center", "Concierge Service", "Outdoor Pool", "Airport Transfer (fee)"],
        agentName: "Osogbo Prestige Hostel Booking Agent",
        agentPhone: "2348010000370"
    },

    "ile-ife-serene-palace-hotel": {
        name: "Ile-Ife Serene Palace Hotel",
        image: "https://picsum.photos/id/320/800/600",
        state: "Osun",
        score: "7.3",
        reviews: "43",
        stars: 2,
        address: "53 Old Market Road, Ile-Ife | 1.52KM from city center",
        pricePerNight: 9000,
        description: "A simple, budget-friendly stay in Ile-Ife, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Luggage Storage", "Shared Kitchen", "24-Hour Front Desk", "Laundry Service"],
        agentName: "Ile-Ife Serene Palace Hotel Booking Agent",
        agentPhone: "2348010000371"
    },

    "ilesa-regal-hostel": {
        name: "Ilesa Regal Hostel",
        image: "https://picsum.photos/id/321/800/600",
        state: "Osun",
        score: "8.4",
        reviews: "250",
        stars: 3,
        address: "9 Commercial Avenue, Ilesa | 4.83KM from city center",
        pricePerNight: 18500,
        description: "A comfortable, well-kept mid-range hotel in Ilesa, popular with business and family travelers alike.",
        amenities: ["Room Service", "Air Conditioning", "Daily Housekeeping", "24-Hour Front Desk", "Outdoor Pool"],
        agentName: "Ilesa Regal Hostel Booking Agent",
        agentPhone: "2348010000372"
    },

    "osogbo-vista-villa-hotel": {
        name: "Osogbo Vista Villa Hotel",
        image: "https://picsum.photos/id/322/800/600",
        state: "Osun",
        score: "8.5",
        reviews: "1,077",
        stars: 4,
        address: "23 Cathedral Road, Osogbo | 0.58KM from city center",
        pricePerNight: 61500,
        description: "A polished hotel in Osogbo with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Business Center", "Room Service", "Concierge Service", "Free Wi-Fi", "Fitness Center"],
        agentName: "Osogbo Vista Villa Hotel Booking Agent",
        agentPhone: "2348010000373"
    },

    "ile-ife-golden-guest-house": {
        name: "Ile-Ife Golden Guest House",
        image: "https://picsum.photos/id/323/800/600",
        state: "Osun",
        score: "8.5",
        reviews: "92",
        stars: 3,
        address: "50 Commercial Avenue, Ile-Ife | 3.92KM from city center",
        pricePerNight: 32000,
        description: "A comfortable, well-kept mid-range hotel in Ile-Ife, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Bar", "24-Hour Front Desk", "Outdoor Pool", "Non-smoking Rooms"],
        agentName: "Ile-Ife Golden Guest House Booking Agent",
        agentPhone: "2348010000374"
    },

    "ilesa-vista-grand-hotel": {
        name: "Ilesa Vista Grand Hotel",
        image: "https://picsum.photos/id/324/800/600",
        state: "Osun",
        score: "7.2",
        reviews: "108",
        stars: 2,
        address: "44 Independence Way, Ilesa | 2.75KM from city center",
        pricePerNight: 11500,
        description: "A simple, budget-friendly stay in Ilesa, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Shared Kitchen", "Laundry Service", "Air Conditioning", "Luggage Storage"],
        agentName: "Ilesa Vista Grand Hotel Booking Agent",
        agentPhone: "2348010000375"
    },

    "osogbo-riverside-lodge": {
        name: "Osogbo Riverside Lodge",
        image: "https://picsum.photos/id/325/800/600",
        state: "Osun",
        score: "8.5",
        reviews: "1,306",
        stars: 4,
        address: "16 Old Market Road, Osogbo | 6.32KM from city center",
        pricePerNight: 46500,
        description: "A polished hotel in Osogbo with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Free Wi-Fi", "Fine Dining Restaurant", "Outdoor Pool", "Concierge Service", "Room Service"],
        agentName: "Osogbo Riverside Lodge Booking Agent",
        agentPhone: "2348010000376"
    },

    "ile-ife-silver-suites": {
        name: "Ile-Ife Silver Suites",
        image: "https://picsum.photos/id/326/800/600",
        state: "Osun",
        score: "8.3",
        reviews: "666",
        stars: 3,
        address: "6 Station Road, Ile-Ife | 3.44KM from city center",
        pricePerNight: 29500,
        description: "A comfortable, well-kept mid-range hotel in Ile-Ife, popular with business and family travelers alike.",
        amenities: ["Bar", "Air Conditioning", "Daily Housekeeping", "Family Rooms", "Free Wi-Fi"],
        agentName: "Ile-Ife Silver Suites Booking Agent",
        agentPhone: "2348010000377"
    },

    "ilesa-horizon-hotel": {
        name: "Ilesa Horizon Hotel",
        image: "https://picsum.photos/id/327/800/600",
        state: "Osun",
        score: "7.6",
        reviews: "20",
        stars: 2,
        address: "6 Waterside Road, Ilesa | 4.09KM from city center",
        pricePerNight: 13000,
        description: "A simple, budget-friendly stay in Ilesa, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Shared Kitchen", "Common Lounge", "Air Conditioning", "Luggage Storage"],
        agentName: "Ilesa Horizon Hotel Booking Agent",
        agentPhone: "2348010000378"
    },

    "osogbo-elite-hotel": {
        name: "Osogbo Elite Hotel",
        image: "https://picsum.photos/id/328/800/600",
        state: "Osun",
        score: "9.5",
        reviews: "2,761",
        stars: 5,
        address: "36 Waterside Road, Osogbo | 4.18KM from city center",
        pricePerNight: 113500,
        description: "A standout, full-service hotel in Osogbo, offering five-star comfort and attentive concierge service.",
        amenities: ["Private Beach Access", "Fitness Center", "Business Center", "Fine Dining Restaurant", "Free Wi-Fi"],
        agentName: "Osogbo Elite Hotel Booking Agent",
        agentPhone: "2348010000379"
    },

    "ile-ife-vista-inn": {
        name: "Ile-Ife Vista Inn",
        image: "https://picsum.photos/id/329/800/600",
        state: "Osun",
        score: "7.0",
        reviews: "110",
        stars: 2,
        address: "41 Waterside Road, Ile-Ife | 2.18KM from city center",
        pricePerNight: 13000,
        description: "A simple, budget-friendly stay in Ile-Ife, geared toward travelers who need a practical, affordable base.",
        amenities: ["Laundry Service", "Shared Kitchen", "Free Wi-Fi", "Common Lounge", "Air Conditioning"],
        agentName: "Ile-Ife Vista Inn Booking Agent",
        agentPhone: "2348010000380"
    },

    "ilesa-lakeview-grand-hotel": {
        name: "Ilesa Lakeview Grand Hotel",
        image: "https://picsum.photos/id/330/800/600",
        state: "Osun",
        score: "8.5",
        reviews: "499",
        stars: 3,
        address: "17 Cathedral Road, Ilesa | 1.6KM from city center",
        pricePerNight: 18500,
        description: "A comfortable, well-kept mid-range hotel in Ilesa, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Outdoor Pool", "Family Rooms", "Daily Housekeeping", "Non-smoking Rooms"],
        agentName: "Ilesa Lakeview Grand Hotel Booking Agent",
        agentPhone: "2348010000381"
    },

    "ibadan-palm-hostel": {
        name: "Ibadan Palm Hostel",
        image: "https://picsum.photos/id/331/800/600",
        state: "Oyo",
        score: "7.8",
        reviews: "682",
        stars: 3,
        address: "50 GRA, Ibadan | 3.19KM from city center",
        pricePerNight: 19000,
        description: "A comfortable, well-kept mid-range hotel in Ibadan, popular with business and family travelers alike.",
        amenities: ["Family Rooms", "Room Service", "Daily Housekeeping", "Free Wi-Fi", "24-Hour Front Desk"],
        agentName: "Ibadan Palm Hostel Booking Agent",
        agentPhone: "2348010000382"
    },

    "ogbomoso-diamond-hostel": {
        name: "Ogbomoso Diamond Hostel",
        image: "https://picsum.photos/id/332/800/600",
        state: "Oyo",
        score: "8.6",
        reviews: "574",
        stars: 3,
        address: "50 Airport Road, Ogbomoso | 4.62KM from city center",
        pricePerNight: 31500,
        description: "A comfortable, well-kept mid-range hotel in Ogbomoso, popular with business and family travelers alike.",
        amenities: ["Room Service", "Family Rooms", "Free Wi-Fi", "Daily Housekeeping", "24-Hour Front Desk"],
        agentName: "Ogbomoso Diamond Hostel Booking Agent",
        agentPhone: "2348010000383"
    },

    "iseyin-prestige-apartments": {
        name: "Iseyin Prestige Apartments",
        image: "https://picsum.photos/id/333/800/600",
        state: "Oyo",
        score: "8.7",
        reviews: "508",
        stars: 3,
        address: "18 New Layout, Iseyin | 6.28KM from city center",
        pricePerNight: 23000,
        description: "A comfortable, well-kept mid-range hotel in Iseyin, popular with business and family travelers alike.",
        amenities: ["24-Hour Front Desk", "Non-smoking Rooms", "Outdoor Pool", "Air Conditioning", "Bar"],
        agentName: "Iseyin Prestige Apartments Booking Agent",
        agentPhone: "2348010000384"
    },

    "ibadan-rosewood-grand-hotel": {
        name: "Ibadan Rosewood Grand Hotel",
        image: "https://picsum.photos/id/334/800/600",
        state: "Oyo",
        score: "8.3",
        reviews: "640",
        stars: 3,
        address: "46 Commercial Avenue, Ibadan | 6.11KM from city center",
        pricePerNight: 25500,
        description: "A comfortable, well-kept mid-range hotel in Ibadan, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Family Rooms", "Air Conditioning", "24-Hour Front Desk", "Room Service"],
        agentName: "Ibadan Rosewood Grand Hotel Booking Agent",
        agentPhone: "2348010000385"
    },

    "ogbomoso-whitestone-retreat": {
        name: "Ogbomoso Whitestone Retreat",
        image: "https://picsum.photos/id/335/800/600",
        state: "Oyo",
        score: "7.9",
        reviews: "262",
        stars: 3,
        address: "35 Commercial Avenue, Ogbomoso | 4.28KM from city center",
        pricePerNight: 31500,
        description: "A comfortable, well-kept mid-range hotel in Ogbomoso, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Bar", "24-Hour Front Desk", "Daily Housekeeping", "Outdoor Pool"],
        agentName: "Ogbomoso Whitestone Retreat Booking Agent",
        agentPhone: "2348010000386"
    },

    "iseyin-vista-grand-hotel": {
        name: "Iseyin Vista Grand Hotel",
        image: "https://picsum.photos/id/336/800/600",
        state: "Oyo",
        score: "8.2",
        reviews: "626",
        stars: 3,
        address: "57 Station Road, Iseyin | 2.98KM from city center",
        pricePerNight: 24500,
        description: "A comfortable, well-kept mid-range hotel in Iseyin, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Family Rooms", "Daily Housekeeping", "Non-smoking Rooms"],
        agentName: "Iseyin Vista Grand Hotel Booking Agent",
        agentPhone: "2348010000387"
    },

    "ibadan-royal-inn": {
        name: "Ibadan Royal Inn",
        image: "https://picsum.photos/id/337/800/600",
        state: "Oyo",
        score: "7.3",
        reviews: "61",
        stars: 2,
        address: "44 Government House Road, Ibadan | 1.29KM from city center",
        pricePerNight: 8500,
        description: "A simple, budget-friendly stay in Ibadan, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Laundry Service", "24-Hour Front Desk", "Air Conditioning", "Shared Kitchen"],
        agentName: "Ibadan Royal Inn Booking Agent",
        agentPhone: "2348010000388"
    },

    "ogbomoso-serene-suites": {
        name: "Ogbomoso Serene Suites",
        image: "https://picsum.photos/id/338/800/600",
        state: "Oyo",
        score: "7.6",
        reviews: "163",
        stars: 2,
        address: "15 Commercial Avenue, Ogbomoso | 4.35KM from city center",
        pricePerNight: 13000,
        description: "A simple, budget-friendly stay in Ogbomoso, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Air Conditioning", "Generator Backup", "24-Hour Front Desk", "Free Wi-Fi"],
        agentName: "Ogbomoso Serene Suites Booking Agent",
        agentPhone: "2348010000389"
    },

    "iseyin-garden-hostel": {
        name: "Iseyin Garden Hostel",
        image: "https://picsum.photos/id/339/800/600",
        state: "Oyo",
        score: "9.2",
        reviews: "940",
        stars: 4,
        address: "36 Ring Road, Iseyin | 0.48KM from city center",
        pricePerNight: 67500,
        description: "A polished hotel in Iseyin with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Fine Dining Restaurant", "Outdoor Pool", "Airport Transfer (fee)", "Room Service", "Concierge Service"],
        agentName: "Iseyin Garden Hostel Booking Agent",
        agentPhone: "2348010000390"
    },

    "ibadan-rosewood-grand-hotel-2": {
        name: "Ibadan Rosewood Grand Hotel",
        image: "https://picsum.photos/id/340/800/600",
        state: "Oyo",
        score: "8.9",
        reviews: "1,419",
        stars: 4,
        address: "39 Hospital Road, Ibadan | 5.13KM from city center",
        pricePerNight: 60000,
        description: "A polished hotel in Ibadan with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Room Service", "Business Center", "Airport Transfer (fee)", "Outdoor Pool", "Free Wi-Fi"],
        agentName: "Ibadan Rosewood Grand Hotel Booking Agent",
        agentPhone: "2348010000391"
    },

    "jos-crown-grand-hotel": {
        name: "Jos Crown Grand Hotel",
        image: "https://picsum.photos/id/341/800/600",
        state: "Plateau",
        score: "7.5",
        reviews: "116",
        stars: 2,
        address: "28 Government House Road, Jos | 3.8KM from city center",
        pricePerNight: 6500,
        description: "A simple, budget-friendly stay in Jos, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Air Conditioning", "Generator Backup", "Shared Kitchen", "Free Wi-Fi"],
        agentName: "Jos Crown Grand Hotel Booking Agent",
        agentPhone: "2348010000392"
    },

    "bukuru-rosewood-lodge": {
        name: "Bukuru Rosewood Lodge",
        image: "https://picsum.photos/id/342/800/600",
        state: "Plateau",
        score: "7.0",
        reviews: "102",
        stars: 2,
        address: "4 Waterside Road, Bukuru | 6.09KM from city center",
        pricePerNight: 11000,
        description: "A simple, budget-friendly stay in Bukuru, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Luggage Storage", "Shared Kitchen", "Laundry Service", "24-Hour Front Desk"],
        agentName: "Bukuru Rosewood Lodge Booking Agent",
        agentPhone: "2348010000393"
    },

    "pankshin-rosewood-resort": {
        name: "Pankshin Rosewood Resort",
        image: "https://picsum.photos/id/343/800/600",
        state: "Plateau",
        score: "7.5",
        reviews: "67",
        stars: 2,
        address: "5 Waterside Road, Pankshin | 3.48KM from city center",
        pricePerNight: 10500,
        description: "A simple, budget-friendly stay in Pankshin, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Generator Backup", "Shared Kitchen", "Luggage Storage", "Free Wi-Fi"],
        agentName: "Pankshin Rosewood Resort Booking Agent",
        agentPhone: "2348010000394"
    },

    "jos-harmony-inn": {
        name: "Jos Harmony Inn",
        image: "https://picsum.photos/id/344/800/600",
        state: "Plateau",
        score: "7.7",
        reviews: "104",
        stars: 2,
        address: "19 Hospital Road, Jos | 6.2KM from city center",
        pricePerNight: 9000,
        description: "A simple, budget-friendly stay in Jos, geared toward travelers who need a practical, affordable base.",
        amenities: ["Shared Kitchen", "Generator Backup", "Laundry Service", "Free Wi-Fi", "Common Lounge"],
        agentName: "Jos Harmony Inn Booking Agent",
        agentPhone: "2348010000395"
    },

    "bukuru-serene-inn": {
        name: "Bukuru Serene Inn",
        image: "https://picsum.photos/id/345/800/600",
        state: "Plateau",
        score: "8.7",
        reviews: "329",
        stars: 3,
        address: "44 Old Market Road, Bukuru | 2.73KM from city center",
        pricePerNight: 16500,
        description: "A comfortable, well-kept mid-range hotel in Bukuru, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Outdoor Pool", "Room Service", "24-Hour Front Desk", "Non-smoking Rooms"],
        agentName: "Bukuru Serene Inn Booking Agent",
        agentPhone: "2348010000396"
    },

    "pankshin-bellavista-resort": {
        name: "Pankshin Bellavista Resort",
        image: "https://picsum.photos/id/346/800/600",
        state: "Plateau",
        score: "7.5",
        reviews: "150",
        stars: 2,
        address: "32 Ring Road, Pankshin | 2.21KM from city center",
        pricePerNight: 9500,
        description: "A simple, budget-friendly stay in Pankshin, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "24-Hour Front Desk", "Generator Backup", "Free Wi-Fi", "Laundry Service"],
        agentName: "Pankshin Bellavista Resort Booking Agent",
        agentPhone: "2348010000397"
    },

    "jos-skyline-apartments": {
        name: "Jos Skyline Apartments",
        image: "https://picsum.photos/id/347/800/600",
        state: "Plateau",
        score: "7.5",
        reviews: "180",
        stars: 2,
        address: "14 Independence Way, Jos | 4.24KM from city center",
        pricePerNight: 6500,
        description: "A simple, budget-friendly stay in Jos, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Common Lounge", "Laundry Service", "Shared Kitchen", "Free Wi-Fi"],
        agentName: "Jos Skyline Apartments Booking Agent",
        agentPhone: "2348010000398"
    },

    "bukuru-lakeview-grand-hotel": {
        name: "Bukuru Lakeview Grand Hotel",
        image: "https://picsum.photos/id/348/800/600",
        state: "Plateau",
        score: "7.9",
        reviews: "131",
        stars: 2,
        address: "53 Market Road, Bukuru | 4.96KM from city center",
        pricePerNight: 11500,
        description: "A simple, budget-friendly stay in Bukuru, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Free Wi-Fi", "Luggage Storage", "Shared Kitchen", "Common Lounge"],
        agentName: "Bukuru Lakeview Grand Hotel Booking Agent",
        agentPhone: "2348010000399"
    },

    "pankshin-royal-lodge": {
        name: "Pankshin Royal Lodge",
        image: "https://picsum.photos/id/349/800/600",
        state: "Plateau",
        score: "7.8",
        reviews: "162",
        stars: 2,
        address: "37 Station Road, Pankshin | 1.79KM from city center",
        pricePerNight: 6500,
        description: "A simple, budget-friendly stay in Pankshin, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Luggage Storage", "Common Lounge", "Laundry Service", "Shared Kitchen"],
        agentName: "Pankshin Royal Lodge Booking Agent",
        agentPhone: "2348010000400"
    },

    "jos-grand-hostel": {
        name: "Jos Grand Hostel",
        image: "https://picsum.photos/id/350/800/600",
        state: "Plateau",
        score: "8.5",
        reviews: "627",
        stars: 3,
        address: "42 Commercial Avenue, Jos | 4.17KM from city center",
        pricePerNight: 15000,
        description: "A comfortable, well-kept mid-range hotel in Jos, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Room Service", "24-Hour Front Desk", "Family Rooms"],
        agentName: "Jos Grand Hostel Booking Agent",
        agentPhone: "2348010000401"
    },

    "bukuru-vista-guest-house": {
        name: "Bukuru Vista Guest House",
        image: "https://picsum.photos/id/351/800/600",
        state: "Plateau",
        score: "7.6",
        reviews: "92",
        stars: 2,
        address: "60 GRA, Bukuru | 2.73KM from city center",
        pricePerNight: 12500,
        description: "A simple, budget-friendly stay in Bukuru, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Luggage Storage", "Air Conditioning", "Generator Backup", "Laundry Service"],
        agentName: "Bukuru Vista Guest House Booking Agent",
        agentPhone: "2348010000402"
    },

    "pankshin-garden-apartments": {
        name: "Pankshin Garden Apartments",
        image: "https://picsum.photos/id/352/800/600",
        state: "Plateau",
        score: "7.3",
        reviews: "56",
        stars: 2,
        address: "44 Waterside Road, Pankshin | 5.69KM from city center",
        pricePerNight: 8500,
        description: "A simple, budget-friendly stay in Pankshin, geared toward travelers who need a practical, affordable base.",
        amenities: ["Laundry Service", "Free Wi-Fi", "Generator Backup", "Shared Kitchen", "Air Conditioning"],
        agentName: "Pankshin Garden Apartments Booking Agent",
        agentPhone: "2348010000403"
    },

    "port-harcourt-grand-palace-hotel": {
        name: "Port Harcourt Grand Palace Hotel",
        image: "https://picsum.photos/id/353/800/600",
        state: "Rivers",
        score: "7.6",
        reviews: "157",
        stars: 2,
        address: "6 Government House Road, Port Harcourt | 1.68KM from city center",
        pricePerNight: 10500,
        description: "A simple, budget-friendly stay in Port Harcourt, geared toward travelers who need a practical, affordable base.",
        amenities: ["Laundry Service", "Air Conditioning", "Luggage Storage", "Generator Backup", "Common Lounge"],
        agentName: "Port Harcourt Grand Palace Hotel Booking Agent",
        agentPhone: "2348010000404"
    },

    "bonny-silver-palace-hotel": {
        name: "Bonny Silver Palace Hotel",
        image: "https://picsum.photos/id/354/800/600",
        state: "Rivers",
        score: "7.8",
        reviews: "69",
        stars: 2,
        address: "12 Independence Way, Bonny | 5.28KM from city center",
        pricePerNight: 7000,
        description: "A simple, budget-friendly stay in Bonny, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Common Lounge", "Generator Backup", "Luggage Storage", "Shared Kitchen"],
        agentName: "Bonny Silver Palace Hotel Booking Agent",
        agentPhone: "2348010000405"
    },

    "eleme-golden-guest-house": {
        name: "Eleme Golden Guest House",
        image: "https://picsum.photos/id/355/800/600",
        state: "Rivers",
        score: "7.1",
        reviews: "168",
        stars: 2,
        address: "22 Old Market Road, Eleme | 1.18KM from city center",
        pricePerNight: 10000,
        description: "A simple, budget-friendly stay in Eleme, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Free Wi-Fi", "24-Hour Front Desk", "Generator Backup", "Common Lounge"],
        agentName: "Eleme Golden Guest House Booking Agent",
        agentPhone: "2348010000406"
    },

    "port-harcourt-prestige-villa-hotel": {
        name: "Port Harcourt Prestige Villa Hotel",
        image: "https://picsum.photos/id/356/800/600",
        state: "Rivers",
        score: "8.8",
        reviews: "926",
        stars: 4,
        address: "38 Airport Road, Port Harcourt | 3.85KM from city center",
        pricePerNight: 58500,
        description: "A polished hotel in Port Harcourt with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Fitness Center", "Concierge Service", "Business Center", "Room Service", "Outdoor Pool"],
        agentName: "Port Harcourt Prestige Villa Hotel Booking Agent",
        agentPhone: "2348010000407"
    },

    "bonny-silver-inn": {
        name: "Bonny Silver Inn",
        image: "https://picsum.photos/id/357/800/600",
        state: "Rivers",
        score: "7.7",
        reviews: "131",
        stars: 2,
        address: "54 Old Market Road, Bonny | 1.22KM from city center",
        pricePerNight: 8500,
        description: "A simple, budget-friendly stay in Bonny, geared toward travelers who need a practical, affordable base.",
        amenities: ["Laundry Service", "Luggage Storage", "Common Lounge", "Shared Kitchen", "24-Hour Front Desk"],
        agentName: "Bonny Silver Inn Booking Agent",
        agentPhone: "2348010000408"
    },

    "eleme-regal-apartments": {
        name: "Eleme Regal Apartments",
        image: "https://picsum.photos/id/358/800/600",
        state: "Rivers",
        score: "7.9",
        reviews: "163",
        stars: 3,
        address: "55 Station Road, Eleme | 1.25KM from city center",
        pricePerNight: 24000,
        description: "A comfortable, well-kept mid-range hotel in Eleme, popular with business and family travelers alike.",
        amenities: ["Family Rooms", "Daily Housekeeping", "Room Service", "Bar", "Free Wi-Fi"],
        agentName: "Eleme Regal Apartments Booking Agent",
        agentPhone: "2348010000409"
    },

    "port-harcourt-harmony-hotel": {
        name: "Port Harcourt Harmony Hotel",
        image: "https://picsum.photos/id/359/800/600",
        state: "Rivers",
        score: "8.6",
        reviews: "111",
        stars: 3,
        address: "26 Waterside Road, Port Harcourt | 4.0KM from city center",
        pricePerNight: 34000,
        description: "A comfortable, well-kept mid-range hotel in Port Harcourt, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "24-Hour Front Desk", "Non-smoking Rooms", "Outdoor Pool", "Daily Housekeeping"],
        agentName: "Port Harcourt Harmony Hotel Booking Agent",
        agentPhone: "2348010000410"
    },

    "bonny-sunset-resort": {
        name: "Bonny Sunset Resort",
        image: "https://picsum.photos/id/360/800/600",
        state: "Rivers",
        score: "8.2",
        reviews: "683",
        stars: 3,
        address: "9 GRA, Bonny | 3.46KM from city center",
        pricePerNight: 24500,
        description: "A comfortable, well-kept mid-range hotel in Bonny, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Outdoor Pool", "Room Service", "24-Hour Front Desk", "Free Wi-Fi"],
        agentName: "Bonny Sunset Resort Booking Agent",
        agentPhone: "2348010000411"
    },

    "eleme-riverside-palace-hotel": {
        name: "Eleme Riverside Palace Hotel",
        image: "https://picsum.photos/id/361/800/600",
        state: "Rivers",
        score: "8.5",
        reviews: "606",
        stars: 3,
        address: "29 Airport Road, Eleme | 1.49KM from city center",
        pricePerNight: 19500,
        description: "A comfortable, well-kept mid-range hotel in Eleme, popular with business and family travelers alike.",
        amenities: ["Room Service", "Non-smoking Rooms", "Family Rooms", "Free Wi-Fi", "Air Conditioning"],
        agentName: "Eleme Riverside Palace Hotel Booking Agent",
        agentPhone: "2348010000412"
    },

    "port-harcourt-silver-suites": {
        name: "Port Harcourt Silver Suites",
        image: "https://picsum.photos/id/362/800/600",
        state: "Rivers",
        score: "8.1",
        reviews: "319",
        stars: 3,
        address: "43 Hospital Road, Port Harcourt | 3.56KM from city center",
        pricePerNight: 16500,
        description: "A comfortable, well-kept mid-range hotel in Port Harcourt, popular with business and family travelers alike.",
        amenities: ["Bar", "Outdoor Pool", "Daily Housekeeping", "Non-smoking Rooms", "Free Wi-Fi"],
        agentName: "Port Harcourt Silver Suites Booking Agent",
        agentPhone: "2348010000413"
    },

    "sokoto-summit-resort": {
        name: "Sokoto Summit Resort",
        image: "https://picsum.photos/id/363/800/600",
        state: "Sokoto",
        score: "7.1",
        reviews: "153",
        stars: 2,
        address: "54 Government House Road, Sokoto | 5.49KM from city center",
        pricePerNight: 11000,
        description: "A simple, budget-friendly stay in Sokoto, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Shared Kitchen", "Common Lounge", "Laundry Service", "Air Conditioning"],
        agentName: "Sokoto Summit Resort Booking Agent",
        agentPhone: "2348010000414"
    },

    "wurno-garden-resort": {
        name: "Wurno Garden Resort",
        image: "https://picsum.photos/id/364/800/600",
        state: "Sokoto",
        score: "7.6",
        reviews: "39",
        stars: 2,
        address: "17 New Layout, Wurno | 6.33KM from city center",
        pricePerNight: 10000,
        description: "A simple, budget-friendly stay in Wurno, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Generator Backup", "Shared Kitchen", "24-Hour Front Desk", "Common Lounge"],
        agentName: "Wurno Garden Resort Booking Agent",
        agentPhone: "2348010000415"
    },

    "tambuwal-regal-palace-hotel": {
        name: "Tambuwal Regal Palace Hotel",
        image: "https://picsum.photos/id/365/800/600",
        state: "Sokoto",
        score: "7.8",
        reviews: "222",
        stars: 3,
        address: "11 Hospital Road, Tambuwal | 0.87KM from city center",
        pricePerNight: 29500,
        description: "A comfortable, well-kept mid-range hotel in Tambuwal, popular with business and family travelers alike.",
        amenities: ["24-Hour Front Desk", "Daily Housekeeping", "Air Conditioning", "Outdoor Pool", "Bar"],
        agentName: "Tambuwal Regal Palace Hotel Booking Agent",
        agentPhone: "2348010000416"
    },

    "sokoto-rosewood-suites": {
        name: "Sokoto Rosewood Suites",
        image: "https://picsum.photos/id/366/800/600",
        state: "Sokoto",
        score: "7.7",
        reviews: "126",
        stars: 2,
        address: "22 Commercial Avenue, Sokoto | 1.09KM from city center",
        pricePerNight: 12500,
        description: "A simple, budget-friendly stay in Sokoto, geared toward travelers who need a practical, affordable base.",
        amenities: ["Shared Kitchen", "Luggage Storage", "Air Conditioning", "Generator Backup", "Laundry Service"],
        agentName: "Sokoto Rosewood Suites Booking Agent",
        agentPhone: "2348010000417"
    },

    "wurno-horizon-hotel": {
        name: "Wurno Horizon Hotel",
        image: "https://picsum.photos/id/367/800/600",
        state: "Sokoto",
        score: "8.0",
        reviews: "210",
        stars: 3,
        address: "38 Airport Road, Wurno | 1.22KM from city center",
        pricePerNight: 34000,
        description: "A comfortable, well-kept mid-range hotel in Wurno, popular with business and family travelers alike.",
        amenities: ["Family Rooms", "Free Wi-Fi", "24-Hour Front Desk", "Air Conditioning", "Non-smoking Rooms"],
        agentName: "Wurno Horizon Hotel Booking Agent",
        agentPhone: "2348010000418"
    },

    "tambuwal-whitestone-lodge": {
        name: "Tambuwal Whitestone Lodge",
        image: "https://picsum.photos/id/368/800/600",
        state: "Sokoto",
        score: "7.5",
        reviews: "123",
        stars: 2,
        address: "37 Independence Way, Tambuwal | 0.51KM from city center",
        pricePerNight: 11000,
        description: "A simple, budget-friendly stay in Tambuwal, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Free Wi-Fi", "Air Conditioning", "Luggage Storage", "Shared Kitchen"],
        agentName: "Tambuwal Whitestone Lodge Booking Agent",
        agentPhone: "2348010000419"
    },

    "sokoto-crown-inn": {
        name: "Sokoto Crown Inn",
        image: "https://picsum.photos/id/369/800/600",
        state: "Sokoto",
        score: "9.1",
        reviews: "592",
        stars: 4,
        address: "38 Station Road, Sokoto | 5.08KM from city center",
        pricePerNight: 62000,
        description: "A polished hotel in Sokoto with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Fine Dining Restaurant", "Outdoor Pool", "Fitness Center", "Business Center", "Room Service"],
        agentName: "Sokoto Crown Inn Booking Agent",
        agentPhone: "2348010000420"
    },

    "wurno-golden-inn": {
        name: "Wurno Golden Inn",
        image: "https://picsum.photos/id/370/800/600",
        state: "Sokoto",
        score: "8.2",
        reviews: "215",
        stars: 3,
        address: "2 Hospital Road, Wurno | 3.59KM from city center",
        pricePerNight: 18500,
        description: "A comfortable, well-kept mid-range hotel in Wurno, popular with business and family travelers alike.",
        amenities: ["Family Rooms", "Outdoor Pool", "Non-smoking Rooms", "Air Conditioning", "24-Hour Front Desk"],
        agentName: "Wurno Golden Inn Booking Agent",
        agentPhone: "2348010000421"
    },

    "tambuwal-regal-palace-hotel-2": {
        name: "Tambuwal Regal Palace Hotel",
        image: "https://picsum.photos/id/371/800/600",
        state: "Sokoto",
        score: "7.6",
        reviews: "156",
        stars: 2,
        address: "49 Market Road, Tambuwal | 0.97KM from city center",
        pricePerNight: 10000,
        description: "A simple, budget-friendly stay in Tambuwal, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Generator Backup", "Common Lounge", "Free Wi-Fi", "Luggage Storage"],
        agentName: "Tambuwal Regal Palace Hotel Booking Agent",
        agentPhone: "2348010000422"
    },

    "sokoto-elite-hotel": {
        name: "Sokoto Elite Hotel",
        image: "https://picsum.photos/id/372/800/600",
        state: "Sokoto",
        score: "8.5",
        reviews: "519",
        stars: 3,
        address: "52 GRA, Sokoto | 5.22KM from city center",
        pricePerNight: 22500,
        description: "A comfortable, well-kept mid-range hotel in Sokoto, popular with business and family travelers alike.",
        amenities: ["Outdoor Pool", "Bar", "24-Hour Front Desk", "Non-smoking Rooms", "Family Rooms"],
        agentName: "Sokoto Elite Hotel Booking Agent",
        agentPhone: "2348010000423"
    },

    "wurno-sunset-guest-house": {
        name: "Wurno Sunset Guest House",
        image: "https://picsum.photos/id/373/800/600",
        state: "Sokoto",
        score: "7.5",
        reviews: "79",
        stars: 2,
        address: "55 Market Road, Wurno | 2.13KM from city center",
        pricePerNight: 13500,
        description: "A simple, budget-friendly stay in Wurno, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "24-Hour Front Desk", "Air Conditioning", "Free Wi-Fi", "Generator Backup"],
        agentName: "Wurno Sunset Guest House Booking Agent",
        agentPhone: "2348010000424"
    },

    "tambuwal-palm-apartments": {
        name: "Tambuwal Palm Apartments",
        image: "https://picsum.photos/id/374/800/600",
        state: "Sokoto",
        score: "7.8",
        reviews: "290",
        stars: 3,
        address: "27 Old Market Road, Tambuwal | 1.05KM from city center",
        pricePerNight: 25500,
        description: "A comfortable, well-kept mid-range hotel in Tambuwal, popular with business and family travelers alike.",
        amenities: ["Outdoor Pool", "24-Hour Front Desk", "Room Service", "Non-smoking Rooms", "Daily Housekeeping"],
        agentName: "Tambuwal Palm Apartments Booking Agent",
        agentPhone: "2348010000425"
    },

    "jalingo-oasis-guest-house": {
        name: "Jalingo Oasis Guest House",
        image: "https://picsum.photos/id/375/800/600",
        state: "Taraba",
        score: "8.8",
        reviews: "486",
        stars: 3,
        address: "27 Stadium Road, Jalingo | 5.18KM from city center",
        pricePerNight: 21500,
        description: "A comfortable, well-kept mid-range hotel in Jalingo, popular with business and family travelers alike.",
        amenities: ["Non-smoking Rooms", "Room Service", "Family Rooms", "24-Hour Front Desk", "Bar"],
        agentName: "Jalingo Oasis Guest House Booking Agent",
        agentPhone: "2348010000426"
    },

    "wukari-heritage-palace-hotel": {
        name: "Wukari Heritage Palace Hotel",
        image: "https://picsum.photos/id/376/800/600",
        state: "Taraba",
        score: "8.1",
        reviews: "487",
        stars: 3,
        address: "55 Station Road, Wukari | 4.42KM from city center",
        pricePerNight: 19500,
        description: "A comfortable, well-kept mid-range hotel in Wukari, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Non-smoking Rooms", "Outdoor Pool", "Bar", "Air Conditioning"],
        agentName: "Wukari Heritage Palace Hotel Booking Agent",
        agentPhone: "2348010000427"
    },

    "bali-bellavista-hostel": {
        name: "Bali Bellavista Hostel",
        image: "https://picsum.photos/id/377/800/600",
        state: "Taraba",
        score: "7.8",
        reviews: "160",
        stars: 2,
        address: "45 Independence Way, Bali | 4.71KM from city center",
        pricePerNight: 11000,
        description: "A simple, budget-friendly stay in Bali, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Luggage Storage", "Laundry Service", "Free Wi-Fi", "Generator Backup"],
        agentName: "Bali Bellavista Hostel Booking Agent",
        agentPhone: "2348010000428"
    },

    "jalingo-regal-palace-hotel": {
        name: "Jalingo Regal Palace Hotel",
        image: "https://picsum.photos/id/378/800/600",
        state: "Taraba",
        score: "8.7",
        reviews: "431",
        stars: 4,
        address: "15 Old Market Road, Jalingo | 0.89KM from city center",
        pricePerNight: 44500,
        description: "A polished hotel in Jalingo with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Free Wi-Fi", "Fitness Center", "Room Service", "Concierge Service", "Business Center"],
        agentName: "Jalingo Regal Palace Hotel Booking Agent",
        agentPhone: "2348010000429"
    },

    "wukari-oasis-hotel": {
        name: "Wukari Oasis Hotel",
        image: "https://picsum.photos/id/379/800/600",
        state: "Taraba",
        score: "8.7",
        reviews: "259",
        stars: 3,
        address: "29 Ring Road, Wukari | 1.63KM from city center",
        pricePerNight: 31000,
        description: "A comfortable, well-kept mid-range hotel in Wukari, popular with business and family travelers alike.",
        amenities: ["Family Rooms", "24-Hour Front Desk", "Air Conditioning", "Free Wi-Fi", "Non-smoking Rooms"],
        agentName: "Wukari Oasis Hotel Booking Agent",
        agentPhone: "2348010000430"
    },

    "bali-rosewood-inn": {
        name: "Bali Rosewood Inn",
        image: "https://picsum.photos/id/380/800/600",
        state: "Taraba",
        score: "8.4",
        reviews: "116",
        stars: 3,
        address: "16 Independence Way, Bali | 0.4KM from city center",
        pricePerNight: 27000,
        description: "A comfortable, well-kept mid-range hotel in Bali, popular with business and family travelers alike.",
        amenities: ["Room Service", "Air Conditioning", "Family Rooms", "Daily Housekeeping", "Outdoor Pool"],
        agentName: "Bali Rosewood Inn Booking Agent",
        agentPhone: "2348010000431"
    },

    "jalingo-garden-palace-hotel": {
        name: "Jalingo Garden Palace Hotel",
        image: "https://picsum.photos/id/381/800/600",
        state: "Taraba",
        score: "8.0",
        reviews: "95",
        stars: 3,
        address: "59 Market Road, Jalingo | 3.75KM from city center",
        pricePerNight: 17000,
        description: "A comfortable, well-kept mid-range hotel in Jalingo, popular with business and family travelers alike.",
        amenities: ["Family Rooms", "Bar", "Room Service", "Outdoor Pool", "Air Conditioning"],
        agentName: "Jalingo Garden Palace Hotel Booking Agent",
        agentPhone: "2348010000432"
    },

    "wukari-emerald-villa-hotel": {
        name: "Wukari Emerald Villa Hotel",
        image: "https://picsum.photos/id/382/800/600",
        state: "Taraba",
        score: "8.7",
        reviews: "668",
        stars: 3,
        address: "17 Airport Road, Wukari | 2.88KM from city center",
        pricePerNight: 15000,
        description: "A comfortable, well-kept mid-range hotel in Wukari, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Family Rooms", "24-Hour Front Desk", "Room Service", "Bar"],
        agentName: "Wukari Emerald Villa Hotel Booking Agent",
        agentPhone: "2348010000433"
    },

    "bali-meridian-apartments": {
        name: "Bali Meridian Apartments",
        image: "https://picsum.photos/id/383/800/600",
        state: "Taraba",
        score: "9.2",
        reviews: "1,401",
        stars: 4,
        address: "51 Cathedral Road, Bali | 1.93KM from city center",
        pricePerNight: 62500,
        description: "A polished hotel in Bali with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Airport Transfer (fee)", "Room Service", "Fine Dining Restaurant", "Concierge Service", "Outdoor Pool"],
        agentName: "Bali Meridian Apartments Booking Agent",
        agentPhone: "2348010000434"
    },

    "jalingo-skyline-villa-hotel": {
        name: "Jalingo Skyline Villa Hotel",
        image: "https://picsum.photos/id/384/800/600",
        state: "Taraba",
        score: "8.5",
        reviews: "680",
        stars: 3,
        address: "31 Market Road, Jalingo | 1.97KM from city center",
        pricePerNight: 16000,
        description: "A comfortable, well-kept mid-range hotel in Jalingo, popular with business and family travelers alike.",
        amenities: ["Outdoor Pool", "Daily Housekeeping", "Bar", "Family Rooms", "Air Conditioning"],
        agentName: "Jalingo Skyline Villa Hotel Booking Agent",
        agentPhone: "2348010000435"
    },

    "wukari-horizon-resort": {
        name: "Wukari Horizon Resort",
        image: "https://picsum.photos/id/385/800/600",
        state: "Taraba",
        score: "8.8",
        reviews: "319",
        stars: 4,
        address: "54 Government House Road, Wukari | 1.91KM from city center",
        pricePerNight: 59000,
        description: "A polished hotel in Wukari with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Outdoor Pool", "Room Service", "Fitness Center", "Business Center", "Free Wi-Fi"],
        agentName: "Wukari Horizon Resort Booking Agent",
        agentPhone: "2348010000436"
    },

    "bali-crown-villa-hotel": {
        name: "Bali Crown Villa Hotel",
        image: "https://picsum.photos/id/386/800/600",
        state: "Taraba",
        score: "8.1",
        reviews: "303",
        stars: 3,
        address: "18 Airport Road, Bali | 6.18KM from city center",
        pricePerNight: 34000,
        description: "A comfortable, well-kept mid-range hotel in Bali, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Non-smoking Rooms", "Bar", "Air Conditioning", "Outdoor Pool"],
        agentName: "Bali Crown Villa Hotel Booking Agent",
        agentPhone: "2348010000437"
    },

    "damaturu-riverside-guest-house": {
        name: "Damaturu Riverside Guest House",
        image: "https://picsum.photos/id/387/800/600",
        state: "Yobe",
        score: "8.0",
        reviews: "287",
        stars: 3,
        address: "54 Cathedral Road, Damaturu | 2.57KM from city center",
        pricePerNight: 23000,
        description: "A comfortable, well-kept mid-range hotel in Damaturu, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Family Rooms", "Free Wi-Fi", "Bar", "Daily Housekeeping"],
        agentName: "Damaturu Riverside Guest House Booking Agent",
        agentPhone: "2348010000438"
    },

    "potiskum-skyline-apartments": {
        name: "Potiskum Skyline Apartments",
        image: "https://picsum.photos/id/388/800/600",
        state: "Yobe",
        score: "8.8",
        reviews: "573",
        stars: 3,
        address: "40 Old Market Road, Potiskum | 3.4KM from city center",
        pricePerNight: 27000,
        description: "A comfortable, well-kept mid-range hotel in Potiskum, popular with business and family travelers alike.",
        amenities: ["24-Hour Front Desk", "Non-smoking Rooms", "Air Conditioning", "Family Rooms", "Room Service"],
        agentName: "Potiskum Skyline Apartments Booking Agent",
        agentPhone: "2348010000439"
    },

    "nguru-skyline-palace-hotel": {
        name: "Nguru Skyline Palace Hotel",
        image: "https://picsum.photos/id/389/800/600",
        state: "Yobe",
        score: "7.1",
        reviews: "154",
        stars: 2,
        address: "28 GRA, Nguru | 6.13KM from city center",
        pricePerNight: 12500,
        description: "A simple, budget-friendly stay in Nguru, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Generator Backup", "24-Hour Front Desk", "Luggage Storage", "Air Conditioning"],
        agentName: "Nguru Skyline Palace Hotel Booking Agent",
        agentPhone: "2348010000440"
    },

    "damaturu-palm-grand-hotel": {
        name: "Damaturu Palm Grand Hotel",
        image: "https://picsum.photos/id/390/800/600",
        state: "Yobe",
        score: "8.3",
        reviews: "403",
        stars: 3,
        address: "1 Independence Way, Damaturu | 1.69KM from city center",
        pricePerNight: 15500,
        description: "A comfortable, well-kept mid-range hotel in Damaturu, popular with business and family travelers alike.",
        amenities: ["Air Conditioning", "Bar", "Room Service", "24-Hour Front Desk", "Outdoor Pool"],
        agentName: "Damaturu Palm Grand Hotel Booking Agent",
        agentPhone: "2348010000441"
    },

    "potiskum-comfort-inn": {
        name: "Potiskum Comfort Inn",
        image: "https://picsum.photos/id/391/800/600",
        state: "Yobe",
        score: "7.3",
        reviews: "176",
        stars: 2,
        address: "24 Airport Road, Potiskum | 3.44KM from city center",
        pricePerNight: 9000,
        description: "A simple, budget-friendly stay in Potiskum, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Shared Kitchen", "Laundry Service", "24-Hour Front Desk", "Generator Backup"],
        agentName: "Potiskum Comfort Inn Booking Agent",
        agentPhone: "2348010000442"
    },

    "nguru-comfort-villa-hotel": {
        name: "Nguru Comfort Villa Hotel",
        image: "https://picsum.photos/id/392/800/600",
        state: "Yobe",
        score: "8.5",
        reviews: "568",
        stars: 4,
        address: "44 Hospital Road, Nguru | 5.37KM from city center",
        pricePerNight: 55000,
        description: "A polished hotel in Nguru with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Fine Dining Restaurant", "Concierge Service", "Outdoor Pool", "Airport Transfer (fee)", "Room Service"],
        agentName: "Nguru Comfort Villa Hotel Booking Agent",
        agentPhone: "2348010000443"
    },

    "damaturu-emerald-lodge": {
        name: "Damaturu Emerald Lodge",
        image: "https://picsum.photos/id/393/800/600",
        state: "Yobe",
        score: "9.0",
        reviews: "606",
        stars: 4,
        address: "52 Ring Road, Damaturu | 1.48KM from city center",
        pricePerNight: 51500,
        description: "A polished hotel in Damaturu with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Airport Transfer (fee)", "Outdoor Pool", "Fitness Center", "Fine Dining Restaurant", "Business Center"],
        agentName: "Damaturu Emerald Lodge Booking Agent",
        agentPhone: "2348010000444"
    },

    "potiskum-heritage-guest-house": {
        name: "Potiskum Heritage Guest House",
        image: "https://picsum.photos/id/394/800/600",
        state: "Yobe",
        score: "8.4",
        reviews: "661",
        stars: 3,
        address: "26 Market Road, Potiskum | 4.61KM from city center",
        pricePerNight: 16500,
        description: "A comfortable, well-kept mid-range hotel in Potiskum, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "Daily Housekeeping", "Outdoor Pool", "Room Service", "Non-smoking Rooms"],
        agentName: "Potiskum Heritage Guest House Booking Agent",
        agentPhone: "2348010000445"
    },

    "nguru-palm-villa-hotel": {
        name: "Nguru Palm Villa Hotel",
        image: "https://picsum.photos/id/395/800/600",
        state: "Yobe",
        score: "9.0",
        reviews: "832",
        stars: 4,
        address: "24 Stadium Road, Nguru | 3.8KM from city center",
        pricePerNight: 48000,
        description: "A polished hotel in Nguru with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Fine Dining Restaurant", "Business Center", "Free Wi-Fi", "Room Service", "Fitness Center"],
        agentName: "Nguru Palm Villa Hotel Booking Agent",
        agentPhone: "2348010000446"
    },

    "damaturu-vista-palace-hotel": {
        name: "Damaturu Vista Palace Hotel",
        image: "https://picsum.photos/id/396/800/600",
        state: "Yobe",
        score: "7.2",
        reviews: "167",
        stars: 2,
        address: "42 Stadium Road, Damaturu | 1.46KM from city center",
        pricePerNight: 11500,
        description: "A simple, budget-friendly stay in Damaturu, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "24-Hour Front Desk", "Common Lounge", "Shared Kitchen", "Luggage Storage"],
        agentName: "Damaturu Vista Palace Hotel Booking Agent",
        agentPhone: "2348010000447"
    },

    "potiskum-serene-suites": {
        name: "Potiskum Serene Suites",
        image: "https://picsum.photos/id/397/800/600",
        state: "Yobe",
        score: "8.2",
        reviews: "373",
        stars: 3,
        address: "41 Airport Road, Potiskum | 5.7KM from city center",
        pricePerNight: 30000,
        description: "A comfortable, well-kept mid-range hotel in Potiskum, popular with business and family travelers alike.",
        amenities: ["Bar", "Outdoor Pool", "Family Rooms", "24-Hour Front Desk", "Non-smoking Rooms"],
        agentName: "Potiskum Serene Suites Booking Agent",
        agentPhone: "2348010000448"
    },

    "nguru-whitestone-suites": {
        name: "Nguru Whitestone Suites",
        image: "https://picsum.photos/id/398/800/600",
        state: "Yobe",
        score: "7.9",
        reviews: "431",
        stars: 3,
        address: "21 Old Market Road, Nguru | 4.38KM from city center",
        pricePerNight: 22500,
        description: "A comfortable, well-kept mid-range hotel in Nguru, popular with business and family travelers alike.",
        amenities: ["24-Hour Front Desk", "Outdoor Pool", "Room Service", "Daily Housekeeping", "Non-smoking Rooms"],
        agentName: "Nguru Whitestone Suites Booking Agent",
        agentPhone: "2348010000449"
    },

    "gusau-bellavista-villa-hotel": {
        name: "Gusau Bellavista Villa Hotel",
        image: "https://picsum.photos/id/399/800/600",
        state: "Zamfara",
        score: "8.2",
        reviews: "268",
        stars: 3,
        address: "9 Commercial Avenue, Gusau | 1.83KM from city center",
        pricePerNight: 16000,
        description: "A comfortable, well-kept mid-range hotel in Gusau, popular with business and family travelers alike.",
        amenities: ["24-Hour Front Desk", "Air Conditioning", "Non-smoking Rooms", "Outdoor Pool", "Daily Housekeeping"],
        agentName: "Gusau Bellavista Villa Hotel Booking Agent",
        agentPhone: "2348010000450"
    },

    "kaura-namoda-golden-villa-hotel": {
        name: "Kaura Namoda Golden Villa Hotel",
        image: "https://picsum.photos/id/400/800/600",
        state: "Zamfara",
        score: "7.5",
        reviews: "26",
        stars: 2,
        address: "26 Stadium Road, Kaura Namoda | 5.07KM from city center",
        pricePerNight: 12500,
        description: "A simple, budget-friendly stay in Kaura Namoda, geared toward travelers who need a practical, affordable base.",
        amenities: ["Air Conditioning", "Free Wi-Fi", "24-Hour Front Desk", "Generator Backup", "Shared Kitchen"],
        agentName: "Kaura Namoda Golden Villa Hotel Booking Agent",
        agentPhone: "2348010000451"
    },

    "talata-mafara-whitestone-hostel": {
        name: "Talata Mafara Whitestone Hostel",
        image: "https://picsum.photos/id/401/800/600",
        state: "Zamfara",
        score: "7.3",
        reviews: "83",
        stars: 2,
        address: "19 GRA, Talata Mafara | 4.22KM from city center",
        pricePerNight: 12000,
        description: "A simple, budget-friendly stay in Talata Mafara, geared toward travelers who need a practical, affordable base.",
        amenities: ["24-Hour Front Desk", "Generator Backup", "Air Conditioning", "Free Wi-Fi", "Common Lounge"],
        agentName: "Talata Mafara Whitestone Hostel Booking Agent",
        agentPhone: "2348010000452"
    },

    "gusau-riverside-resort": {
        name: "Gusau Riverside Resort",
        image: "https://picsum.photos/id/402/800/600",
        state: "Zamfara",
        score: "8.7",
        reviews: "558",
        stars: 3,
        address: "60 Government House Road, Gusau | 3.75KM from city center",
        pricePerNight: 32500,
        description: "A comfortable, well-kept mid-range hotel in Gusau, popular with business and family travelers alike.",
        amenities: ["Room Service", "Family Rooms", "24-Hour Front Desk", "Outdoor Pool", "Daily Housekeeping"],
        agentName: "Gusau Riverside Resort Booking Agent",
        agentPhone: "2348010000453"
    },

    "kaura-namoda-summit-palace-hotel": {
        name: "Kaura Namoda Summit Palace Hotel",
        image: "https://picsum.photos/id/403/800/600",
        state: "Zamfara",
        score: "8.2",
        reviews: "626",
        stars: 3,
        address: "59 Old Market Road, Kaura Namoda | 3.34KM from city center",
        pricePerNight: 25000,
        description: "A comfortable, well-kept mid-range hotel in Kaura Namoda, popular with business and family travelers alike.",
        amenities: ["Daily Housekeeping", "Air Conditioning", "Family Rooms", "Room Service", "Bar"],
        agentName: "Kaura Namoda Summit Palace Hotel Booking Agent",
        agentPhone: "2348010000454"
    },

    "talata-mafara-sunset-guest-house": {
        name: "Talata Mafara Sunset Guest House",
        image: "https://picsum.photos/id/404/800/600",
        state: "Zamfara",
        score: "7.8",
        reviews: "615",
        stars: 3,
        address: "23 Government House Road, Talata Mafara | 3.26KM from city center",
        pricePerNight: 19500,
        description: "A comfortable, well-kept mid-range hotel in Talata Mafara, popular with business and family travelers alike.",
        amenities: ["Free Wi-Fi", "Non-smoking Rooms", "Outdoor Pool", "Daily Housekeeping", "Room Service"],
        agentName: "Talata Mafara Sunset Guest House Booking Agent",
        agentPhone: "2348010000455"
    },

    "gusau-horizon-guest-house": {
        name: "Gusau Horizon Guest House",
        image: "https://picsum.photos/id/405/800/600",
        state: "Zamfara",
        score: "7.6",
        reviews: "21",
        stars: 2,
        address: "24 Hospital Road, Gusau | 2.91KM from city center",
        pricePerNight: 10500,
        description: "A simple, budget-friendly stay in Gusau, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Luggage Storage", "Air Conditioning", "Laundry Service", "Shared Kitchen"],
        agentName: "Gusau Horizon Guest House Booking Agent",
        agentPhone: "2348010000456"
    },

    "kaura-namoda-silver-guest-house": {
        name: "Kaura Namoda Silver Guest House",
        image: "https://picsum.photos/id/406/800/600",
        state: "Zamfara",
        score: "8.5",
        reviews: "790",
        stars: 4,
        address: "49 Waterside Road, Kaura Namoda | 5.95KM from city center",
        pricePerNight: 53000,
        description: "A polished hotel in Kaura Namoda with hotel-grade service, a favorite for conferences and longer stays.",
        amenities: ["Fine Dining Restaurant", "Business Center", "Fitness Center", "Airport Transfer (fee)", "Concierge Service"],
        agentName: "Kaura Namoda Silver Guest House Booking Agent",
        agentPhone: "2348010000457"
    },

    "talata-mafara-riverside-suites": {
        name: "Talata Mafara Riverside Suites",
        image: "https://picsum.photos/id/407/800/600",
        state: "Zamfara",
        score: "8.0",
        reviews: "376",
        stars: 3,
        address: "41 GRA, Talata Mafara | 4.17KM from city center",
        pricePerNight: 18500,
        description: "A comfortable, well-kept mid-range hotel in Talata Mafara, popular with business and family travelers alike.",
        amenities: ["24-Hour Front Desk", "Non-smoking Rooms", "Air Conditioning", "Room Service", "Free Wi-Fi"],
        agentName: "Talata Mafara Riverside Suites Booking Agent",
        agentPhone: "2348010000458"
    },

    "gusau-diamond-hotel": {
        name: "Gusau Diamond Hotel",
        image: "https://picsum.photos/id/408/800/600",
        state: "Zamfara",
        score: "7.2",
        reviews: "46",
        stars: 2,
        address: "18 Airport Road, Gusau | 4.76KM from city center",
        pricePerNight: 8500,
        description: "A simple, budget-friendly stay in Gusau, geared toward travelers who need a practical, affordable base.",
        amenities: ["Free Wi-Fi", "Air Conditioning", "Shared Kitchen", "Common Lounge", "Laundry Service"],
        agentName: "Gusau Diamond Hotel Booking Agent",
        agentPhone: "2348010000459"
    },

    "kaura-namoda-prestige-hostel": {
        name: "Kaura Namoda Prestige Hostel",
        image: "https://picsum.photos/id/409/800/600",
        state: "Zamfara",
        score: "8.1",
        reviews: "590",
        stars: 3,
        address: "30 Commercial Avenue, Kaura Namoda | 5.23KM from city center",
        pricePerNight: 27000,
        description: "A comfortable, well-kept mid-range hotel in Kaura Namoda, popular with business and family travelers alike.",
        amenities: ["Bar", "Air Conditioning", "Outdoor Pool", "Non-smoking Rooms", "Free Wi-Fi"],
        agentName: "Kaura Namoda Prestige Hostel Booking Agent",
        agentPhone: "2348010000460"
    },

    "talata-mafara-garden-suites": {
        name: "Talata Mafara Garden Suites",
        image: "https://picsum.photos/id/410/800/600",
        state: "Zamfara",
        score: "7.5",
        reviews: "66",
        stars: 2,
        address: "58 Station Road, Talata Mafara | 1.93KM from city center",
        pricePerNight: 7500,
        description: "A simple, budget-friendly stay in Talata Mafara, geared toward travelers who need a practical, affordable base.",
        amenities: ["Common Lounge", "Shared Kitchen", "Free Wi-Fi", "Laundry Service", "Air Conditioning"],
        agentName: "Talata Mafara Garden Suites Booking Agent",
        agentPhone: "2348010000461"
    },

    "abuja-serene-inn": {
        name: "Abuja Serene Inn",
        image: "https://picsum.photos/id/411/800/600",
        state: "FCT — Abuja",
        score: "7.7",
        reviews: "28",
        stars: 2,
        address: "30 Commercial Avenue, Abuja | 5.1KM from city center",
        pricePerNight: 7500,
        description: "A simple, budget-friendly stay in Abuja, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "Shared Kitchen", "Common Lounge", "24-Hour Front Desk", "Generator Backup"],
        agentName: "Abuja Serene Inn Booking Agent",
        agentPhone: "2348010000462"
    },

    "gwagwalada-cedar-hotel": {
        name: "Gwagwalada Cedar Hotel",
        image: "https://picsum.photos/id/412/800/600",
        state: "FCT — Abuja",
        score: "7.7",
        reviews: "160",
        stars: 2,
        address: "8 Government House Road, Gwagwalada | 3.34KM from city center",
        pricePerNight: 10500,
        description: "A simple, budget-friendly stay in Gwagwalada, geared toward travelers who need a practical, affordable base.",
        amenities: ["Generator Backup", "Air Conditioning", "24-Hour Front Desk", "Free Wi-Fi", "Common Lounge"],
        agentName: "Gwagwalada Cedar Hotel Booking Agent",
        agentPhone: "2348010000463"
    },

    "kubwa-silver-retreat": {
        name: "Kubwa Silver Retreat",
        image: "https://picsum.photos/id/413/800/600",
        state: "FCT — Abuja",
        score: "9.1",
        reviews: "961",
        stars: 5,
        address: "51 Government House Road, Kubwa | 3.97KM from city center",
        pricePerNight: 92000,
        description: "A standout, full-service hotel in Kubwa, offering five-star comfort and attentive concierge service.",
        amenities: ["Valet Parking", "Fine Dining Restaurant", "Free Wi-Fi", "Business Center", "Concierge Service"],
        agentName: "Kubwa Silver Retreat Booking Agent",
        agentPhone: "2348010000464"
    },

    "wuse-regal-grand-hotel": {
        name: "Wuse Regal Grand Hotel",
        image: "https://picsum.photos/id/414/800/600",
        state: "FCT — Abuja",
        score: "8.4",
        reviews: "460",
        stars: 3,
        address: "16 Airport Road, Wuse | 3.45KM from city center",
        pricePerNight: 18000,
        description: "A comfortable, well-kept mid-range hotel in Wuse, popular with business and family travelers alike.",
        amenities: ["Bar", "Free Wi-Fi", "Non-smoking Rooms", "Room Service", "Air Conditioning"],
        agentName: "Wuse Regal Grand Hotel Booking Agent",
        agentPhone: "2348010000465"
    },

    "abuja-meridian-suites": {
        name: "Abuja Meridian Suites",
        image: "https://picsum.photos/id/415/800/600",
        state: "FCT — Abuja",
        score: "7.9",
        reviews: "318",
        stars: 3,
        address: "36 Waterside Road, Abuja | 4.33KM from city center",
        pricePerNight: 25500,
        description: "A comfortable, well-kept mid-range hotel in Abuja, popular with business and family travelers alike.",
        amenities: ["Bar", "Non-smoking Rooms", "Family Rooms", "Air Conditioning", "Free Wi-Fi"],
        agentName: "Abuja Meridian Suites Booking Agent",
        agentPhone: "2348010000466"
    },

    "gwagwalada-elite-grand-hotel": {
        name: "Gwagwalada Elite Grand Hotel",
        image: "https://picsum.photos/id/416/800/600",
        state: "FCT — Abuja",
        score: "7.9",
        reviews: "120",
        stars: 3,
        address: "46 GRA, Gwagwalada | 3.81KM from city center",
        pricePerNight: 31000,
        description: "A comfortable, well-kept mid-range hotel in Gwagwalada, popular with business and family travelers alike.",
        amenities: ["Family Rooms", "Non-smoking Rooms", "Air Conditioning", "24-Hour Front Desk", "Outdoor Pool"],
        agentName: "Gwagwalada Elite Grand Hotel Booking Agent",
        agentPhone: "2348010000467"
    },

    "kubwa-prestige-grand-hotel": {
        name: "Kubwa Prestige Grand Hotel",
        image: "https://picsum.photos/id/417/800/600",
        state: "FCT — Abuja",
        score: "8.3",
        reviews: "693",
        stars: 3,
        address: "11 Market Road, Kubwa | 3.64KM from city center",
        pricePerNight: 33000,
        description: "A comfortable, well-kept mid-range hotel in Kubwa, popular with business and family travelers alike.",
        amenities: ["Non-smoking Rooms", "24-Hour Front Desk", "Outdoor Pool", "Room Service", "Family Rooms"],
        agentName: "Kubwa Prestige Grand Hotel Booking Agent",
        agentPhone: "2348010000468"
    },

    "wuse-grand-retreat": {
        name: "Wuse Grand Retreat",
        image: "https://picsum.photos/id/418/800/600",
        state: "FCT — Abuja",
        score: "7.5",
        reviews: "67",
        stars: 2,
        address: "2 Cathedral Road, Wuse | 5.63KM from city center",
        pricePerNight: 13000,
        description: "A simple, budget-friendly stay in Wuse, geared toward travelers who need a practical, affordable base.",
        amenities: ["Luggage Storage", "24-Hour Front Desk", "Laundry Service", "Free Wi-Fi", "Shared Kitchen"],
        agentName: "Wuse Grand Retreat Booking Agent",
        agentPhone: "2348010000469"
    },

    "abuja-vista-villa-hotel": {
        name: "Abuja Vista Villa Hotel",
        image: "https://picsum.photos/id/419/800/600",
        state: "FCT — Abuja",
        score: "7.8",
        reviews: "59",
        stars: 2,
        address: "19 Old Market Road, Abuja | 2.9KM from city center",
        pricePerNight: 11000,
        description: "A simple, budget-friendly stay in Abuja, geared toward travelers who need a practical, affordable base.",
        amenities: ["Laundry Service", "Free Wi-Fi", "Common Lounge", "Generator Backup", "Shared Kitchen"],
        agentName: "Abuja Vista Villa Hotel Booking Agent",
        agentPhone: "2348010000470"
    },

};