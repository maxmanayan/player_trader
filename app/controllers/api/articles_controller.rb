class Api::ArticlesController < ApplicationController

  def index 

  end


  def show

  end


  def create 

  end


  private 

  def article_params
    params.require(:article).permit(:title, :description)
  end
end
