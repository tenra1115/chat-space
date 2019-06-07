class MessagesController < ApplicationController

  before_action :set_group

  def index
    @messages = Message.all
    @message = Message.new
    @messages = @group.messages.includes(:user)
    @messe = @group.users
  end

  def create
    @message = Message.create(content: message_params[:content], image: message_params[:image],user_id: current_user.id, group_id: params[:group_id])
    respond_to do |format|
      format.html { redirect_to group_messages_path(params[:group_id])}
      format.json
    end
    
    # if @message
    #   redirect_to group_messages_path,  notice: 'メッセージが送信されました'
    # else
    #   redirect_to "/", alert: 'メッセージを入力してください'
    # end
  end

  private
  def message_params
    params.require(:message).permit(:content, :image)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end


