class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :position
      t.string :team
      t.integer :salary

      t.timestamps
    end
  end
end
