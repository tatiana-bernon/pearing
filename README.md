# skillShare

> A platform bringing developers together to help each other.

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

## Steps aiming at MVP 

## (i) Front- End

A. Auth using authenticare - for Register and Login component
B. Create components:

1. Landing page component with:
    - Nav component, 
    - Register component, and 
    - Login component.
    
2. Home page component with:
    - Nav component (option to move between Home,Signout and Profile)
    - List component with:
          - List Item component
    -Add component (outside of List component)*

3. Profile page component with:
   - Personal info component (has an update profile button)
   - My list component with:
      - Add component (when clicked, it generates a form to fill and submit)*

4. List Item component page

C. Create hash router and routes to link components/pages

## (ii) Back-End

A. Database schema 

(link to be attached)

B .API routes 

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

## Stretches

1. Add skill levels
2. Filtering in the skill level
3. Recommendations
4. Edit/update profile info
5. Categories: languages, cooking.

## Wellbeing and Conflict Resolution Plan

## Roles

## Team Members Availability

## Team Members Expectations
