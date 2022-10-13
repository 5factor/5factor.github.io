const header = {
  // all the properties are optional - can be left empty or deleted
  //homepage: 'https://rajshekhar26.github.io/cleanfolio',
  //title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Fivefactor',
  role: 'Full Stack Engineer, UI/UX Designer',
  description:
    'Hey, I\'m Factor! I am a programmer and user interface designer.',
  resume: 'https://twitter.com/fivefactor_',
  social: {
    github: 'https://github.com/5factor',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Interface Tools',
    description:
      'Interface Tools is a Roblox UI design plugin with nearly 100,000 users',
    stack: ['Lua'],
    livePreview: 'https://www.roblox.com/library/4500377880/Interface-Tools'
  },
  {
    name: 'Fruit Picking Simulator',
    description:
      'Fruit Picking Simulator is a work-in-progress game',
    stack: ['Lua'],
    livePreview: 'https://www.roblox.com/games/11219283810/Fruit-Picking-Simulator'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'TypeScript',
  'Lua',
  'Material UI',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
}

export { header, about, projects, skills, contact }
