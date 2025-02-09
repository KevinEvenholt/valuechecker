# Valuechecker tecnical assignment

# Issues

I initially ran into a CORS error when making API requests directly from the frontend. After testing the API in Postman, which worked fine, I discovered through StackOverflow that the issue was caused by the browser blocking the request. A proxy was needed to resolve this, so I set up an Express server locally, and everything worked as expected. However, since I needed to deploy the project to Firebase, I found that I could use CORS Anywhere to temporarily solve the issue without hosting a server.

As this is a frontend-only application, there is no way to avoid exposing the JWT token to the client. If I were hosting a server, this wouldn't be a concern. Alternatively, Firebase Functions could handle this securely, but they are only available on their paid plan.
