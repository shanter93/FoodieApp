const CUISINE_TYPES = [
    { CTID: "CT01", title: "Soups", imgSrc: "./assets/img/soup.jpg"},
    { CTID: "CT02", title: "SouthIndian-Veg", imgSrc: "./assets/img/southindian-veg.jpg"},
    { CTID: "CT03", title: "SouthIndian-NonVeg", imgSrc: "./assets/img/southindian-nonveg.jpg"},
    { CTID: "CT04", title: "Chinese-Veg", imgSrc: "./assets/img/chinese-veg.jpg"},
    { CTID: "CT05", title: "Chinese-NonVeg", imgSrc: "./assets/img/chinese-nonveg.jpg"},
    { CTID: "CT06", title: "Briyani", imgSrc: "./assets/img/briyani.jpg"},
    { CTID: "CT07", title: "Fresh Juices", imgSrc: "./assets/img/juices.jpg"}
]
const DATA = [
    {
        id: "1",
        name: "Ponram Restaurant",
        type: "Non-Veg",
        menu: [],
        class: "High Class",
        address: [],
        openTime: "10:00 AM - 10:00 PM",
        cuisineTypes: ["CT01","CT04","CT05","CT06"],
        icon: "./assets/logos/ponram.jpg"
    },
    {
        id: "2",
        name: "Dindigul Thalappakatti Restaurant",
        type: "Non-Veg",
        menu: [],
        class: "High Class",
        address: [],
        openTime: "9:00 AM - 10:00 PM",
        cuisineTypes: ["CT01","CT04","CT05","CT06"],
        icon: "./assets/logos/thalappakatti.jpg"
    },
    {
        id: "3",
        name: "Venu Biriyani Hotel",
        type: "Non-Veg",
        menu: [],
        class: "High Class",
        address: [],
        openTime: "11:00 AM - 10:00 PM",
        cuisineTypes: ["CT01","CT03","CT06"],
        icon: "./assets/logos/venu.jpg"
    },
    {
        id: "4",
        name: "Balaji Bhavan",
        type: "Veg",
        menu: [],
        class: "High Class",
        address: [],
        openTime: "8:00 AM - 10:00 PM",
        cuisineTypes: ["CT01","CT02","CT04","CT07"],
        icon: ""
    }
];

export default {
    DATA,
    CUISINE_TYPES
};

export {
    DATA,
    CUISINE_TYPES
};