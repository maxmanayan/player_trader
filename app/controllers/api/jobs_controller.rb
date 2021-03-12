class Api::JobsController < ApplicationController

  def index  
    render json: Job.all
  end

  def show 
    job = Job.find(params[:id])
    render json: {job: job } 
  end 

  def create
    job = Job.new(job_params)
    if(job.save)
      render json: job  
    else
      render json: {errors: job.errors}, status: 422
    end
  end 

  def update
    job = Job.find(params[:id])
    if(job.update(job_params))
    else
      render json: {errors: job.errors}, status: 422
    end
  end 
  
  def destroy
    render json: Job.Find(params[:id]).destroy
  end 

  private 

  def job_params 
    params.require(:job).permit(:position, :team, :salary)
  end 

end
