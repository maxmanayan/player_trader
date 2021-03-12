class Team < ApplicationRecord
  has_many :players, dependent: :destroy
end
