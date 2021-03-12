class Api::TeamsController < ApplicationController
  def index
    render json: Team.all
  end

  def show
    team = Team.find(params[:id])
    render json: {team: team, players: team.players }
  end

  def create
    team = Team.new(team_params)
    if (team.save)
      render json: team
    else
      render json: {errors: team.errors}
    end
  end

  def update 
    team = Team.find(params[:id])
    if (team.update(team_params))
      render json: team
    else 
      render json: {errors: team.errors}
    end
  end

  def destroy
    render json: Team.find(params[:id]).destroy
  end

  private

  def team_params
    params.require(:team).permit(:name)
  end

end
