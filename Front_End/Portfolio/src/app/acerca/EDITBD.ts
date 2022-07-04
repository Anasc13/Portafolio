import { Edit } from "./edit"

export const EDITBD: Edit [] = [
    {
        LogoAP: "",
        backImage: "",
        profileImage: "",
        name: "",
        postition: "",
        ubication: "",
        company: {
            name: "",
            img: "",
            url: "",
        },
        about: "",
        experience: [{
            position: "",
            company: "",
            img: "",
            mode: "",
            start: "",
            end: "",
            timeElapsed: "",
        }],
        education: [{
            school: "",
            title: "",
            img: "",
            career: "",
            score: "",
            start: "",
            end: "",
        }],
        skills: [{
            name: "",
            img: "",
        }],
        projects: [{
            img: "",
            name: "",
            description: "",
            start: "",
            finish: "",
            link: "",
        }]
    }
]