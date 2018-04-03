# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Tasktracker.Repo.insert!(%Tasktracker.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

defmodule Seeds do
  alias Tasktracker.Repo
  alias Tasktracker.Users.User
  alias Tasktracker.Tasks.Task

  def run do
    Repo.delete_all(User)
    a = Repo.insert!(%User{ name: "alice", email: "alice@example.com" })
    b = Repo.insert!(%User{ name: "bob", email: "bob@example.com" })
    c = Repo.insert!(%User{ name: "carol", email: "carol@example.com" })
    d = Repo.insert!(%User{ name: "dave", email: "dave@example.com" })

    Repo.delete_all(Task)
    Repo.insert!(%Task{ user_id: a.id, description: "Hi, I'm Alice", duration: 0, completed: false, title: "Alice Task" })
    Repo.insert!(%Task{ user_id: b.id, description: "Hi, I'm Bob", duration: 0, completed: false, title: "Bob Task"  })
    Repo.insert!(%Task{ user_id: b.id, description: "Hi, I'm Bob Again", duration: 0, completed: false, title: "Bob 2 Task"  })
    Repo.insert!(%Task{ user_id: c.id, description: "Hi, I'm Carol", duration: 0, completed: false, title: "Carol Task"  })
    Repo.insert!(%Task{ user_id: d.id, description: "Hi, I'm Dave", duration: 0, completed: true, title: "Dave Task"  })
  end
end

Seeds.run
