class Services::EsSearch::Brand
  SUGGESTION_SIZE = 5

  attr_reader :query

  def initialize(query)
    @query = query
  end

  def index
    BrandsIndex
  end

  def suggestion
    index.suggest(suggestion_attr).suggest['suggest']&.first&.fetch('options', [])
  end

  def suggestion_attr
    {
      suggest: {
        text: query,
        completion: {
          field: :autocomplete,
          size: SUGGESTION_SIZE
        }
      }
    }
  end
end
