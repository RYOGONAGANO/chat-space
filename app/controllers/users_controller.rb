class UsersController < ApplicationController

  def index
    # @group = Group.find(params[:group_id])
    @group = Group.find(params[:group_id])
    @user_ids = @group.users.ids
    @users = User.where('name LIKE(?) AND id != ?', "%#{params[:keyword]}%", "#{current_user.id}").where.not(id: @user_ids)
    respond_to do |format|
      format.html
      format.json
    end
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end