class Category < ApplicationRecord
    has_many :transactions
    has_many :users, through: :transactions

    # accepts_nested_attributes_for :transactions

end
