# HospiChain

## Inspiration

Pretend it’s 2020 again.

Prices are rising, hospitals are running out of supplies. Frustration ensues as covid cases broke out, danger heighted by the lack of resources to help. There was no single clear line of communication between hospital and government, and even then, data often got misput and lost.

Since then, it’s been two years-- and the system still isn’t any better. So, what could we do?

Enter Hospichain.

## What it does

**Hospichain** informs the government of any lack of supplies a hospital in their zone of care encounters. It shows them the urgency of this supply, so they can have a priority list while considering demands. Using blockchain technology, **Hospichain** allows information to get from hospitals to the government faster and simpler, informing each other of their needs.

## How we built it

All of our data, including the hospital resources and user accounts, is stored in a Gun.js database. The React frontend renders the ui and handles all the updates and queries to the database. The app uses react-styled-components for styling the ui and react-router-dom for handling the routes. We created a peer for the database using an Express.js server, which can also be used to add new users and data to the same decentralized database.

Front End

- React.js
- react-styled-components
- react-router-dom

Blockchain

- Express.js
- Gun.js

## Challenges we ran into

We were all new to Blockchain, so we had to research it and learn how we could implement it into our web application. We used a decentralized database, Gun.js, which we had to figure out how to use. We read through its documentation many times and spent hours setting up the database as well as debugging queries to the database, which often did not return the expected data. We also had trouble coming up with a fitting color scheme.

## Accomplishments we’re proud of

We developed a working web application with all the main functionality we planned for in under 36 hours (while being sleep deprived for almost the entirety of the hackathon).

This was also our first time working with Blockchain and we’re proud we got it to work. It was our first hackathon, and we learned a lot about developing software, in order to solve a problem in the healthcare industry.

## What we learned

We learned how to implement decentralized storage into a web app using Blockchain, and use Figma to create initial designs and plan out the different screens of our app.

## What’s next

We plan to complete the features that allow a hospital to request resources and update the used resources. The design could be improved to make it more appealing to the eye.
