class GroupsController < ApplicationController

  before_action :set_group, only:[:edit, :update]


  def index
  end

  def new
    @group = Group.new
  end
  
  def create
    @group = Group.new(create_params)
    # グループと作成したユーザーを紐づける
    @group.users << current_user
    if @group.save
      redirect_to "/", notice: 'グループが作成されました'
    else
      render :new
    end
    

  end

  def edit
      @user = @group.users
  end

  def update
    @group = @group.update(create_params)
    redirect_to "/"
  end


  private 
  def create_params
   params.require(:group).permit(:name, user_ids: [])
  end

  def set_group
    @group = Group.find_by(params[:id])
  end



end
 