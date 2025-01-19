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
import Flutter_details from '../assets/images/workshops/Flutter_details.png'
import iot_details from '../assets/images/workshops/iot_details.png'
import astro_website from '../assets/images/workshops/astro_website.png'
import astrophotography_details from '../assets/images/workshops/astrophotography_details.png'
import satellite_details from '../assets/images/workshops/satellite_details.png'
import autocad_website from '../assets/images/workshops/autocad_website.png'
import autocad_details from '../assets/images/workshops/autocad_details.png'
import robotics from '../assets/images/workshops/robotics.png'
import robotics_details from '../assets/images/workshops/robotics_details.png'
import robotic_arm from '../assets/images/workshops/robotic_arm.png'
import robotic_arm_website from '../assets/images/workshops/robotic_arm_website.png'
import drone from '../assets/images/workshops/drone.png'
import drone_website from '../assets/images/workshops/drone_website.png'
import llm_website from '../assets/images/workshops/llm_website.png'
import llm_details from '../assets/images/workshops/llm_details.png'
import open_rocket_website from '../assets/images/workshops/open_rocket_website.png'
import open_rocket_details from '../assets/images/workshops/open_rocket_details.png'
import uiux_website from '../assets/images/workshops/uiux_website.png'
import ui_ux_details from '../assets/images/workshops/ui_ux_details.png'
import game_development_website from '../assets/images/workshops/game_development_website.png'
import game_development_details from '../assets/images/workshops/game_development_details.png'
import revit_website from '../assets/images/workshops/revit_website.png'
import revit from '../assets/images/workshops/revit_details.png'
import staad_website from '../assets/images/workshops/staad_website.png'
import staad from '../assets/images/workshops/staad_details.png'
import solid_website from '../assets/images/workshops/solid_website.png'
import solid from '../assets/images/workshops/solid _details.png'

// cultural events
import debate from '../assets/images/cultural/debate.webp'
import mimicry from '../assets/images/cultural/mimicry.webp'
import monoact from '../assets/images/cultural/monoact.webp'
import magic from '../assets/images/cultural/magic.webp'
import kalari from '../assets/images/cultural/kalari.webp'
import anchoring from '../assets/images/cultural/anchoring.webp'
import mehandi from '../assets/images/cultural/mehandi.webp'
import face_painting from '../assets/images/cultural/face_painting.webp'
import spot_photography from '../assets/images/cultural/spot_photography.webp'

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
        description: "Join us for an exciting Flutter workshop where you will learn to build stunning mobile apps from scratch. Let's see how developers build apps for multiple platforms using a single codebase.",
        date: "February 6, 2025",
        time: "09:00 AM - 01:00 PM",
        location: "CCF",
        fee: 300,
        image: flutter,
        imageDetails: Flutter_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/Flutter-Workshop-700"
    },
    {
        id: 2002,
        name: "SATELLITE DATA PLATFORM WORKSHOP",
        description: "Join our Satellite Data Platform Workshop and discover how to harness the potential of satellite data for your research, business, or organization.",
        date: "February 6, 2025",
        time: "10:00 AM - 12:30 PM",
        location: "CCF",
        fee: 150,
        image: satellite,
        imageDetails: satellite_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/SATELLITE-DATA-PLATFORM-WORKSHOP-704"
    },
    {
        id: 2003,
        name: "BIM Workshop",
        description: "This workshop offers comprehensive training in Building Information Modelling (BIM), focusing on advanced techniques to create, analyze, and manage intelligent 3D building models.",
        date: "February 6, 2025",
        time: "9:00 AM - 5:00 PM",
        location: "CCF",
        fee: 500,
        image: Bim_modeling,
        imageDetails: Bim_modeling_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/BIM-Modelling-706"
    },
    {
        id: 2004,
        name: "3D Printing and Designing Workshop",
        description: "Introduces the essentials of 3D printing and design, focusing on crafting detailed prototypes and advanced models using state-of-the-art 3D printing technology.",
        date: "February 6, 2025",
        time: "10:00 AM - 12:30 PM",
        location: "CCF",
        fee: 350,
        image: D_PRINTING,
        imageDetails: D_printing_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/3D-Printing-and-Designing-Workshop-717"
    },
    {
        id: 2005,
        name: "IOT and Embedded Systems Workshop",
        description: "Whether you're a curious beginner or an aspiring innovator, this workshop is your gateway to understanding the basics, mastering the intricacies, and discovering the boundless possibilities of these cutting-edge technologies.",
        date: "February 7, 2025",
        time: "9:00 AM - 1:00 PM",
        location: "CCF",
        fee: 350,
        image: IOT,
        imageDetails: iot_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/IOT-and-Embedded-Systems-Workshop-710"
    },
    {
        id: 2006,
        name: "PCB Designing Workshop",
        description: "Join our exciting workshop on Printed Circuit Board (PCB) Design and take your electronics engineering skills to the next level! Learn the secrets of designing efficient, high-quality PCBs—an essential skill in today’s tech-driven world where PCB designers are in high demand.",
        date: "February 7, 2025",
        time: "10:00 AM - 12:30 PM",
        location: "CCF",
        fee: 450,
        image: PCB,
        imageDetails: PCB_Details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/PCB-Designing-Workshop-718"
    },
    {
        id: 2007,
        name: "Robotic Arm Workshop",
        description: "Offers creative opportunities to explore the possibilities of programmable, human-like mechanical arms, allowing participants to create innovative products.",
        date: "February 8, 2025",
        time: "9:00 AM - 4:00 PM",
        location: "CCF",
        fee: 499,
        image: robotic_arm_website,
        imageDetails: robotic_arm,
        category: "workshop",
        registerLink: "https://tiqr.events/e/Robotic-Arm-Workshop-701/"
    },
    {
        id: 2008,
        name: "AutoCAD Workshop",
        description: "Embrace your creative product journey with AutoCAD. Learn accurate 2D and 3D drafting, design, and modeling with solids, surfaces, mesh objects, and documentation features.",
        date: "February 6, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "CCF",
        fee: 499,
        image: autocad_website,
        imageDetails: autocad_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/AutoCAD-Workshop-703"
    },
    {
        id: 2009,
        name: "Robotics and IoT Workshop",
        description: "Calling all tech enthusiasts and innovators! Get ready to showcase your skills and creativity in robotics and IoT. Build the future by learning, creating, and innovating with like-minded peers.",
        date: "February 8, 2025",
        time: "9:00 AM - 12:00 PM",
        location: "CCF",
        fee: 199,
        image: robotics,
        imageDetails: robotics_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/Robotics-and-IOT-Workshop-705"
    },
    {
        id: 2010,
        name: "Drone Workshop",
        description: "Explore the world of drone technology! Learn how to fly and control drones while gaining practical skills in this rapidly evolving field. Perfect for beginners and enthusiasts alike.",
        date: "February 8, 2025",
        time: "10:00 AM - 2:30 PM",
        location: "CCF",
        fee: 499,
        image: drone_website,
        imageDetails: drone,
        category: "workshop",
        registerLink: "https://tiqr.events/e/Drone-Workshop-707"
    },
    {
        id: 2011,
        name: "LLMs and Edge AI Workshop",
        description: "Calling all AI enthusiasts and professionals! We're excited to announce our upcoming workshop on LLM fine-tuning and Edge AI. Take your AI skills to the next level in this rapidly evolving field.",
        date: "February 7, 2025",
        time: "10:30 AM - 3:00 PM",
        location: "CCF",
        fee: 399,
        image:  llm_website,
        imageDetails: llm_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/LLM-Fine-Tuning-%26-Edge-AI-Workshop-709"
    },
    {
        id: 2012,
        name: "Open Rocket Simulator Workshop",
        description: "Master the fundamentals of rocket design and simulation with the Open Rocket Simulator. Learn to create, test, and optimize rocket models virtually, enhancing your engineering and analytical skills.",
        date: "February 7, 2025",
        time: "9:00 AM - 12:00 PM",
        location: "CCF",
        fee: 199,
        image: open_rocket_website,
        imageDetails: open_rocket_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/Open-Rocket-Simulator-Workshop-711"
    },
    {
        id: 2013,
        name: "UI/UX Design Workshop",
        description: "Embark on a journey into the world of creativity and innovation with our hands-on UI/UX Design Workshop. Learn key design principles, prototyping techniques, and essential tools to turn your ideas into reality.",
        date: "February 7, 2025",
        time: "9:00 AM - 1:00 PM",
        location: "CCF",
        fee: "Free",
        image: uiux_website,
        imageDetails: ui_ux_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/UI-%2F-UX-Workshop-715"
    },
    {
        id: 2014,
        name: "Game Development Workshop",
        description: "Turn your passion for gaming into the power of creation. Step into the exciting world of game development to dream, design, code, and build your ideas into reality.",
        date: "February 8, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "CCF",
        fee: "Free",
        image: game_development_website,
        imageDetails: game_development_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/Game-Development-Workshop-714"
    },
    {
        id: 2015,
        name: "Revit Workshop",
        description: "Take your design and modeling skills to the next level with our Revit Workshop as part of Xplore. Learn to bring your ideas to life using Revit.",
        date: "February 8, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "CCF",
        fee: 499,
        image: revit_website,
        imageDetails: revit,
        category: "workshop",
        registerLink: "https://tiqr.events/e/Revit-Workshop-713"
    },
    {
        id: 2016,
        name: "STAAD Workshop",
        description: "Join us for an immersive STAAD workshop where we’ll explore powerful techniques in structural modeling, analysis, and design.",
        date: "February 7, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "CCF",
        fee: 499,
        image: staad_website,
        imageDetails: staad,
        category: "workshop",
        registerLink: "https://tiqr.events/e/STAAD-Workshop-712"
    },
    {
        id: 2017,
        name: "SolidWorks Workshop",
        description: "Whether you’re a beginner or looking to refine your expertise, this hands-on workshop will guide you through the essentials of 3D modeling, assembly design, and product development in SolidWorks.",
        date: "February 7, 2025",
        time: "10:00 AM - 12:00 PM",
        location: "CCF",
        fee: 499,
        image: solid_website,
        imageDetails: solid,
        category: "workshop",
        registerLink: "https://tiqr.events/e/SolidWorks-Workshop-708"
    },
    {
        id: 2018,
        name: "Astrophotography",
        description: "Calling all space enthusiasts and photography buffs! Get ready to showcase your astronomical photography skills and capture the beauty of the universe.",
        date: "February 8, 2025",
        time: "10:00 AM - 12:30 PM",
        location: "CCF",
        fee: 199,
        image: astro_website,
        imageDetails: astrophotography_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/Astrophotography-702"
    }
];

export const culturalEventData = [
    {
        id: 3001,
        name: "Monoact Competition",
        description: "Unleash your acting brilliance in the Monoact Competition. Step onto the stage and captivate the audience with your expressions, voice, and creativity. This is your moment to bring characters to life, convey emotions, and narrate powerful stories—all by yourself",
        date: "6 February 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: '2.5 K',
        fee: 100,
        image:monoact ,
        contacts: [{name: 'Angel Shoby', phone: '8089091146'}, {name: 'Neha T', phone: '9847799288'}],
        rules: `1. This is a solo event. Open to all college students.\n
                2. The registration fee is 100.\n
                3. No restrictions on the theme. Participants can select their own theme.\n
                4. Maximum time limit is 5 minutes.\n
                5. Obscenity and offensive gestures are strictly prohibited and may result in disqualification.\n
                6. Additional rules may be given by the judges.\n
                7. In case of any dispute, the decision of the event organisers will be final.
`,
        category: "cultural",
        registerLink: "https://tiqr.events/e/Monoact-Competition-723"
    },
    {
        id: 3002,
        name: "Anchoring Competition ",
        description: "Step into the spotlight and showcase your charm, confidence, and spontaneity in the ultimate anchoring challenge! 🎙 Grab the mic, engage the audience, and keep the energy alive with your unique hosting style.",
        date: "6 feb 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: '3k',
        fee:70, 
        image: anchoring,
        contacts: [{name: 'Akshay ', phone: '8304017049'}, {name: 'Afra', phone: '6238769860'}],
        rules: `1. Participation is open to all.\n
                2. The Registration fee is 100.\n
                3. Maximum time limit is 10 minutes.\n
                4. You can prefer any language (English or Malayalam) according to your comfort.\n
                5. Topic will be given 10 minutes prior to the competition.\n
                6. Costume and appearance will be considered for judgement.\n
                7. Judges decision will be FINAL.\n
                8. You will be judged according to the given criteria:\n
                \t1. Fluency\n
                \t2. Clarity\n
                \t3. Costume and Appearance\n
                \t4. Body language\n
                \t5. Confidence\n
                \t6. Gestures\n
                \t7. Voice modulation`,
        category: "cultural",
        registerLink: "https://tiqr.events/e/Anchoring-Competition-724"
    },
    {
        id: 3003,
        name: "MIMICRY COMPETITION",
        description: "Participate in an evening of wit, humor, and originality as talents impersonate renowned individuals and characters.",
        date: "6 feb 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: '2.5k',
        fee:100, 
        image: mimicry,
        contacts: [{name: 'Haritha ', phone: '9605107278'}, {name: 'Deeshnav ', phone: '8590884990'}],
        rules: `1. Participation is open to all college students.\n
                2. The Registration fee is 100.\n
                3. Each artist shall be given a maximum of 5 minutes.\n
                4. Participants may mimic the sounds of machines, film personalities, or other famous personalities.\n
                5. The medium of expression will be in Malayalam or English.\n
                6. It should necessarily be a cultured and pleasant piece of art.\n
                7. No vulgar or unparliamentary language will be entertained.\n
                8. Marking will be based on:\n
                \t- Imitating skills\n
                \t- Presentation\n
                \t- Variety of sounds and voices imitated\n
                9. Judges' decision will be FINAL and can't be APPEALED.
`,
        category: "cultural",
        registerLink: "https://tiqr.events/e/MIMICRY-COMPETITION-722"
    },
    {
        id: 3004,
        name: "MAGIC SHOW",
        description: "Join us in the world of magic, mystery and wonder.",
        date: "7th Feb 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: null,
        fee:'Free', 
        image: magic,
        contacts: [{name: 'Keerthana P V ', phone: '8590480248'}, {name: 'Hasmina', phone: '98959 85462'}],
        rules: '',
        category: "cultural",
        registerLink: "https://tiqr.events/e/Magic-Show-725"
    },
    {
        id: 3005,
        name: "KALARIPAYATT SHOW",
        description: "Discover the amazing Kalaripayatt—an ancient Indian martial art that originated in Kerala during the 11th–12th century CE.",
        date: "8 feb 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: null,
        fee: null, 
        image: kalari,
        contacts: [],
        rules: '',
        category: "cultural",
        registerLink: "https://tiqr.events/e/KALARIPAYATT-SHOW-726"
    },
    {
        id: 3006,
        name: "Debate Competition",
        description: "Showcase your wit, eloquence, and critical thinking as you take on compelling topics and challenge the best minds.",
        date: "8 feb 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: '3k',
        fee: 100, 
        image: debate,
        contacts: [{name: 'Vismaya', phone: '91884 40511'}, {name: 'Arathi C K', phone: '9048259633'}],
        rules: `1. The event will be conducted as a team consisting of two members.\n
                2. Topic will be given on the spot which will be based on socially relevant issues.\n
                3. Registration fee is 100/- per team.\n
                4. Competition will be held in two stages such as Prelims and Finals.\n
                5. Participants can speak in English or Malayalam as per their convenience.\n
                6. Participants are not allowed to use any devices connected to the Internet during the course of debate.\n
                7. Each team will be allowed to speak for 5-7 minutes.\n
                8. The first and last minutes of a team’s time are protected - the opposition cannot intervene during this period.\n
                9. The decision of the judges are to be respected as they are final and binding.
                `,
        category: "cultural",
        registerLink: "https://tiqr.events/e/Debate-Competition-721"
    },
    {
        id: 3007,
        name: "Mehandi Competition",
        description: "Step into the world of henna artistry and showcase your talent with intricate, mesmerizing designs. Blend tradition with creativity and let your art speak for itself",
        date: "7th February 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: '2.5k',
        fee: 100, 
        image: mehandi,
        contacts: [{name: 'Sandwana', phone: '+91 8113889870'}, {name: 'Afra', phone: '+91 6238 769860'}],
        rules: `1. On-the-spot registrations are permitted.\n
                2. Registration fee is 100.\n
                3. Stickers, pens, and tattoos are not allowed.\n
                4. Participants can apply mehendi on their own hand or someone else's hand.\n
                5. No reference material will be allowed once the competition has begun.\n
                6. Mehendi designs must be created on one hand, extending up to the elbow.\n
                7. The time limit is 60 minutes and will be strictly adhered to.\n
                8. Participants who are late will not be given extra time.\n
                9. This is a single-round event. Designs will be judged based on neatness, creativity, originality, and intricacy.\n
                10. The judge's decision will be final and binding.\n
                11. All required materials will be provided at the venue.

                `,
        category: "cultural",
        registerLink: "https://tiqr.events/e/Mehandi-Competition-729"
    },
    {
        id: 3008,
        name: "FACE PAINTING",
        description: "XPLORE'24 is hosting a face painting competition encouraging participants to enhance their creativity and abilities.",
        date: "6 feb 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: '3k',
        fee: 70, 
        image: face_painting,
        contacts: [{name: 'Devika', phone: '+91 8848742789'}, {name: 'Afra', phone: '+91 9544918811'}],
        rules: `1. The registration fee is 70.\n
                2. It's a theme-based face painting competition.\n
                3. A team can consist of 2 members.\n
                4. Paints will be provided by the organizers at the time of the event.\n
                5. Brushes have to be brought by the participants.\n
                6. Time duration will be 60 minutes.\n
                7. The theme will be given on the spot.`,
        category: "cultural",
        registerLink: "https://tiqr.events/e/Face-Painting-Competition-728"
    },
    {
        id: 3009,
        name: "SPOT PHOTOGRAPHY",
        description: "Get ready for the ultimate photography challenge at Xplore'24! Showcase your creativity, composition, and talent behind the lens.",
        date: "8th feb 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: '1.5k',
        fee: 50, 
        image: spot_photography,
        contacts: [{name: 'Drishya ', phone: '+91 7907118594'}, {name: 'Shivani', phone: '+91 9995788316'}],
        rules: `1. Format: Images must be in high-resolution JPEG/PNG format.\n
                2. Editing: State the allowed level of editing (e.g., minor adjustments or no heavy manipulation).\n
                3. Originality: Submissions must be the participant's original work, not plagiarized or previously published.\n
                4. Photos should be taken on 8th February 2024.\n\n

                Judging Criteria -\n
                1. Relevance: Adherence to the competition theme.\n
                2. Creativity: Uniqueness and originality of the photograph.\n
                3. Technical Quality: Focus, exposure, composition, etc.
`,
        category: "cultural",
        registerLink: "https://tiqr.events/e/Spot-Photography-731"
    },
    
];


  
