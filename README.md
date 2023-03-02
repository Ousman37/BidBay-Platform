# BidBay-Platform

Welcome to BidBay, the web platform where you can create and bid on listings! With BidBay, you can sell your items and earn credits, or browse through listings and use your credits to purchase items from other users. Non-registered users can also search through the listings and see what's available.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/Ousman37/BidBay-Platform/actions)
[![Bootstrap](https://img.shields.io/badge/bootstrap-5.2.3-blueviolet)](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
[![ESLint](https://img.shields.io/badge/eslint-8.34.0-orange)](https://eslint.org/)
[![Sass](https://img.shields.io/badge/sass-1.58.1-pink)](https://sass-lang.com/)
[![Prettier](https://img.shields.io/badge/prettier-0.0.0--5-yellow)](https://prettier.io/)
[![Jest](https://img.shields.io/badge/jest-29.4.3-purple)](https://jestjs.io/)
[![Cypress](https://img.shields.io/badge/cypress-12.7.0-brightgreen)](https://www.cypress.io/)
[![Icons](https://img.shields.io/badge/icons-1.0.0-green)](https://fontawesome.com/)

## Description

This web platform allows users to create and bid on listings. When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings.

### Technologies Used

BidBay is built using the following technologies:

- Node.js v14.17.5
- Cypress v12.7.0
- Bootstrap v5.2.3
- Sass v1.58.1
- Babel v6.23.0
- ESLint v8.34.0
- Prettier v0.0.0-5
- Jest v29.4.3

### Features

Here are some of the features you can expect when using BidBay:

- Register with your stud.noroff.no email address and start selling or buying items.
- Login and logout as a registered user.
- Update your avatar and view your total credit as a registered user.
- Create a listing with a title, deadline date, media gallery, and description.
- Add a bid to another user's listing and view bids made on a listing.
- Search through listings as an unregistered user.

### Requirements

To get started with BidBay, clone this repository and install the dependencies:

npm install

You'll also need to create a `.env` file in the root directory with the following environment variables:

SESSION_SECRET=<your_session_secret>
API_URL=<api_url>

Replace `<your_session_secret>` with a random string of characters that will be used as the session secret. Replace `<api_url>` with the URL of the Auction API that you will be using.

### Resources

Here are some resources you can use to learn more about the API used by BidBay:

- [API Swagger](https://auction-api.northeurope.cloudapp.azure.com/swagger/index.html)
- [Noroff API documentation](https://github.com/NoroffFEU/full-stack-web-development

### Getting Started

## Installation

Clone the repository and run `npm install` to install all dependencies.

## Usage

![Start Icon](https://img.shields.io/badge/-Start-blue) Run the following scripts to start the development server, watch for changes, and build the project:

![Dev Icon](https://img.shields.io/badge/-Dev-green) Once you've installed the dependencies and set up the environment variables, you can start the development server with: `npm run dev`

![Browser Icon](https://img.shields.io/badge/-Browser-blue) This will start the server and watch for changes to files. Open your browser and navigate to "live-server" to view the project.

## Testing

![Format Icon](https://img.shields.io/badge/-Format-green) Run `npm run format` to format the code.

![Lint Icon](https://img.shields.io/badge/-Lint-orange) Run `npm run lint` to lint the code.

![Test Icon](https://img.shields.io/badge/-Test-purple) Run `npm run test` to check for Jest tests.

![Prettier Icon](https://img.shields.io/badge/-Prettier-yellow) Run `npm run prettierCheck` to check for formatting errors.

![Lint:check Icon](https://img.shields.io/badge/-Lint:check-orange) Run `npm run lint:check` to check for linting errors.

## Contributing

We welcome contributions to BidBay! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with a descriptive message.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## Credits

![Heart Icon](https://img.shields.io/badge/-Made%20with%20Love-red) This project was created with love by Ethmane Didi.

This project was created by Ethmane Didi as part of a group project for the Full Stack Web Development course at Noroff School of Technology and Digital Media.

## About Me

I am Ethmane, a front-end developer student currently in my final year of studies. This project was created as part of a group project for the Full Stack Web Development course at Noroff School of Technology and Digital Media.

I'm passionate about creating beautiful and functional websites that provide a great user experience. Currently, I'm looking for a job opportunity or small project where I can further develop my skills and gain practical experience in the field.

In addition to my technical skills, I have excellent communication and problem-solving abilities, and I enjoy working collaboratively in a team environment. If you're interested in working with me or have any questions, please feel free to reach out at Ousman.didibela@gmail.com. I'd be happy to hear from you!

## Known Issues

![Bug Icon](https://img.shields.io/badge/-Bug-red) There is a bug in the login feature.

No known issues at this time. If you encounter any issues, please submit them to the issue tracker.

## License

This project is licensed under the MIT License.
