# TaskTracker

## Design Decisions
### Database Schema:
   * User Table:
        * Created a unique index for **email** field as users cannot have duplicate emails.
        * Both **email** and **name** are set to not null.
   * Task Table:
        * All fields except **user_id** are set to not null.
        
### Log in page
   * User needs to be registered to log in.
   * If log in is successful, it redicts to All Tasks page.
   
### Tasks
   * **All Tasks** page displays all the task titles, their status, their owner (if any) and option to delete and edit them.
   * You can mark a task as Complete/Incomplete using a button.
   * New Task can be created where all the fields are required and duration should be in increments of 15.

### Users
   * **All Users** page displays all the registered user along with their email.
   * Clicking on their name redirects to a page that displays all tasks of the selected user.

## Run on your system
To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).
## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
