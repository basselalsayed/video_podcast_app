1. The relationship from a user to their bookmarks is a one-to-many.

We need to capture the user_id as it appears in the database, along with each video_id

Assuming all we want to capture is the video, no timestamps.

In a sql style database:

I would create one large joining table in the database containing two foreign key columns: userIid, video_id

When a user wants to see their saved videos, we run a query to return all video_ids with a user_id of current user

In a firebase style database:

I would create a sub-collection of watch later videos for each user, and only request that sub-collection if the user clicked their watch later page to save on document reads

2. SQL optimisation: something to speed up the query time as a simple "SELECT \* FROM WHERE" can slow down as the table grows. E.g. Utilising clustered index using InnoDb tables.

   1. Firebase optimisation could be an infinite scroll on client side to potentially save further on document reads

3. Once all the unit and feature tests are complete and passing to a a satisfactory level. Then the feature would have to be user tested to find any UX improvements. I would then implement some concurrent load testing of the service to ensure it is capable of handling a capacity >= predicted usage (ideally much greater than prediction if cost increase is marginal)

4. I would determine if a feature was successful based on:
   1. Integration: fits well into the design/structure of existing tree with minimal performance difference
   2. Usage in numbers
   3. The ratio of usage/user complaints or poor reviews
   4. Determining through usage analysis that the feature was contributing to the apps income or similar e.g. maintaining retention, shares
