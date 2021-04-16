Rails.application.routes.draw do
  root 'hello_angular#index'
  get 'hello_angular/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
