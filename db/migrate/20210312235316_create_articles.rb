class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :author
      t.text :body
      t.string :source

      t.timestamps
    end
  end
end
