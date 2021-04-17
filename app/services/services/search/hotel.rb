class Services::Search::Hotel
  PER_PAGE = 10

  attr_reader :options, :page

  def initialize(query, page)
    @options = query ? { name_start: query } : {}
    @page = page.present? ? page.to_i : 1
  end

  def do
    Hotel.active.includes(:photos, :rates).ransack(options).result
         .paginate(page: page, per_page: PER_PAGE)
  end

  def add_locations!(locations)
    return unless locations

    locations = parse_json(locations)
    options[:city_start_any] = locations.map { |location| location['city'] }
    options[:country_start_any] = locations.map { |location| location['country'] }
  end

  def add_year_renovated!(year_renovated)
    return unless year_renovated

    year_renovated = parse_json(year_renovated)
    return unless year_renovated.present?

    options[:year_renovated_gteq_any] = year_renovated[0]
    options[:year_renovated_lteq_any] = year_renovated[1]
  end

  def add_year_opened!(year_opened)
    return unless year_opened

    year_opened = parse_json(year_opened)
    return unless year_opened.present?

    options[:year_opened_gteq_any] = year_opened[0]
    options[:year_opened_lteq_any] = year_opened[1]
  end

  private

  def parse_json(object)
    JSON.parse(object).compact
  end
end
