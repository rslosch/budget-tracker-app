# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

require 'faker'

# CATEGORY = %w[food entertainment medical rent gifts transport] 

#Create Category Instances
# categories = CATEGORY.each do |cat|
#     name = cat

#     category = Category.create!(
#         name: name
#     )
# end

# bob = User.find(20)
# madison = User.find(21)
# steve = User.find(22)

# 8.times do |i|
#     bob.transactions.create!(
#         description: Faker::Lorem.word,
#         amount: rand(1..250),
#         category_id: rand(7..12)
#     )
# end

# 8.times do |i|
#     madison.transactions.create!(
#         description: Faker::Lorem.word,
#         amount: rand(1..250),
#         category_id: rand(7..12)
#     )
# end

# 8.times do |i|
#     steve.transactions.create!(
#         description: Faker::Lorem.word,
#         amount: rand(1..250),
#         category_id: rand(7..12)
#     )
# end

# CAN NOW ACCESS bob = User.first
# bob.categories.uniq

# CAN NOW ACCESS food = Category.first
# food.users.uniq