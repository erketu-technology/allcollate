class Api::SearchController < ApplicationController
  layout nil

  def index
    search = Services::Search::Hotel.new(params[:q], params[:pageNum])
    search.add_locations!(params[:locations])

    hotels = search.do

    hotels_json = HotelSearchSerializer.new(hotels, is_collection: true).serializable_hash[:data]
                                       .map { |item| item[:attributes] }
    render json: { results: hotels_json,
                   pagingData: common_paging_data(search.page, Services::Search::Hotel::PER_PAGE, hotels) }
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
