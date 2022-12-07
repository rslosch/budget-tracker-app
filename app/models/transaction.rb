class Transaction < ApplicationRecord
    belongs_to :user
    belongs_to :category

    # has_one :receipt
end