# skillShare

> A platform bringing developers together to help each other or just jam!

## Setup

To get started, clone this repo and then:

```
cd skillshare
npm install
npm run db:migrate
npm run db:seed
npm run dev
```

You can find the server running on [http://localhost:3000](http://localhost:3000).

## User interface (proposal) - wireframes

Image or Daryl whimsical

## Dependencies 
verify we have installed everything needed:

[] package.json (npm init??)
[] jest/supertest/ anything else for tests?
[] webpack
[] SQLite3
[] Bulma and wired up Bulma correctly (For later)
[] Anything else?

## Steps aiming at MVP 

## (i) Front- End

A. Auth using authenticare - for Register and Login component

Docs for authenticare:
- https://github.com/pohutukawa-2020/jwt-auth
- https://github.com/don-smith/authenticare/blob/master/docs/client/signIn.md 

B. Create components: []

1. Landing page component [] with:
    - Nav component [] 
    - Register component [] 
    - Login component.[]
    
2. Home page component [] with:
    - Nav component [] (option to move between Home,Signout and Profile)
    - List component [] with:
          - List Item component []
    - Add component [] (outside of List component)*

3. Profile page component [] with:
   - Personal info component [] (has an update profile button)
   - My list component [] with:
      - Add component [] (when clicked, it generates a form to fill and submit)*

4. List Item component page []

C. Create hash router and routes to link components/pages []

## Early deployment to Heroku!
![alt text](https://memegenerator.net/img/instances/73670524/if-you-think-you-can-just-deploy-to-heroku-youre-gonna-have-a-bad-time.jpg)

## (ii) Back-End

A. Database schema 

(link to be attached once ready)

B .API routes []

Failure response (HTTP status: 500):

```
{
  "error": {
    "title": "Unable to retrieve data"
  }
}
```

(i) For the List component - getAllListings `GET /api/v1/home` (not sure)

Response (200):

```
{
  "Listings": [
    {
      "id": 1,
      "Title": "",
      "Skill_id": "",
      "Description":"",
      "Interest": "",
      "Status": ""
      }]
    }
  ]
}
```


(ii) For the List item component - getListing `GET /api/v1/gardens/:id`

Response (200):

```
{
  "id_listings": 1,
  }]
}
```

(iii) For the add item component - postListing `POST /api/v1/..to confirm...` (insert in table)

Request:

```
{
 To specify
}
```

Response (201):

```
{
  To specify
}
```

(iv) For the info component - getUserInfo `GET /api/v1/events/:id/users` (user_id)

Response (200):

```
{
 To specify
}
```

(v) For the myList component - getMyList `POST /api/v1/events/:id/users` (user_id)

Request:

```
{
  to specify
}
```

Response (201):

```
{
  to specify
}
```
### CSS 
Bulma will be used in this project. Please refer to the documentation https://bulma.io/documentation/

## Testing
The team will split and dedicate time on testing and styling.

## DEPLOYMENT TO HEROKU!!!!!!!!!!!

Docs to ensure all the steps are done:
https://github.com/pohutukawa-2020/heroku-checklist

additional info if having issues with deployment due to database:
https://trailhead.salesforce.com/content/learn/projects/quickstart-heroku-connect/qs-heroku-connect-1

## Stretches

1. Add skill levels
2. Filtering in the skill level
3. Recommendations
4. Edit/update profile info
5. Categories: languages, cooking.

## Wellbeing and Conflict Resolution Plan

In terms of well-being:

once more, our expectations as a team being guided by inclusiveness, understanding and respect, we decided to voice out our needs as they arise. Whether it is taking some time away from the screen or needing help, among many other cases. 

We will be using a stress pig to alert that we are actually feeling a bit overwhelmed and stress which could be sometimes easier that actually saying it. Apologies to the other groups in advance for the noise.

We genuine care for each other, and will ensure we are encouraging one another to have enough sleep, eat well and hydrate well. We basically have one another´s back.

Last but not least, keep moral up with spontaneous and amazingly funny DAD JOKES!

In terms of conflicts:

We unanimosly agreed on:

- Using timeboxing, especially in situations where we are stuck and seek help if we reach our time limit.
- Open, honest and direct but kind communication will be used at all times.
- If a situation of tension arises, and as a team, we are unable to solve it, we will be reaching our to one of the facilitators.
- We will also voice out our needs (individual or group, it could also take the form of a constructive feedback).
- In moments of incertainty, or doubt or both, we would be using looping as a technique to help clear doubts and ensure we are on the same page.



## Roles
As a team, we noticed that during preparation we naturally took turns into stepping in and out of different roles as per the need and tempo of the project. We thus, decided not to assign particulart roles to each one of us. 
This decision is based on our knowledge of agile practices - especially valueing flexibility as per the changing needs of the the team in regards to the product and time left to deliver.

This decision highlights our common values; communication, honesty, respect, flexibility, team spirit and self-awareness.

Another rational has been also the fact that being a small team of 4, we stress on open honest communication as needed, a value reiterated by establishing at an early stage our working routine(stand ups and checkins every day in the morning and before lunch as well as one at the end of each day) and availability (see next point)

However, we agreed that if we felt the need (due to productivity slowing down, too much stress, or us not respecting our estimated time allocations per tasks) we would be open to assign a scrum master.

## Team Members Availability

Andrash - Thur-Friday (available after 8.30 online)
        - Weekend available
        - Mon to Wed next week available
        
Daryl   - Very flexible and available as per need.

Bhiv    - Very flexible except Thur Lunch

Tati    - Very flexible except I cannot stay later than 10.30 pm as I take the public transport and need to go before last bus/train


## Team Members Expectations

-Andrash shared that he really wants to have a complete product to share and mentioned that in aiming in doing so,  this journey will be one filled of learning.

-Daryl shared about how he would estimate time as per task. (cutting it into 1/3 of initial time he thought of) and that of course he is focussed on enjoying the learning journey of this process but also would want a good end product to showcase.

- Bhiv shared that the experience is mostly important and the learning out of it, if we have a neat end product amazing if its not exactly what we planned, the experience would have been a rich one anyways.

- Tatiana shared that she would really want to see a completed product to demo at Graduation, but also expects lots of fun and learning through this final group project.

![alt text](https://miro.medium.com/max/2644/1*-mCWVWM_8rgv9EbwhlcFUA.jpeg)
