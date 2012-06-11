guard 'coffeescript', :output => 'public/javascripts' do
  watch /^lib\/coffee\/(.*)\.coffee/
end

guard 'coffeescript', :output => 'spec/javascripts' do
  watch /^spec\/coffee\/(.*)\.coffee/
end

guard 'livereload' do
  watch /^spec\/javascripts\/.+\.js$/
  watch /^public\/javascripts\/.+\.js$/
end
