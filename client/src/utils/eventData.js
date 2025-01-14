import event1 from '../assets/images/event1.png'
import D_PRINTING from '../assets/images/workshops/D_PRINTING.png'
import flutter from '../assets/images/workshops/flutter.png'
import satellite from '../assets/images/workshops/satellite.png'
import Bim_modeling from '../assets/images/workshops/Bim_modeling.png'
import IOT from '../assets/images/workshops/iot.png'
import PCB from '../assets/images/workshops/pcb_designing.png'
import PCB_Details from '../assets/images/workshops/pcb_designing_details.png'
import D_printing_details from '../assets/images/workshops/D_printing_details.png'
import Bim_modeling_details from '../assets/images/workshops/Bim_modeling_details.png'
import Flutter_details from '../assets/images/workshops/flutter_details.png'
import iot_details from '../assets/images/workshops/iot_details.png'
export const eventData = [
    {   
        id: 1001,
        name: "AR VR Expo",
        description: "Augmented Reality and Virtual Reality Expo",
        date: "2022-06-01",
        time: "10:00",
        location: "CCF",
        image: event1,
        category: "event"
    },
    {
        id: 1002,
        name: "AR VR Expo",
        description: "Augmented Reality and Virtual Reality Expo",
        date: "2022-06-01",
        time: "10:00",
        location: "CCF",
        image: event1,
        category: "event"
    }
];

export const workshopData = [
    {
        id: 2001,
        name: "FLUTTER WORKSHOP",
        description: "Join us for an exciting Flutter workshop where you will learn to build stunning mobile apps from scratch. Let's see how developers build apps for multiple platforms using a single codebase",
        date: "2022-06-01",
        time: "10:00",
        location: "CCF",
        fee: 300,
        image: flutter,
        imageDetails: Flutter_details,
        category: "workshop"
    },
    {
        id: 2002,
        name: "SATELLITE DATA PLATFORM WORKSHOP",
        description: "Join our Satellite Data Platform Workshop and discover how to harness the potential of satellite data for your research, business, or organization.",
        date: "2022-06-01",
        time: "10:00",
        location: "CCF",
        fee: 150,
        image: satellite,
        imageDetails: satellite,
        category: "workshop"
    },
    {
        id: 2003,
        name: "BIM Workshop",
        description: "This workshop offers comprehensive training in Building Information Modelling (BIM), focusing on advanced techniques to create, analyze, and manage intelligent 3D building models.",
        date: "2022-06-01",
        time: "10:00",
        location: "CCF",
        fee: 500,
        image: Bim_modeling,
        imageDetails: Bim_modeling_details,
        category: "workshop"
    },
    {
        id: 2004,
        name: "3D Printing and Designing Workshop",
        description: "Introduces the essentials of 3D printing and design, focusing on crafting detailed protocategorys and advanced models using state-of-the-art 3D printing technology",
        date: "2022-06-01",
        time: "10:00",
        location: "CCF",
        fee: 350,
        image: D_PRINTING,
        imageDetails: D_printing_details,
        category: "workshop"
    },
    {
        id: 2005,
        name: "IOT and Embedded Systems Workshop",
        description: "Whether you're a curious beginner or an aspiring innovator, this workshop is your gateway to understanding the basics, mastering the intricacies, and discovering the boundless possibilities of these cutting-edge technologies.",
        date: "2022-06-01",
        time: "10:00",
        location: "CCF",
        fee: 350,
        image: IOT,
        imageDetails: iot_details,
        category: "workshop"
    },
    {
        id: 2006,
        name: "PCB Designing Workshop",
        description: "Join our exciting workshop on Printed Circuit Board (PCB) Design and take your electronics engineering skills to the next level! Learn the secrets of designing efficient, high-quality PCBs—an essential skill in today’s tech-driven world where PCB designers are in high demand!!",
        time: "10:00",
        location: "CCF",
        fee: 450,
        image: PCB,
        imageDetails: PCB_Details,
        category: "workshop"
    }
];