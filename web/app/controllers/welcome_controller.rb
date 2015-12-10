class WelcomeController < ApplicationController
  @@solr = RSolr::Ext.connect url: 'http://localhost:8983/solr/VSM'

  def index
  end


  def search
    query = {:queries => params[:query],
             :facets =>{:fields=>['lang', 'created_at']}
    }
    results = @@solr.find(query, method: :post)
    pp results
    render json: results.to_json
  end

end
