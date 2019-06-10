class UsersController < ApplicationController

  def index
    @users = User.where('name LIKE(?)', "%#{params[:keyword]}%").where.not(id: current_user.id)
   respond_to do |format|
     format.html
     format.json
   end
  end

  def edit
    @user = User.new
  end

  def update
    if current_user.update(user_params)
      redirect_to "/"

    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end

end
