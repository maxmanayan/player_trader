class Api::PlayersController < ApplicationController
  before_action :get_team, only: [:index, :show, :create, :update, :destroy]

  def index 
    @players = @team.players.all

    render json: @players
  end


  def show 
    @player = @team.players.find(params[:id])

    render json: @player
  end


  def create 
    @player = @team.players.new(player_params)

    if @player.save
      render json: @player
    else
      render json: {errors: @player.errors}, status: 422
    end
  end


  def update 
    @player = @team.players.find(params[:id])

    if @player.update(player_params)
      render json: @player 
    else
      render json: {errors: @player.errors}, status: 422
    end
  end


  def destroy 
    @player = @team.players.find(params[:id])
    @player.destroy 
    render json: @player
  end


  def all_players 
    @players = Player.all 

    render json: @players
  end


  private


  def player_params 
    params.require(:player).permit(:name, :position, :value, :age)
  end


  def get_team
    @team = Team.find(params[:team_id])
  end
end
