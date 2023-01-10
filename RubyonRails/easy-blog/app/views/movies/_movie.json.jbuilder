json.extract! movie, :id, :Name, :Description, :Director, :Language, :created_at, :updated_at
json.url movie_url(movie, format: :json)
