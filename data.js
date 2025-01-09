import images from "./images";
import { FaFileAlt, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";

const gradient = "url(#blue-gradient)";

const services = [
    {
        id: 1,
        title: "Risk Assessment & Management",
        text: "Performs vulnerability assessments, identifies security gaps, and provides risk mitigation strategies."
    },
    {
        id: 2,
        title: "Network Security",
        text: "Secures networks with firewalls, IDS/IPS, VPNs, and access control measures."
    },
    {
        id: 3,
        title: "Endpoint Security",
        text: "Protects devices with antivirus, anti-malware, and management solutions against threats."
    },
    {
        id: 4,
        title: "Data Security",
        text: "Ensures data encryption, implements DLP systems, and establishes secure backup strategies."
    },
    {
        id: 5,
        title: "Cloud Security",
        text: "Secures cloud services, implements IAM, and monitors cloud-specific threats."
    },
    {
        id: 6,
        title: "Application Security",
        text: "Secures the SDLC, performs code reviews and security testing, and protects APIs and web apps from threats like SQL injection."
    }
];

const about = [
    {
        id: 7,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor"
    }
];

const qualities = [
    {
        id: 8,
        icon: <FaFileAlt style={{ fill: gradient }} />,
        title: "Ideas & Plans",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod."
    },
    {
        id: 9,
        icon: <AiOutlineReload style={{ fill: gradient }} />,
        title: "Prompt Strategies",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod."
    }
];

const features = [
    {
        id: 10,
        title: "Risk Assessment & Management",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 11,
        title: "Network Security",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 12,
        title: "Endpoint Security",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 13,
        title: "Data Security",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 14,
        title: "Cloud Security",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 15,
        title: "Application Security",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    }
];

const portfolio = [
    {
        id: 16,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
        image: images.portfolio_img_1
    },
    {
        id: 17,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
        image: images.portfolio_img_2
    },
    {
        id: 18,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
        image: images.portfolio_img_3
    }
];

const testimonials = [
    {
        id: 19,
        name: "Marie Jordan",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_1,
        rating: 3
    },
    {
        id: 20,
        name: "Ann Brown",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_2,
        rating: 5
    },
    {
        id: 21,
        name: "Andrew Bill",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_3,
        rating: 2
    },
    {
        id: 22,
        name: "Jason Stawer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_4,
        rating: 4
    },
    {
        id: 23,
        name: "Lisa Green",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_5,
        rating: 2
    },
    {
        id: 24,
        name: "Anna Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_6,
        rating: 4
    }
];

const contact = [
    {
        id: 25,
        icon: <FaPhoneAlt style={{ fill: gradient }} />,
        info: "+425 235 712",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 26,
        icon: <FaEnvelopeOpen style={{ fill: gradient }} />,
        info: "AuditPulse@gmail.com",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt style={{ fill: gradient }} />,
        info: "India, Bangalore",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    }
];

const sections = { services, about, qualities, features, portfolio, testimonials, contact };

export default sections;
