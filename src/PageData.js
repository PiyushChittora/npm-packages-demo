import kaguya from "./assets/kaguya.jpg";
import opm from "./assets/opm.jpg";
import horimiya from "./assets/horimiya.jpg";
import DS from "./assets/demonslayer.jpg";
import mha from "./assets/mha.jpg";
import batman from "./assets/batman.jpg";

const content=[
    {
        heading:"Kaguya Sama: Love is war",
        description:"Two high school geniuses, Shirogane and Kaguya, can't admit they're in love, so each tries to win a confession of affection from the other.",
        textOnly:true,
        text:"This is text",
        image:kaguya
    },
    {
        heading:"One Punch Man",
        description:"The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.",
        text:"This is Link",
        image:opm,
        color:"#ffaf24",
        link:""
    },
    {
        heading:"Horimiya",
        description:"Two very different people - an academically successful schoolgirl and a quiet loser schoolboy - meet and develop a friendship.",
        text:"This is a link",
        image:horimiya,
        color:"#275BBF",
        link:""
    },
    {
        heading:"Demon Slayer",
        description:"The anime follows Tanjiro Kamado and his journey after his family's demise at the hands of the Demon King Muzan Kibutsuji.",
        text:"Again a link",
        image:DS,
        color:"#A020F0",
        link:""
    },
    {
        heading:"My Hero Academia",
        description:"Set in a world where superpowers (called Quirks) have become commonplace, the story follows Izuku Midoriya, a boy who was born without a Quirk but still ...",
        textOnly:true,
        text:"I love it and you should too.",
        image:mha,
        color:"#06b885",
    },
    {
        heading:"The Batman",
        description:"the superhero protector of Gotham City, a tortured, brooding vigilante dressed as a bat who fights against evil and strikes fear into the hearts.",
        text:"The moon is a loyal companion fr.",
        color:"#E33737",
        image:batman,
        textOnly:true,
    }
]

export default content;