defmodule Tasktracker.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :completed, :boolean, default: false
    field :description, :string
    field :duration, :integer
    field :title, :string
    belongs_to :user, Tasktracker.Users.User

    timestamps()
  end

  def validate_interval(changeset) do
    field = get_field(changeset, :duration)
    if rem(field, 15) == 0 do
      changeset
    else
      add_error(changeset, :duration, "Duration should be in 15 minute intervals")
    end
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :description, :duration, :completed, :user_id])
    |> validate_required([:title, :description, :duration, :completed, :user_id])
    |> validate_interval
  end
end
