class Api::MessagesController < ApplicationController
  def index
    @group = Group.find(params[:group_id])
    # #グループが所有しているメッセージの中から、params[:last_id]よりも大きいidがないかMessageから検索して、@messagesに代入。
    @messages = @group.messages.includes(:user).where('id > ?',params[:last_id])

    respond_to do |format|
      format.html
      format.json
    end
  end
end