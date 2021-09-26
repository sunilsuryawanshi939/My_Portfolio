import React from 'react'
import api from '../../assets/icons/api.svg'
import backend from '../../assets/icons/backend.svg'
import algo from '../../assets/icons/algo.svg'
import computer from '../../assets/icons/computer.svg'
import repair from '../../assets/icons/repair.svg'
import puzzle from '../../assets/icons/puzzle.svg'

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: ["I can build a beautiful and scalable SPA using ",<strong key={1}> HTML, CSS and React.js</strong> ]
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: ["handle database, server, api using and ", <strong key={1}> SQLlite </strong>]
    },
    {
        icon: api,
        title: "API Development",
        about: ["I can develop robust REST API using ",<strong key={1}> django-rest-api </strong>]
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: ["a daily problem solver in " ,<strong key={1}> HackerRank and Leetcode </strong>]
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: ["minimalistic user interface designer using ",<strong key={1}> figma and  framer </strong>]
    },
    {
        icon: backend,
        title: "Whatever",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!"
    },
]

export default skills