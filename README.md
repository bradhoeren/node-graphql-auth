# node-graphql-auth
Started with Authentication server implementation with Node and GraphQL, expanding to provide HTTP endpoints for https://gitlab.unival.com/bhoeren/ng-internal-tools.

Based on the guide found here: https://css-tricks.com/lets-create-our-own-authentication-api-with-nodejs-and-graphql/

Phase 1 - Implement based on guide
* Authentication and Registration links are complete under GraphQL schema.

Phase 2- Modify to use PostgreSQL intead of MySQL for back-end
* This is completed.

Phase 3 - Create schema definition for each major table structure
* Initial table structures are done.
* ** Next step is to finish associations of table structures **
    
Phase 4 - Expand endpoint schema to include:
* User data
* Insitution data
* Database data
* Environment (basic) data

    
For simplicity, I may create these endpoints as REST endpoints first but then create GraphQL versions afterward.