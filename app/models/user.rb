class User < ApplicationRecord
    has_secure_password 

    has_many :transactions
    has_many :categories, through: :transactions

    validates :username, :password, :password_confirmation, presence: true
    validates :username, uniqueness: true
end
