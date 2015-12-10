class WelcomeController < ApplicationController
  @@solr = RSolr::Ext.connect url: 'http://localhost:8983/solr/VSM'

  def index
    query = {:queries => ("*:*"),
             :facets =>{:fields=>['lang', 'created_at']}
    }
    @results = @@solr.find(query, method: :post)
  end

end
