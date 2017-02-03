class PicturesController< ApplicationController
  before_action :set_picture, only: [:show, :edit, :update, :destroy]
# before_action :authenticate
  #skip_before_action :require_login?

  def index
    @pictures =Picture.all
    
  end

  def show
     # @picture=@team.picture
  end
 
  def new
    @picture = Picture.new
  # @team.build_picture
  # @team.donations.build
  end
 
  def edit
  end
  
  def create
    @picture = Picture.new(picture_params)

    #@team.competitions.build
    #binding.pry
      respond_to do |format|
        
      if @picture.save
        format.html { redirect_to @picture, notice: 'picture was successfully created.' }
        format.json {  render json:{status: :ok,data: @picture } }
      else
        format.html { render :new }
        format.json { render json:{status: :error,data: @picture.errors }}
      end
    end
  end

 
  def update
    respond_to do |format|
      if @picture.update(picture_params)
        format.html { redirect_to @picture, notice: 'Team was successfully updated.' }
        format.json { render :show, status: :ok, data: @picture ,location: @team}
      else
        format.html { render :edit }
        format.json { render json:{ status: :error,data: @picture.errors } }
      end
    end
  end

 
  def destroy
    @picture.destroy
    respond_to do |format|
      format.html { redirect_to teams_url, notice: 'team was successfully destroyed.' }
      format.json { render json:{status: :delete }}
    end
  end

  # protected
  # def authenticate
  #    authenticate_or_request_with_http_token do |token, options|
  #     User.find_by(auth_token: auth_token)
  #   end
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_picture
      @picture = Picture.where("id=?",params[:id]).first

      unless @picture.present? 
        render json:{ status: :error, data: "team is not find" }

      end
    end

    def picture_params
      params.require(:picture).permit(:name,:avatar)
    end
end
