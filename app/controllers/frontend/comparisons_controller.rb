class Frontend::ComparisonsController < ApplicationController
  layout 'frontend'

  def index
    slugs = params[:hotels]&.split(',')&.map(&:strip)
    hotels = Hotel.active.where(slug: slugs)

    @hotels_json = HotelCompareSerializer.new(hotels, is_collection: true).serializable_hash[:data]
                                         .map { |item| item[:attributes] }
  end
end
