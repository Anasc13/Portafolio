export interface Edit {
    LogoAP?: string;
    backImage?: string;
    profileImage?: string;
    name?: string;
    postition?: string;
    ubication?: string;
    company: {
        name?: string;
        img?: string;
        url?: string;
    },
    about?: string;   
    experience: [{
      position?: string;
      company?: string;
      img?: string;
      mode?: string;
      start?: string;
      end?: string;
      timeElapsed?: string;
      }],
      education: [{
        school?: string;
        title?: string;
        img?: string;
        career?: string;
        score?: string;
        start?: string;
        end?: string;
    }],
    skills: [{
        name?: string;
        img?: string;
    }],
    projects: [{
        img?: string;
        name?: string;
        description?: string;
        start?: string;
        finish?: string;
        link?: string;
    }]
}