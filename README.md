# Elias Henriksen - Noroff Semester Project 2

![image](https://eliashenriksen.no/images/projects/semesterproject2/semesterproject2.png)

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

1. Clone the repo (or download and re-upload):

```bash
git clone git@github.com:eliashenriksen/semester-project-2.git
```

### Running

To run the app, simply run the index.html with any liveserver (localserver) plugin.

## Contact

This is where you can leave your social links for people to contact you, such as a LinkedIn profile or Twitter link e.g.

[My Website](https://www.eliashenriksen.no)

[My LinkedIn page](https://www.linkedin.com/in/elias-henriksen-450244223/)
