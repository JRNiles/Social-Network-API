# Social-Network-API

Welcome to the Social Network API! This API provides endpoints for managing users, thoughts, and reactions within a social network application. It is built using Express.js for routing, MongoDB for the database, and Mongoose for ODM.

## Table of Contents

- [Social-Network-API](#social-network-api)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Models](#models)

## Installation

To install and run the Social Network API locally, follow these steps:

1. Clone the repository

   ```bash
   git clone https://github.com/JRNiles/Social-Network-API.git
   ```

2. Navigate tp the project directory

   ```bash
   cd social-network-api
   ```

3. Install dependencies
   ```
   npm i
   ```
4. Start the server
   ```
   npm start
   ```
5. The server will start running on 'http://localhost:3001' by default.

## Usage

## API Endpoints

```
/api/users
```

```
/api/thoughts
```

```
/api/thoughts/:thoughtId/reactions replace (:thoughtId) with the ID of your thought
```

## Models

The API uses the following Mongoose models:

User: Represents a user in the social network. It contains information such as username, email, thoughts, and friends.

Thought: Represents a thought shared by a user. It includes the thought text, creation timestamp, and reactions.

Reaction: Represents a reaction to a thought. It contains the reaction body, username, and creation timestamp.
