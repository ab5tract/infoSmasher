require 'rubygems'
require 'json'
require 'sinatra'

mem = File.join(File.dirname(__FILE__), "data.json")

get '/' do
  send_file("index.html")
end

get '/data.json' do
  content_type :json
  send_file(mem)
end

post '/add_statement' do
  statement = request.body.read.to_s.strip
  data = JSON.parse(IO.read(mem))
  # Right now the json is a simple list, so we can just
  # append to it:
  data << params[:statement]
  File.open(mem, "w") do |f|
    f.write(data.to_json)
  end
  "added #{params[:statement]} to data.json"
end