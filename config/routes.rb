Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :teams do
      resources :players
    end

    resources :jobs 
    resources :articles
  end

  get '/api/all_players', to: 'api/players#all_players'
  
end
