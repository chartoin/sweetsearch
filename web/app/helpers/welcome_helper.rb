module WelcomeHelper
    def format_scrape
        response = {
            'whos' => get_whos(get_names),
            'whats' => get_whats(get_topics)
        }
    end

    def get_things(list)
        things = []
        list.each_with_index do |v, i|
            if i.even?
                if list[i+1] > 0 
                    things << { 'thing' => v, 'count' => list[i+1] }
                else
                    break
                end
            end
        end
        things
    end

    def get_names
        get_things(@results['facet_counts']['facet_fields']['name'])
    end

    def get_topics
        get_things(@results['facet_counts']['facet_fields']['topics'])
    end

    def get_whos(names)
        whos = []
        names.each do |name|
            whos << get_who(name['thing'], name['count'])
        end
        whos
    end

    def get_who(name, count)
        who = {}
        a = @results['response']['docs']
        a.each do |v|
            if v['name'] == name
                who['id'] = v['id']
                who['name'] = v['name']
                who['count'] = count
                who['image'] = v['image']
                who['tweet'] = v['text'][0]
            end
        end
        who
    end

    def get_whats(topics)
        whats = []
        topics.each do |topic|
            whats << get_what(topic['thing'], topic['count'])
        end
        whats
    end

    def get_what(topic, count)
        what = {}
        a = @results['response']['docs']
        a.each do |v|
            if v.has_key?('topics') and v['topics'].include?(topic)
                what['id'] = v['id']
                what['name'] = v['name']
                what['count'] = count
                what['image'] = v['image']
                what['tweet'] = v['text'][0]
                what['topic'] = v['topics'][0]
            end
        end
        what
    end
end
