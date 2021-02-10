import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json([
    {
      id: 1,
      firstName: 'Richard',
      lastName: 'Hammond',
      picture: 'https://storage.googleapis.com/survivors/Richard_Hammond_2013.webp',
      infected: false,
      age: 46,
      location: 'Manchaster, United Kingdom',
    },
    {
      id: 2,
      firstName: 'El',
      lastName: 'Profesor',
      picture: 'https://storage.googleapis.com/survivors/el-creador-de-la-casa-de-papel-avanza-las-claves-del-espectacular-desenlace-sera-el-profesor-capaz-de-matar_590x.webp',
      infected: false,
      age: 45,
      location: 'Madrid, Spain',
    },
    {
      id: 3,
      firstName: 'Jeremy',
      lastName: 'Clarkson',
      picture: 'https://storage.googleapis.com/survivors/Screenshot%202020-12-17%20at%2002.17.18.png',
      infected: true,
      age: 52,
      location: 'London, United Kingdom',
    },
    {
      id: 4,
      firstName: 'Steve',
      lastName: 'Jobs',
      picture: 'https://storage.googleapis.com/survivors/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg',
      infected: true,
      age: 56,
      location: 'San Francisco, USA',
    },
    {
      id: 5,
      firstName: 'Elon',
      lastName: 'Musk',
      picture: 'https://storage.googleapis.com/survivors/Elon-Musk-portrait-dezeen_sq01-300x300.jpg',
      infected: false,
      age: 48,
      location: 'Houston, USA',
    },
    {
      id: 6,
      firstName: 'James',
      lastName: 'May',
      picture: 'https://storage.googleapis.com/survivors/Screenshot%202020-12-17%20at%2002.16.49.png',
      infected: false,
      age: 63,
      location: 'Bristol, United Kingdom',
    },
    {
      id: 7,
      firstName: 'Jony',
      lastName: 'Ive',
      picture: 'https://storage.googleapis.com/survivors/jony_3498180b.webp',
      infected: true,
      age: 33,
      location: 'San Francisco, USA',
    },
    {
      id: 8,
      firstName: 'Pablo',
      lastName: 'Escobar',
      picture: 'https://storage.googleapis.com/survivors/Screenshot%202020-12-17%20at%2014.10.49.png',
      infected: false,
      age: 47,
      location: 'Medellin, Colombia',
    },
  ])
}
