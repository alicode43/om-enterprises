
export interface Property {
    id: number;
    slug: string;
    title: string;
    location: string;
    locationShort?: string;
    price: string;
    priceValue: number;
    size: string;
    sizeValue: number;
    type: string;
    badge?: string;
    images: string[];
    description: string;
    features: {
        icon: string;
        label: string;
        value: string;
    }[];
    nearBy: string[];
    amenities: string[];
    mapUrl?: string;
    neighborhoodHighlights: {
        icon: string;
        label: string;
        distance: string;
    }[];
    agent: {
        name: string;
        role: string;
        phone: string;
        email: string;
        image: string;
    };
}

export const properties: Property[] = [
    {
        id: 1,
        slug: "lotus-farms",
        title: "Lotus Farms",
        location: "Techzone, Greater Noida",
        locationShort: "Techzone, Greater Noida",
        price: "₹72 Lakh",
        priceValue: 7200000,
        size: "1,008 sq yd",
        sizeValue: 1008,
        type: "Farm House",
        badge: "FOR SALE",
        images: [
            "https://www.centuriongroup.in/assets/img/1.jpeg",
            "https://www.centuriongroup.in/assets/img/2.jpeg",
            "https://www.centuriongroup.in/assets/img/3.jpeg",
            "https://www.centuriongroup.in/assets/img/4.jpeg",
            "https://www.centuriongroup.in/assets/img/5.jpeg",
            "https://www.centuriongroup.in/assets/img/6.jpeg",
            "https://www.centuriongroup.in/assets/img/7.jpeg"
        ],
        description: "Lotus Farm House in Techzone offers a premium farmhouse living experience surrounded by greenery and open spaces. Designed for peace, privacy, and comfort, the project features spacious plots with well-planned internal roads, landscaped gardens, and modern infrastructure. Its prime location in the rapidly developing Techzone area ensures excellent connectivity to IT hubs, expressways, schools, hospitals, and daily essentials. Ideal for weekend retreats, luxury living, or long-term investment, Lotus Farm House combines nature with convenience. With clear titles, secure surroundings, and strong future appreciation potential, it is a perfect choice for those seeking a balanced and high-quality lifestyle away from city congestion.",
        features: [
            { icon: "Home", label: "ACER", value: "338" },
            { icon: "Droplets", label: "WATER SUPPLY", value: "100%" },
            { icon: "Maximize", label: "SQ YD", value: "1,008" },
            { icon: "Car", label: "PARKING", value: "4" },
            { icon: "Layers", label: "PHASE", value: "2" }
        ],
        nearBy: [
            "CHI-V Greater Noida",
            "Sector 150 Noida",
            "20KM Jewar International Airport",
            "8KM Pari Chowk",
            "Techzone"
        ],
        amenities: [
            "Yoga Center",
            "Party Lawn",
            "Yoga Center",
            "Pet Care",
            "Children's Zone"
        ],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.772592534015!2d77.5222!3d28.4851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI5JzA2LjQiTiA3N8KwMzEnMjAuMCJF!5e0!3m2!1sen!2sin!4v1709366000000!5m2!1sen!2sin",
        neighborhoodHighlights: [
            { icon: "GraduationCap", label: "Stellar IT Park", distance: "3 Km" },
            { icon: "Coffee", label: "Vivo Mobile India", distance: "2.4Km" },
            { icon: "Trees", label: "Coforge Ltd.", distance: "3 KM" },
            { icon: "School", label: "NIIT( Noida international institute of technology)", distance: "2.5 KM" }
        ],
        agent: {
            name: "K t",
            role: "General Manager",
            phone: "+91-9311892805",
            email: "[EMAIL_ADDRESS]",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
        }
    },
    {
        id: 2,
        slug: "avs-city-plots",
        title: "AVS City - Yamuna Expressway",
        location: "Sector-17B Dankaur, Yamuna Expressway Growth Corridor",
        locationShort: "Dankaur, Yamuna Expressway",
        price: "₹40,000/sqyd",
        priceValue: 40000,
        size: "Various Plots",
        sizeValue: 100,
        type: "Residential Plot",
        badge: "NAGAR NIGAM APPROVED",
        images: [
            "/image/avs/img1.jpeg",
            "/image/avs/img2.jpeg",
            "/image/avs/img3.jpeg",
            "/image/avs/img4.jpeg",
            "/image/avs/img5.jpeg",
            "/image/avs/img6.jpeg",
            "/image/avs/img7.jpeg"
        ],
        description: "AVS City is strategically located in the heart of the Yamuna Expressway Growth Corridor, surrounded by India's most ambitious developments. Approved by Dankaur Nagar Nigam, this premium, future-ready community offers exclusive residential plots where modern living blends seamlessly with nature. With immediate registry and mutation available, it ensures a safe and transparent investment in a high-appreciation zone near the upcoming Jewar International Airport and Film City.",
        features: [
            { icon: "ShieldCheck", label: "APPROVAL", value: "Nagar Nigam" },
            { icon: "FileText", label: "REGISTRY", value: "Immediate" },
            { icon: "Road", label: "ROADS", value: "25-30 Ft Wide" },
            { icon: "TrendingUp", label: "GROWTH", value: "High Potential" },
            { icon: "Map", label: "PLANNING", value: "Smart City" }
        ],
        nearBy: [
            "F1 Racing Track (BIC)",
            "Jewar International Airport",
            "Upcoming Film City",
            "Noida International University",
            "Galgotias University"
        ],
        amenities: [
            "Gated Security & CCTV",
            "Clubhouse",
            "Yoga & Meditation Center",
            "Organic Farming Zones",
            "Children's Play Area",
            "Pet-Friendly Spaces",
            "Sports Arena",
            "Biodiversity Park",
            "Family Party Lawn"
        ],
        neighborhoodHighlights: [
            { icon: "GraduationCap", label: "IILM University", distance: "4 KM" },
            { icon: "School", label: "Galgotias University", distance: "5 KM" },
            { icon: "GraduationCap", label: "Noida Intl University", distance: "9 KM" },
            { icon: "School", label: "Gautam Budha University", distance: "10 KM" }
        ],
        agent: {
            name: "S ",
            role: "Sales Director",
            phone: "+91-9311892805",
            email: "[EMAIL_ADDRESS]",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
        }
    },

];
