class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :Name
      t.string :Description
      t.string :Director
      t.string :Language

      t.timestamps
    end
  end
end
