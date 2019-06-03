class GroupsController < ApplicationController

  def index
  end

  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    @group = Group.new(create_params)
    if @group.save
      redirect_to "/", notice: 'グループが作成されました'
    else
      render :new
    end

  end

  def edit
    @group = Group.new
  end

  def update
    @group = Post.find_by(params[:id])
    @group.update(title: params[:title])
    redirect_to "/"
  end


  private 
  def create_params
   params.require(:group).permit(:name, user_ids: [])
  end

  def set_group
    @group = Group.find(params[:id])
  end



end
 