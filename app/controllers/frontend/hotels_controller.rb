class Frontend::HotelsController < Frontend::BaseController
  COMPARE_PER_PAGE = 3

  def show
    @hotel = Hotel.active.includes(:photos, :rates).friendly.find(params[:id])
  end

  def compare
    hotel = Hotel.active.find_by(slug: params[:hotel_id])
    search = Services::EsSearch::Hotel.new(compare_params_for(hotel))

    ids = search.do.map(&:id)
    ids.unshift(hotel.id)

    hotels = Hotel.active.where(id: ids)

    @hotels_json = HotelCompareSerializer.new(hotels, is_collection: true).serializable_hash[:data]
                                         .map { |item| item[:attributes] }
  end

  private

  def compare_params_for(hotel)
    params = {}

    params[:locations] = [{ 'city' => hotel.city, 'country' => hotel.country }] if hotel.city && hotel.country
    params[:yearRenovated] = [hotel.year_renovated - 5, hotel.year_renovated + 5] if hotel.year_renovated
    params[:yearOpened] = [hotel.year_opened - 5, hotel.year_opened + 5] if hotel.year_opened
    params[:starRating] = [hotel.star_rating - 1, hotel.star_rating + 1] if hotel.star_rating

    rate = hotel.rates.order(actual_on: :desc).first&.daily_rate
    params[:rates] = [rate * 0.8, rate * 1.2] if rate

    params[:perPage] = COMPARE_PER_PAGE

    params
  end
end