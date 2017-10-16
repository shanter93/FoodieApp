const CUISINE_TYPES = [
    { id: "CT01", title: "Soups", imgSrc: "./assets/img/soup.jpg", selected: false},
    { id: "CT02", title: "SouthIndian-Veg", imgSrc: "./assets/img/southindian-veg.jpg", selected: false},
    { id: "CT03", title: "SouthIndian-NonVeg", imgSrc: "./assets/img/southindian-nonveg.jpg", selected: false},
    { id: "CT04", title: "Chinese-Veg", imgSrc: "./assets/img/chinese-veg.jpg", selected: false},
    { id: "CT05", title: "Chinese-NonVeg", imgSrc: "./assets/img/chinese-nonveg.jpg", selected: false},
    { id: "CT06", title: "Briyani", imgSrc: "./assets/img/briyani.jpg", selected: false},
    { id: "CT07", title: "Fresh Juices", imgSrc: "./assets/img/juices.jpg", selected: false},
    { id: "CT08", title: "Fast Food", imgSrc: "", selected: false}
];
const CLASS_TYPES = [
    { title: "High Class", id: "C1", selected: false},
    { title: "Average", id: "C2", selected: false},
    { title: "Roadside", id: "C3", selected: false},
    { title: "Fast Food", id: "C4", selected: false}
];
const TYPES = [
    { title: "Veg", id: "T1", selected: false},
    { title: "Non-Veg", id: "T2", selected: false}
];
const DATA = [
    {
        id: "1",
        name: "Ponram Restaurant",
        type: "T2",
        menu: [],
        class: "C1",
        address: [],
        openTime: "10:00 AM - 10:00 PM",
        cuisineTypes: ["CT01","CT04","CT05","CT06"],
        icon: "./assets/logos/ponram.jpg"
    },
    {
        id: "2",
        name: "Dindigul Thalappakatti Restaurant",
        type: "T2",
        menu: [],
        class: "C1",
        address: [],
        openTime: "9:00 AM - 10:00 PM",
        cuisineTypes: ["CT01","CT04","CT05","CT06"],
        icon: "./assets/logos/thalappakatti.jpg"
    },
    {
        id: "3",
        name: "Venu Biriyani Hotel",
        type: "T2",
        menu: [],
        class: "C1",
        address: [],
        openTime: "11:00 AM - 10:00 PM",
        cuisineTypes: ["CT01","CT03","CT06"],
        icon: "./assets/logos/venu.jpg"
    },
    {
        id: "4",
        name: "Sree Baalaaji Bhavan",
        type: "T1",
        menu: [],
        class: "C1",
        address: [],
        openTime: "8:00 AM - 10:00 PM",
        cuisineTypes: ["CT01","CT02","CT04","CT07"],
        icon: "./assets/logos/balaji.jpg"
    },
    {
        id: "5",
        name: "Aachi's Hotel",
        type: "T2",
        menu: [],
        class: "C1",
        address: [],
        openTime: "10:00 AM - 10:00 PM",
        cuisineTypes: ["CT01","CT03","CT04","CT05","CT06"],
        icon: "./assets/logos/aachis.jpg"
    },
    {
        id: "6",
        name: "KozhiNadar Kadai",
        type: "T2",
        menu: [],
        class: "C2",
        address: [],
        openTime: "10:00 AM - 10:00 PM",
        cuisineTypes: ["CT02","CT03","CT06"],
        icon: ""
    },
    {
        id: "7",
        name: "Ponnuchamy Hotel",
        type: "T2",
        menu: [],
        class: "C2",
        address: [],
        openTime: "06:00 PM - 11:00 PM",
        cuisineTypes: ["CT02","CT03","CT06"],
        icon: ""
    },
    {
        id: "8",
        name: "Hotel Maha Jyothi",
        type: "T1",
        menu: [],
        class: "C1",
        address: [],
        openTime: "10:00 AM - 10:00 PM",
        cuisineTypes: ["CT01","CT02","CT04","CT07"],
        icon: ""
    },
    {
        id: "9",
        name: "Meenakshi Bhavan",
        type: "T1",
        menu: [],
        class: "C1",
        address: [],
        openTime: "10:00 AM - 10:00 PM",
        cuisineTypes: ["CT01","CT02","CT04","CT07"],
        icon: ""
    },
    {
        id: "10",
        name: "K.M. Biriyani",
        type: "T2",
        menu: [],
        class: "C2",
        address: [],
        openTime: "06:00 PM - 10:00 PM",
        cuisineTypes: ["CT03","CT06"],
        icon: ""
    },
];

export default {
    DATA,
    CUISINE_TYPES,
    CLASS_TYPES,
    TYPES
};

export {
    DATA,
    CUISINE_TYPES,
    CLASS_TYPES,
    TYPES
};