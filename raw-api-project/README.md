# RAW NODE API Project

- Start the api server
- Create, edit, delete user
- Token based authentication
- Logout mechanism
- Set links & up/down
- Edit/Delete links & rate limit
- Check up/down time

## routing

url.parse er vetore true dile query params gulu o ney.

what if keu jodi majhe ba sesh a suru te /\ dey, then path ta paowa ta tough hobe. So, we need something like trim.
We parse the url & trim with regexp, then parsed url for query string object.

Then we find out http verb like get, post

Then we find header like Bearer, Accept etc as a object using req.headers.

Finally payload - it comes as stream. So, we need to buffer it then decode it.

code refactored, create new folder and file reqHandler.js

routes.js file create korlam to handle all routes.

## part-2

environment variable

NODE_ENV=production node index

environment.js file likhlam.

Data - Save
