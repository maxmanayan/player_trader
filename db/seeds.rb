# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



require 'faker'

Job.destroy_all
Team.destroy_all
Player.destroy_all
Article.destroy_all 



10.times do 
  Job.create(
    position: Faker::Sports::Football.position,
    team: Faker::Sports::Football.team,
    salary: Faker::Number.within(range: 1..20),
    location: Faker::Team.state,
  )
end

10.times do 
  team = Team.create(
    name: Faker::Sports::Football.team,
    coach: Faker::Sports::Football.coach,
    mascot: Faker::Team.mascot, 
    stadium: Faker::WorldCup.stadium,
  )

  11.times do
    team.players.create(
      name: Faker::Sports::Football.player,
      position: Faker::Sports::Football.position,
      value: Faker::Number.within(range: 1..70),
      age: Faker::Number.within(range: 18..35),
    )
  end
end


10.times do
  Article.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    body: Faker::Quote.yoda,
    source: Faker::Book.publisher,
  )
end



puts "Seeded #{Job.all.size} new jobs"
puts "Seeded #{Team.all.size} new teams"
puts "Seeded #{Player.all.size} new players"
puts "Seeded #{Article.all.size} new articles"