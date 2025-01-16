---
layout: '@/templates/BasePost.astro'
title: "Mini-project Insurance Quote"
description: Insurance quote calculator that allows users to calculate the cost of insurance based on  the type of insurance, coverage amount.
pubDate: 2025-01-07T00:00:00Z
imgSrc: '/assets/images/InsureQuote.png'
imgAlt: 'Image project'
---

[![Repo](https://img.shields.io/badge/Repo-Link-blue?logo=github)](https://github.com/crisky94/Practicas-JavaScript/tree/main/proyecto-05)[![Demo](https://img.shields.io/badge/Demo-Live-green?logo=vercel)](https://cute-souffle-ea1879.netlify.app/)

1. Introduction
Objective: Create an insurance quote calculator that allows users to calculate the cost of insurance based on their preferences, such as the type of insurance, coverage amount, and accident history.
Technologies Used:
HTML5 for the structure of the web page.
CSS3 for styling and visual design.
JavaScript for the application logic.
LocalStorage to save the calculated quote and allow data persistence in the browser.
2. Features of the Insurance Quote Calculator
Input Form:

The user selects different options (e.g., insurance type, age, car type).
Fields include:
Age of the insured.
Coverage type (basic, medium, full).
Accident history (yes or no).
Insurance Quote Calculation:

Based on the user's selections, the estimated cost of the insurance is calculated.
Each option has a predefined value that modifies the final quote.
Using LocalStorage:

After the user receives the quote, the information is saved in localStorage.
This ensures that the user's data is preserved between sessions, allowing them to retrieve the quote in future visits.