# Elias Henriksen - Noroff Semester Project 2

![image](https://user-images.githubusercontent.com/52622303/164316813-4b12d99f-aeb7-4069-85cf-e72b3a50ac99.png)

The purpose of this project was to create an e-commerce website that has both customer-facing and admin sections. Both sections were to be responsive and the website was populated by a Strapi API supplied by Noroff.

## Description

The project required us to build an e-commerce website. We could choose the theme of our website. It had to follow the site architecture described below.

- Design your website using your favourite tool. You will need to find a suitable logo. If you decide to create a logo yourself, do not spend too much time on it.
- You must apply all that you have learned in your studies so far. The site must have a good user experience and UI design, following today’s trends and design patterns.
- Build a frontend with home, product list, product detail and cart pages.
- Build admin pages to create, update and delete products.
- The website must be responsive on all devices.
- Building a checkout and payment system is not a part of the project.

We were provided a Strapi project by Noroff which was initially run locally during the creation of this project but at the end after i was finished, i hosted it with the free Heroku tier so that i could have my project displayed online on my portfolio (Sadly Heroku recently got rid of their free tier, so i will have to re-host it with some other provider). The API was that of a shoe e-commerce store, so that is the solution at its core.

My solution is Shoewave which is a simple, hip, online, trendy shoe retailer. All the functionality of my solution is mentioned above in the requirements, but it is worth pointing out that this is a "two-part" solution. You have the regular "customer" facing frontend which is just the product list, homepage, cart etc. But then you also have the "administrator" facing frontend, which lets you edit products, add new products, delete products etc. To access and view the admin section, one must login, i have already previously considered how i can showcase this administrator section of my solution, without publicly giving out admin user credentials, as anyone could for example delete all the products on the API, change pictures etc.

## Built With

You can list a the tech stack that you've used over here

- JavaScript (vanilla)
- HTML
- [SCSS](https://sass-lang.com/)
- [Bootstrap](https://getbootstrap.com)
- [Moment.js](https://momentjs.com/)
- [Strapi](https://strapi.io/)
- [Shapedivider](https://www.shapedivider.app/)

## Getting Started

### Installing

This is where you list how to get the project started. It typically just includes telling a person to clone the repo and then to install the dependencies e.g.

1. Clone the repo:

```bash
git clone git@github.com:NoroffFEU/portfolio-1-example.git
```

2. Install the dependencies:

```
npm install
```

### Running

Here is where you detail how to run the app. It typically involves the commands you'd need to run to start the project e.g.

To run the app, run the following commands:

```bash
npm run start
```

## Contributing

Here you can detail any information you want to provide regarding contributing to the project. For big projects you will usually have a separate `CONTRIBUTING.md` and link to it, but for smaller projects you can simply include instructions here. These instructions can simply detail the process you want a person to take, such as to make sure to open a pull request so code can be reviewed.

## Contact

This is where you can leave your social links for people to contact you, such as a LinkedIn profile or Twitter link e.g.

[My Twitter page](www.twitter.com)

[My LinkedIn page](www.linkedin.com)

## License

You can link to your license file here if you're using one, or mention what license the codebase falls under. If you're unsure then you can simply delete this section.

## Acknowledgments

This is where you can add any acknowledgements if you'd like, such as to people who have helped you or any code snippets you'd like to mention. You can delete this section if you don't have any acknowledgements to make.
