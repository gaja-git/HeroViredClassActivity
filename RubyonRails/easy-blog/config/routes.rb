Rails.application.routes.draw do
  resources :movies
  resources :articles
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # root "application#hello"
  root "pages#home"
  get "aboutus", to: "pages#about"
  get "register", to: "register#login"
end
