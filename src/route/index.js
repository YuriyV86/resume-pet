// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },

  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Моя домашня адреса',
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

router.get('/', function (req, res) {
  res.render('index', {})
})

router.get('/summary', function (req, res) {
  res.render('summary', {
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. 
          Whenever I start to work on a new project I learn the domain and try to understand the 
          idea of the project. Good team player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and 
          sport statistics (tournament position, goals etc), analyzing by simple mathematics models 
          and preparing probability for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

router.get('/skills', function (req, res) {
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 9,
          isTop: true,
        },
        {
          name: 'Terminal',
          point: 8,
          isTop: false,
        },
        {
          name: 'VS Code',
          point: 7,
        },
        {
          name: 'GIT',
          point: 8,
          isTop: false,
        },
        {
          name: 'NPM',
          point: 5,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Футбол',
          isMain: false,
        },
        {
          name: 'Програмування',
          isMain: true,
        },
        {
          name: 'Водіння',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'Університет',
          isEnd: true,
        },
        {
          name: 'Інститут',
          isEnd: false,
        },
        {
          name: 'Коледж',
          isEnd: true,
        },
        {
          name: 'Технікум',
          isEnd: true,
        },
        {
          name: 'ПТУ',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Сертифікат-1',
          id: 0,
        },
        {
          name: 'Сертифікат-2',
          id: 1,
        },
        {
          name: 'Сертифікат-3',
          id: 2,
        },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Developer',
          company: {
            name: 'IT Brains',
            url: null,
            // url: 'https://it-brains.com.ua',
          },
          duration: {
            from: '01.09.2021',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://github.com/it-brains-ua/resume-pet',
              about: 'some text about my resume',
              stackAmount: 3,
              awardAmount: 2,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'no awards-1',
                },
                {
                  name: 'no awards-2',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
