class Api::SearchController < ApplicationController
  layout nil

  def index
# <<<<<<< HEAD
#     page = params[:pageNum].present? ? params[:pageNum].to_i : 1
#
#     search_options = {}
#     search_options[:name_start] = params[:q] if params[:q]
#
#     if (locations = params[:locations])
#       locations = JSON.parse(locations)
#       search_options[:city_start_any]    = locations.map { |location| location['city'] }
#       search_options[:country_start_any] = locations.map { |location| location['country'] }
#     end
#
#
#     if params[:yearRenovated].present? and  JSON.parse(params[:yearRenovated]).compact.present?
#       yearRenovated                            = JSON.parse(params[:yearRenovated])
#       search_options[:year_renovated_gteq_any] = yearRenovated[0]
#       search_options[:year_renovated_lteq_any] = yearRenovated[1]
#     end
#
#     hotels  = Hotel.active.includes(:photos, :rates).ransack(search_options).result
#             .paginate(page: page, per_page: AppConstants::PERPAGE)
#     results = hotels&.map do |result|
#       rate  = result.rates.order(actual_on: :desc).first
#       {
#         name: result.name,
#         starRating: result.star_rating,
#         overview: result.overview,
#         slug: result.slug,
#         city: result.city,
#         country: result.country,
#         addressline1: result.addressline1,
#         photo: result.photos.order(order: :asc).first&.url,
#         rate: rate&.daily_rate,
#         yearOpened: result.year_opened,
#         yearRenovated: result.year_renovated,
#         rating: rate&.review_score,
#         reviewCount: rate&.review_count
#       }
#     end
#     render json: {results: results, pagingData: common_paging_data(page, AppConstants::PERPAGE, hotels)}
# =======
    search = Services::Search::Hotel.new(params[:q], params[:pageNum])
    search.add_locations!(params[:locations])
    search.yearRenovated!(params[:yearRenovated])
    search.yearOpened!(params[:yearOpened])

    hotels = search.do

    hotels_json = HotelSearchSerializer.new(hotels, is_collection: true).serializable_hash[:data]
                                       .map { |item| item[:attributes] }
    render json: { results: hotels_json,
                   pagingData: common_paging_data(search.page, Services::Search::Hotel::PER_PAGE, hotels) }
# >>>>>>> 630071d9d254272ccfef5b342120c955952d8830
  end

  def locations
    results = Hotel.active.ransack(city_or_country_or_addressline1_start: params[:q]).result(distinct: true).first(5)

    results = results.map do |result|
      {
        city: result.city,
        country: result.country,
        # addressline1: result.addressline1
      }
    end

    render json: results
  end
end
