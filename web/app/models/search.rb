class Search < ActiveRecord::Base
    @@solr = RSolr::Ext.connect url: 'http://localhost:8983/solr/VSM'

    def scrape(params)
        query = {:queries => params[:query],
                 :facets =>{:fields=>['name', 'topics', 'location']}
        }
        @@solr.find(query, method: :post)
    end
end
