
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
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1510673398445-94f476ef2cbc?auto=format&fit=crop&q=80&w=800"
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
            name: "Khushi Rajpoot",
            role: "General Manager",
            phone: "+91-95995-47191",
            email: "sales@centuriongroup.in",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
        }
    },
    {
        id: 2,
        slug: "lake-country-side-farms",
        title: "The Lake Country Side Farms",
        location: "Yamuna Expressway",
        price: "₹1.50 Cr",
        priceValue: 15000000,
        size: "1008 Sq Yd",
        sizeValue: 1008,
        type: "Farmhouse",
        images: [
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
        ],
        description: "Experience luxury living by the lake with our exclusive countryside farms. Perfect for weekend getaways and sustainable living.",
        features: [
            { icon: "Home", label: "SQ YD", value: "1,008" },
            { icon: "Droplets", label: "WATER SUPPLY", value: "100%" },
            { icon: "Maximize", label: "OPEN SPACE", value: "70%" },
            { icon: "Car", label: "PARKING", value: "6" },
            { icon: "Layers", label: "PHASE", value: "1" }
        ],
        nearBy: [],
        amenities: [],
        neighborhoodHighlights: [],
        agent: {
            name: "Sandeep Kumar",
            role: "Sales Director",
            phone: "+91-98765-43210",
            email: "sandeep@omrealty.in",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
        }
    },
    {
        id: 3,
        slug: "grandthum-commercial",
        title: "Grandthum Commercial Hub",
        location: "Greater Noida West",
        price: "₹3.50 Cr",
        priceValue: 35000000,
        size: "5000 Sq Ft",
        sizeValue: 5000,
        type: "Appartments",
        images: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
        ],
        description: "Premium commercial space in the heart of Greater Noida West. Excellent visibility and modern amenities for businesses.",
        features: [
            { icon: "Building", label: "SQ FT", value: "5,000" },
            { icon: "Zap", label: "POWER BACKUP", value: "100%" },
            { icon: "Shield", label: "SECURITY", value: "24/7" },
            { icon: "Car", label: "PARKING", value: "10+" },
            { icon: "Layers", label: "FLOORS", value: "32" }
        ],
        nearBy: [],
        amenities: [],
        neighborhoodHighlights: [],
        agent: {
            name: "Neha Sharma",
            role: "Sales Manager",
            phone: "+91-88888-77777",
            email: "neha@omrealty.in",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
        }
    }
];
